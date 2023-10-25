import React from "react";
import Article from "./Article";

function ArticleList(props) {
    const newArray = props.postsArray.map(function(post) {
        return (
        <Article key={post.id} title={post.title} date={post.date} preview={post.preview}/>
        );
    })

    return (
        <main>
            {newArray}
        </main>
    );
}

export default ArticleList;