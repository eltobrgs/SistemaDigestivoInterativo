'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Swal from 'sweetalert2';

interface OrganQuizProps {
  organId: string;
}

// Perguntas de quiz para cada órgão
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

export default function OrganQuiz({ organId }: OrganQuizProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  
  const quiz = quizQuestions[organId as keyof typeof quizQuestions];
  
  if (!quiz) {
    return null;
  }
  
  const openModal = () => {
    setIsModalOpen(true);
    setSelectedOption(null);
    setIsAnswered(false);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  const handleOptionSelect = (option: string) => {
    if (isAnswered) return;
    
    setSelectedOption(option);
    const correct = option === quiz.correctAnswer;
    setIsCorrect(correct);
    setIsAnswered(true);
    
    if (correct) {
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
  
  const resetQuiz = () => {
    setSelectedOption(null);
    setIsAnswered(false);
  };
  
  return (
    <>
      <button className="quiz-toggle-button" onClick={openModal}>
        Testar Conhecimento
      </button>
      
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            className="quiz-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className="quiz-modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="quiz-modal-close" onClick={closeModal} aria-label="Fechar">×</button>
              
              <div className="quiz-content">
                <h3 className="quiz-title">Quiz</h3>
                <p className="quiz-question">{quiz.question}</p>
                
                <div className="quiz-options">
                  {quiz.options.map((option, index) => (
                    <button 
                      key={index} 
                      className={`quiz-option ${selectedOption === option 
                        ? (option === quiz.correctAnswer ? 'correct' : 'incorrect') 
                        : ''}`}
                      onClick={() => handleOptionSelect(option)}
                      disabled={isAnswered && selectedOption !== option}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                
                {isAnswered && (
                  <div className="quiz-result">
                    <p>{isCorrect 
                      ? "Parabéns! Você acertou!" 
                      : `Resposta incorreta. A resposta correta é: ${quiz.correctAnswer}`}
                    </p>
                    <button className="reset-quiz-button" onClick={resetQuiz}>
                      Tentar Novamente
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 