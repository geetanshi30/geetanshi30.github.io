const logo = document.querySelectorAll("#site-title path");

for (let i = 0; i < logo.length; i++){
  console.log('Letter ${i} is ${logo[i].getTotalLength()}');
}

var paths = Array.from(document.querySelectorAll('#site-title path'));
paths.forEach(
  (path, i) => console.log(`Letter ${i} is ${path.getTotalLength()}`)
);
