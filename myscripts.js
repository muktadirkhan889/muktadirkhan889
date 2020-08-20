const squares = document.querySelector('.squares');
for (var i = 1; i < 365; i++) {
  var lvl = Math.floor(Math.random() * 3);
  while(lvl<1)
  lvl = Math.floor(Math.random() *3); 
  squares.insertAdjacentHTML('beforeend', `<li data-level="${lvl}"></li>`);
}
