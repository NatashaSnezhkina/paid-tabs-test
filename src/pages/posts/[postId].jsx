import Auth from "@/components/Auth";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Post.module.css";
import { IoChevronBackOutline } from "react-icons/io5";

function Post({ post }) {
  return (
    <div className={styles.post}>
      <Link href="/posts" className={styles.backButton}>
        <IoChevronBackOutline size={16} />
      </Link>

      <div className={styles.info}>
        <h1>{post.title}</h1>
        <p className="date">3 days ago</p>
        <p>{post.body}</p>
      </div>

      <Image
        src="/def-post-img.png"
        alt="post's image"
        layout="responsive"
        width={500}
        height={300}
      />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { postId } = context.params;
  if (!postId) {
    return {
      notFound: true, // Return 404 if postId is not defined
    };
  }

  // Fetch post data
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );

  // Check if the response is successful
  if (!res.ok) {
    return {
      notFound: true,
    };
  }
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}

export default Auth(Post);
