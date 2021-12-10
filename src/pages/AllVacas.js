import React from "react"
import Post from "../components/post"

const AllVacas = (props) => {
    return props.posts.map((post)=> {
        return <Post key={post.id} post={post}/>
    })
}

export default AllVacas