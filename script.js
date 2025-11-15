function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

function scrollToServices() {
  document.getElementById("services").scrollIntoView({ behavior: "smooth" });
}


const form = document.getElementById("contactForm");
const status = document.createElement("p");
status.style.textAlign = "center";
status.style.marginTop = "10px";
form.appendChild(status);

form.addEventListener("submit", function(e) {
  e.preventDefault();

  // Validação básica
  if (!form.from_name.value || !form.from_email.value || !form.message.value) {
    status.textContent = "Por favor, preencha todos os campos.";
    status.style.color = "red";
    return;
  }

  const btn = form.querySelector("button");
  btn.disabled = true;
  btn.innerText = "Enviando...";

  const serviceID = "service_1kk64ud";
  const templateID = "template_ckm1j2w";
  const apiKey = "c6Cvcehu-lsPl-1yLPown";

  const formData = {
    from_name: form.from_name.value,
    from_email: form.from_email.value,
    message: form.message.value
  };

  emailjs.send(serviceID, templateID, formData, apiKey)
    .then(() => {
      status.textContent = "Mensagem enviada com sucesso!";
      status.style.color = "green";
      form.reset();
      btn.disabled = false;
      btn.innerText = "Enviar Mensagem";
    })
    .catch((error) => {
      status.textContent = "Erro ao enviar a mensagem. Tente novamente.";
      status.style.color = "red";
      btn.disabled = false;
      btn.innerText = "Enviar Mensagem";
      console.error(error);
    });
});
