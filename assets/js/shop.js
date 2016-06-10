 var shop = function(game) {
    var shipSpecsData = "";
    var errorSound = "";
    var cashSound = "";
    var buyButton2 = "";
    var buyButton3 = "";
    var buyButton4 = "";
    var popupText = "";
}

shop.prototype = {
    create: function() {
        var w = 800,
            h = 600; // height and width of screen size

            hDiff = 50;

            shipSpecsData = JSON.parse(this.game.cache.getText('shipSpecs'));
            console.log(shipSpecsData);

            errorSound = this.game.add.audio('error');
            cashSound = this.game.add.audio('cashSound');

        // The scrolling starfield background
        starfield = this.game.add.tileSprite(0, 0, 800, 600, 'main');

        var textDisplayGroup = this.game.add.physicsGroup();
        textDisplayGroup.alpha = 0;

        var startGameText = this.game.add.text(w/2, h/2 - 250, 'Shop', { font: '40px Orbitron', fill: '#ffffff' });  
        startGameText.anchor.setTo(0.5,0.5);

        popupText = this.game.add.text(w/2, h/2 - 200, '', { font: '35px helvetica', fill: '#ffffff' });  
        popupText.anchor.setTo(0.5,0.5);

        backButton = this.add.sprite(50,50,"backButton");
        backButton.anchor.setTo(0.5,0.5);
        backButton.scale.setTo(0.3, 0.3);
        backButton.inputEnabled = true;
        backButton.input.useHandCursor = true;
        backButton.events.onInputUp.add(this.mainMenu, this);

        if (localStorage.getItem('spaceblaster_inventory') !== null) {

            var shipsOwned = JSON.parse(localStorage.getItem('spaceblaster_inventory'));
            console.log("owned ships", shipsOwned.data.ownedShips);

            for (var t = 0; t < shipsOwned.data.ownedShips.length; t++) {
                console.log("owned ship", shipsOwned.data.ownedShips[t]);
            }

            if (shipsOwned.data.ownedShips[0] == "Commander") { 
                buyButton1 = this.game.add.text(w/2 + 150, 100 + 50, "Purchased", { font: '32px helvetica', fill: '#ffa500' }); 

            } else {
                buyButton1 = this.game.add.text(w/2 + 150, 100 + 50, "Buy", { font: '32px helvetica', fill: '#ffa500' }); 
                buyButton1.inputEnabled = true;
                buyButton1.input.useHandCursor = true;
            }

            if (shipsOwned.data.ownedShips[1] == "Blue Sky") {    
                buyButton2 = this.game.add.text(w/2 + 150, 100 + 150, "Purchased", { font: '32px helvetica', fill: '#ffa500' }); 

            } else {
                buyButton2 = this.game.add.text(w/2 + 150, 100 + 150, "Buy", { font: '32px helvetica', fill: '#ffa500' }); 
                buyButton2.inputEnabled = true;
                buyButton2.input.useHandCursor = true;
                buyButton2.events.onInputUp.add(this.buyShip2, this); 
            }

            if (shipsOwned.data.ownedShips[2] == "Ice Cube") {    
                buyButton3 = this.game.add.text(w/2 + 150, 100 + 250, "Purchased", { font: '32px helvetica', fill: '#ffa500' }); 

            } else {
                buyButton3 = this.game.add.text(w/2 + 150, 100 + 250, "Buy", { font: '32px helvetica', fill: '#ffa500' }); 
                buyButton3.inputEnabled = true;
                buyButton3.input.useHandCursor = true;
                buyButton3.events.onInputUp.add(this.buyShip3, this); 
            }

            if (shipsOwned.data.ownedShips[3] == "Apollo 18") {    
                buyButton4 = this.game.add.text(w/2 + 150, 100 + 350, "Purchased", { font: '32px helvetica', fill: '#ffa500' }); 

            } else {
                buyButton4 = this.game.add.text(w/2 + 150, 100 + 350, "Buy", { font: '32px helvetica', fill: '#ffa500' }); 
                buyButton4.inputEnabled = true;
                buyButton4.input.useHandCursor = true;
                buyButton4.events.onInputUp.add(this.buyShip4, this); 
            }
            

            

           

            

        }

        var neededItemsSection = 250;
            

        for (var r = 0; shipSpecsData.shipData.ships.length > r; ++r) {
            var nameShip = this.game.add.text(w/2 - 250, 100 + hDiff, shipSpecsData.shipData.ships[r].name, { font: '32px helvetica', fill: '#ffffff' });

            var fireIcon = this.add.sprite(
                w/2 - neededItemsSection, 
                150 + hDiff, 
            "fire");

            var fireNeeded = this.game.add.text(
                w/2 - neededItemsSection + 40,
                 155 + hDiff, 
            "x" + shipSpecsData.shipData.ships[r].fire, { font: '22px helvetica', fill: '#ffffff' });
            
            var fuelIcon = this.add.sprite(
                w/2 - neededItemsSection + 80, 
                150 + hDiff, 
            "fuel");

            var fuelNeeded = this.game.add.text(
                w/2 - neededItemsSection + 120, 
                155 + hDiff, 
            "x" + shipSpecsData.shipData.ships[r].fuel, { font: '22px helvetica', fill: '#ffffff' }); 

            var rocketIcon = this.add.sprite(
                w/2 - neededItemsSection + 160, 
                150 + hDiff, 
            "rocket");

            var rocketNeeded = this.game.add.text(
                w/2 - neededItemsSection + 200, 
                155 + hDiff, 
            "x" + shipSpecsData.shipData.ships[r].rocket, { font: '22px helvetica', fill: '#ffffff' }); 

            var cpuIcon = this.add.sprite(
                w/2 - neededItemsSection + 240, 
                155 + hDiff, 
            "cpu");

            var cpuNeeded = this.game.add.text(
                w/2 - neededItemsSection + 270, 
                155 + hDiff, 
            "x" + shipSpecsData.shipData.ships[r].cpu, { font: '22px helvetica', fill: '#ffffff' }); 

            var wrenchIcon = this.add.sprite(
                w/2 - neededItemsSection + 320, 
                150 + hDiff, 
            "wrench");

            var wrenchNeeded = this.game.add.text(
                w/2 - neededItemsSection + 360, 
                155 + hDiff, 
            "x" + shipSpecsData.shipData.ships[r].wrench, { font: '22px helvetica', fill: '#ffffff' }); 

            var orbIcon = this.add.sprite(
                w/2 - neededItemsSection + 400, 
                150 + hDiff, 
            "star");

            var orbNeeded = this.game.add.text(
                w/2 - neededItemsSection + 430, 
                155 + hDiff, 
            "x" + shipSpecsData.shipData.ships[r].orbs, { font: '22px helvetica', fill: '#ffffff' }); 
            
     

            var shipIcon = this.add.sprite(w/2 - 300 , 100 + hDiff, "ship" + shipSpecsData.shipData.ships[r].id);
            hDiff += 100;
        }

        

    },
    update: function() {
        //  Scroll the background
        //starfield.tilePosition.y += 2;
        //starfield.tilePosition.x += 3;
    },
    mainMenu: function(){
        buttonSound.play();
          this.game.state.start("GameTitle");
    },
    buyShip2: function() {

        var ship = 1;

        if (buyButton2.text == "Purchased") {

            this.popupHandler("owned", shipSpecsData.shipData.ships[ship].name);

        }else if (localStorage.getItem('spaceblaster_inventory') !== null) {
            itemsStored = JSON.parse(localStorage.getItem('spaceblaster_inventory'));
            var ownedShips = itemsStored.data.ownedShips;
            console.log("look here", ownedShips);

            if (itemsStored.data.fuel >= shipSpecsData.shipData.ships[ship].fuel &&
                itemsStored.data.fire >= shipSpecsData.shipData.ships[ship].fire &&
                itemsStored.data.wrench >= shipSpecsData.shipData.ships[ship].wrench &&
                itemsStored.data.rocket >= shipSpecsData.shipData.ships[ship].rocket &&
                itemsStored.data.cpu >= shipSpecsData.shipData.ships[ship].cpu &&
                itemsStored.data.orbs >= shipSpecsData.shipData.ships[ship].orbs) {

                itemsStored.data.fuel -= shipSpecsData.shipData.ships[ship].fuel;
                itemsStored.data.fire -= shipSpecsData.shipData.ships[ship].fire;
                itemsStored.data.wrench -= shipSpecsData.shipData.ships[ship].wrench;
                itemsStored.data.rocket -= shipSpecsData.shipData.ships[ship].rocket;
                itemsStored.data.cpu -= shipSpecsData.shipData.ships[ship].cpu;
                itemsStored.data.orbs -= shipSpecsData.shipData.ships[ship].orbs;

                var saveJSON = '{"data":{"ownedShips":[' + ownedShips +'],"ship":' + ship +',"fuel":' + itemsStored.data.fuel + ',"fire":' + itemsStored.data.fire + ',"wrench":' + itemsStored.data.wrench + ',"rocket":' + itemsStored.data.rocket + ',"cpu":' + itemsStored.data.cpu + ',"orbs":' + itemsStored.data.orbs + '}}';

                localStorage.setItem('spaceblaster_inventory', saveJSON);

                console.log('saved');
                this.onItemBought();
                buyButton2.text = "Purchased";
                this.popupHandler("success", shipSpecsData.shipData.ships[ship].name);
                this.addShip(shipSpecsData.shipData.ships[ship].name, ship);

            } else {
                this.onError();
                console.log('Not enough');
                this.popupHandler("fail", shipSpecsData.shipData.ships[ship].name);
            }
            

        }

    },
    buyShip3: function() {

        var ship = 2;


        if (buyButton3.text == "Purchased") {

            this.popupHandler("owned", shipSpecsData.shipData.ships[ship].name);

        }else if (localStorage.getItem('spaceblaster_inventory') !== null) {
            itemsStored = JSON.parse(localStorage.getItem('spaceblaster_inventory'));
            var ownedShips = itemsStored.data.ownedShips;

            if (itemsStored.data.fuel >= shipSpecsData.shipData.ships[ship].fuel &&
                itemsStored.data.fire >= shipSpecsData.shipData.ships[ship].fire &&
                itemsStored.data.wrench >= shipSpecsData.shipData.ships[ship].wrench &&
                itemsStored.data.rocket >= shipSpecsData.shipData.ships[ship].rocket &&
                itemsStored.data.cpu >= shipSpecsData.shipData.ships[ship].cpu &&
                itemsStored.data.orbs >= shipSpecsData.shipData.ships[ship].orbs) {

                itemsStored.data.fuel -= shipSpecsData.shipData.ships[ship].fuel;
                itemsStored.data.fire -= shipSpecsData.shipData.ships[ship].fire;
                itemsStored.data.wrench -= shipSpecsData.shipData.ships[ship].wrench;
                itemsStored.data.rocket -= shipSpecsData.shipData.ships[ship].rocket;
                itemsStored.data.cpu -= shipSpecsData.shipData.ships[ship].cpu;
                itemsStored.data.orbs -= shipSpecsData.shipData.ships[ship].orbs;

                var saveJSON = '{"data":{"ownedShips":[' + ownedShips +'],"ship":' + ship +',"fuel":' + itemsStored.data.fuel + ',"fire":' + itemsStored.data.fire + ',"wrench":' + itemsStored.data.wrench + ',"rocket":' + itemsStored.data.rocket + ',"cpu":' + itemsStored.data.cpu + ',"orbs":' + itemsStored.data.orbs + '}}';

                localStorage.setItem('spaceblaster_inventory', saveJSON);

                console.log('saved');
                buyButton3.text = "Purchased";
                this.popupHandler("success", shipSpecsData.shipData.ships[ship].name);
                this.addShip(shipSpecsData.shipData.ships[ship].name, ship);
                this.onItemBought();

            } else {
                this.onError();
                console.log('Not enough');
                this.popupHandler("fail", shipSpecsData.shipData.ships[ship].name);
            }
            

        }

    },
    buyShip4: function() {

        var ship = 3;

        if (buyButton4.text == "Purchased") {

            this.popupHandler("owned", shipSpecsData.shipData.ships[ship].name);

        } else if (localStorage.getItem('spaceblaster_inventory') !== null) {
            itemsStored = JSON.parse(localStorage.getItem('spaceblaster_inventory'));
            var ownedShips = itemsStored.data.ownedShips;

            if (itemsStored.data.fuel >= shipSpecsData.shipData.ships[ship].fuel &&
                itemsStored.data.fire >= shipSpecsData.shipData.ships[ship].fire &&
                itemsStored.data.wrench >= shipSpecsData.shipData.ships[ship].wrench &&
                itemsStored.data.rocket >= shipSpecsData.shipData.ships[ship].rocket &&
                itemsStored.data.cpu >= shipSpecsData.shipData.ships[ship].cpu &&
                itemsStored.data.orbs >= shipSpecsData.shipData.ships[ship].orbs) {

                itemsStored.data.fuel -= shipSpecsData.shipData.ships[ship].fuel;
                itemsStored.data.fire -= shipSpecsData.shipData.ships[ship].fire;
                itemsStored.data.wrench -= shipSpecsData.shipData.ships[ship].wrench;
                itemsStored.data.rocket -= shipSpecsData.shipData.ships[ship].rocket;
                itemsStored.data.cpu -= shipSpecsData.shipData.ships[ship].cpu;
                itemsStored.data.orbs -= shipSpecsData.shipData.ships[ship].orbs;

                var saveJSON = '{"data":{"ownedShips":[' + ownedShips +'],"ship":' + ship +',"fuel":' + itemsStored.data.fuel + ',"fire":' + itemsStored.data.fire + ',"wrench":' + itemsStored.data.wrench + ',"rocket":' + itemsStored.data.rocket + ',"cpu":' + itemsStored.data.cpu + ',"orbs":' + itemsStored.data.orbs + '}}';

                localStorage.setItem('spaceblaster_inventory', saveJSON);

                console.log('saved');
                buyButton4.text = "Purchased";
                this.popupHandler("success", shipSpecsData.shipData.ships[ship].name);
                this.addShip(shipSpecsData.shipData.ships[ship].name, ship);
                this.onItemBought();

            } else {
                this.onError();
                console.log('Not enough');
                this.popupHandler("fail", shipSpecsData.shipData.ships[ship].name);
            }
            

        }

    },
    addShip: function (shipName, shipNumber) {
        if (localStorage.getItem('spaceblaster_inventory') !== null) {
            dataCollection = JSON.parse(localStorage.getItem('spaceblaster_inventory'));
            console.log('dataCollection');

            //ships
            var shipArray = dataCollection.data.ownedShips;

            // add ship to storage
            shipArray.push(shipName);

            
                var saveJSON = '{"data":{"ownedShips":[' + shipArray +'],"ship":' + shipNumber +',"fuel":' + dataCollection.data.fuel + ',"fire":' + dataCollection.data.fire + ',"wrench":' + dataCollection.data.wrench + ',"rocket":' + dataCollection.data.rocket + ',"cpu":' + dataCollection.data.cpu + ',"orbs":' + dataCollection.data.orbs + '}}';

                localStorage.setItem('spaceblaster_inventory', saveJSON);

                console.log('saved ship');

        }
    },
    onError: function () {
        errorSound.play();
    },
    onItemBought: function () {
        cashSound.play();
    },
    popupHandler: function (type, shipName) {


        if (type == "success")
        {
            popupText.text = "Purchased " + shipName;
        } else if (type == "owned") {
            popupText.text = "You already own " + shipName;
            this.onError();
        } else {
            popupText.text = "Not Enough Resources to buy " + shipName;
        }

        var fadeTween = this.game.add.tween(popupText).to({
            alpha: 1
        }, 700, Phaser.Easing.Linear.None, true, 0, 0, true);
        fadeTween.onComplete.addOnce(function() {
            fadeTween.to({
                alpha: 0
            }, 300, Phaser.Easing.Linear.None, true, 0, 0, true);
        }, this);
        fadeTween.start();

    }
}