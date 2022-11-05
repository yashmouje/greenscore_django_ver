
function manipulateForm() {
  var score = 0;
    var name = document.getElementById("name").value;
    var walk = parseInt(document.getElementById("walk").value);
    var cycle = parseInt(document.getElementById("cycle").value);
    var public_transport = parseInt(document.getElementById("public-transport").value);
    var radios = ["walk", "cycle", "public-transport", "drive", "always", "sometimes", "never", "switch-off"];
    var l = radios.length;
    window.onload = function(){
    for (let i = 0; i < l; i++) {
      var submit = document.getElementById(radios[i]);
      submit.onclick = function() {
      score += document.getElementById(radios[i]).value;
  }
    }};
     console.log("Hello,", name);
     console.log(walk);
     console.log(cycle);
     console.log("You Scored:",score);
}
