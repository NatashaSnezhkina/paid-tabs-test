import Auth from "@/components/Auth";
import PostCard from "@/components/PostCard";
import { useState } from "react";
import styles from "../../styles/PostsList.module.css";

function Posts({ posts }) {
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  console.log("posts", posts);
  const handleSearch = (event) => {
    event.preventDefault();
    const value = event.target.value.toLowerCase();

    const filteredData = posts.filter((item) =>
      item.title.toLowerCase().includes(value)
    );
    setFilteredPosts(filteredData);
    if (value.length > 0) {
      setIsSearched(true);
    } else {
      setIsSearched(false);
    }
  };
  return (
    <div className={styles.container}>
      <h1>Latest posts</h1>
      <input
        className={styles.search}
        type="text"
        placeholder="Search"
        onChange={handleSearch}
      />
      {isSearched && <p>{filteredPosts.length} posts found</p>}

      <ul className={styles.list}>
        {isSearched
          ? filteredPosts.map((post) => <PostCard key={post.id} post={post} />)
          : posts.map((post) => <PostCard key={post.id} post={post} />)}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default Auth(Posts);
