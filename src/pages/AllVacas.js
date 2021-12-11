import React from "react"
import Post from "../components/post"

const AllVacas = (props) => {
    return props.vacas.map((post)=> {
        return <Post key={post.id} post={post}/>
    })
}

export default AllVacas