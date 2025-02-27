import React from "react";
import PostsListItem from "./PostsListItem";
import { posts, Post } from "../../util/posts";

const Posts: React.FC = (props) => {
  return (
    <div className="posts container">
      <h2>Posts</h2>
      <div className="posts-main">
        <ul>
          {posts.map((post: Post, i: number) => {
            return (
              <PostsListItem
                key={i}
                title={post.title}
                description={post.description}
                markdownFile={post.markdownFile}
                image={post.image}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Posts;
