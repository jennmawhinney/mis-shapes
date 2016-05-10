var superDisco;
$(document).ready(function(){
var disco = function(id, num){
var c = document.getElementById(id),
		ct = c.getContext('2d'),
		w = c.width, h = c.height,
		k = .64,
		cell_size = 30, real_size = k*cell_size,
		nx = (w/cell_size), offx = .5*(w%cell_size),
		ny = (h/cell_size), offy = .5*(h%cell_size),
		cells = [], n;
var rand = function(max, min, is_int) {
	var max = (max || max === 0)?max:1,
			min = min || 0,
			gen = min + (max - min)*Math.random();
	return (is_int)?Math.round(gen):gen;
};
var Cell = function(x, y) {
	this.x = x;
	this.y = y;
	this.f = .08/(1 + rand())*Math.PI;
	this.a = rand(2*Math.PI);
	this.update = function(t) {
		var hue = num;
    // if($(this).closest('canvas').hasClass('clicked') === true){
    var	l = 40 - 30*Math.cbrt(Math.sin(this.a + t*this.f));
  // } else {
    // var l = 60;
  // }
		ct.shadowColor = ct.fillStyle =
			'hsl(' + hue + ',100%,' + l + '%)';
		ct.fillRect(this.x, this.y, real_size, real_size);

};
};

for(var i = 0; i < nx; i++) {
	for(var j = 0; j < ny; j++) {
		cells.push(new Cell(offx + (i + .5*(1 - k))*cell_size, offy + (j + .5*(1 - k))*cell_size));
	}
}
n = cells.length;
(function ani(t) {
	ct.clearRect(0, 0, w, h);
	for(var i = 0; i < n; i++) {
		cells[i].update(t);
	}
	requestAnimationFrame(ani.bind(this, ++t));
})(0);
};

superDisco = function(){
  num = 20;
  arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
  for (var i = 1; i <= arr.length; i++) {
    loop = ("loop-" + [i]);
    num = num + 50;
    disco(loop, num);
  }
};
superDisco();
});
