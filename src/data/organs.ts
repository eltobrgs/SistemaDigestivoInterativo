export interface Organ {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  imageSrc: string;
  functions: string[];
  facts: string[];
}

export const organs: Organ[] = [
  {
    id: 'boca',
    name: 'Boca',
    shortDescription: 'O processo digestivo começa na boca, onde os alimentos são mastigados e misturados com a saliva.',
    fullDescription: 'A boca é a primeira parte do sistema digestório. Aqui, os alimentos são triturados pelos dentes e misturados com a saliva, que contém enzimas digestivas como a amilase salivar. Esta enzima inicia a digestão dos carboidratos. A língua ajuda a manipular o alimento e detectar o sabor, enquanto os dentes trituram o alimento em pedaços menores, aumentando a superfície para a ação das enzimas digestivas.',
    imageSrc: '/images/boca.png',
    functions: [
      'Mastigação dos alimentos',
      'Mistura dos alimentos com a saliva',
      'Início da digestão de carboidratos com a enzima amilase salivar',
      'Formação do bolo alimentar'
    ],
    facts: [
      'A saliva contém uma enzima chamada amilase salivar que inicia a quebra dos carboidratos',
      'Produzimos cerca de 1 a 1,5 litros de saliva por dia',
      'A mastigação completa dos alimentos facilita a digestão no estômago e intestino'
    ]
  },
  {
    id: 'faringe',
    name: 'Faringe',
    shortDescription: 'A faringe é um canal que conecta a boca ao esôfago e participa tanto do sistema digestório quanto do sistema respiratório.',
    fullDescription: 'A faringe é um tubo muscular que serve como passagem para alimentos e ar. Ela conecta a cavidade bucal ao esôfago e à laringe. Durante a deglutição, a epiglote (uma pequena aba de tecido) cobre a abertura da laringe, evitando que alimentos entrem no sistema respiratório. Este é um reflexo importante para prevenir a aspiração de alimentos e líquidos para os pulmões.',
    imageSrc: '/images/faringe.png',
    functions: [
      'Conecta a boca ao esôfago',
      'Direciona o alimento para o esôfago durante a deglutição',
      'Participa do processo de deglutição',
      'Evita que alimentos entrem no sistema respiratório'
    ],
    facts: [
      'A faringe mede cerca de 13 centímetros de comprimento',
      'Faz parte tanto do sistema respiratório quanto do digestório',
      'O reflexo da deglutição é controlado pelo cérebro para evitar engasgos'
    ]
  },
  {
    id: 'esofago',
    name: 'Esôfago',
    shortDescription: 'O esôfago é um tubo muscular que transporta o alimento da faringe para o estômago através de movimentos peristálticos.',
    fullDescription: 'O esôfago é um tubo muscular flexível com aproximadamente 25 centímetros de comprimento. Sua função principal é transportar o alimento da faringe até o estômago. Isso ocorre através de contrações musculares coordenadas chamadas peristaltismo, que empurram o alimento para baixo. Na junção com o estômago, existe um esfíncter (válvula muscular) chamado esfíncter esofágico inferior que impede o refluxo do conteúdo estomacal.',
    imageSrc: '/images/esofago.png',
    functions: [
      'Transportar alimentos da faringe até o estômago',
      'Realizar movimentos peristálticos para impulsionar o alimento',
      'Separar o estômago da faringe através do esfíncter esofágico inferior',
      'Prevenir o refluxo gástrico'
    ],
    facts: [
      'Os movimentos peristálticos do esôfago são tão eficientes que permitem engolir mesmo estando de cabeça para baixo',
      'O esôfago pode dilatar-se até 3 cm de diâmetro para acomodar alimentos maiores',
      'O revestimento interno do esôfago é constantemente renovado para proteger contra danos'
    ]
  },
  {
    id: 'estomago',
    name: 'Estômago',
    shortDescription: 'No estômago, o alimento é misturado com suco gástrico, que contém ácido clorídrico e enzimas como a pepsina.',
    fullDescription: 'O estômago é um órgão muscular em forma de "J" localizado no lado esquerdo superior do abdômen. É aqui que ocorre parte importante da digestão. O estômago produz ácido clorídrico e enzimas digestivas, como a pepsina, que iniciam a digestão das proteínas. O revestimento do estômago é protegido por uma camada de muco para evitar que seja digerido por seu próprio ácido. O estômago também armazena temporariamente o alimento e o transforma em uma substância semilíquida chamada quimo antes de liberá-lo gradualmente no intestino delgado.',
    imageSrc: '/images/estomago.png',
    functions: [
      'Armazenar temporariamente os alimentos',
      'Produzir ácido clorídrico e enzimas digestivas',
      'Misturar os alimentos com o suco gástrico',
      'Iniciar a digestão das proteínas',
      'Transformar o alimento em quimo'
    ],
    facts: [
      'O estômago pode expandir para acomodar até 4 litros de alimento',
      'Produz ácido clorídrico forte o suficiente para dissolver metais',
      'A camada de muco que protege o estômago é renovada a cada duas semanas',
      'Contém aproximadamente 35 milhões de glândulas que secretam enzimas e ácido'
    ]
  },
  {
    id: 'intestino-delgado',
    name: 'Intestino Delgado',
    shortDescription: 'O intestino delgado é dividido em três partes: duodeno, jejuno e íleo. É onde a maior parte da digestão e absorção dos nutrientes ocorre.',
    fullDescription: 'O intestino delgado é um tubo longo e enrolado com aproximadamente 6 a 7 metros de comprimento. É dividido em três partes: duodeno, jejuno e íleo. A maior parte da digestão e absorção de nutrientes ocorre aqui. O duodeno recebe o quimo do estômago e também secreções do pâncreas e do fígado (bile), que continuam o processo digestivo. O jejuno e o íleo são responsáveis principalmente pela absorção dos nutrientes. A superfície interna do intestino delgado possui projeções chamadas vilosidades e microvilosidades, que aumentam enormemente a área de superfície para absorção.',
    imageSrc: '/images/intestino-delgado.png',
    functions: [
      'Digestão final de proteínas, carboidratos e gorduras',
      'Absorção de nutrientes, vitaminas e minerais',
      'Receber e misturar enzimas pancreáticas e bile',
      'Mover o conteúdo intestinal através de movimentos peristálticos'
    ],
    facts: [
      'As vilosidades e microvilosidades aumentam a área de superfície interna para cerca de 250 m²',
      'Produz cerca de 1 a 2 litros de suco intestinal por dia',
      'Contém mais de 100 trilhões de bactérias benéficas',
      'Leva cerca de 3 a 5 horas para o alimento passar pelo intestino delgado'
    ]
  },
  {
    id: 'figado',
    name: 'Fígado',
    shortDescription: 'O fígado produz a bile, que é armazenada na vesícula biliar e liberada no intestino delgado para ajudar na digestão das gorduras.',
    fullDescription: 'O fígado é o maior órgão interno do corpo humano, pesando cerca de 1,5 kg. É um órgão extremamente importante que desempenha mais de 500 funções diferentes. No contexto do sistema digestório, o fígado produz a bile, um líquido amarelo-esverdeado que ajuda na digestão e absorção das gorduras no intestino delgado. Além disso, o fígado processa os nutrientes absorvidos pelo intestino, armazena alguns deles (como vitaminas e minerais), detoxifica substâncias prejudiciais e participa do metabolismo de proteínas, carboidratos e lipídios.',
    imageSrc: '/images/figado.png',
    functions: [
      'Produzir bile para digestão de gorduras',
      'Metabolizar proteínas, carboidratos e lipídios',
      'Armazenar vitaminas e minerais',
      'Detoxificar substâncias nocivas',
      'Processar nutrientes absorvidos pelo intestino'
    ],
    facts: [
      'Recebe cerca de 1,5 litros de sangue por minuto',
      'Pode regenerar-se mesmo se até 75% dele for removido',
      'Produz cerca de 800 a 1000 ml de bile por dia',
      'Contém cerca de 500 funções diferentes identificadas'
    ]
  },
  {
    id: 'vesicula-biliar',
    name: 'Vesícula Biliar',
    shortDescription: 'A vesícula biliar armazena e concentra a bile produzida pelo fígado, liberando-a no intestino delgado quando necessário.',
    fullDescription: 'A vesícula biliar é um pequeno órgão em forma de pera localizado sob o fígado. Sua principal função é armazenar e concentrar a bile produzida pelo fígado. Quando gorduras entram no intestino delgado, a vesícula biliar contrai-se e libera bile através do ducto biliar no duodeno. A bile ajuda a emulsificar as gorduras, tornando-as mais acessíveis para a digestão pelas enzimas pancreáticas. A vesícula biliar pode armazenar cerca de 30 a 50 ml de bile concentrada.',
    imageSrc: '/images/vesicula-biliar.png',
    functions: [
      'Armazenar e concentrar a bile',
      'Liberar bile no intestino delgado em resposta à ingestão de gorduras',
      'Auxiliar na digestão e absorção de gorduras',
      'Regular o fluxo biliar'
    ],
    facts: [
      'Pode concentrar a bile até 10 vezes mais do que quando sai do fígado',
      'É possível viver sem a vesícula biliar, pois o fígado continua produzindo bile',
      'Contrai-se em resposta ao hormônio colecistoquinina (CCK)',
      'Sua remoção é uma das cirurgias mais comuns realizadas em todo o mundo'
    ]
  },
  {
    id: 'pancreas',
    name: 'Pâncreas',
    shortDescription: 'O pâncreas produz suco pancreático, que contém enzimas digestivas que ajudam a digerir carboidratos, proteínas e gorduras no intestino delgado.',
    fullDescription: 'O pâncreas é uma glândula alongada localizada atrás do estômago. Tem funções tanto exócrinas (digestivas) quanto endócrinas (hormonais). Como parte do sistema digestório, o pâncreas produz o suco pancreático, que contém várias enzimas digestivas como amilase (para carboidratos), lipase (para gorduras) e proteases (para proteínas). Estas enzimas são liberadas no duodeno, onde ajudam a digerir os alimentos. Como glândula endócrina, o pâncreas produz hormônios importantes como a insulina e o glucagon, que regulam os níveis de glicose no sangue.',
    imageSrc: '/images/pancreas.png',
    functions: [
      'Produzir enzimas digestivas (amilase, lipase e proteases)',
      'Liberar suco pancreático no duodeno',
      'Neutralizar o ácido do estômago através do bicarbonato',
      'Produzir hormônios como insulina e glucagon'
    ],
    facts: [
      'Produz cerca de 1,5 a 3 litros de suco pancreático por dia',
      'Contém células especiais chamadas ilhotas de Langerhans que produzem hormônios',
      'As enzimas pancreáticas são produzidas em forma inativa para evitar a autodigestão',
      'É considerado tanto uma glândula exócrina quanto endócrina'
    ]
  },
  {
    id: 'intestino-grosso',
    name: 'Intestino Grosso',
    shortDescription: 'O intestino grosso inclui o ceco, cólon, reto e ânus. Ele absorve água e eletrólitos dos resíduos alimentares, formando as fezes.',
    fullDescription: 'O intestino grosso, ou cólon, tem cerca de 1,5 metros de comprimento e é mais largo que o intestino delgado. É composto pelo ceco, cólon (ascendente, transverso, descendente e sigmoide), reto e canal anal. Sua principal função é absorver água e eletrólitos dos resíduos alimentares que não foram digeridos ou absorvidos no intestino delgado, resultando na formação das fezes. O intestino grosso também abriga trilhões de bactérias benéficas (microbiota intestinal) que fermentam fibras não digeríveis, produzem algumas vitaminas (como K e B12) e contribuem para a saúde geral.',
    imageSrc: '/images/intestino-grosso.png',
    functions: [
      'Absorver água e eletrólitos dos resíduos alimentares',
      'Armazenar temporariamente as fezes',
      'Abrigar a microbiota intestinal',
      'Formar, compactar e eliminar as fezes',
      'Produzir algumas vitaminas com ajuda de bactérias'
    ],
    facts: [
      'Contém cerca de 100 trilhões de bactérias de mais de 500 espécies diferentes',
      'Move seu conteúdo através de contrações chamadas movimentos de massa',
      'Leva cerca de 12 a 48 horas para o conteúdo passar pelo intestino grosso',
      'As bactérias intestinais contribuem significativamente para o sistema imunológico'
    ]
  },
  {
    id: 'anus',
    name: 'Ânus',
    shortDescription: 'O ânus é a abertura final do trato digestório, através da qual as fezes são eliminadas do corpo.',
    fullDescription: 'O ânus é a abertura no final do trato digestório, localizado na extremidade do reto. É composto por um esfíncter interno (involuntário) e um externo (voluntário), que controlam a eliminação das fezes. O esfíncter interno é controlado pelo sistema nervoso autônomo, enquanto o externo está sob controle voluntário. Durante a defecação, esses esfíncteres relaxam, permitindo a saída das fezes. A região anal contém muitas terminações nervosas, o que a torna sensível à dor, pressão e temperatura.',
    imageSrc: '/images/anus.png',
    functions: [
      'Permitir a eliminação controlada das fezes',
      'Manter a continência fecal através dos esfíncteres',
      'Proporcionar sensação de distensão retal',
      'Completar o processo digestivo com a eliminação dos resíduos'
    ],
    facts: [
      'Contém dois esfíncteres: interno (involuntário) e externo (voluntário)',
      'O esfíncter interno está continuamente contraído, exceto durante a defecação',
      'É rico em terminações nervosas e vasos sanguíneos',
      'A defecação é um reflexo controlado tanto voluntária quanto involuntariamente'
    ]
  }
]; 