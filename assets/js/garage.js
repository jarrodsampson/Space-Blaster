 var garage = function(game) {}

garage.prototype = {
    create: function() {
        var w = 800,
            h = 600; // height and width of screen size

              

        // The scrolling starfield background
        starfield = this.game.add.tileSprite(0, 0, 800, 600, 'main');

        var itemsStored;
        var shipSpecsData = JSON.parse(this.game.cache.getText('shipSpecs'));

        var textDisplayGroup = this.game.add.physicsGroup();
        textDisplayGroup.alpha = 0;

        var startGameText = this.game.add.text(w/2, h/2 - 250, 'Garage', { font: '40px Orbitron', fill: '#ffffff' }, textDisplayGroup);  
  		startGameText.anchor.setTo(0.5,0.5);

  		backButton = this.add.sprite(50,50,"backButton");
        backButton.anchor.setTo(0.5,0.5);
        backButton.scale.setTo(0.3, 0.3);
        backButton.inputEnabled = true;
	    backButton.input.useHandCursor = true;
	    backButton.events.onInputUp.add(this.mainMenu, this);

	    // get your garage data
	    // set inventory items
        if (localStorage.getItem('spaceblaster_inventory') !== null) {
            itemsStored = JSON.parse(localStorage.getItem('spaceblaster_inventory'));
        }

        var inventoryTitle = this.game.add.text(w/2 + 0, h/2 - 150, "Inventory", {
            font: '30px Helvetica',
            fill: '#ffffff'
        }, textDisplayGroup);
        inventoryTitle.anchor.setTo(0.5, 0.5);


        // collection items
        var fireCol = this.game.add.sprite(w/2 - 280, h/2 - 100, 'fire');
        var fuelCol = this.game.add.sprite(w/2 - 170, h/2 - 100, 'fuel');
        var rocketCol = this.game.add.sprite(w/2 - 60, h/2 - 100, 'rocket');
        var cpuCol = this.game.add.sprite(w/2 + 60, h/2 - 100, 'cpu');
        var wrenchCol = this.game.add.sprite(w/2 + 170, h/2 - 100, 'wrench');
        var orbCol = this.game.add.sprite(w/2 + 280, h/2 - 100, 'star');

        // text displayed underneath of gains
        var fireText = this.game.add.text(w/2 - 280 - 2, h/2 - 100 + 40,
            "+ " + itemsStored.data.fire, {
                font: '18px Helvetica',
                fill: '#fff'
            },
            textDisplayGroup
        );

        var fuelText = this.game.add.text(w/2 - 170 - 2, h/2 - 100 + 40,
            "+ " + itemsStored.data.fuel, {
                font: '18px Helvetica',
                fill: '#fff'
            },
            textDisplayGroup
        );

        var rocketText = this.game.add.text(w/2 - 60 - 2, h/2 - 100 + 40,
            "+ " + itemsStored.data.rocket, {
                font: '18px Helvetica',
                fill: '#fff'
            },
            textDisplayGroup
        );

        var cpuText = this.game.add.text(w/2 + 60 - 2, h/2 - 100 + 40,
            "+ " + itemsStored.data.cpu, {
                font: '18px Helvetica',
                fill: '#fff'
            },
            textDisplayGroup
        );

        var wrenchText = this.game.add.text(w/2 + 170 - 2, h/2 - 100 + 40,
            "+ " + itemsStored.data.wrench, {
                font: '18px Helvetica',
                fill: '#fff'
            },
            textDisplayGroup
        );

        var orbText = this.game.add.text(w/2 + 280 - 2, h/2 - 100 + 40,
            "+ " + itemsStored.data.orbs, {
                font: '18px Helvetica',
                fill: '#fff'
            },
            textDisplayGroup
        );

        

        var garageButton = this.game.add.text(w/2 + 0, h/2 + 50, "Your Ship", {
            font: '30px Helvetica',
            fill: '#ffffff'
        }, textDisplayGroup);
        garageButton.anchor.setTo(0.5, 0.5);

        var shipNumber = itemsStored.data.ship + 1;
        var ship = this.game.add.sprite(w/2 - 70, h/2 + 100, 'ship' + shipNumber);

        var shipName = this.game.add.text(w/2 + 70, h/2 + 115, shipSpecsData.shipData.ships[shipNumber - 1].name, {font: '30px Helvetica',fill: '#ffffff'}, textDisplayGroup);
        shipName.anchor.setTo(0.5, 0.5);

        

        // Adding the fading animations to the stars and rocks
        this.game.add.tween(textDisplayGroup).to({
            alpha: 1
        }, 1000, Phaser.Easing.Linear.None, true, 0, 0, true);


        // set storage
        if (localStorage.getItem('spaceblaster_highscores') === null) {
            localStorage.setItem('spaceblaster_highscores', "[]");
            console.log("Added HighScores");
        }

        if (localStorage.getItem('spaceblaster_bestScore') === null) {
            localStorage.setItem('spaceblaster_bestScore', "");
            console.log("Added BestScore");
        }

        // set inventory items
        if (localStorage.getItem('spaceblaster_inventory') === null) {
            localStorage.setItem('spaceblaster_inventory', '{"data":{"ship":0,"fuel":0,"fire":0,"wrench":0,"rocket":0,"cpu":0,"orbs":0}}');
            console.log("Added Inventory");
            console.log(JSON.parse(localStorage.getItem('spaceblaster_inventory')));

        } else {
            console.log(JSON.parse(localStorage.getItem('spaceblaster_inventory')));
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
	}
}