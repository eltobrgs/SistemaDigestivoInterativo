'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome, FaBook, FaQuestion, FaInfo, FaHeartbeat } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Fechar o menu móvel quando a rota mudar
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Evitar que a página role quando o menu móvel estiver aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link href="/" className="navbar-brand">
          Sistema Digestório
        </Link>
        
        <div className="navbar-links">
          <NavLink href="/" icon={<FaHome />} text="Início" />
          <NavLink href="/orgaos" icon={<FaBook />} text="Órgãos" />
          <NavLink href="/doencas" icon={<FaHeartbeat />} text="Doenças" />
          <NavLink href="/modelo-3d" icon={<FaQuestion />} text="Modelo 3D" />
          <NavLink href="/sobre" icon={<FaInfo />} text="Sobre" />
        </div>
        
        <div className="navbar-mobile">
          <button 
            className={`navbar-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Menu de navegação"
          >
            <span className="hamburger-line line-1"></span>
            <span className="hamburger-line line-2"></span>
            <span className="hamburger-line line-3"></span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mobile-menu-links">
              <MobileNavLink href="/" icon={<FaHome />} text="Início" isActive={pathname === '/'} />
              <MobileNavLink href="/orgaos" icon={<FaBook />} text="Órgãos" isActive={pathname === '/orgaos'} />
              <MobileNavLink href="/doencas" icon={<FaHeartbeat />} text="Doenças" isActive={pathname === '/doencas'} />
              <MobileNavLink href="/modelo-3d" icon={<FaQuestion />} text="Modelo 3D" isActive={pathname === '/modelo-3d'} />
              <MobileNavLink href="/sobre" icon={<FaInfo />} text="Sobre" isActive={pathname === '/sobre'} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function NavLink({ href, icon, text }: { href: string; icon: React.ReactNode; text: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  
  return (
    <Link href={href} className={`nav-link ${isActive ? 'active' : ''}`}>
      <span>{icon}</span>
      <span>{text}</span>
    </Link>
  );
}

function MobileNavLink({ href, icon, text, isActive }: { href: string; icon: React.ReactNode; text: string; isActive: boolean }) {
  return (
    <Link href={href} className={`mobile-nav-link ${isActive ? 'active' : ''}`}>
      <span className="mobile-nav-icon">{icon}</span>
      <span className="mobile-nav-text">{text}</span>
    </Link>
  );
} 