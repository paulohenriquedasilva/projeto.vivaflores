window.addEventListener('load', function() {
    var submitButton = document.querySelector('#submitButton');
    var answerInput = document.querySelector('#answerInput');
    var resultContainer = document.querySelector('#resultContainer');
    var resultText = document.querySelector('#resultText');
    var historyList = document.querySelector('#historyList');
  
    submitButton.addEventListener('click', function() {
      var userAnswer = answerInput.value;
      var systemResponse = getSystemResponse(userAnswer);
      resultText.textContent = 'Jarrinho: ' + systemResponse;
      resultContainer.style.display = 'block';
      addToHistory(userAnswer, systemResponse);
      answerInput.value = '';
    });
  
    function getSystemResponse(userAnswer) {
      if (userAnswer === 'Olá' || 'olá' || 'Ola' || 'ola' || 'oi' || 'Oi') {
        return'Olá, me chamo Jarrinho! Em que posso ajudar ?\n Opção 1: Informações sobre produtos\n Opção 2: Informações sobre cuidados com as plantas\n Opção 3: Perguntas sobre entregas e pedidos\n Opção 4: Assistência para problemas ou reclamações\n Opção 5: Informações sobre promoções e descontos\n Opção 6: Pagamento';
        if (userAnswer === '2') 
      } else if (userAnswer === '2') {
        return 'Você escolheu a Opção 2. Aguarde enquanto o sistema realiza as configurações.';
      } else if (userAnswer === 'Opção 3') {
        return 'A Opção 3 foi selecionada. O sistema está pronto para uso.';
      } else {
        if (userAnswer === '') {
          return 'Por favor, digite uma resposta.';
        } else {
          return 'Desculpe, não reconheço essa resposta. Por favor, tente novamente.';
        }
      }
    }
  
    function addToHistory(userAnswer, systemResponse) {
      var listItem = document.createElement('li');
      listItem.textContent = 'Usuário: ' + userAnswer + ' - Jarrinho: ' + systemResponse;
      historyList.appendChild(listItem);
    }
  });
  