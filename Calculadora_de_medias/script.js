const form = document.getElementById('form-input');
const imgAprovado = '<img src=./assets/images/feliz.png alt=Emoji feliz>';
const imgReprovado = '<img src=./assets/images/triste.png alt=Emoji triste> ';

let linhas = '';
//Para remoção do evento de atualizar a página
form.addEventListener('submit', function(e) {
   e.preventDefault();

   const inputNomeAtividade = document.getElementById('atividade');
   const inputNotaAtividade = document.getElementById('nota');

   //criação de linha na tabela
   let linha = '<tr>';
   linha += `<td>${inputNomeAtividade.value}</td>`;
   linha += `<td>${inputNotaAtividade.value}</td>`;
   linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`;
   linha += '</tr>';

   linhas +=linha;

   //recuperar o corpo da tabela
   const corpoTabela = document.querySelector('tbody');

   // inserir um conteúdo dentro de uma tag
   corpoTabela.innerHTML = linhas;
   
   //limpar o campo depois de adicionar um conteúdo
   inputNomeAtividade.value ='';
   inputNotaAtividade.value = '';


});