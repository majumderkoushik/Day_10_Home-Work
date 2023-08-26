let Color = [
    "green",
    "cyan",
    "black",
    "voilet",
    "blue",
    "yellow",
    "purple",
    "orange",
    "lightgreen",
    "lemon",
  ];
  let index = 0 ;
  let div = document.querySelector("div");
  const button = document.querySelector("button");
  button.addEventListener("click", function() {
      if (index === Color.length) {
          index = 0;
    }
          div.style.backgroundColor = Color[index];
          index++;
  });