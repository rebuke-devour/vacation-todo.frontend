import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = ({ initialVaca, handleSubmit, buttonLabel }) => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState(initialVaca)

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }


const handleSubmission = (event) => {
    event.preventDefault()
    handleSubmit(formData)
    navigate("/")
}

    return <form onSubmit={handleSubmission}>
        
<input
    type="text"
    onChange={handleChange}
    value={formData.city}
    name="city"
    />
<input
    type="text"
    onChange={handleChange}
    value={formData.activity}
    name="activity"
    />
<input
    type="text"
    onChange={handleChange}
    value={formData.details}
    name="details"
/>
    <input type="submit" value={buttonLabel}/>
</form >
}

export default Form;