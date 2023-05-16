var massiv = [null, 123, undefined, null, "qwerty", 34, 65, undefined, null, null, 43, "aerg", "пкцйк", null, "uioo"];

var groupedArray = massiv.reduce((a, b) => {
  var type = typeof b;
  if (!a[type]) {
    a[type] = [];
  }
  a[type].push(b);
  return a;
}, {});

var sortedArray = Object.values(groupedArray).sort((a, b) => b.length - a.length);
console.log(sortedArray);