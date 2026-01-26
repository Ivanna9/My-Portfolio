let mode = "time";
const output = document.getElementById("output");
const fullBtn = document.getElementById("full");
const dateBtn = document.getElementById("date");
const timeBtn = document.getElementById("time");

setInterval(update, 1000);
update();
function update() {
  output.textContent = format(mode);
}

//pure function
function format(formatMode) {
  const now = new Date();

  switch (formatMode) {
    case "time":
      return now.toLocaleTimeString();
    case "date":
      return now.toLocaleDateString();
    case "full":
      return now.toLocaleDateString() + " " + now.toLocaleDateString();
    default:
      return now.toLocaleDateString();
  }
}
