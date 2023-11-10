const form = document.getElementById('form-input');

//Para remoção do evento de atualizar a página
form.addEventListener('submit', function(e) {
   e.preventDefault();

   const inputNomeAtividade = document.getElementById('atividade');
   const inputNotaAtividade = document.getElementById('nota');
   

   //criação de linha na tabela
   let linha = '<tr>';
   linha += `<td>${inputNomeAtividade.value}</td>`;
   linha += `<td>${inputNotaAtividade.value}</td>`;
   linha += `<td>${inputNotaAtividade.value >= 7 ? 'Aprovado' : 'Reprovado'}</td>`;
   linha += '</tr>';

   //recuperar o corpo da tabela
   const corpoTabela = document.querySelector('tbody');

   // inserir um conteúdo dentro de uma tag
   corpoTabela.innerHTML = linha;


   

});