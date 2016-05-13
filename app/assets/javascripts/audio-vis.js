//Globals
var superDisco;
var cells = [];
var oldColour = [];
var num;
var startingColour;
var IGlobal = 0;
var JGlobal = 0;
var cellCount = 1;

$(document).ready(function() {
//this happens on mouseleave or click
  $(document).on('mouseleave click', 'canvas', function(e) {
    if ($(this).hasClass('clicked') === true) {
      $(this).trigger('mouseenter');
    }

    if ($(this).hasClass('clicked') === false) {

      var currentCanvas = $(this).context.id; //finds the canvas that is hovered on

      var x = event.offsetX;
      var y = event.offsetY;

      var canvasCount = $(this).prevAll().length; //finds the index of canvas

      var width = $(this).width() / 10;

      var cellX = Math.floor(x / width);
      var cellY = Math.floor(y / width);

      var cellIndex = (canvasCount * 50) + (cellY * 10) + cellX;

      var firstCellInCanvas = (canvasCount * 50);
      allCellsInCanvas = cells.slice(firstCellInCanvas, firstCellInCanvas + 50);

      //finds all cells in the current canvas
      for (var i = 0; i < allCellsInCanvas.length; i++) {
        var cell = allCellsInCanvas[i];
        cell.a = 0;
        cell.f = 0;
      }
//toggles between the current and old colours for the specific canvas you're on
//calls tricks to set the sparkles
      for (var i = 1; i < oldColour.length; i++) {
        var compareCanvas = (oldColour[i]['loop']);
        if (currentCanvas === compareCanvas) {
          num = oldColour[i]['num'];
        }
      }
    }
    tricks();
  });
//this sets the sparkles using the mad random math and applies it to all the cells in the canvas
  var tricks = function() {
    if (($('.clicked').length >= 7)) {

      for (var i = 0; i < allCellsInCanvas.length; i++) {

        var rand = function(max, min, is_int) {
          var max = (max || max === 0) ? max : 1,
            min = min || 0,
            gen = min + (max - min) * Math.random();
          return (is_int) ? Math.round(gen) : gen;
        };

        for (var i = 0; i < cells.length; i++) {
          cell = cells[i];
          if ((cells[i]['name'] !== 'disco')) {
            cell.a = .08 / (1 + rand()) * Math.PI;
            cell.f = rand(2 * Math.PI);
          }
        }
      }
    };
    if (($('.clicked').length < 8)) {

      for (var j = 0; j < allCellsInCanvas.length; j++) {
        var cell = allCellsInCanvas[j];

        for (var k = 0; k < cells.length; k++) {
          if ((cells[k]['name'] !== 'disco')) {
            cell = cells[k];
            cell.a = 0;
            cell.f = 0;
          }
        }
      }
    }
  };


  $(document).on('mouseenter', 'canvas', function(event) {

//the following checks which cell within which canvas the mouse is in.
//this is used to switch on the disco
    var x = event.offsetX;
    var y = event.offsetY;
    var canvasCount = $(this).prevAll().length;
    var width = $(this).width() / 10;

    var cellX = Math.floor(x / width);
    var cellY = Math.floor(y / width);

    var cellIndex = (canvasCount * 50) + (cellY * 10) + cellX;

    var cell = cells[cellIndex]; // Specific cell clicked

    var firstCellInCanvas = (canvasCount * 50);
    allCellsInCanvas = cells.slice(firstCellInCanvas, firstCellInCanvas + 50);

//makes sparkles
    var rand = function(max, min, is_int) {
      var max = (max || max === 0) ? max : 1,
        min = min || 0,
        gen = min + (max - min) * Math.random();
      return (is_int) ? Math.round(gen) : gen;
    };

    for (var i = 0; i < allCellsInCanvas.length; i++) {
      var cell = allCellsInCanvas[i];
      cell.a = .08 / (1 + rand()) * Math.PI;
      cell.f = rand(2 * Math.PI);
    }
  });

//Disco runs everything - it creates the cells and sets and updates the colours (in the update function)
//It calls superDisco which creates all the canvses and chucks the cells inside.
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

    //////////////set hues///////////////////
    var huePicker = function() {
      if (cellCount < 6) {
        hue = 305;
      }
      if (cellCount < 12 && cellCount > 6) {
        hue = 240;
      }
      if (cellCount <= 24 && cellCount > 12) {
        hue = 273;
      }
      return hue;
    };
    ///////////////set percents//////////////
    var percentPicker = function() {
      if (cellCount < 6) {
        percent = 100;
      }
      if (cellCount < 12 && cellCount > 6) {
        percent = 100;
      }
      if (cellCount <= 24 && cellCount > 12) {
        percent = 100;
      }
      return percent;
    };
    /////////////////set l//////////////////
    var lPicker = function() {
      if (cellCount < 6) {
        l = 10;
      }
      if (cellCount < 12 && cellCount > 6) {
        l = 9;
      }
      if (cellCount <= 24 && cellCount > 12) {
        l = 6;
      }
      return l;
    };
    ////////////////////Cell creator///////////////////////
    //each cell contains and s and y c
    var Cell = function(x, y) {
      huePicker();
      percentPicker();
      lPicker();

      this.x = x;
      this.y = y;

      this.a = 0;
      this.f = 0;
      this.hue = huePicker();
      this.percent = percentPicker();
      this.l = lPicker();

      this.update = function(t) {

        if (this.a === 0 && this.f === 0) {
          hue = this.hue;
          percent = this.percent;
          l = this.l;
        }
        if (this.a != 0 && this.f != 0) {
          hue = num;
          var percent = 100;
          var l = 40 - 30 * Math.cbrt(Math.sin(this.a + t * this.f));
        }
//this fills the cells with awesome
        ct.shadowColor = ct.fillStyle =
          'hsl(' + hue + ',' + percent + '%,' + l + '%)';
        ct.fillRect(this.x, this.y, real_size, real_size);
      };
    };
    for (var j = 0; j < ny; j++) {
      JGlobal = j;
      for (var i = 0; i < nx; i++) {
        IGlobal = i;
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

  var cellColours = function() {
    var rand = function(max, min, is_int) {
      var max = (max || max === 0) ? max : 1,
        min = min || 0,
        gen = min + (max - min) * Math.random();
      return (is_int) ? Math.round(gen) : gen;
    };

    for (var i = 0; i <= cells.length; i++) {
      console.log(cells[i])
      if (i <= 300) {
        startingColour = 30;

      }
      if ((i > 300) && (i <= 600)) {
        startingColour = 60;
      }
      if (i > 600) {
        startingColour = 90;
      }

    }

  };

  superDisco = function() {
    num = 0;
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
    for (var i = 1; i <= arr.length; i++) {
      loop = ("loop-" + [i]);
      num = num + 50;
      oldColour[i] = {
        loop: "loop-" + [i],
        num: num
      };
      disco(loop, num);
      cellCount += 1;
    }
  };

  superDisco();

  //Document ready end
});
