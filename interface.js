
/*
  Debug tool. It detects a key press and changes the value of SELECTEDTILE.
  SELECTEDTILE is then used as the tile # to create a new icon whenever a slot is clicked.

  0 - AIR
  1 - STONE
  2 - WOOD
  3 - FIRE
  4 - COYOTE
  5 - CENTIHEAD
  6 - CENTITAIL

*/
let SELECTEDTILE = 2;
function handleKeyPress(event) {
    const key = event.key;
  
    switch (key) {

      case 'ArrowRight':
        UI.playerPosition.x += 5;
        UI.updateLocation(
          document.getElementById("WORLD"),
          UI.playerPosition
        );
        break;

      case 'ArrowLeft':
        UI.playerPosition.x -= 5;
        UI.updateLocation(
          document.getElementById("WORLD"),
          UI.playerPosition
        );  
        break;
      
        case 'ArrowUp':
          UI.playerPosition.y -= 5;
          UI.updateLocation(
            document.getElementById("WORLD"),
            UI.playerPosition
          );
          break;
  
        case 'ArrowDown':
          UI.playerPosition.y += 5;
          UI.updateLocation(
            document.getElementById("WORLD"),
            UI.playerPosition
          );
          break;

      case '0':
        SELECTEDTILE = 0;
        break;
      case '1':
        SELECTEDTILE = 1;
        break;
      case '2':
        SELECTEDTILE = 2;
        break;
      case '3':
        SELECTEDTILE = 3;
        break;
      case '4':
        SELECTEDTILE = 4; //BALL
        break;
      case '5':
        SELECTEDTILE = 5; //CENTIHEAD_E
        break;
      case '6':
        SELECTEDTILE = 6; //CENTITAIL_E
        break;
      case '7':
        SELECTEDTILE = 7; //CENTITAIL_E
        break;
      case '8':
        SELECTEDTILE = 8; //CENTITAIL_E
        break;
      default:
        //nada
        break;
    }
}
document.addEventListener('keydown', handleKeyPress);

/*
    Debug function. This will render all textures to the screen, so you can see what is missing.
*/
function writeAllTiles() {
  for (i = 0; i < TILES.length; i++) {
      writeIcon(i,i);
  }
}

/*
  Helps set the dimensions of UI elements to match the pixel scaling of the desktopDiv world.
*/
function scaleElement(element, columns, rows, scale, measurement) {
  element.style.height = scale*rows + measurement;
  element.style.width = scale*columns + measurement;
}

/*
  writeIcon is a function that can be called by "Entropy".
  It appends an icon to a specific index of the desktop.
*/
const slotElements = document.getElementsByClassName("🖥️DIV-slot");
function writeIcon(index, tile) {

   //index--;
    //get tile
    let icon = slotElements[index].firstChild;

    //remove contents/images if there are any
    while(icon.firstChild){
        icon.removeChild(icon.firstChild);
    }

    if (tile != 0) {
        
        icon.draggable = true;

        icon.tile = tile; //this DOES store a value, I just can't access it with ev.target? it always turns to 1?
        //console.log("w" + icon.tile);

        //get data
        let data = TILES[tile];

        //create image
        let image = document.createElement("img");
        image.classList.add("🖥️DIV-iconImage");
        image.classList.add(data.class);
        if (data.src == "") { data.src = "other/icon.png" };
        image.src = "images/" + data.src;

        if (tile > 4 && tile < 29) {
            image.classList.add("CENTI"); //temp
        }

        icon.appendChild(image);
    } else {
        icon.draggable = false;
    }
}
//Module allows C to read "writeIcon"
Module = {
    onRuntimeInitialized: function() {
      Module.writeIcon = writeIcon;
    }
};

/*
  Runs the gameLoop C function over and over.
*/
function cycle() {
  setInterval(function () { _gameLoop(); }, 500);
}
window.onload = cycle;

/*
    This array matches with the TILES enum in main.h.
    The src is a location inside the "images" folder.
    The class will be used as a class name for anchoring and animations, as well as identification.

*/
const TILES = [
  {class: "AIR", src:"NULL"},
  {class: "STONE", src:"other/rock.png"},
  {class: "WOOD", src:"other/sapling.png"},
  {class: "FIRE", src:"other/fire.gif"},
  {class: "FIRE2", src:"other/fire.gif"},

  //NOT IMPLEMENTED
  // {class: "CENTIHEAD_N", src:"enemies/centiEndN.png"},
  // {class: "CENTIHEAD_S", src:"enemies/centiEndS.png"},
  // {class: "CENTIHEAD_E", src:"enemies/centiEndE.png"},
  // {class: "CENTIHEAD_W", src:"enemies/centiEndW.png"},
  // {class: "CENTIHEAD_NE", src:"enemies/centiEndNE.png"},
  // {class: "CENTIHEAD_NW", src:"enemies/centiEndNW.png"}, //!!! missing file
  // {class: "CENTIHEAD_SE", src:"enemies/centiEndSE.png"},
  // {class: "CENTIHEAD_SW", src:"enemies/centiEndSW.png"},

  // {class: "CENTIBODY_N", src:"enemies/centiBodyN.png"},
  // {class: "CENTIBODY_S", src:"enemies/centiBodyS.png"},
  // {class: "CENTIBODY_E", src:"enemies/centiBodyE.png"},
  // {class: "CENTIBODY_W", src:"enemies/centiBodyW.png"},
  // {class: "CENTIBODY_NE", src:"enemies/centiBodyNE.png"},
  // {class: "CENTIBODY_NW", src:"enemies/centiBodyNW.png"},
  // {class: "CENTIBODY_SE", src:"enemies/centiBodySE.png"},
  // {class: "CENTIBODY_SW", src:"enemies/centiBodySW.png"},

  // {class: "CENTITAIL_N", src:"enemies/centiEndS.png"},
  // {class: "CENTITAIL_S", src:"enemies/centiEndN.png"},
  // {class: "CENTITAIL_E", src:"enemies/centiEndW.png"},
  // {class: "CENTITAIL_W", src:"enemies/centiEndE.png"},
  // {class: "CENTITAIL_NE", src:"enemies/centiEndSW.png"},
  // {class: "CENTITAIL_NW", src:"enemies/centiEndSE.png"},
  // {class: "CENTITAIL_SE", src:"enemies/centiEndNW.png"}, //!!! missing file
  // {class: "CENTITAIL_SW", src:"enemies/centiEndNE.png"},

  // {class: "BALL", src:"enemies/coyoteWalk.gif"},
  // {class: "RAT", src:"enemies/coyoteWalk.gif"},

  //IMPLEMENTED AGAIN
  {class: "PACKAGE", src:"other/box1.png"},
  {class: "GAS", src:"other/gas.png"},
  {class: "SPAWNER", src:"other/icon.png"},
  {class: "SPAWN_RANDOM", src:"enemies/spawnSac.gif"},
]