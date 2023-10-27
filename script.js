document.addEventListener("DOMContentLoaded", () => {
   const form = document.getElementById("form-validate");

   form.addEventListener("submit", (e) => {
      e.preventDefault();

      const campoA = document.getElementById("campoA").value;
      const campoB = document.getElementById("campoB").value;

      if (campoA < campoB) {
         alert("Formulário válido: B é maior que A");
      } else {
         alert("Formulário inválido: B não é maior que A");
      }
   });
});
