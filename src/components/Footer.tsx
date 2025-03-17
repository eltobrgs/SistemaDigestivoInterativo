import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <div>
            <h3 className="footer-title">Sistema Digestório</h3>
            <p className="text-gray-600">
              Um recurso educacional interativo para aprender sobre o sistema digestório humano
              de forma detalhada e visualmente atraente.
            </p>
          </div>
          
          <div>
            <h3 className="footer-title">Links Rápidos</h3>
            <ul className="footer-links">
              <li>
                <Link href="/">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/orgaos">
                  Órgãos
                </Link>
              </li>
              <li>
                <Link href="/modelo-3d">
                  Modelo 3D
                </Link>
              </li>
              <li>
                <Link href="/sobre">
                  Sobre
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="footer-title">Siga-nos</h3>
            <div className="footer-social">
              <a href="#" className="social-icon">
                <FaGithub size={24} />
              </a>
              <a href="#" className="social-icon">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="social-icon">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Sistema Digestório Interativo. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
} 