import Link from 'next/link';

interface Link {
  title: string;
  path: '/' | '/about' | '/contact' | '/blog';
}

const Links = () => {
  const links: Link[] = [
    {
      title: 'Homepage',
      path: '/',
    },
    {
      title: 'About',
      path: '/about',
    },
    {
      title: 'Contact',
      path: '/contact',
    },
    {
      title: 'Blog',
      path: '/blog',
    },
  ];

  return (
    <div>
      {links.map(link => (
        <Link href={link.path} key={link.path}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Links;
