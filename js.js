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
    let hexBackgroundColor = "";
    let hexButtonColor = "";
  
    // Generate a random hex color code for the background
    for (let i = 0; i < 6; i++) {
      let randomIndex = Math.floor(Math.random() * hexNumbers.length);
      hexBackgroundColor += hexNumbers[randomIndex];
    }
  
    // Generate a separate random hex color code for the button
    for (let i = 0; i < 6; i++) {
      let randomIndex = Math.floor(Math.random() * hexNumbers.length);
      hexButtonColor += hexNumbers[randomIndex];
    }
    document.body.style.backgroundColor = "#" + hexBackgroundColor;

    // Set the button color
    btn.style.backgroundColor = "#" + hexButtonColor;
    btn.style.color = 'white';
  }
  

  document.getElementById("btn").addEventListener("click", changeColor);



  
