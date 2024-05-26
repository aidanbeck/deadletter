const UI = {

    playerPosition: { x: 2, y: 2 },

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

        const element_R = document.getElementById("TICKER_RIGHT");
        const element_L = document.getElementById("TICKER_LEFT");

        element_R.src = this.tickerSrcs[ digit_R ];
        element_L.src = this.tickerSrcs[ digit_L ];
    },

    updateTires(tires) {
        
        for ( let i = 0; i < 4; i++ ) {

            let element = document.getElementById(this.tireIds[i]);
            let tireStatus = tires[i];

            let src = "";

            if (tireStatus == 0)      { src = "images/other/transparent.png" }
            else if (tireStatus == 1) { src = "images/ui/uiHud_flatTire.png" }
            else if (tireStatus == 2) { src = "images/ui/uiHud_fullTire.png" }

            element.src = src;
        }
    },

    updateLocation() {

    }
}