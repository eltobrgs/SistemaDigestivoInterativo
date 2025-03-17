'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { organs } from '@/data/organs';
import OrganQuiz from './OrganQuiz';

interface OrganCardProps {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
}

export default function OrganCard({ id, name, description, imageSrc }: OrganCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const organ = organs.find(o => o.id === id);
  
  const openModal = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <>
      <div className="organ-card" onClick={openModal}>
        <div className="organ-image-container">
          <Image
            src={imageSrc}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="organ-image"
            priority
          />
        </div>
        <h3 className="organ-title">{name}</h3>
        <p className="organ-description">
          {description}
        </p>
        <div className="organ-link">
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
                  <p>{organ?.fullDescription}</p>
                </div>
                
                <div className="modal-section">
                  <h3>Funções</h3>
                  <ul>
                    {organ?.functions.map((func, index) => (
                      <li key={index}>{func}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="modal-section">
                  <h3>Curiosidades</h3>
                  <ul>
                    {organ?.facts.map((fact, index) => (
                      <li key={index}>{fact}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="modal-quiz-section">
                  <OrganQuiz organId={id} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 