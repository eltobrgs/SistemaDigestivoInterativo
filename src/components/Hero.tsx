import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text md:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>
              Sistema <span className="text-primary">Digestório</span> Humano
            </h1>
            <p>
              Explore o fascinante sistema digestório humano em detalhes através de uma experiência interativa e educativa.
              Conheça todos os órgãos e seus papéis importantes para o funcionamento do nosso corpo.
            </p>
            <div className="hero-buttons">
              <Link href="/orgaos" className="btn-primary">
                Explorar Órgãos
              </Link>
              <Link href="/doencas" className="btn-secondary">
                Ver Doenças
              </Link>
              <Link href="/modelo-3d" className="btn-outline">
                Modelo 3D
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="hero-image md:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="image-container">
              <Image 
                src="/images/digestive-system.png" 
                alt="Sistema Digestório" 
                width={500}
                height={600}
                className="rounded-image"
                priority
              />
              <div className="image-glow"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="hero-gradient"></div>
      <div className="hero-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path 
            fill="var(--background)" 
            fillOpacity="1" 
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
} 