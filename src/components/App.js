import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About"
import ArticleList from "./ArticleList"

console.log(blogData);



function App({name, image, logo,about, posts}) {
  return (
    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
      <Header name= {blogData.name}/>
      <About image={blogData.image} logo={blogData.logo} about={blogData.about} />
      <ArticleList posts={blogData.posts}/>
    </div>
  );
}

export default App;
