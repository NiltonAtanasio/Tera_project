function validarFormulario() {
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;
  var confirmarSenha = document.getElementById("confirmar-senha").value;

  if (nome.trim() === "") {
    alert("Por favor, preencha o campo Nome.");
    return false;
  }

  if (email.trim() === "") {
    alert("Por favor, preencha o campo Email.");
    return false;
  }

  if (senha.trim() === "") {
    alert("Por favor, preencha o campo Senha.");
    return false;
  }

  if (confirmarSenha.trim() === "") {
    alert("Por favor, preencha o campo Confirmar Senha.");
    return false;
  }

  if (senha !== confirmarSenha) {
    alert("As senhas não coincidem.");
    return false;
  }
  
  alert("Cadastro realizado com sucesso");
  return true;
}
