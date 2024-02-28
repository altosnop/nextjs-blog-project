import Link from 'next/link';
import Image from 'next/image';
import formattedDate from '@/lib/formattedDate';
import styles from './styles.module.css';

interface PostCard {
  id: string;
  userId: string;
  title: string;
  description: string;
  slug: string;
  img: string;
  createdAt: string;
}

interface PostCardProps {
  post: PostCard;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {post.img && (
          <div className={styles.imgContainer}>
            <Image src={post.img} alt="Post" fill className={styles.img} />
          </div>
        )}
        <span className={styles.date}>
          {formattedDate(post.createdAt.toString())}
        </span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.description}</p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
