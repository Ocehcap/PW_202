document.addEventListener('DOMContentLoaded', function() {
    // Obtém o elemento do botão "+" da classe "left"
    var leftButton = document.querySelector('.left button.btn-custom');

    // Adiciona um ouvinte de evento de clique ao botão
    leftButton.addEventListener('click', function() {
        // Obtém o modal de características pelo seu ID
        var modal = document.getElementById('caractModal');

        // Abre o modal usando o método 'modal' do Bootstrap
        var bootstrapModal = new bootstrap.Modal(modal);
        bootstrapModal.show();
    });
});

  
  
  
  