import logo from '../../assets/header-logo.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={ logo } alt="Logo da Loja" />
        </div>
        <div className="footer-links">
          <ul>
            <li>Home</li>
            <li>Produtos</li>
            <li>Promoções</li>
            <li>Contato</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Loja Code Store</p>
      </div>
    </footer>
  );
}

export default Footer;
