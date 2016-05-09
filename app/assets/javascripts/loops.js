var countBar = 0;

var timerStart = function(){
  counterMain = setInterval(function(){
    if (countBar >= 64){
      // reset the counter
      countBar = 0;
      // load cued loop if it exists
      if (loopQueuer === true){
        loadLoop(nextLoop);
      }
    }
  });
};
