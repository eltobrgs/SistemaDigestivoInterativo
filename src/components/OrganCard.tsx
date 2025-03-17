'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Swal from 'sweetalert2';
import { organs } from '@/data/organs';

interface OrganCardProps {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
}

export default function OrganCard({ id, name, description, imageSrc }: OrganCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  
  const organ = organs.find(o => o.id === id);
  
  const openModal = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    setIsQuizOpen(false);
  };
  
  const openQuiz = () => {
    setIsQuizOpen(true);
  };
  
  const handleQuizAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      Swal.fire({
        title: 'Correto!',
        text: 'Muito bem! Você acertou!',
        icon: 'success',
        confirmButtonText: 'Continuar'
      });
    } else {
      Swal.fire({
        title: 'Incorreto!',
        text: 'Tente novamente!',
        icon: 'error',
        confirmButtonText: 'Tentar novamente'
      });
    }
  };
  
  // Perguntas de exemplo para cada órgão
  const quizQuestions = {
    'boca': {
      question: 'Qual enzima presente na saliva inicia a digestão dos carboidratos?',
      options: ['Pepsina', 'Amilase salivar', 'Lipase', 'Tripsina'],
      correctAnswer: 'Amilase salivar'
    },
    'faringe': {
      question: 'Qual estrutura impede que o alimento entre no sistema respiratório durante a deglutição?',
      options: ['Laringe', 'Epiglote', 'Esôfago', 'Traqueia'],
      correctAnswer: 'Epiglote'
    },
    'esofago': {
      question: 'Como se chama o movimento que transporta o alimento pelo esôfago?',
      options: ['Digestão', 'Absorção', 'Peristaltismo', 'Secreção'],
      correctAnswer: 'Peristaltismo'
    },
    'estomago': {
      question: 'Qual substância é produzida pelo estômago para criar um ambiente ácido?',
      options: ['Bile', 'Ácido clorídrico', 'Insulina', 'Bicarbonato de sódio'],
      correctAnswer: 'Ácido clorídrico'
    },
    'intestino-delgado': {
      question: 'Qual parte do intestino delgado recebe as secreções do pâncreas e do fígado?',
      options: ['Jejuno', 'Íleo', 'Duodeno', 'Cólon'],
      correctAnswer: 'Duodeno'
    },
    'figado': {
      question: 'Qual a principal função da bile produzida pelo fígado?',
      options: ['Digerir proteínas', 'Emulsificar gorduras', 'Quebrar carboidratos', 'Absorver vitaminas'],
      correctAnswer: 'Emulsificar gorduras'
    },
    'vesicula-biliar': {
      question: 'Onde a bile é armazenada antes de ser liberada no intestino?',
      options: ['Fígado', 'Pâncreas', 'Vesícula biliar', 'Estômago'],
      correctAnswer: 'Vesícula biliar'
    },
    'pancreas': {
      question: 'Qual enzima pancreática é responsável pela digestão das gorduras?',
      options: ['Amilase', 'Lipase', 'Pepsina', 'Tripsina'],
      correctAnswer: 'Lipase'
    },
    'intestino-grosso': {
      question: 'Qual a principal função do intestino grosso?',
      options: ['Digestão de proteínas', 'Absorção de água', 'Produção de bile', 'Digestão de carboidratos'],
      correctAnswer: 'Absorção de água'
    },
    'anus': {
      question: 'Quantos esfíncteres o ânus possui?',
      options: ['Um', 'Dois', 'Três', 'Quatro'],
      correctAnswer: 'Dois'
    }
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
              
              {!isQuizOpen ? (
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
                  
                  <button className="quiz-button" onClick={openQuiz}>
                    Testar Conhecimento
                  </button>
                </div>
              ) : (
                <div className="quiz-container">
                  <h2>Quiz: {name}</h2>
                  <p className="quiz-question">{quizQuestions[id as keyof typeof quizQuestions].question}</p>
                  
                  <div className="quiz-options">
                    {quizQuestions[id as keyof typeof quizQuestions].options.map((option, index) => (
                      <button 
                        key={index} 
                        className="quiz-option"
                        onClick={() => handleQuizAnswer(option === quizQuestions[id as keyof typeof quizQuestions].correctAnswer)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  
                  <button className="back-button" onClick={() => setIsQuizOpen(false)}>
                    Voltar
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 