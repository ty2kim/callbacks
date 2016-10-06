// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function (entry) {
    if (entry == "Waldo") {
      found(arr.indexOf(entry));
    }
  });
}

function actionWhenFound(index) {
  console.log("Found him! at index " + (index+1) + "!.");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
