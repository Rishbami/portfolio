import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <Link href="/" className="text-xl font-bold">
          My Portfolio
        </Link>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
