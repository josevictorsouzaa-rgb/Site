import React from 'react';

const TermosDeUso: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Termos de Uso</h1>
      <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 leading-relaxed">
        <p className="mb-4">Bem-vindo à Lubel Auto Peças. Ao acessar e usar este site, você concorda com os seguintes termos e condições.</p>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">1. Aceitação dos Termos</h3>
        <p className="mb-4">Ao acessar este site, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site.</p>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">2. Uso de Licença</h3>
        <p className="mb-4">É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Lubel Auto Peças, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>modificar ou copiar os materiais;</li>
          <li>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
          <li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Lubel Auto Peças;</li>
          <li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
          <li>transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">3. Isenção de responsabilidade</h3>
        <p className="mb-4">Os materiais no site da Lubel Auto Peças são fornecidos 'como estão'. A Lubel Auto Peças não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.</p>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">4. Limitações</h3>
        <p className="mb-4">Em nenhum caso a Lubel Auto Peças ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Lubel Auto Peças, mesmo que a Lubel Auto Peças ou um representante autorizado da Lubel Auto Peças tenha sido notificado oralmente ou por escrito da possibilidade de tais danos.</p>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">5. Precisão dos materiais</h3>
        <p className="mb-4">Os materiais exibidos no site da Lubel Auto Peças podem incluir erros técnicos, tipográficos ou fotográficos. A Lubel Auto Peças não garante que qualquer material em seu site seja preciso, completo ou atual. A Lubel Auto Peças pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio.</p>

        <p className="mt-12 text-sm text-gray-500 border-t border-gray-200 dark:border-gray-700 pt-4">Última atualização: Outubro de 2024.</p>
      </div>
    </div>
  );
};

export default TermosDeUso;