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


document.addEventListener("DOMContentLoaded", function () {

  const steps = document.querySelectorAll(".form-step");
  let currentStep = 0;

  function showStep(index) {
    steps.forEach((step, i) => {
      step.classList.toggle("active", i === index);
    });
  }

  document.querySelectorAll(".next").forEach(btn => {
    btn.addEventListener("click", () => {
      if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
      }
    });
  });

  document.querySelectorAll(".prev").forEach(btn => {
    btn.addEventListener("click", () => {
      if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
      }
    });
  });

  showStep(currentStep);
});

document.addEventListener("DOMContentLoaded", function () {

  const steps = document.querySelectorAll(".form-step");
  let currentStep = 0;

  function showStep(index) {
    steps.forEach((step, i) => {
      step.classList.toggle("active", i === index);
    });

    /* SCROLL PARA O TOPO DA PÁGINA */
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  document.querySelectorAll(".next").forEach(btn => {
    btn.addEventListener("click", () => {
      if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
      }
    });
  });

  document.querySelectorAll(".prev").forEach(btn => {
    btn.addEventListener("click", () => {
      if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
      }
    });
  });

  showStep(currentStep);
});
