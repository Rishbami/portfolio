import Link from 'next/link';

const Header = () => {
  return (
    <header className="site-header">
      <nav className="site-nav">
        <Link href="/projects" className="brand-pill">
          Projects
        </Link>
        <div className="nav-links">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/contact" className="nav-link">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
