$(document).ready(function(){

   //Máscara dos inputs
   
   $('#phone').mask('(00) 00000-0000', {
      placeholder: '(DDD) 99999-9999',
   });
   $('#cpf').mask('000.000.000-00', {
      reverse: true,
      placeholder: 'Digite os números de seu CPF',
   });
   $('#cep').mask('00000-000', {
      placeholder: '12345-678',
   });

   //Validação dos campos
   $('form').validate({
      rules: {
         name: {
            required: true,
            minlength: 3
         },
         email: {
            required: true,
            email: true
         },
         phone: {
            required: true
         },
         cpf: {
            required: true
         },
         cep: {
            required: true
         },
         adress: {
            required: true
         }
      },
      messages: {
         name: 'Por favor, digite o seu nome completo',
         phone: 'Por favor, digite seu telefone',
         email: 'Por favor, digite seu email',
         cpf: 'Por favor digite o seu CPF',
         cep: 'Por favor digite o seu CEP'
      },
      submitHandler: function(form) {
         console.log(form)
         $('#name').val('');
         $('#email').val('');
         $('#phone').val('');
         $('#cpf').val('');
         $('#cep').val('');
         $('#adress').val('');
      }
   });
});