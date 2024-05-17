
//JS functions Entropy can call

const tileElements = document.getElementsByClassName("tile");

function writeIcon(index, tile) {

    //get tile
    let icon = tileElements[index].firstChild;

    //remove contents/images if there are any
    while(icon.firstChild){
        icon.removeChild(icon.firstChild);
    }

    if (tile != 0) {
        
        icon.draggable = true;

        //get data
        let data = TILES[tile];

        //create image
        let image = document.createElement("img");
        image.classList.add("icon-image");
        image.classList.add(data.class);
        if (data.src == "") { data.src = "other/icon.png" };
        image.src = "images/" + data.src;

        if (tile > 4) {
            image.classList.add("CENTI"); //temp
        }

        icon.appendChild(image);
    } else {
        icon.draggable = false;
    }
}

/*
    Debug function. This will render all textures to the screen, so you can see what is missing.
*/
function writeAllTiles() {
    for (i = 0; i < TILES.length; i++) {
        writeIcon(i,i);
    }
}


/*
    This array matches with the TILES enum in main.h.
    The src is a location inside the "images" folder.
    The class will be used as a class name for anchoring and animations, as well as identification.

*/
const TILES = [
    {class: "AIR", src:"NULL"},
    {class: "STONE", src:"other/rock.png"},
    {class: "WOOD", src:"other/sapling.png"},
    {class: "FIRE", src:""},
    {class: "FIRE2", src:""},

    {class: "CENTIHEAD_N", src:"enemies/centiEndN.png"},
    {class: "CENTIHEAD_S", src:"enemies/centiEndS.png"},
    {class: "CENTIHEAD_E", src:"enemies/centiEndE.png"},
    {class: "CENTIHEAD_W", src:"enemies/centiEndW.png"},
    {class: "CENTIHEAD_NE", src:"enemies/centiEndNE.png"},
    {class: "CENTIHEAD_NW", src:"enemies/centiEndNW.png"}, //!!! missing file
    {class: "CENTIHEAD_SE", src:"enemies/centiEndSE.png"},
    {class: "CENTIHEAD_SW", src:"enemies/centiEndSW.png"},

    {class: "CENTIBODY_N", src:"enemies/centiBodyN.png"},
    {class: "CENTIBODY_S", src:"enemies/centiBodyS.png"},
    {class: "CENTIBODY_E", src:"enemies/centiBodyE.png"},
    {class: "CENTIBODY_W", src:"enemies/centiBodyW.png"},
    {class: "CENTIBODY_NE", src:"enemies/centiBodyNE.png"},
    {class: "CENTIBODY_NW", src:"enemies/centiBodyNW.png"},
    {class: "CENTIBODY_SE", src:"enemies/centiBodySE.png"},
    {class: "CENTIBODY_SW", src:"enemies/centiBodySW.png"},

    {class: "CENTITAIL_N", src:"enemies/centiEndS.png"},
    {class: "CENTITAIL_S", src:"enemies/centiEndN.png"},
    {class: "CENTITAIL_E", src:"enemies/centiEndW.png"},
    {class: "CENTITAIL_W", src:"enemies/centiEndE.png"},
    {class: "CENTITAIL_NE", src:"enemies/centiEndSW.png"},
    {class: "CENTITAIL_NW", src:"enemies/centiEndSE.png"},
    {class: "CENTITAIL_SE", src:"enemies/centiEndNW.png"}, //!!! missing file
    {class: "CENTITAIL_SW", src:"enemies/centiEndNE.png"},

    {class: "BALL", src:""}
]