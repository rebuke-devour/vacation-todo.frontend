import React from "react"
import {Link, useParams} from "react-router-dom"

const SingleVaca = ({posts, edit, deleteVacas}) => {
    const params = useParams()
    const id = parseInt(params.id)
    
    const post = posts.find((p)=> p.id === id)
    console.log(post)

// == Style Object == //
const div = {
    textAlign: "center",
    border: "3px solid blue",
    width: "80%",
    margin: "30px auto"
}

return <div style={div}>
    <h1>{post?.city}</h1>
    <h2>{post?.activity}</h2>
    <h3>{post?.details}</h3>
    <button onClick={() => deleteVacas(post)}>Delete</button>
    <button onClick={() => edit(post)}>Edit</button>
    <Link to="/">
        <button>Go Back</button>
    </Link>
</div>
}

export default SingleVaca