document.getElementById("askButton").addEventListener("click", function () {
  let userNumber = document.getElementById("userNumber").value;
  let responseElement = document.getElementById("response");
  let ball = document.getElementById("ball");
  let ballNumber = document.getElementById("ballNumber");

  // Show the ball and apply the shake animation
  ball.style.display = "flex"; // Make the ball visible
  ball.classList.add("shake"); // Trigger the shaking animation

  // Remove the animation class after it ends so it can be triggered again
  ball.addEventListener("animationend", function () {
    ball.classList.remove("shake");
  });

  // Check if input is a valid number between 1 and 8
  if (userNumber >= 1 && userNumber <= 8) {
    let magicBallResponse = parseInt(userNumber); // Parse input as integer
    let response = "";

    // Display the number inside the ball
    ballNumber.textContent = userNumber;

    switch (magicBallResponse) {
      case 1:
        response = "It is certain.";
        break;
      case 2:
        response = "It is decidedly so.";
        break;
      case 3:
        response = "Without a doubt.";
        break;
      case 4:
        response = "Yes - definitely.";
        break;
      case 5:
        response = "You may rely on it.";
        break;
      case 6:
        response = "Reply hazy, try again.";
        break;
      case 7:
        response = "Ask again later";
        break;
      case 8:
        response = "Outlook not so good";
        break;
      default:
        response = "NO INPUT!";
        break;
    }
    responseElement.textContent = "Your answer: " + response;
  } else {
    responseElement.textContent =
      "Please enter a valid number between 1 and 8.";
    ballNumber.textContent = ""; // Clear the number
  }
  // Reset the input field after displaying the response
  document.getElementById("userNumber").value = "";
});