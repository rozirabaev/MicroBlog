import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/bestposts/BestPosts";
import "./topPosts.css";
import axios from "axios";
import { useLocation } from "react-router";
import BestPosts from "../../components/bestposts/BestPosts";

export default function TopPosts() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);


  return (
    <>
      <Header />
      <div className="topPosts">
        <BestPosts  posts={posts} />
      </div>
    </>
  );
}
