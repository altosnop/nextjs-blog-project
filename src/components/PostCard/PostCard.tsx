import Link from 'next/link';
import styles from './styles.module.css';
import Image from 'next/image';

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/7292733/pexels-photo-7292733.jpeg"
            alt="Post"
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>date</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>title</h1>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae,
          quaerat!
        </p>
        <Link className={styles.link} href={`/blog/1`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
