// var superDisco;
// var newArr = [];
// var cells = [];
// $(document).ready(function(){
// 	$(document).on('click', 'canvas', function (event) {
// 		// console.log('hi from onclick');
// 		var x = event.offsetX;
// 		var y = event.offsetY;
//
// 		var canvasCount = $(this).prevAll().length;
//
// 		var width = $(this).width() / 10;
//
// 		var cellX = Math.floor(x / width);
// 		var cellY = Math.floor(y / width);
//
// 		var cellIndex = (canvasCount * 50) + (cellY * 10) + cellX;
//
// 		var cell = cells[ cellIndex ]; // Specific cell clicked
// 		cell.a = 0; cell.f = 0; // make this better
//
// 		var firstCellInCanvas = (canvasCount * 50);
// 		allCellsInCanvas = cells.slice(firstCellInCanvas, firstCellInCanvas + 50);
//
// 		for (var i = 0; i < allCellsInCanvas.length; i++) {
// 			var cell = allCellsInCanvas[i];
// 			cell.a = 0; cell.f = 0; // make this better
// 		}
//
// 	});
// var disco = function(id, num){
// var c = document.getElementById(id),
// 		ct = c.getContext('2d'),
// 		w = c.width, h = c.height,
// 		k = .64,
// 		cell_size = 30, real_size = k*cell_size,
// 		nx = (w/cell_size), offx = .5*(w%cell_size),
// 		ny = (h/cell_size), offy = .5*(h%cell_size),
// 		 n;
// var rand = function(max, min, is_int) {
// 	var max = (max || max === 0)?max:1,
// 			min = min || 0,
// 			gen = min + (max - min)*Math.random();
// 	return (is_int)?Math.round(gen):gen;
// };
// var Cell = function(x, y) {
//
// 	this.x = x;
// 	this.y = y;
// 	this.f = .08/(1 + rand())*Math.PI;
// 	this.a = rand(2*Math.PI);
// 	this.update = function(t) {
// 		var hue = num;
//     if(document.getElementById('loop-1').classList.contains('clicked') === true){
//     //var	l = 40 - 30*Math.cbrt(Math.sin(this.a + t*this.f));
// 		// console.log('true');
//   }
// 	if(document.getElementById('loop-1').classList.contains('clicked') === false) {
//     var l = 60;
//   }
//
// 	if (this.a == 0 && this.f == 0) {
// 		// console.log('hue 0')
// 		hue = 0;
// 	}
//
// 		ct.shadowColor = ct.fillStyle =
// 			'hsl(' + hue + ',30%,' + l + '%)';
// 		ct.fillRect(this.x, this.y, real_size, real_size);
//
// };
// };
// for(var j = 0; j < ny; j++) {
// 	for(var i = 0; i < nx; i++) {
// 		cells.push(new Cell(offx + (i + .5*(1 - k))*cell_size, offy + (j + .5*(1 - k))*cell_size));
// 	}
// }
// n = cells.length;
// (function ani(t) {
// 	ct.clearRect(0, 0, w, h);
// 	for(var i = 0; i < n; i++) {
// 		cells[i].update(t);
// 	}
// 	requestAnimationFrame(ani.bind(this, ++t));
// })(0);
// newArr.push(c);
// };
//
// superDisco = function(){
//   num = 20;
//   arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
//   for (var i = 1; i <= arr.length; i++) {
// 			// console.log($(this).closest());
//     loop = ("loop-" + [i]);
// 		num = num + 50;
// 	disco(loop, num);
//
// }
//
// };
// superDisco();
//
// // var shield = function(){
// // 	$('canvas').mouseenter(function(){
// // 		$(this).css('background-color','green');
// // 		// console.log($(this).getImageData);
// // 	});
// // };
// // shield();
// });
