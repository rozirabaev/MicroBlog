import Post from "../post/Post";
import "./bestPosts.css";

export default function BestPosts({ posts }) {
  posts.map((p, index) => (
    console.log(new Date(p.createdAt).getDay.toString)
  ));

  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() ;
  const year = today.getFullYear();
  const hour = today.getHours();


  const filter_posts = posts.filter((p) => (
    (p.likes.length >1 )   //likes >=2 should be fron 2 different users 
     && (new Date(p.createdAt).getDate()===day)
     && (new Date(p.createdAt).getFullYear()===year) 
    && (new Date(p.createdAt).getMonth()===month)) 
    &&( (((hour-new Date(p.createdAt).getHours())*60) + today.getMinutes()- new Date(p.createdAt).getMinutes()) <=60 )  //past hour posts
    );
    
   //sort from the highest like
  const top_posts =filter_posts.sort(function(a, b) {  
    return b.likes-a.likes;
  });
  
  
  return (
    <div className="posts" >
      {top_posts.map((p, index) => (
        <li key={index}>  <Post post= {  p  } />  </li>
      ))}
    </div>
  );
}

