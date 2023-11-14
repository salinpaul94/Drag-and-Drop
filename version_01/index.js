let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");

for (let list of lists) {
  list.addEventListener("dragstart", function (e) {
    let selected = e.target;

    rightBox.addEventListener("dragove", function (e) {
      e.preventDefault();
    });
  });
}
