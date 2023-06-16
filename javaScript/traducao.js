function idiomas() {
    new google.translate.TranslateElement({pageLanguage: 'pt-br'}, 'traduzir');
     translateElement.translate('en');
  }

  document.getElementById('traduzir').addEventListener('click', function() {
    idiomas();
  });

