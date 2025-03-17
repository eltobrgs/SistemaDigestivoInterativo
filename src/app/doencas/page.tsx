'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DiseaseCard from "@/components/DiseaseCard";
import { diseases } from "@/data/diseases";
import { motion } from "framer-motion";

export default function DiseasesPage() {
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
              <h1 className="page-title">Doenças do Sistema Digestório</h1>
              <p className="page-description">
                O sistema digestório pode ser afetado por diversas doenças que comprometem seu funcionamento.
                Conheça as principais doenças que afetam o sistema digestório, seus sintomas, causas e tratamentos.
              </p>
            </motion.div>
            
            <div className="disease-grid">
              {diseases.map((disease, index) => (
                <motion.div
                  key={disease.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 