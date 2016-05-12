var superDisco;
var cells = [];
var oldColour = [];
var num;
// var isEight = false;
$(document).ready(function() {

  $(document).on(('mouseleave' || 'click'), 'canvas', function(e) {

    // if (($('.clicked').length === 8)) {
		//
    //   // isEight = true;
		// 	for (var i = 1; i < oldColour.length; i++) {
    //     // var compareCanvas = (oldColour[i]['loop']);
    //     if (currentCanvas === compareCanvas) {
    //       // console.log(compareCanvas);
    //       num = oldColour[i]['num'];
    //     }
    //   }
    // }
    ////////
    // if (isEight === true) {
		//
    //   console.log('hello from isEight === true');
    //   return;
    // }
    ////////
    if ($(this).hasClass('clicked') === false) {

      var currentCanvas = $(this).context.id; //finds the canvas that is hovered on

      var x = event.offsetX;
      var y = event.offsetY;

      var canvasCount = $(this).prevAll().length; //finds the index of canvas

      var width = $(this).width() / 10;

      var cellX = Math.floor(x / width);
      var cellY = Math.floor(y / width);

      var cellIndex = (canvasCount * 50) + (cellY * 10) + cellX;
      // 	if (($.find('.clicked').length === 8)){
      // 		var cell = [], n;
      // 	console.log('hi from cells');
      // } else {
      // 	console.log("hi from else cells");
      // 	var cell = cells[ cellIndex ]; // Specific cell clicked
      // 	// cell.a = 0; cell.f = 0; // make this better
      // }
      var firstCellInCanvas = (canvasCount * 50);
      allCellsInCanvas = cells.slice(firstCellInCanvas, firstCellInCanvas + 50);

      for (var i = 0; i < allCellsInCanvas.length; i++) {
        var cell = allCellsInCanvas[i];
        cell.a = 0;
        cell.f = 0; // make this better
      }

      for (var i = 1; i < oldColour.length; i++) {
        var compareCanvas = (oldColour[i]['loop']);
        if (currentCanvas === compareCanvas) {
          // console.log(compareCanvas);
          num = oldColour[i]['num'];
          console.log(num);
        }
      }
    }
// tricks();
    // }
  });

	// var fakeEvent = {};
	// $(document).on('click', function () {
	// 	if (($('.clicked').length >= 8)) {
	// 		console.log('8 clicks');
	// 		$('canvas:not(.clicked)').each(function () {
	// 			$(this).trigger('mouseenter');
	// 		});
	// 	}
	// })
var tricks = function(){
	if (($('.clicked').length >= 8)) {
		var rand = function(max, min, is_int) {
			var max = (max || max === 0) ? max : 1,
				min = min || 0,
				gen = min + (max - min) * Math.random();
			return (is_int) ? Math.round(gen) : gen;
		};
		for (var i = 0; i < cells.length; i++) {
			cell = cells[i];
			cell.a = .08 / (1 + rand()) * Math.PI;
			cell.f = rand(2 * Math.PI);
		}
		// $('canvas:not(.disco)').trigger('click');
		// $('canvas:not(.disco)').trigger('mouseenter click');
	}
	if (($('.clicked').length < 8)) {
		for (var i = 0; i < cells.length; i++) {
			cell = cells[i];
			cell.a = 0;
			cell.f = 0;
		}
	}
};


  $(document).on('mouseenter', 'canvas', function(event) {
    // if ((($.find('.clicked').length === 8) && (isEight === true))) {
		//
    //   console.log('hello from isEight === true');
    //   return;
    // }


		if (($('.clicked').length === 8)) {
			// $('canvas:not(.disco)').trigger('click');
			// $('canvas:not(.disco)').trigger('mouseenter click');
		}

    var x = event.offsetX;
    var y = event.offsetY;

    var canvasCount = $(this).prevAll().length;

    var width = $(this).width() / 10;

    var cellX = Math.floor(x / width);
    var cellY = Math.floor(y / width);

    var cellIndex = (canvasCount * 50) + (cellY * 10) + cellX;

    var cell = cells[cellIndex]; // Specific cell clicked
    // cell.a = 0; cell.f = 0; // make this better

    var firstCellInCanvas = (canvasCount * 50);
    allCellsInCanvas = cells.slice(firstCellInCanvas, firstCellInCanvas + 50);

    var rand = function(max, min, is_int) {
      var max = (max || max === 0) ? max : 1,
        min = min || 0,
        gen = min + (max - min) * Math.random();
      return (is_int) ? Math.round(gen) : gen;
    };

    for (var i = 0; i < allCellsInCanvas.length; i++) {
      var cell = allCellsInCanvas[i];
      //	cell.a = 0; cell.f = 0; // make this better
      cell.a = .08 / (1 + rand()) * Math.PI;
      cell.f = rand(2 * Math.PI);
    }
  });


  var disco = function(id, num) {
    var c = document.getElementById(id),
      ct = c.getContext('2d'),
      w = c.width,
      h = c.height,
      k = .64,
      cell_size = 30,
      real_size = k * cell_size,
      nx = (w / cell_size),
      offx = .5 * (w % cell_size),
      ny = (h / cell_size),
      offy = .5 * (h % cell_size),
      n;
    var rand = function(max, min, is_int) {
      var max = (max || max === 0) ? max : 1,
        min = min || 0,
        gen = min + (max - min) * Math.random();
      return (is_int) ? Math.round(gen) : gen;
    };
    var Cell = function(x, y) {

      this.x = x;
      this.y = y;
      // this.f = .08/(1 + rand())*Math.PI;
      // this.a = rand(2*Math.PI);
      this.a = 0;
      this.f = 0;



      this.update = function(t) {

        var hue = num;
        var percent = 100;
        // if(document.getElementById('loop-1').classList.contains('clicked') === true){
        var l = 40 - 30 * Math.cbrt(Math.sin(this.a + t * this.f));
        // console.log('true');
        // }
        // if(document.getElementById('loop-1').classList.contains('clicked') === false) {
        //   var l = 60;
        // }

        if (this.a == 0 && this.f == 0) {
          hue = 0;
          percent = 0;
        }
        if (this.a != 0 && this.f != 0) {
          hue = num;

        }

        ct.shadowColor = ct.fillStyle =
          'hsl(' + hue + ',' + percent + '%,' + l + '%)';
        ct.fillRect(this.x, this.y, real_size, real_size);

      };
    };
    for (var j = 0; j < ny; j++) {
      for (var i = 0; i < nx; i++) {
        cells.push(new Cell(offx + (i + .5 * (1 - k)) * cell_size, offy + (j + .5 * (1 - k)) * cell_size));
      }
    }
    n = cells.length;
    (function ani(t) {
      ct.clearRect(0, 0, w, h);
      for (var i = 0; i < n; i++) {
        cells[i].update(t);
      }
      requestAnimationFrame(ani.bind(this, ++t));
    })(0);

  };

  superDisco = function() {
    num = 0;
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
    for (var i = 1; i <= arr.length; i++) {
      // console.log($(this).closest());
      loop = ("loop-" + [i]);
      num = num + 50;
      oldColour[i] = {
        loop: "loop-" + [i],
        num: num
      };
      disco(loop, num);

    }
    // console.log(oldColour);

  };
  superDisco();

  // var canvas = document.getElementsByTagName('canvas');
  // var maxSoundClick = function(){
  // 	$(document).on('click', 'canvas', function(event){
  // 		if(($.find('.sounds.clicked').length >= 2)){
  // 			event.preventDefault;
  // 		}
  // 		if(($(this).hasClass('clicked')) && ($(this).hasClass('bass')) ){
  //
  // 		}
  // 		if(($(this).hasClass('clicked')) && ($(this).hasClass('sounds')) ){
  //
  // 		}
  //
  // 	});
  //
  // };

});
