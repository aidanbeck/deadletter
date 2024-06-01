const UI = {

    playerPosition: { x: 0, y: 0 },

    gasRemaining: 0,
    
    tires: [
        2, 1,
        0, 2
    ],
    
    /*
        T
    */
    tireIds: [
        "TIRE1", "TIRE0",
        "TIRE2", "TIRE3"
    ],

    tickerSrcs: [
        "images/ui/uiTicker0.png",
        "images/ui/uiTicker1.png",
        "images/ui/uiTicker2.png",
        "images/ui/uiTicker3.png",
        "images/ui/uiTicker4.png",
        "images/ui/uiTicker5.png",
        "images/ui/uiTicker6.png",
        "images/ui/uiTicker7.png",
        "images/ui/uiTicker8.png",
        "images/ui/uiTicker9.png",
    ],

    updateTicker(gas) {

        if (gas > 99) { gas = 99; }
        if (gas < 0 ) { gas = 0;  }

        const digit_R = gas % 10;
        const digit_L = (gas - digit_R) / 10;

        const element_R = document.getElementById("TICKER_RIGHT"); //Should have these be static variables
        const element_L = document.getElementById("TICKER_LEFT");

        element_R.src = this.tickerSrcs[ digit_R ];
        element_L.src = this.tickerSrcs[ digit_L ];
    },

    updateTires(tires) {
        
        for ( let i = 0; i < 4; i++ ) {

            let element = document.getElementById(this.tireIds[i]); //Should optimize by saving element references in arry
            let tireStatus = tires[i];

            let src = "";

            if (tireStatus == 0)      { src = "images/other/transparent.png" }
            else if (tireStatus == 1) { src = "images/ui/uiHud_flatTire.png" }
            else if (tireStatus == 2) { src = "images/ui/uiHud_fullTire.png" }

            element.src = src;
        }
    },

    updateLocation(element, position) {

        //Get new coordinates
        const newX = position.x * ( -100 / 11 ); //11 is a magic number. It is the vertical height of the screen in tiles.
        const newY = position.y * ( -100 / 11 );

        //Get previous coordinates.
        const oldX = element.style.getPropertyValue('--movingX');
        const oldY = element.style.getPropertyValue('--movingY');

        //Prep animation to start at old coordinates.
        element.style.setProperty('--stationaryX', oldX);
        element.style.setProperty('--stationaryY', oldY);

        //Set element to stationary.
        element.classList.add("WORLD-stationary");
        element.classList.remove("WORLD-moving");

        //Set animation to move to new coordinates.
        element.style.setProperty('--movingX', newX + "vh");
        element.style.setProperty('--movingY', newY + "vh");

        //Start animation.
        element.classList.remove("WORLD-stationary");
        element.classList.add("WORLD-moving");

    }
}

function moveHandler(tile, desktop, oldIndex, newIndex) {

}