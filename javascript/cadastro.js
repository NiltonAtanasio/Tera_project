function validarFormulario() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var confirmarSenha = document.getElementById("confirmar-senha").value;

    if (nome === "") {
      alert("Por favor, preencha o campo nome.");
      return false;
    }

    if (email === "") {
      alert("Por favor, preencha o campo email.");
      return false;
    }

    if (senha === "") {
      alert("Por favor, preencha o campo senha.");
      return false;
    }

    if (confirmarSenha === "") {
      alert("Por favor, preencha o campo confirmar senha.");
      return false;
    }

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem.");
      return false;
    }

    alert("Formulário enviado com sucesso!");
    return true;
  }