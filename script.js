// Funções de scroll para seções
function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

function scrollToServices() {
  document.getElementById("services").scrollIntoView({ behavior: "smooth" });
}

// Botões "Solicitar Proposta"
document.querySelectorAll(".btn-solicitar").forEach(button => {
  button.addEventListener("click", function () {
    const template = this.getAttribute("data-template");
    sessionStorage.setItem("mensagemTemplate", template);
    window.location.href = "index.html#contact";
  });
});

// Preencher textarea com template salvo
document.addEventListener("DOMContentLoaded", function () {
  const textarea = document.querySelector("#contact textarea, #contact form textarea");
  const msg = sessionStorage.getItem("mensagemTemplate");
  if (textarea && msg) {
    textarea.value = msg;
    sessionStorage.removeItem("mensagemTemplate");
  }
});

// Formulário multi-step
document.addEventListener("DOMContentLoaded", function () {

  const steps = document.querySelectorAll(".form-step");
  let currentStep = 0;

  function showStep(index) {
    steps.forEach((step, i) => {
      step.classList.toggle("active", i === index);
    });
    // Scroll para o topo
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  showStep(currentStep);

  // Botões "Continuar"
  document.querySelectorAll(".next").forEach(btn => {
    btn.addEventListener("click", () => {
      const currentStepEl = steps[currentStep];

      // Campos obrigatórios
      const requiredFields = currentStepEl.querySelectorAll('input[required], textarea[required], select[required]');
      let allFilled = true;

      requiredFields.forEach(field => {
        if (field.type === "checkbox") {
          if (!field.checked) {
            allFilled = false;
            field.style.outline = "2px solid red";
          } else {
            field.style.outline = "none";
          }
        } else if (field.type === "radio") {
          const groupName = field.name;
          const checked = currentStepEl.querySelector(`input[name="${groupName}"]:checked`);
          if (!checked) {
            allFilled = false;
            currentStepEl.querySelectorAll(`input[name="${groupName}"]`).forEach(r => r.style.outline = "2px solid red");
          } else {
            currentStepEl.querySelectorAll(`input[name="${groupName}"]`).forEach(r => r.style.outline = "none");
          }
        } else {
          if (!field.value.trim()) {
            allFilled = false;
            field.style.borderColor = "red";
          } else {
            field.style.borderColor = "#ddd";
          }
        }
      });

      if (allFilled) {
        if (currentStep < steps.length - 1) {
          currentStep++;
          showStep(currentStep);
        }
      } else {
        alert("Preencha todos os campos obrigatórios antes de continuar.");
      }
    });
  });

  // Botões "Voltar"
  document.querySelectorAll(".prev").forEach(btn => {
    btn.addEventListener("click", () => {
      if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
      }
    });
  });

});
