function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

function scrollToServices() {
  document.getElementById("services").scrollIntoView({ behavior: "smooth" });
}

// Quando clicar em um botão de solicitar proposta
document.querySelectorAll(".btn-solicitar").forEach(button => {
    button.addEventListener("click", function () {
        const template = this.getAttribute("data-template");

        // Salva temporariamente o texto para usar no index
        sessionStorage.setItem("mensagemTemplate", template);

        // Redireciona para o index e para a section #contact
        window.location.href = "index.html#contact";
    });
});

// Quando a página carregar, verifica se existe template salvo
document.addEventListener("DOMContentLoaded", function () {
    const textarea = document.querySelector("#contact textarea, #contact form textarea");

    const msg = sessionStorage.getItem("mensagemTemplate");

    if (textarea && msg) {
        textarea.value = msg;
        sessionStorage.removeItem("mensagemTemplate");
    }
});


