import Image from "next/image";
import Link from "next/link";
import styles from "../styles/PostCard.module.css";

function PostCard({ post }) {
  return (
    <li className={styles.card}>
      <Link href={`/posts/${post.id}`}>
        <Image
          src="/def-post-img.png"
          alt="post's image"
          layout="responsive"
          width={500}
          height={300}
        />
        <div className={styles.info}>
          <h2 className={styles.text}>{post.title}</h2>
          <p className="date">3 days ago</p>
          <p className={styles.text}>{post.body}</p>
        </div>
      </Link>
    </li>
  );
}

export default PostCard;
