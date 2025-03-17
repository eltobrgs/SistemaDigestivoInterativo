export interface Disease {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  imageSrc: string;
  symptoms: string[];
  treatment: string[];
  causes: string[];
}

export const diseases: Disease[] = [
  {
    id: 'apendicite',
    name: 'Apendicite',
    shortDescription: 'Inflamação do apêndice, um pequeno "saquinho" no intestino grosso.',
    fullDescription: 'A apendicite é uma inflamação do apêndice, uma pequena estrutura em forma de dedo que se projeta do ceco (a primeira parte do intestino grosso). A inflamação ocorre quando o apêndice fica bloqueado, geralmente por fezes, um corpo estranho ou, raramente, um tumor. A apendicite é considerada uma emergência médica, pois se não for tratada rapidamente, o apêndice pode romper-se, espalhando a infecção pela cavidade abdominal (peritonite), o que pode ser potencialmente fatal.',
    imageSrc: '/images/apendicite.png',
    symptoms: [
      'Dor forte no lado direito inferior do abdômen',
      'Náuseas e vômitos',
      'Febre baixa',
      'Perda de apetite',
      'Incapacidade de eliminar gases',
      'Abdômen inchado'
    ],
    treatment: [
      'Cirurgia para remover o apêndice (apendicectomia)',
      'Antibióticos antes e após a cirurgia',
      'Repouso e dieta leve após o procedimento'
    ],
    causes: [
      'Obstrução do apêndice por fezes endurecidas',
      'Infecções',
      'Corpos estranhos',
      'Tumores (raramente)'
    ]
  },
  {
    id: 'diabetes',
    name: 'Diabetes',
    shortDescription: 'Uma doença crônica que afeta a forma como o corpo processa o açúcar no sangue.',
    fullDescription: 'O diabetes é uma condição em que o corpo não consegue produzir insulina suficiente ou não a utiliza de forma eficaz, resultando em níveis elevados de glicose no sangue. Existem dois tipos principais de diabetes: tipo 1, que é uma condição autoimune onde o corpo ataca as células que produzem insulina, e tipo 2, que é mais comum e geralmente está associado a fatores de estilo de vida e obesidade. O diabetes pode levar a complicações sérias se não for gerenciado adequadamente.',
    imageSrc: '/images/diabetes.png',
    symptoms: [
      'Aumento da sede e da fome',
      'Urinação frequente',
      'Fadiga',
      'Visão embaçada',
      'Cicatrização lenta de feridas',
      'Perda de peso inexplicada'
    ],
    treatment: [
      'Monitoramento regular dos níveis de glicose no sangue',
      'Uso de insulina ou medicamentos orais',
      'Mudanças na dieta e aumento da atividade física',
      'Educação sobre diabetes e autocuidado'
    ],
    causes: [
      'Fatores genéticos',
      'Obesidade e sedentarismo',
      'Dieta rica em açúcares e carboidratos refinados',
      'Idade avançada e histórico familiar de diabetes'
    ]
  },
  {
    id: 'calculos-biliares',
    name: 'Cálculos Biliares',
    shortDescription: '"Pedras" que se formam na vesícula biliar, geralmente compostas de colesterol cristalizado.',
    fullDescription: 'Os cálculos biliares são depósitos endurecidos que se formam na vesícula biliar, um pequeno órgão localizado sob o fígado que armazena bile. Eles variam em tamanho, desde tão pequenos quanto um grão de areia até tão grandes quanto uma bola de golfe. Algumas pessoas desenvolvem apenas um cálculo biliar, enquanto outras desenvolvem muitos. Os cálculos biliares são compostos principalmente de colesterol cristalizado, embora também possam ser formados por sais biliares e bilirrubina.',
    imageSrc: '/images/calculos-biliares.png',
    symptoms: [
      'Dor súbita e intensa no lado direito superior do abdômen',
      'Dor que se irradia para as costas ou ombro direito',
      'Náuseas e vômitos',
      'Febre e calafrios (se houver infecção)',
      'Pele e olhos amarelados (icterícia)',
      'Urina escura e fezes claras'
    ],
    treatment: [
      'Cirurgia para remover a vesícula biliar (colecistectomia)',
      'Medicamentos para dissolver pequenos cálculos (menos comum)',
      'Procedimentos menos invasivos em casos específicos',
      'Dieta com baixo teor de gordura após o tratamento'
    ],
    causes: [
      'Excesso de colesterol na bile',
      'Excesso de bilirrubina na bile',
      'Vesícula biliar que não esvazia corretamente',
      'Fatores de risco incluem obesidade, dieta rica em gorduras e baixa em fibras, idade avançada e predisposição genética'
    ]
  }
]; 