$(document).ready(function() {
   $("#carousel-of-images").slick({
      autoplay: true,
   });

   $(".menu-hamburguer").click(function() {
      $("nav").slideToggle();
   })
   
   $("#phone").mask("(00) 00000-0000", {
      placeholder: "(DD) 99999-999"
   })

   $("form").validate({
      rules: {
         name:{
            required: true
         },
         email:{
            required: true,
            email: true
         },
         phone:{
            required: true
         },
         message: {
            required: true
         },
         vehicleOfInterest: {
            required: false
         }
      },
      messages: {
            name: "Por favor, insira o seu nome"
      },
      submitHandler: function(form) {
         console.log(form)
      },
      invalidHandler: function(evento, validator) {
         let incorrectFields = validator.numberOfInvalids();
         if (incorrectFields) {
            alert(`Existem ${incorrectFields} campos incorretos`);
         }
      }
   })

   $(".car-list button").click(function() {
      const destination = $("#contact");

      const carName = ($(this).parent().find("h3").text());

      $("#vehicle-of-interest").val(carName);

      $("html").animate({
         scrollTop: destination.offset().top
      },1000);
   })
})

