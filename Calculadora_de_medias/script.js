const form = document.getElementById('form-input');
const imgAprovado = '<img src=./assets/images/feliz.png alt=Emoji feliz>';
const imgReprovado = '<img src=./assets/images/triste.png alt=Emoji triste> ';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota mínima"));

let linhas = '';

form.addEventListener('submit', function(e) {
   e.preventDefault();

   adicionaLinha();
   atualizaTabela();
   atualizaMediaFinal();
   
   function adicionaLinha() {
   const inputNomeAtividade = document.getElementById('atividade');
   const inputNotaAtividade = document.getElementById('nota');

   if(atividades.includes(inputNomeAtividade.value)) {
      alert(`Atividade ${inputNomeAtividade.value} já foi inserida`);
   } else {
      atividades.push(inputNomeAtividade.value);
   notas.push(parseFloat(inputNotaAtividade.value));   

   let linha = '<tr>';
   linha += `<td>${inputNomeAtividade.value}</td>`;
   linha += `<td>${inputNotaAtividade.value}</td>`;
   linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
   linha += '</tr>';

   linhas +=linha;
   }

   inputNomeAtividade.value ='';
   inputNotaAtividade.value = '';
   }
});

function atualizaTabela() {
   const corpoTabela = document.querySelector('tbody');
   corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
   const mediaFinal = calculaMediaFinal();
   
   document.getElementById('media-final-valor').innerHTML = mediaFinal;
   document.getElementById('media-final-resultado').innerHTML = mediaFinal >=notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
   let somaNotas = 0;

   for(let i = 0; i < notas.length; i++) {
      somaNotas += notas[i];
   }
   return somaNotas / notas.length;
}