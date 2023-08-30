// Declarando variáveis
const copy = document.querySelector(".email-copy-ico");
const copyDiv = document.querySelector(".copy-mail");
const copyIMG = document.querySelector(".imgcopy");
const txtCopiar = document.querySelector(".txt-copiar");
const email = document.querySelector("#email-text");
console.log(email.innerHTML);

// Copiar
function copiarTexto(texto) {
  navigator.clipboard
    .writeText(texto)
    .then(() => {
      console.log("Texto copiado com sucesso!");
    })
    .catch((err) => {
      console.error("Erro ao copiar o texto: ", err);
    });
}
copy.addEventListener("click", () => {
  if (
    txtCopiar.innerHTML != " Copiar email" &&
    txtCopiar.innerHTML != " Copiado!"
  ) {
    copy.style.pointerEvents = "none";
    copyIMG.src = "check.svg";
    txtCopiar.innerHTML = " Copied!";
    copiarTexto(email.innerHTML);

    setTimeout(() => {
      copyIMG.src = "clipboard.svg";
      txtCopiar.innerHTML = " Copy email";
      copy.style.pointerEvents = "auto";
    }, 1500);
  } else {
    copy.style.pointerEvents = "none";
    copyIMG.src = "check.svg";
    txtCopiar.innerHTML = " Copiado!";
    copiarTexto(email.innerHTML);

    setTimeout(() => {
      copyIMG.src = "clipboard.svg";
      txtCopiar.innerHTML = " Copiar email";
      copy.style.pointerEvents = "auto";
    }, 1500);
  }
});

// FelipeFMedeiros
