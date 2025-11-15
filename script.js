  // Scroll suave
  function scrollToContact() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  }

  function scrollToServices() {
    document.getElementById("services").scrollIntoView({ behavior: "smooth" });
  }

emailjs.init("G5DWAaI7Lndmxn65L");

document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
  }

  const serviceID = "service_nrfr48i"
  const templateID = "template_ckm1j2w"
  const submitButton = document.getElementById("submit_button")
  submitButton.textContent = "Enviando..."
  submitButton.disable = true;

  emailjs.send(serviceID,templateID, formData)
    .then(() => {
      Toastify({
        text: "Mensagem enviada com sucesso!",
        duration: 3000,
        style: {
          background: "#28a745",
          color: "#f4f4f4"
        }
        }).showToast();

        document.getElementById("contactForm").reset();
    })
    .catch((error) => {
      Toastify({
        text: "Erro ao enviar e-mail",
        duration: 3000,
        style: {
          background: "#dc3545",
          color: "#f4f4f4"
        }
        }).showToast();

    })
    .finally(() => {
      submitButton.textContent = "Enviar mensagem";
      submitButton.disable = false;
    })



})