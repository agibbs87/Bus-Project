var startingSelect = document.getElementById("starting");
function onStartingChange() {
  var value = startingSelect.value;
  var text = startingSelect.options[startingSelect.selectedIndex].text;
  console.log("Starting:", value, text);
}
startingSelect.onchange = onStartingChange;
onStartingChange();

var endingSelect = document.getElementById("ending");
function onEndingChange() {
  var value = endingSelect.value;
  var text = endingSelect.options[endingSelect.selectedIndex].text;
  console.log("Ending:", value, text);
}
endingSelect.onchange = onEndingChange;
onEndingChange();