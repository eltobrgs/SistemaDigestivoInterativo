import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { organs } from "@/data/organs";
import { FaArrowLeft, FaListUl, FaInfoCircle } from "react-icons/fa";

interface OrganPageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return organs.map((organ) => ({
    id: organ.id,
  }));
}

export default function OrganPage({ params }: OrganPageProps) {
  const organ = organs.find((o) => o.id === params.id);

  if (!organ) {
    notFound();
  }

  return (
    <div className="page-container">
      <Navbar />
      <main className="main-content">
        <section className="section">
          <div className="container">
            <Link 
              href="/orgaos" 
              className="back-link"
            >
              <FaArrowLeft className="back-icon" />
              Voltar para todos os órgãos
            </Link>

            <div className="organ-detail-grid">
              <div className="organ-image-container detail">
                <Image
                  src={organ.imageSrc}
                  alt={organ.name}
                  width={600}
                  height={700}
                  className="organ-detail-image"
                />
              </div>

              <div className="organ-content">
                <h1 className="organ-detail-title">{organ.name}</h1>
                <p className="organ-detail-description">
                  {organ.fullDescription}
                </p>

                <div className="organ-functions">
                  <h2 className="functions-title">
                    <FaListUl className="section-icon" /> Funções
                  </h2>
                  <ul className="functions-list">
                    {organ.functions.map((func, index) => (
                      <li key={index} className="function-item">
                        {func}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="organ-facts">
                  <h2 className="facts-title">
                    <FaInfoCircle className="section-icon" /> Curiosidades
                  </h2>
                  <ul className="facts-list">
                    {organ.facts.map((fact, index) => (
                      <li key={index} className="fact-item">
                        {fact}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="related-organs">
              <h2 className="related-title">Outros Órgãos do Sistema Digestório</h2>
              <div className="related-grid">
                {organs
                  .filter((o) => o.id !== organ.id)
                  .slice(0, 4)
                  .map((o) => (
                    <Link 
                      key={o.id} 
                      href={`/orgaos/${o.id}`}
                      className="related-card"
                    >
                      <div className="related-image-container">
                        <Image
                          src={o.imageSrc}
                          alt={o.name}
                          width={280}
                          height={120}
                          className="related-image"
                        />
                      </div>
                      <h3 className="related-name">{o.name}</h3>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 