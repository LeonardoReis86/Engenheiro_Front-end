const form = document.getElementById('form-input');

//Para remoção do evento de atualizar a página
form.addEventListener('submit', function(e) {
   e.preventDefault();

   const inputNomeAtividade = document.getElementById('atividade');
   const inputNotaAtividade = document.getElementById('nota');
   
   alert(`Atividade: ${inputNomeAtividade.value} - Nota: ${inputNotaAtividade.value}`);

})