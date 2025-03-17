import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaGraduationCap, FaBook, FaUsers, FaLaptopCode } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="page-container">
      <Navbar />
      <main className="main-content">
        <section className="section">
          <div className="container">
            <div className="about-content">
              <h1 className="page-title">Sobre o Projeto</h1>
              <p className="page-description">
                Conheça mais sobre este projeto educacional interativo sobre o sistema digestório humano.
              </p>
              
              <div className="about-section">
                <h2 className="about-section-title">
                  <FaGraduationCap className="section-icon" /> Objetivo Educacional
                </h2>
                <p className="about-text">
                  Este site foi desenvolvido com o objetivo de proporcionar uma experiência educativa 
                  interativa sobre o sistema digestório humano. Nosso foco é apresentar informações 
                  precisas e detalhadas de forma visualmente atraente e acessível para estudantes, 
                  professores e qualquer pessoa interessada em aprender sobre o funcionamento do 
                  corpo humano.
                </p>
                <p className="about-text">
                  Através da combinação de conteúdo textual informativo, imagens ilustrativas e um 
                  modelo 3D interativo, buscamos facilitar a compreensão dos complexos processos 
                  digestivos e da anatomia dos órgãos envolvidos.
                </p>
              </div>
              
              <div className="about-section">
                <h2 className="about-section-title">
                  <FaBook className="section-icon" /> Conteúdo e Fontes
                </h2>
                <p className="about-text">
                  Todo o conteúdo apresentado neste site foi cuidadosamente pesquisado e baseado em 
                  fontes científicas confiáveis. As informações sobre anatomia, fisiologia e funções 
                  dos órgãos do sistema digestório foram compiladas a partir de livros de anatomia, 
                  artigos científicos e recursos educacionais reconhecidos.
                </p>
                <p className="about-text">
                  O modelo 3D interativo foi disponibilizado pela BioDigital Human, uma plataforma 
                  que oferece visualizações anatômicas precisas para fins educacionais.
                </p>
              </div>
              
              <div className="about-section">
                <h2 className="about-section-title">
                  <FaUsers className="section-icon" /> Público-Alvo
                </h2>
                <p className="about-text">
                  Este recurso educacional foi desenvolvido pensando em:
                </p>
                <ul className="about-list">
                  <li>Estudantes do ensino fundamental e médio que estão aprendendo sobre o corpo humano</li>
                  <li>Estudantes de cursos técnicos e superiores na área da saúde</li>
                  <li>Professores que buscam recursos visuais para enriquecer suas aulas</li>
                  <li>Qualquer pessoa interessada em aprender mais sobre o funcionamento do corpo humano</li>
                </ul>
              </div>
              
              <div className="about-section">
                <h2 className="about-section-title">
                  <FaLaptopCode className="section-icon" /> Tecnologias Utilizadas
                </h2>
                <p className="about-text">
                  Este site foi desenvolvido utilizando tecnologias modernas de desenvolvimento web:
                </p>
                <div className="tech-grid">
                  <div className="tech-item">
                    <div className="tech-image-container">
                      <Image 
                        src="/images/tech-react.png" 
                        alt="React" 
                        width={64}
                        height={64}
                        className="tech-image"
                      />
                    </div>
                    <span className="tech-name">React</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-image-container">
                      <Image 
                        src="/images/tech-nextjs.png" 
                        alt="Next.js" 
                        width={64}
                        height={64}
                        className="tech-image"
                      />
                    </div>
                    <span className="tech-name">Next.js</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-image-container">
                      <Image 
                        src="/images/tech-typescript.png" 
                        alt="TypeScript" 
                        width={64}
                        height={64}
                        className="tech-image"
                      />
                    </div>
                    <span className="tech-name">TypeScript</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-image-container">
                      <Image 
                        src="/images/tech-css.png" 
                        alt="CSS" 
                        width={64}
                        height={64}
                        className="tech-image"
                      />
                    </div>
                    <span className="tech-name">CSS</span>
                  </div>
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