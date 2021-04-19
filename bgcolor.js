function changecolor() {
  var whole = document.querySelector("body");
  const hexValues = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  var hex = "#";
  var i;
  for (i = 0; i < 6; i++) {
    var fun = Math.floor(Math.random() * hexValues.length);
    hex = hex + hexValues[fun];
  }
  whole.style.backgroundColor = hex;
  document.getElementById("root").innerHTML = hex;
}
