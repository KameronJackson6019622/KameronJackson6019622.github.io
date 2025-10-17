$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(200,650,200,15)
createPlatform(300,250,200,15)
createPlatform(100,500,200,15)
createPlatform(100,350,200,15)
createPlatform(530,300,200,15)
createPlatform(1000,400,200,15)
createPlatform(1200,380,200,15)
createPlatform(900,200,200,15)
createPlatform(600,400,200,15)
createPlatform(750,600,200,15)
createPlatform(500,530,200,15)
    // TODO 3 - Create Collectables
createCollectable("max",200,200)
createCollectable("max",1300,300)
createCollectable("max",400,300)
    // TODO 4 - Create Cannons
createCannon("bottom",400,750,50)
createCannon("top",1100,1000,)
createCannon("left",100,2200)
  
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
