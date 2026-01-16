import React from 'react';

const PoliticaDePrivacidade: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Política de Privacidade</h1>
      <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 leading-relaxed">
        <p className="mb-4">A sua privacidade é importante para nós. É política da Lubel Auto Peças respeitar a sua privacidade em relação a qualquer informação que possamos coletar no site Lubel Auto Peças, e outros sites que possuímos e operamos.</p>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Coleta de Informações</h3>
        <p className="mb-4">Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.</p>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Uso de Informações</h3>
        <p className="mb-4">Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</p>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Compartilhamento de Dados</h3>
        <p className="mb-4">Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.</p>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Links para Sites Externos</h3>
        <p className="mb-4">O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.</p>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Cookies</h3>
        <p className="mb-4">O nosso site usa cookies para melhorar a experiência do usuário. Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.</p>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Compromisso do Usuário</h3>
        <p className="mb-4">O usuário se compromete a fazer uso adequado dos conteúdos e da informação que a Lubel Auto Peças oferece no site e com caráter enunciativo, mas não limitativo:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</li>
          <li>B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</li>
          <li>C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) da Lubel Auto Peças, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.</li>
        </ul>
        
        <p className="mt-12 text-sm text-gray-500 border-t border-gray-200 dark:border-gray-700 pt-4">Última atualização: Outubro de 2024.</p>
      </div>
    </div>
  );
};

export default PoliticaDePrivacidade;