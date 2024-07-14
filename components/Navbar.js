import Link from "next/link";

const Navbar = () => (
  <div>
    <nav className="navbar navbar-expand-lg bg-dark bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          Simple Portfolio
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" href="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/github">
                GitHub
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;
