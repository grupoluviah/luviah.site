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

