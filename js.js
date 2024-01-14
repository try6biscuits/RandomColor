let hexNumbers = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  function changeColor() {
    let hexColorCode = "";
    for (let i = 0; i < 6; i++) {
      let randomIndex = Math.floor(Math.random() * hexNumbers.length);
      hexColorCode += hexNumbers[randomIndex];
    }
    document.body.style.backgroundColor = "#" + hexColorCode;
    btn.addEventListener('click', function onClick() {
      btn.style.backgroundColor = "#" + hexColorCode;;
      btn.style.color = 'white';
    });
  }

  document.getElementById("btn").addEventListener("click", changeColor);
  const btn = document.getElementById('btn');


  
