document.getElementById('cursos').onchange = function () {
    descricaoCurso()
};

function descricaoCurso() {
    const descricaoCurso = document.getElementById('cursos').value;
    const resp = confirm("Este curso mesmo?");

    if (resp == true) {
        myWindow = window.open("", "_blank", "width=600, height=300");
        if (descricaoCurso == 'Análise e Desenvolvimento de Sistemas') {
            myWindow.document.write("<p>O tecnólogo em Análise e Desenvolvimento de Sistemas analisa, projeta, documenta, especifica, testa, implanta e mantém sistemas computacionais de informação. Esse profissional trabalha, também, com ferramentas computacionais, equipamentos de informática e metodologia de projetos na produção de sistemas. Raciocínio lógico, emprego de linguagens de programação e de metodologias de construção de projetos, preocupação com a qualidade, usabilidade, robustez, integridade e segurança de programas computacionais são fundamentais à atuação desse profissional.</p>")
        } else if (descricaoCurso == 'Eletrônica Automotiva') {
            myWindow.document.write("<p>O tecnólogo em Eletrônica Automotiva: participa de equipes de desenvolvimento de novos produtos, novas tecnologias e subsistemas na área automotiva; supervisiona, coordena e orienta equipes na área automotiva; realiza a padronização, mensuração e controle de qualidade nas áreas automotivas de veículos especiais, carga e passeio; especifica instrumentos e equipamentos para teste de veículos; oferece assistência, assessoria e consultoria referentes a instrumentos e equipamentos usados em testes de veículos de especiais, carga e passeio; elabora orçamentos referentes à instrumentos e equipamentos usados na industria automotiva; gerencia e realiza vistorias, perícias, avaliações, arbitramento, laudo e parecer técnico referentemente à áreas afetadas à veículos especiais, carga e de passeio; supervisiona, coordena e orienta tecnicamente equipes de uma linha de inspeção veicular; é capaz de selecionar e desenvolver novas tecnologias levando-se em conta características técnicas, humanas, econômicas e gerenciais de sistemas automobilístico; opera e faz manutenção de equipamentos em inspeção veicular; estuda a viabilização técnico-econômica de uma oficina autorizada ou independente; supervisiona, coordena e orienta tecnicamente equipes de uma oficina autorizada ou independente.</p>")
        } else if (descricaoCurso == 'Fabricação Mecânica') {
            myWindow.document.write("<p>O tecnólogo em Fabricação Mecânica atua no segmento de fabricação, envolvendo usinagem, conformação, soldagem, montagem e outros processos mecânicos. Planeja, controla e gerencia os diversos processos, atuando no desenvolvimento e melhoria de produtos, dos processos de fabricação e na gestão de projetos, aliando competências das áreas de gestão, qualidade e controle ambiental. Exerce suas atividades em empresas do ramo metal-mecânico, incluindo indústrias manufatureiras e ferramentarias, podendo ainda atuar em institutos e centros de pesquisa, órgãos governamentais, escritórios de consultoria, dentre outros.</p>")
        } else if (descricaoCurso == 'Gestão da Qualidade') {
            myWindow.document.write("<p>O que o aluno estuda: O Tecnólogo em Gestão da Qualidade será um profissional que planeja, implementa e audita sistemas de gestão da qualidade e produtividade. Realiza mapeamento de processos organizacionais segundo indicadores de qualidade e produtividade. Elabora e analisa documentação e relatórios de qualidade, considerando normas de qualidade estabelecidas. Desenvolve avaliação sistemática dos procedimentos, práticas e rotinas internas e externas de uma organização. Mobiliza pessoas para agir com qualidade em todas as atividades corporativas. Gerencia e mantém o fluxo de informação e comunicação na empresa. Dissemina a cultura da qualidade e produtividade. Capacita pessoas em procedimentos e rotinas destinados a minimizar a produção fora de conformidade. Elabora ferramentas para minimizar a incidência de falhas. Elabora e gerencia estratégias para obtenção de certificações. Desenvolve programa de avaliação de performance produtiva organizacional considerando aspectos quantitativos e qualitativos. Avalia e emite parecer técnico em sua área de formação <br/>O que o profissional faz: O profissional que entende a fundo o que é Gestão da Qualidade é especializado em aplicar processos de melhoria e eficiência em linhas de produção.Alguém formado nessa área pode atuar em diferentes departamentos de uma organização, seja ela no setor de serviços, indústria, saúde etc. <br/>Onde trabalhar: Empresas de planejamento, desenvolvimento de projetos, assessoramento técnico e consultoria.Empresas em geral (indústria, comércio e serviços).Órgãos públicos.Institutos e Centros de Pesquisa.Instituições de Ensino, mediante formação requerida pela legislação vigente.<p/>")
        } else if (descricaoCurso == 'Logística') {
            myWindow.document.write("<p>O tecnólogo em Logística é o profissional especializado em armazenagem, distribuição e transporte. Atuando na área logística de uma empresa, planeja e coordena a movimentação física e de informações sobre as operações multimodais de transporte, para proporcionar fluxo otimizado e de qualidade para peças, matérias-primas e produtos. Ele gerencia redes de distribuição e unidades logísticas, estabelecendo processos de compras, identificando fornecedores, negociando e estabelecendo padrões de recebimento, armazenamento, movimentação e embalagem de materiais, podendo ainda ocupar-se do inventário de estoques, sistemas de abastecimento, programação e monitoramento do fluxo de pedidos.</p>")
        } else if (descricaoCurso == 'Manufatura Avançadada') {
            myWindow.document.write("<p>O que o aluno estuda: O aluno aprenderá a transformar ambientes de manufatura convencional em ambientes mais tecnológicos. Estruturado por blocos temáticos direcionados a projetos, o conteúdo do curso é dividido em processos de manufatura, eletrônica e automação e áreas multidisciplinares. O aluno terá uma base de artes para desenho técnico, matemática para cálculos de projetos e gestão de carreira. O inglês para linguagem técnica também é uma disciplina recorrente no curso. <br/>O que o profissional faz: Atua como um integrador de tecnologia. Além de projetar e desenvolver projetos de manufatura, o profissional é responsável por agregar novas tecnologias voltadas para a Indústria 4.0. Oferece informações tecnológicas relacionadas às principais técnicas de produção empregadas na indústria mundial, tais como materiais e processos de fabricação, realidade aumentada e virtual, Internet das Coisas, Big Data, entre outros. É responsável por identificar dispositivos e ferramentas disponíveis no mercado. Como empreendedor, pode abrir sua própria consultoria ou empresa. Pode ainda atuar em pesquisas. <br/>Onde trabalhar: Indústria, instituição governamental, escola, hospital, centro de pesquisa tecnológica, empresa de geração, transmissão e distribuição de energia.</p>")
        } else if (descricaoCurso == 'Polímeros') {
            myWindow.document.write('<p>Esse profissional trabalha na fabricação dos Polímeros, compostos químicos utilizados na fabricação de produtos como o plástico, por exemplo. Avalia o desempenho de equipamentos e processos, interpreta fluxogramas de processos, aplica formulação química de polímeros, tintas e vernizes e desenvolve métodos de análises laboratoriais para caracterização dos materiais poliméricos, além de processos de modelagem. O monitoramento da qualidade e dos processos de reciclagem envolvidos; a identificação e acompanhamento das variáveis relevantes, inclusive as referentes ao meio ambiente, são também funções desse profissional.</p>')
        } else if (descricaoCurso == 'Processos Metalúrgicos') {
            myWindow.document.write("<p>O tecnólogo em Processos Metalúrgicos utiliza os fenômenos envolvidos em processos como: tratamentos térmicos, fundição, siderurgia, laminação, forjamento de metais, sinterização e tratamentos de superfície .São atividades inerentes aos egressos deste Curso o planejamento, gestão, controle dos processos e comercialização dos produtos metalúrgicos, através da seleção, dimensionamento de equipamentos e métodos de fabricação. Incluem-se as atividades de laboratórios de ensaios mecânicos e de ensaios metalográficos, com o domínio da interrelação entre microestrutura, propriedades e aplicações dos produtos metálicos. Este profissional possui competências de gestão ambiental, de pessoas e processos industriais. Pode atuar em diversas empresas do ramo metal-mecânico e ainda no ensino superior.</p>")
        } else if (descricaoCurso == 'Projetos Mecânicos') {
            myWindow.document.write("<p>O tecnólogo em Projetos Mecânicos está habilitado a realizar projetos, com detalhamento técnico de sistemas mecânicos que envolvam máquinas, motores, instalações mecânicas e termo-mecânicas. Tem conhecimento de todos os materiais usuais em construção mecânica e suas aplicações práticas. Está capacitado a atuar na área de organização industrial mecânica, tanto para processos como para produtos industriais. Domina a técnica do projeto de dispositivos e ferramentas de produção mecânica. Pode dedicar-se ao ensino, à pesquisa tecnológica, bem como realizar vistoria, avaliação e laudo técnico, em seu campo profissional.</p>")
        } else {
            myWindow.document.write("<p>O tecnólogo em Sistemas Biomédicos é responsável por planejar, gerenciar, implantar e manter equipamentos clínicos e médico-hospitalares. Supervisiona e coordena equipes de manutenção e otimização do uso de equipamentos eletro-médicos. Assessora a aquisição, executa a instalação, capacita usuários de equipamentos e sistemas biomédicos, além de participar de equipes de pesquisa aplicada. Responsável também pela implantação e controle das normas de segurança dos equipamentosnos serviços de saúde, pode atuar em hospitais, policlínicas, laboratórios, fabricantes e distribuidoras de equipamentos hospitalares.</p>")
        }
    } else {
        alert("Selecione alguma opção de curso!");
        document.getElementById('cursos').value = "Escolha um Curso";
    }
}
