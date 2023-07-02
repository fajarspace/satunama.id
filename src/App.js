import React, { useState } from 'react';
import './App.css';

function App() {
  const [isOffcanvasActive, setIsOffcanvasActive] = useState(false);

  const toggleOffcanvas = () => {
    setIsOffcanvasActive(!isOffcanvasActive);
    const offcanvas = document.getElementById("offcanvas");
    offcanvas.setAttribute("aria-hidden", !isOffcanvasActive);
    if (!isOffcanvasActive) {
      offcanvas.focus();
    }
  };

  return (
    <div>
      <a href="#maincontent" className="skip-link">Skip to Content</a>
      <nav className="navbar">
        <div className="navbar-logo">Satunama</div>
        <button
          className="navbar-toggle"
          id="navbarToggle"
          tabIndex="0"
          aria-label="Toggle Navigation"
          onClick={toggleOffcanvas}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </button>
        <div className="navbar-menu">
          <a href="/">Home</a>
          <a href="/laporan">Laporan</a>
        </div>
      </nav>

      {/* Off Canvas Menu */}
      <div className={`offcanvas ${isOffcanvasActive ? "active" : ""}`} id="offcanvas">
          <a href="/">Home</a>
          <a href="/laporan">Laporan</a>
      </div>

      <section id="maincontent" tabIndex="0">
        <div className="hero-image">
          <div className="hero-text">
            <h1>satunama.id</h1>
            <p>Saling Bantu Untuk Sesama</p>
            <a href='https://najamuddin-dwi.mayar.link/donate/satunamaid-saling-bantu-antar-sesama'>Donasi sekarang!</a>
          </div>
        </div>
      </section>
      <section className='sec-laporans'>
        <div className='laporan'>
          <span>Total Pengeluaran</span>
          <p>belum ada laporan</p>
        </div>
        <div className='laporan'>
        <span>Total Saldo tersedia</span>
        <p>belum ada laporan</p>
        </div>
      </section>
<hr/>
      <section className='sec-laporan' style={{margin:"80px"}}>
      <div style={{color:"black"}} className="hero-text">
            <h1>Tentang satunama.id</h1>
            <p>Saling Bantu Untuk Sesama</p>
          </div>
      </section>

      <div id="app"></div>

      <footer>
        <p>Copyright &copy; 2023 - satunama.id</p>
      </footer>
    </div>
  );
}

export default App;
