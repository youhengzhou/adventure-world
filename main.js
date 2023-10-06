async function view(info) {
  function getUserInput() {
    return document.getElementById("userInput").value;
  }

  function updateView(info) {
    document.getElementById("userInput").value = "";
    document.getElementById("display").innerHTML = info;
  }

  function waitForButtonClick() {
    return new Promise(function (resolve) {
      const button = document.getElementById("userInputButton");
      const input = document.getElementById("userInput");

      let isClicking = false;

      const clickHandler = function () {
        isClicking = true;
        resolve();
      };

      const keyHandler = function (event) {
        if (event.key === "Enter" && !isClicking) {
          isClicking = true;
          button.click();
          resolve();
        }
      };

      button.addEventListener("click", clickHandler);
      input.addEventListener("keydown", keyHandler);
    });
  }

  updateView(info);
  await waitForButtonClick();
  return getUserInput();
}

async function main() {
  while (true) {
    let text = await view("Please input: ");

    if (text == "quit") {
      await view("thank you for playing");
      break;
    } else {
      await view("you typed: " + text);
    }
  }
}

main();
