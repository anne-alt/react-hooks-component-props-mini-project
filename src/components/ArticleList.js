import React from "react";
import Article from "./Article";

function ArticleList({posts}) {

    const EachPost = posts.map(post => <Article key = {post.title} title={post.title} date={post.date} preview= {post.preview}/>)

    return(
        <main>
          {EachPost}
        </main>
    )
}

export default ArticleList