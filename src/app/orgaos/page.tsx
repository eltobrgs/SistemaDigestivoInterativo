'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OrganCard from "@/components/OrganCard";
import { organs } from "@/data/organs";
import { motion } from "framer-motion";

export default function OrgansPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="page-container">
      <Navbar />
      <main className="main-content">
        <section className="section">
          <div className="container">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <h1 className="page-title">Órgãos do Sistema Digestório</h1>
              <p className="page-description">
                O sistema digestório é composto por vários órgãos que trabalham em conjunto para processar 
                os alimentos, absorver nutrientes e eliminar resíduos. Conheça cada um deles em detalhes.
              </p>
            </motion.div>
            
            <div className="organ-grid">
              {organs.map((organ, index) => (
                <motion.div
                  key={organ.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 