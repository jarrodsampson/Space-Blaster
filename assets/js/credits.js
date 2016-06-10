var theCredits = function(game){
	console.log("Credits Loaded");
};
  
theCredits.prototype = {
	preload: function(){
          
	},
  	create: function(){


  		var descriptionText = "Fly through outter space as you take on various \nasteriods while collecting various items \nto build better ships and return home. \nGet through bonus rounds and hop your \nway through this space-themed game edition.";
		
  		// The scrolling starfield background
        starfield = this.game.add.tileSprite(0, 0, 800, 600, 'main');

        var startGameText = this.game.add.text(w/2, h/2 - 250, 'About', { font: '40px Orbitron', fill: '#ffffff' });  
  		startGameText.anchor.setTo(0.5,0.5);

  		var createdby = this.game.add.text(w/2, h/2 - 150, 'Created By: Jarrod Sampson', { font: '32px Helvetica', fill: '#ffffff' });  
  		createdby.anchor.setTo(0.5,0.5);

  		var description = this.game.add.text(w/2, h/2 + 50, descriptionText, { font: '26px Helvetica', fill: '#ffffff'});  
  		description.anchor.setTo(0.5,0.5);

  		var ourWebsite = this.game.add.text(w/2, h/2 + 250, 'Visit My Website: Planlodge.com', { font: '32px Helvetica', fill: '#ffffff' });  
  		ourWebsite.anchor.setTo(0.5,0.5);
  		ourWebsite.inputEnabled = true;
	    ourWebsite.input.useHandCursor = true;
	    ourWebsite.events.onInputUp.add(this.website, this);

        backButton = this.add.sprite(50,50,"backButton");
        backButton.anchor.setTo(0.5,0.5);
        backButton.scale.setTo(0.3, 0.3);
        backButton.inputEnabled = true;
	    backButton.input.useHandCursor = true;
	    backButton.events.onInputUp.add(this.mainMenu, this);
		
	},
	update: function(){
          //  Scroll the background
        //starfield.tilePosition.y += 2;
        //starfield.tilePosition.x += 3;
	},
	website: function(){
          window.open("http://www.planlodge.com", "_blank");
	},
	mainMenu: function(){
          buttonSound.play();
          this.game.state.start("GameTitle");
	}
}