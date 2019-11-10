
let minRows = 3;
let maxRows = 5;

document.addEventListener("DOMContentLoaded", function(){
  let txtArea = document.getElementById("txt");
  txtArea.rows = minRows;
  txtArea.oninput = function() {TextChanged()};
});

function TextChanged() {
  let txtArea = document.getElementById("txt");
  let lines = CountLines(txtArea);

  if ( lines > minRows  ) 
  txtArea.rows = maxRows;
  if ( lines <= minRows ) 
  txtArea.rows = minRows;
}

function CountLines(textArea) {
  let text = textArea.value.replace((new RegExp(".{"+textArea.cols+"}","g")),"\n").split("\n");
  return text.length;
}