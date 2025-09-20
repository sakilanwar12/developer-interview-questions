function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-popover py-2.5">
      <div className="container">
        {" "}
        © {new Date().getFullYear()} MySite. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
