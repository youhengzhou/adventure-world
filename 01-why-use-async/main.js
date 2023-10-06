function updateView(info) {
  document.getElementById("userInput").value = "";
  document.getElementById("display").innerHTML = info;
}

function input(info) {
  function getUserInput() {
    return document.getElementById("userInput").value;
  }

  updateView(info);
  return getUserInput();
}

function main() {
  let text = input("Please input: ");

  updateView(text);
}

main();
