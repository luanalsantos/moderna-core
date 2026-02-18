const css = `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

.jornada-page * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.jornada-page {
  font-family: 'Poppins', sans-serif;
  color: #1a3a4a;
  background-color: #ffffff;
  overflow-x: hidden;
}

.jornada-integrada {
  background-color: #f5f6f8;
  position: relative;
  overflow: hidden;
  padding: 80px 0 0;
  min-height: 480px;
}

.jornada-integrada .content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 3;
}

.jornada-text-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 3;
  padding-bottom: 60px;
}

.jornada-text-col h2 {
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 1.2;
  color: #1a3a4a;
  margin-bottom: 32px;
}

.jornada-text-col h2 strong {
  color: #1a3a4a;
  font-weight: 700;
}

.btn-escola-parceira {
  display: inline-block;
  background-color: #e86c3a;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 10px 30px;
  border: none;
  border-radius: 50px;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.2s ease;
  width: fit-content;
}

.btn-escola-parceira:hover {
  background-color: #d45a2a;
  color: #ffffff;
  transform: translateY(-2px);
}

.jornada-image-area {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 55%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  pointer-events: none;
}

.jornada-3d-element {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 110%;
  height: 120%;
  object-fit: cover;
  object-position: left center;
  z-index: 1;
}

.jornada-child {
  position: relative;
  z-index: 2;
  max-height: 460px;
  width: auto;
  object-fit: contain;
  margin-bottom: 0;
}

.site-footer {
  background-color: #ffffff;
  padding: 40px 0 36px;
  border-top: 1px solid #e8e8e8;
}

.site-footer .content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.footer-logo img {
  height: 72px;
  width: auto;
}

.footer-links {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 6px;
}

.footer-links a {
  color: #5a6a72;
  font-size: 0.9rem;
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-links a:hover {
  color: #1a3a4a;
}

.footer-contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 6px;
}

.footer-contact span,
.footer-contact a {
  color: #5a6a72;
  font-size: 0.9rem;
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-contact a:hover {
  color: #1a3a4a;
}

.footer-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

.footer-col-logo {
  flex: 0 0 auto;
  width: 33.333%;
}

.footer-col-links {
  flex: 0 0 auto;
  width: 33.333%;
}

.footer-col-contact {
  flex: 0 0 auto;
  width: 33.333%;
}

.jornada-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.jornada-col-text {
  flex: 0 0 auto;
  width: 50%;
}

@media (min-width: 1400px) {
  .jornada-3d-element {
    width: 120%;
    height: 140%;
  }
}

@media (min-width: 1800px) {
  .jornada-3d-element {
    width: 130%;
    height: 160%;
  }
}

@media (max-width: 991.98px) {
  .jornada-integrada {
    padding: 60px 0 0;
    min-height: auto;
  }

  .jornada-text-col {
    align-items: center;
    text-align: center;
    padding-bottom: 32px;
  }

  .jornada-text-col h2 {
    font-size: 2rem;
    text-align: center;
  }

  .jornada-col-text {
    width: 100%;
  }

  .jornada-image-area {
    position: relative;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    min-height: 350px;
  }

  .jornada-3d-element {
    width: 100%;
    height: 100%;
    top: 0;
    transform: none;
    object-position: center bottom;
  }

  .jornada-child {
    max-height: 340px;
  }
}

@media (max-width: 767.98px) {
  .jornada-integrada {
    padding: 48px 0 0;
  }

  .jornada-text-col h2 {
    font-size: 1.6rem;
  }

  .btn-escola-parceira {
    font-size: 0.85rem;
    padding: 8px 24px;
  }

  .jornada-child {
    max-height: 280px;
  }

  .jornada-image-area {
    min-height: 280px;
  }

  .footer-col-logo,
  .footer-col-links,
  .footer-col-contact {
    width: 100%;
  }

  .footer-col-logo {
    text-align: center;
    margin-bottom: 24px;
  }

  .footer-links {
    align-items: center;
    margin-bottom: 20px;
  }

  .footer-contact {
    align-items: center;
  }
}
`;

export default function Home() {
  return (
    <div className="jornada-page">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <section className="jornada-integrada" id="jornada_integrada">
        <div className="content-wrapper">
          <div className="jornada-row">
            <div className="jornada-col-text jornada-text-col">
              <h2>
                QUER CONSTRUIR ESSA<br />
                <strong>JORNADA INTEGRADA</strong><br />
                NA SUA ESCOLA?
              </h2>
              <a href="#" className="btn-escola-parceira">SEJA UMA ESCOLA PARCEIRA</a>
            </div>
          </div>
        </div>
        <div className="jornada-image-area">
          <img
            className="jornada-3d-element"
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/elemento-3d-variante-1-zLdhun2QsLcdr3GmxSEnGhg1PIH5wc.png"
            alt=""
          />
          <img
            className="jornada-child"
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/crianca-brincando-S8LXyrsP2u304tPm0R3A6pi4zSaEJN.png"
            alt="Crianca feliz brincando no balanco"
          />
        </div>
      </section>

      <footer className="site-footer">
        <div className="content-wrapper">
          <div className="footer-row">
            <div className="footer-col-logo footer-logo">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-core-azul-hxsvdquRcy22ha78lbdUuMDxT2apEx.png"
                alt="Logo Moderna Core"
              />
            </div>
            <div className="footer-col-links footer-links">
              <a href="#">Fale conosco</a>
              <a href="#">Politica de privacidade</a>
            </div>
            <div className="footer-col-contact footer-contact">
              <span>0800 770 3004</span>
              <a href="#">Termos de uso</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
