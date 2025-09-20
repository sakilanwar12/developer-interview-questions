function Header() {
  return (
    <header className="w-full p-4 bg-popover shadow">
      <nav className="max-w-5xl mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold">
          MySite
        </a>
        <ul className="flex gap-4">
          <li>
            <a href="/" className="hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-blue-500">
              About
            </a>
          </li>
          <li>
            <a href="/blog" className="hover:text-blue-500">
              Blog
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-blue-500">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
