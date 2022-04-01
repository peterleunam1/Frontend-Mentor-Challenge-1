ide = document.getElementById("id");
info = document.getElementById("info");
btn = document.getElementById("buttom");

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

btn.addEventListener("click", () => {
  cargarData();
});

const cargarData = async () => {
  try {
    const response = await fetch(
      `https://api.adviceslip.com/advice/${random(1, 224)}`
    );
    console.log(response);
    if (response.status === 200) {
      const data = await response.json();
      const advice = data.slip.advice;
      const id = data.slip.id;

      ide.innerHTML = `${id}`;
      info.innerHTML = `"${advice}"`;
    } else {
      console.log("Hubo un error");
    }
  } catch (error) {
    console.log(error);
  }
};
cargarData();
