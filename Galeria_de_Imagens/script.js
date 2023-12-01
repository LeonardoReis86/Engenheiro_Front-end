$(document).ready(function() {
   $('header button').click(function() {
      $('form').slideDown();
   })

   $('#btn-cancel').click(function() {
      $('form').slideUp();
   })

   $('form').on('submit', function(e) {
      e.preventDefault();
      const adressNewImage = $('#adress-new-image').val();
      const newItem = $('<li style="display:none"></li>');
      $(`<img src='${adressNewImage}'/>`).appendTo(newItem);
      $(`
      <div class='overlay-img-link'>
         <a href="${adressNewImage}"target="_blank" title="Ver imagem em tamanho real">Ver imagem em tamanho real
         </a>
      </div>
      `).appendTo(newItem);
      $(newItem).appendTo('ul');
      $(newItem).fadeIn(1000);
      $('#adress-new-image').val('');
      
   });
});