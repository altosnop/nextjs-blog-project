import { Suspense } from 'react';
import Image from 'next/image';
import { getPost } from '@/lib/data';
import PostUser from '@/components/PostUser/PostUser';
import styles from './styles.module.css';

export const generateMetadata = async ({
  params,
}: {
  params: { title: string };
}) => {
  const { title } = params;

  const post = await getPost(title);

  return {
    title: post.title,
    description: post.description,
  };
};

const SinglePostPage = async ({ params }: { params: { title: string } }) => {
  const { title } = params;

  const post = await getPost(title);
  console.log(post);

  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image src={post.img} alt="Post" fill className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.description}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
