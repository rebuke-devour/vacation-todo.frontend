
import './App.css';
import AllVacas from "./pages/AllVacas"
import SingleVaca from "./pages/SingleVaca"
import Form from "./pages/Form"

import { useState, useEffect } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";

// ==== Style Object ==== //
const h1 = {
  textAlign: "center",
  margin: '10px',
}

const button = {
  backgroundColor: "navy",
  display: "block",
  margin: "auto",
}


function App() {
  // === State and Other Variables === //
const navigate = useNavigate()

const url = "https://vacago-backennd.herokuapp.com/vacaGo/"

const [posts, setPosts] =useState([])

const nullVaca = {
  city: "",
  activity: "",
  details: "",
}

const [targetVaca, setTargetVaca] = useState(nullVaca)

// ===== Functions ===== //

// Function to get vacations from API
const getVacas = async () => {
  const response = await fetch(url);
  const data = await response.json();
  setPosts(data);
}

// Function to add Vacations
const addVacas = async (newVaca) => {
  await fetch(url, {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(newVaca),
  })
  getVacas()
};

// to select a vacation to edit 
const getTargetVaca = (vaca) => {
  setTargetVaca(vaca);
  navigate("/edit");
}

// Update Vacation for the handleSubmit prop
const updateVaca = async (vaca) => {
  await fetch(url + vaca.id, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(vaca),
  });
  getVacas();
}

const deleteVacas = async (vaca) => {
  await fetch(url + vaca.id, {
    method: "delete"
  })
  getVacas()
  navigate("/")
}

// == useEffects == //
useEffect(()=> {
  getVacas();
}, [])


// === Returned JSX === //

  return (
    <div className="App">
      <h1 style={h1}>Vaca-Go!</h1>
      <Link to="/new">
        <button style={button}>New Vacation</button>
      </Link>
      <Routes>
        <Route path="/" element={<AllVacas vacas={posts}/>} />
        <Route path="/post/:id" element={<SingleVaca
      vacas={posts}
      edit={getTargetVaca}
      deleteVaca={deleteVacas}  
      />} />
      <Route
        path="/new"
        element={
          <Form
            initialVaca={nullVaca}
            handleSubmit={addVacas}
            buttonLabel="Create Vaca"
        />} />
        <Route path="/edit" element={<Form
        initialVaca={nullVaca}
        handleSubmit={updateVaca}
        buttonLabel="Update Vaca"
        />} />
      </Routes>
    </div>
  );
}

export default App;
