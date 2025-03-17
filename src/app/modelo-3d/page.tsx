import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DigestiveModel3D from "@/components/DigestiveModel3D";

export default function Model3DPage() {
  return (
    <div className="page-container">
      <Navbar />
      <main className="main-content">
        <section className="section">
          <div className="container">
            <h1 className="page-title">Modelo 3D Interativo</h1>
            <p className="page-description">
              Explore o sistema digestório humano em detalhes com nosso modelo 3D interativo. 
              Visualize cada órgão, sua localização e entenda melhor como funciona o processo digestivo.
            </p>
            
            <DigestiveModel3D />
            
            <div className="model-help">
              <h2 className="section-title">Como Usar o Modelo 3D</h2>
              <div className="help-grid">
                <div className="help-column">
                  <h3 className="help-title">Navegação Básica</h3>
                  <ul className="help-list">
                    <li>Clique e arraste para girar o modelo</li>
                    <li>Use o scroll do mouse para ampliar ou diminuir</li>
                    <li>Clique duas vezes em um órgão para centralizar a visualização nele</li>
                    <li>Pressione o botão &quot;Reset&quot; para voltar à visualização inicial</li>
                  </ul>
                </div>
                
                <div className="help-column">
                  <h3 className="help-title">Ferramentas Avançadas</h3>
                  <ul className="help-list">
                    <li>Use o botão &quot;Dissect&quot; para visualizar camadas internas</li>
                    <li>Clique no ícone de informação para ver detalhes sobre cada órgão</li>
                    <li>Utilize o menu lateral para mostrar ou ocultar órgãos específicos</li>
                    <li>Experimente o modo de tela cheia para uma experiência mais imersiva</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 