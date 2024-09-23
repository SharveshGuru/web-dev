import React, { Component } from "react";
class Blog extends Component{
    render(){
        return(
            <>
            <h2>Author Name: David Herbert</h2>
            <h2>Article Title: What is React.js? Uses, Examples, & More</h2>
            <p>Release date: November 13, 2023</p>
            <p>React.js is an open-source JavaScript library, crafted with precision by Facebook, that aims to simplify the intricate process of building interactive user interfaces. Imagine a user interface built with React as a collection of components, each responsible for outputting a small, reusable piece of HTML code. In React, you develop your applications by creating reusable components that you can think of as independent Lego blocks. These components are individual pieces of a final interface, which, when assembled, form the application’s entire user interface.</p>
            </>
        )
    }
}
export default Blog;