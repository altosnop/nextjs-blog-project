import Image from 'next/image';
import styles from './styles.module.css';

const SinglePostPage = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/7292733/pexels-photo-7292733.jpeg"
          alt="Post"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>title</h1>
        <div className={styles.detail}>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>date</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, qui?
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
