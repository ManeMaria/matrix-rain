let c = document.getElementById("matrix");
let context = c.getContext("2d");

c.height = window.innerHeight;
c.width = window.innerWidth;
const fontSize = 18;
// definindo quantas colunas serão necessárias pelo tamanho da tela e fonte
const columns = c.width / fontSize;
const drops = new Array(Math.floor(columns)).fill(1);
const letters = [
  "日",
  "ﾊ",
  "ﾐ",
  "ﾋ",
  "ｰ",
  "ｳ",
  "ｼ",
  "ﾅ",
  "ﾓ",
  "ﾆ",
  "ｻ",
  "ﾜ",
  "ﾂ",
  "ｵ",
  "ﾘ",
  "ｱ",
  "ﾎ",
  "ﾃ",
  "ﾏ",
  "ｹ",
  "ﾒ",
  "ｴ",
  "ｶ",
  "ｷ",
  "ﾑ",
  "ﾕ",
  "ﾗ",
  "ｾ",
  "ﾈ",
  "ｽ",
  "ﾀ",
  "ﾇ",
  "ﾍ",
  ":",
  "・",
  ".",
  "=",
  "*",
  "+",
  "-",
  "<",
  ">",
  "¦",
  "｜",
  "ﾘ",
];
function draw() {
  context.fillStyle = "rgba(0, 0, 0, 0.05)";
  context.fillRect(0, 0, c.width, c.height);

  context.fillStyle = "#0F0";

  context.font = `${fontSize}px arial`;

  // criando um array para cada gota, sempre iniciando na posição do y=1

  for (let i = 0; i < drops.length; i++) {
    // pegando uma letra randomicamente no nosso array
    const text = letters[Math.floor(Math.random() * letters.length)];
    // escrevendo na tela
    context.fillText(text, i * fontSize, drops[i] * fontSize);
    
    if (drops[i] * fontSize > c.height && Math.random() > 0.95) {
      drops[i] = 0;
    }

    drops[i]++;
  }

  window.requestAnimationFrame(draw);
}
document.addEventListener("DOMContentLoaded", draw);
