const tipografias = [
  "'Helvetica Neue', Helvetica, Arial, sans-serif",
  "'DIN 1451 Engschrift', 'Arial Narrow', sans-serif",
  "'Outfit', sans-serif",
  "'Source Sans 3', sans-serif",
  "'Jost', sans-serif",
  "'Roboto', sans-serif",
  "'Montserrat', sans-serif",
  "'Univers', 'Arial', sans-serif",
  "'Trajan Pro', 'Times New Roman', serif",
  "'Bebas Neue', sans-serif",
];

const total = tipografias.length;
let num = 0;
const muestra = document.querySelector(".trelewciudad1");

function aplicarTipografia() {
  muestra.style.fontFamily = tipografias[num];
  document.getElementById("slide").innerText = num + 1;
}

document.getElementById("adelante").onclick = () => {
  if (num < total - 1) {
    num++;
    aplicarTipografia();
  }
};

document.getElementById("atras").onclick = () => {
  if (num > 0) {
    num--;
    aplicarTipografia();
  }
};

aplicarTipografia();