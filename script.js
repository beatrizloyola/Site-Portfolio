const saudacao = document.getElementById("saudacao");
    const hora = new Date().getHours();
    let mensagem = "";

    if (hora >= 5 && hora < 12) {
        mensagem = "Bom dia!";
    } else if (hora >= 12 && hora < 18) {
        mensagem = "Boa tarde!";
    } else {
        mensagem = "Boa noite!";
    }

    saudacao.textContent = mensagem;