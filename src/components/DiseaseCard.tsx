'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { diseases } from '@/data/diseases';

interface DiseaseCardProps {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
}

export default function DiseaseCard({ id, name, description, imageSrc }: DiseaseCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const disease = diseases.find(d => d.id === id);
  
  const openModal = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <>
      <div className="disease-card" onClick={openModal}>
        <div className="disease-image-container">
          <Image
            src={imageSrc}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="disease-image"
            priority
          />
        </div>
        <h3 className="disease-title">{name}</h3>
        <p className="disease-description">
          {description}
        </p>
        <div className="disease-link">
          Saiba mais
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20"
            height="20"
            viewBox="0 0 20 20" 
            fill="currentColor"
            className="link-icon"
          >
            <path 
              fillRule="evenodd" 
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
              clipRule="evenodd" 
            />
          </svg>
        </div>
      </div>
      
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeModal} aria-label="Fechar">×</button>
              
              <div className="modal-body">
                <h2 className="modal-title">{name}</h2>
                <div className="modal-image-container">
                  <Image
                    src={imageSrc}
                    alt={name}
                    width={500}
                    height={300}
                    className="modal-image"
                    priority
                    sizes="(max-width: 768px) 95vw, 600px"
                  />
                </div>
                <div className="modal-description">
                  <p>{disease?.fullDescription}</p>
                </div>
                
                <div className="modal-section">
                  <h3>Sintomas</h3>
                  <ul>
                    {disease?.symptoms.map((symptom, index) => (
                      <li key={index}>{symptom}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="modal-section">
                  <h3>Causas</h3>
                  <ul>
                    {disease?.causes.map((cause, index) => (
                      <li key={index}>{cause}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="modal-section">
                  <h3>Tratamento</h3>
                  <ul>
                    {disease?.treatment.map((treatment, index) => (
                      <li key={index}>{treatment}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 