export function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
export const span = document.querySelector(".color");
export const changeColorBtn = document.querySelector(".change-color");
export const body = document.querySelector("body");
export const changeColorOnClick = () => {
  const getRandomHex = getRandomHexColor();
  body.style.backgroundColor = getRandomHex;
  span.textContent = getRandomHex;
};


  
  
  