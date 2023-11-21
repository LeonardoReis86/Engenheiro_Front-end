// Garante que o código JavaScript dentro da função só será executado após o carregamento completo do documento HTML. 
$(document).ready(function() {
      // Adicionar tarefa
   
      // Captura o evento de submissão do formulário com id task-form
   $("#task-form").submit(function(e) {
      e.preventDefault();
   
      // Captura o valor do input
      const taskText = $("#task-input").val();
   
      //Verifica se não está vazio
      if(taskText.trim() !== "") {
         const newTask = $(`
         <div class="task">
            <h3>${taskText}</h3>
            <button class="finish-task"><i class="fa-solid fa-check"></i></button>
            <button class="edit-task"><i class="fa-solid fa-pen"></i></button>
            <button class="remove-task"><i class="fa-solid fa-xmark"></i></button>
         </div>
      `);
         $("#task-list").append(newTask);
         // limpar input
         $("#task-input").val("");
      }
   })

//Remover Tarefa
   $('#task-list').on('click', '.remove-task', function() {
      $(this).parent('.task').remove();
   });

// Editar tarefa
   $('#task-list').on('click', '.edit-task', function() {
      const task = $(this).siblings('h3');
      const newText = prompt('Editar tarefa', task.text());
      if (newText !== null) {
         task.text(newText);
      }
   });

// Marcar como concluída/não concluída
   $('#task-list').on('click', '.finish-task', function() {
      $(this).parent('.task').toggleClass('done');
   });
});