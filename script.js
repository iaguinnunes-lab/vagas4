const URL_PLANILHA = "https://script.google.com/macros/s/AKfycbyKDHwDiY0n13R8ZKpO9tX2NNK0rHppBHIzQVVIbPGCDS2H_N_cYD6-0VVYp3jBoUIq/exec";

const form = document.getElementById("formulario")
const aviso = document.getElementById("aviso")

form.addEventListener("submit", function(evento){
    evento.preventDefault()
    aviso.textContent = "Enviando..."


    fetch(URL_PLANILHA,{
        method: "POST",
        mode: "no-cors",
        body: new FormData(form)
    })
        .then(function () {
      aviso.textContent = "Enviado com sucesso!";
      form.reset(); // limpa os campos
    })
    .catch(function () {
      aviso.textContent = "Erro ao enviar. Tente de novo.";
    });
});



