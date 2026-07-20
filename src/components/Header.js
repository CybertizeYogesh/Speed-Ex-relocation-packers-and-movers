import Link from "next/link";

export default function Header() {
  return (
    <>
      {/* Top Contact Header Start */}
      <div className="top-header py-2 text-white" style={{ backgroundColor: "var(--accent-color)" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 text-center text-lg-start mb-2 mb-lg-0">
              <div className="top-contact text-white">
                <i className="fas fa-map-marker-alt me-2 text-white"></i>
                <span className="text-white">B 107, Bijal Business Centre, Aslali Circle, Aslali, Ahmedabad 382427</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center mb-2 mb-md-0">
              <div className="top-contact text-white">
                <i className="fas fa-phone-alt me-2 text-white"></i>
                <a href="tel:9624644006" className="text-decoration-none text-white">+91 9624644006</a> / <a href="tel:9211206101" className="text-decoration-none text-white">+91 9211206101</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center text-lg-end">
              <div className="top-contact text-white">
                <i className="fas fa-envelope me-2 text-white"></i>
                <a href="mailto:speedexrelocation3@gmail.com" className="text-decoration-none text-white">speedexrelocation3@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Top Contact Header End */}

      {/* Header Start */}
      <header className="main-header" style={{ marginTop: "20px" }}>
        <div className="header-sticky">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              {/* Logo Start */}
              <Link className="navbar-brand" href="/">
                <img src="/global-logo.png" style={{ background: "#fff", borderRadius: "10px", maxWidth: "300px" }} alt="Logo" />
              </Link>
              {/* Logo End */}

              {/* Main Menu Start */}
              <div className="collapse navbar-collapse main-menu">
                <div className="nav-menu-wrapper">
                  <ul className="navbar-nav mr-auto" id="menu">
                    <li className="nav-item">
                      <Link className="nav-link" href="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/about">About Us</Link>
                    </li>
                    <li className="nav-item submenu">
                      <Link className="nav-link" href="/services">Services</Link>
                      <ul>
                        <li className="nav-item">
                          <Link className="nav-link" href="/services">All Services</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="/services/household-goods-shifting">Household Goods Shifting</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="/services/office-goods-shifting">Office Goods Shifting</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="/services/loading-and-unloading">Loading and Unloading</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="/services/packing-and-unpacking-services">Packing & Unpacking</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="/services/moving-services">Moving Services</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="/services/pet-relocation">Pet Relocation</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="/services/car-transportation">Car Transportation</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="/services/bike-transportation">Bike Transportation</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/faq">Faq</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/gallery">Gallery</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/blogs">Blogs</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>

                {/* Header Btn Start */}
                <div className="header-btn">
                  <Link href="/contact" className="btn-default btn-highlighted">get started</Link>
                </div>
                {/* Header Btn End */}
              </div>
              {/* Main Menu End */}
              <div className="navbar-toggle"></div>
            </div>
          </nav>
          <div className="responsive-menu"></div>
        </div>
      </header>
      {/* Header End */}
    </>
  );
}
