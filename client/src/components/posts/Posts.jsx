import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  return (
    <div className="posts" >
      {posts.map((p, index) => (
        
        <li key={index}> {console.log(p)} <Post post={p} />  </li>
      ))}
    </div>
  );
}
