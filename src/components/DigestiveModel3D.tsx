"use client";

import { useState, useEffect } from 'react';

export default function DigestiveModel3D() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return (
    <div className="model-container">
      <div className="model-frame">
        {isClient ? (
          <iframe 
            src="https://human.biodigital.com/widget/?be=2UH1&background.colors=0,0,0,1,0,0,0,1&initial.hand-hint=true&ui-fullscreen=true&ui-center=false&ui-dissect=true&ui-zoom=true&ui-help=true&ui-tools-display=primary&ui-info=true&uaid=3DPCf"
            title="Sistema Digestório Interativo 3D"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="model-loading">
            <p>Carregando modelo 3D...</p>
          </div>
        )}
      </div>
      <div className="model-info">
        <h3>Modelo 3D Interativo</h3>
        <p>
          Explore o sistema digestório em 3D. Use os controles para girar, ampliar e destacar diferentes órgãos.
          Você pode clicar em partes específicas para obter mais informações sobre cada órgão.
        </p>
        <div className="model-instructions">
          <h4>Instruções:</h4>
          <ul>
            <li>Arraste para girar o modelo</li>
            <li>Use o scroll para ampliar/diminuir</li>
            <li>Clique em um órgão para destacá-lo</li>
            <li>Use o botão &quot;Dissect&quot; para ver camadas internas</li>
            <li>Clique no ícone de informação para detalhes sobre cada parte</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 