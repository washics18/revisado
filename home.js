let valorInicial = 10;

const $second = document.querySelector(".-second");

$second.addEventListener("click", handleClick);

function handleClick() {
  const $carrinho = document.querySelector(".-last");

  valorInicial += 1;

  $carrinho.textContent = `Carrinho (${valorInicial})`;
}

const printName = (name, email) => {
  console.log(name);
  console.log(email);
};

printName("washi", "washics18@hotmail.com");
