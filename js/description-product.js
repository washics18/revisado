/*
1 Ter a janela (browser) na mão
2 Ter o HTML na mão
3 Pegar o coração
4 Pegar clique no coração
5 No momento que o usuário clicar, nos queremos mostrar um texto AE
*/

const $heart = window.document.querySelector(".-heart");

$heart.addEventListener("click", handleClick);

function handleClick() {
  //if($heart.classList.contains("-active")); {
  //  $heart.classList.remove("-active");
  //} else {
  //  $heart.classList.add("-active");

  $heart.classList.toggle("-active");
}
