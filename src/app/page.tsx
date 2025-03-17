'use client';

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import OrganCard from "@/components/OrganCard";
import DiseaseCard from "@/components/DiseaseCard";
import { organs } from "@/data/organs";
import { diseases } from "@/data/diseases";
import { motion } from "framer-motion";
import { useEffect } from 'react';

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Animação suave para scroll quando clicar nos links de navegação
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <div className="page-container">
      <Navbar />
      <main className="main-content">
        <Hero />
        
        <section className="section bg-white">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              variants={fadeIn}
            >
              <h2 className="section-title text-center">O Sistema Digestório</h2>
              <p className="section-description">
                O sistema digestório é composto por vários órgãos que trabalham em conjunto para 
                processar os alimentos, absorver nutrientes e eliminar resíduos. Conheça os principais 
                componentes deste sistema fascinante.
              </p>
            </motion.div>
            
            <div className="organ-grid">
              {organs.slice(0, 6).map((organ, index) => (
                <motion.div
                  key={organ.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <OrganCard 
                    id={organ.id}
                    name={organ.name}
                    description={organ.shortDescription}
                    imageSrc={organ.imageSrc}
                  />
                </motion.div>
              ))}
            </div>
            
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link href="/orgaos" className="btn-primary">
                Ver Todos os Órgãos
              </Link>
            </motion.div>
          </div>
        </section>
        
        <section className="section bg-gray-100">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              variants={fadeIn}
            >
              <h2 className="section-title text-center">Doenças do Sistema Digestório</h2>
              <p className="section-description">
                O sistema digestório pode ser afetado por diversas doenças que comprometem seu funcionamento.
                Conheça as principais doenças que afetam o sistema digestório, seus sintomas, causas e tratamentos.
              </p>
            </motion.div>
            
            <div className="disease-grid">
              {diseases.slice(0, 3).map((disease, index) => (
                <motion.div
                  key={disease.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <DiseaseCard 
                    id={disease.id}
                    name={disease.name}
                    description={disease.shortDescription}
                    imageSrc={disease.imageSrc}
                  />
                </motion.div>
              ))}
            </div>
            
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="/doencas" className="btn-primary">
                Ver Todas as Doenças
              </Link>
            </motion.div>
          </div>
        </section>
        
        <section className="section bg-white">
          <div className="container">
            <div className="model-grid">
              <motion.div
                className="model-info"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="section-title">Explore o Sistema Digestório em 3D</h2>
                <p className="model-description">
                  Visualize o sistema digestório humano em um modelo 3D interativo. 
                  Explore cada órgão, sua localização e função no corpo humano.
                </p>
                <p className="model-description mb-8">
                  Nosso modelo 3D permite que você gire, amplie e explore cada componente 
                  do sistema digestório em detalhes, proporcionando uma experiência educativa 
                  única e imersiva.
                </p>
                <Link href="/modelo-3d" className="btn-primary">
                  Explorar Modelo 3D
                </Link>
              </motion.div>
              
              <motion.div
                className="model-preview"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Image 
                  src="/images/3d-model-preview.png" 
                  alt="Modelo 3D do Sistema Digestório" 
                  width={600}
                  height={400}
                  className="rounded-image"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </section>
        
        <section className="section bg-white">
          <div className="container">
            <h2 className="section-title text-center">Curiosidades Sobre o Sistema Digestório</h2>
            
            <div className="facts-grid">
              <div className="fact-card">
                <h3 className="fact-title">Comprimento Total</h3>
                <p className="fact-description">
                  O sistema digestório humano adulto tem aproximadamente 9 metros de comprimento, 
                  do início da boca até o ânus.
                </p>
              </div>
              
              <div className="fact-card">
                <h3 className="fact-title">Bactérias Intestinais</h3>
                <p className="fact-description">
                  O intestino humano abriga cerca de 100 trilhões de bactérias, mais de 10 vezes 
                  o número de células do corpo humano.
                </p>
              </div>
              
              <div className="fact-card">
                <h3 className="fact-title">Ácido Estomacal</h3>
                <p className="fact-description">
                  O ácido no estômago é forte o suficiente para dissolver metais, mas é protegido 
                  por uma camada de muco que é renovada a cada duas semanas.
                </p>
              </div>
              
              <div className="fact-card">
                <h3 className="fact-title">Enzimas Digestivas</h3>
                <p className="fact-description">
                  O corpo humano produz cerca de 22 tipos diferentes de enzimas digestivas para 
                  quebrar os alimentos em componentes utilizáveis.
                </p>
              </div>
              
              <div className="fact-card">
                <h3 className="fact-title">Tempo de Digestão</h3>
                <p className="fact-description">
                  Um alimento típico leva de 24 a 72 horas para percorrer todo o sistema digestório, 
                  dependendo do tipo de alimento e metabolismo individual.
                </p>
              </div>
              
              <div className="fact-card">
                <h3 className="fact-title">Segundo Cérebro</h3>
                <p className="fact-description">
                  O sistema digestório contém mais de 100 milhões de neurônios, por isso é 
                  considerado um &quot;segundo cérebro&quot; e pode funcionar independentemente.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
