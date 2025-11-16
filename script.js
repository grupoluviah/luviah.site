document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const status = document.getElementById("status");

    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        const data = {
            nome: document.getElementById("nome").value,
            email: document.getElementById("email").value,
            telefone: document.getElementById("telefone").value,
            mensagem: document.getElementById("mensagem").value
        };

        status.textContent = "Enviando...";

        try {
            const response = await fetch("https://dry-violet-f7.luviah.workers.dev", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (result.id) {
                status.textContent = "Mensagem enviada com sucesso!";
                form.reset();
            } else {
                status.textContent = "Houve um erro ao enviar sua mensagem.";
            }
        } catch (err) {
            status.textContent = "Erro de conexão. Tente novamente.";
        }
    });
});


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

