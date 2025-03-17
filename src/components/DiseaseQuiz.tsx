'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Swal from 'sweetalert2';

interface DiseaseQuizProps {
  diseaseId: string;
}

// Perguntas de quiz para cada doença
const quizQuestions = {
  'apendicite': {
    question: 'Qual é o tratamento principal para a apendicite?',
    options: ['Medicação anti-inflamatória', 'Cirurgia para remover o apêndice', 'Apenas repouso', 'Antibióticos por 10 dias'],
    correctAnswer: 'Cirurgia para remover o apêndice'
  },
  'gastrite': {
    question: 'Qual dos seguintes não é uma causa comum de gastrite?',
    options: ['Infecção por H. pylori', 'Uso excessivo de anti-inflamatórios', 'Estresse', 'Consumo de proteínas'],
    correctAnswer: 'Consumo de proteínas'
  },
  'ulcera-peptica': {
    question: 'Qual bactéria está frequentemente associada ao desenvolvimento de úlceras pépticas?',
    options: ['Escherichia coli', 'Helicobacter pylori', 'Staphylococcus aureus', 'Salmonella'],
    correctAnswer: 'Helicobacter pylori'
  },
  'doenca-de-crohn': {
    question: 'A Doença de Crohn é um tipo de:',
    options: ['Doença infecciosa', 'Doença autoimune', 'Doença parasitária', 'Intoxicação alimentar'],
    correctAnswer: 'Doença autoimune'
  },
  'colite-ulcerativa': {
    question: 'Qual região do trato digestivo é principalmente afetada pela colite ulcerativa?',
    options: ['Intestino delgado', 'Cólon e reto', 'Estômago', 'Esôfago'],
    correctAnswer: 'Cólon e reto'
  },
  'sindrome-do-intestino-irritavel': {
    question: 'A Síndrome do Intestino Irritável é classificada como:',
    options: ['Doença inflamatória', 'Distúrbio funcional', 'Condição autoimune', 'Infecção bacteriana'],
    correctAnswer: 'Distúrbio funcional'
  }
};

export default function DiseaseQuiz({ diseaseId }: DiseaseQuizProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  
  const quiz = quizQuestions[diseaseId as keyof typeof quizQuestions];
  
  if (!quiz) {
    return null;
  }
  
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    setSelectedOption(null);
    setIsAnswered(false);
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
    <div className="disease-quiz-container">
      <button className="quiz-toggle-button" onClick={toggleVisibility}>
        {isVisible ? "Esconder Quiz" : "Testar Conhecimento"}
      </button>
      
      <AnimatePresence>
        {isVisible && (
          <motion.div 
            className="quiz-content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 