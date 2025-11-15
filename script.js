function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

function scrollToServices() {
  document.getElementById("services").scrollIntoView({ behavior: "smooth" });
}

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const btn = form.querySelector(".btn");
  btn.disabled = true;
  btn.innerHTML = "Enviando...";

  emailjs.sendForm('service_1kk64ud', 'template_ckm1j2w', this)
    .then(() => {
      alert("Mensagem enviada com sucesso!");
      form.reset();
    }, (err) => {
      alert("Erro ao enviar, tente novamente.");
      console.error(err);
    })
    .finally(() => {
      btn.disabled = false;
      btn.innerHTML = `Enviar Mensagem <i data-lucide="send"></i>`;
      lucide.createIcons();
    });
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const btn = form.querySelector(".btn");
  btn.disabled = true;
  btn.innerHTML = "Enviando...";

  const templateParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value
  };

  emailjs.send("service_1kk64ud", "template_ckm1j2w", templateParams)
    .then(() => {
      alert("Mensagem enviada com sucesso!");
      form.reset();
      btn.disabled = false;
      btn.innerHTML = `Enviar Mensagem <i data-lucide="send"></i>`;
      lucide.createIcons();
    }, (error) => {
      alert("Erro ao enviar mensagem: " + JSON.stringify(error));
      btn.disabled = false;
      btn.innerHTML = `Enviar Mensagem <i data-lucide="send"></i>`;
    });
});

