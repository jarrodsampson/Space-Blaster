var preload = function(game){var loadingBar = "";var mainMusicSound = "";}
 
preload.prototype = {
	preload: function(){ 
          loadingBar = this.add.sprite(160,240,"loading");
          loadingBar.anchor.setTo(0.5,0.5);
          loadingBar.alpha = 0;
          this.load.setPreloadSprite(loadingBar);
		this.game.load.baseURL = 'assets/';
	    this.game.load.crossOrigin = 'anonymous';

	    this.game.load.image('starfield', 'backgrounds/starfield.png');
	    this.game.load.image('main', 'backgrounds/main.png');
	    this.game.load.image('platform', 'backgrounds/platform1.jpg');
	    this.game.load.image('star', 'game/orb.png');
	    this.game.load.image('rock', 'game/asteroid1.png');
	    this.game.load.image('trash', 'game/trashpile.png');
	    this.game.load.image('healthLife', 'game/heart.png');
	    this.game.load.spritesheet('kaboom', 'game/explode.png', 128, 128);
	    this.game.load.image('trophy', 'game/trophy.png');
	    this.game.load.image('soundIcon', 'game/soundIcon.png');
	    this.game.load.image('soundIconDisabled', 'game/soundIconDisabled.png');
	    this.game.load.image('backButton', 'game/backButton.png');

	    // game menu
	    this.game.load.spritesheet('menu', 'game/fullMenu.png', 800, 800);
		// game levels
		this.game.load.text('levels', 'game/levels.json');
	    // bonus levels
	    this.game.load.text('bonusLevels', 'game/bonus_levels.json');
	    // ship specs
	    this.game.load.text('shipSpecs', 'game/shipspecs.json');

	    // game ships
	    this.game.load.image('ship1', 'game/ship.png');
	    this.game.load.image('ship2', 'game/ship2.png');
	    this.game.load.image('ship3', 'game/ship3.png');
	    this.game.load.image('ship4', 'game/ship4.png');

	    // game lazers
	    this.game.load.image('lazer1', 'game/lazer1.png');
	    this.game.load.image('lazer2', 'game/lazer2.png');
	    this.game.load.image('lazer3', 'game/lazer3.png');
	    this.game.load.image('lazer4', 'game/lazer4.png');
	    this.game.load.image('lazer5', 'game/lazer5.png');

	    // inventory items
	    this.game.load.image('fuel', 'game/fuel.png');
	    this.game.load.image('fire', 'game/fire.png');
	    this.game.load.image('wrench', 'game/wrench.png');
	    this.game.load.image('rocket', 'game/rocket.png');
	    this.game.load.image('cpu', 'game/cpu.png');

	    
	    // game audio
	    this.game.load.audio('blast', ['audio/blaster.mp3']);

	    // game explosions
	    this.game.load.audio('explosion', ['audio/explosion.mp3']);
	    this.game.load.audio('icebeam', ['audio/ice.mp3']);
	    this.game.load.audio('bluebeam', ['audio/bluebeam.mp3']);

	    // music jukebox
	    this.game.load.audio('song1', ['audio/feronia.mp3']);
	    this.game.load.audio('song2', ['audio/rain.mp3']);
	    this.game.load.audio('song3', ['audio/casepoint.mp3']);
	    this.game.load.audio('song4', ['audio/moments.mp3']);


	    this.game.load.audio('healthpacksound', ['audio/healthcollect.mp3']);
	    this.game.load.audio('winsong', ['audio/winsong.mp3']);
	    this.game.load.audio('timesupsound', ['audio/timesup.mp3']);
	    this.game.load.audio('nextLevelSound', ['audio/nextlevel.mp3']);
	    this.game.load.audio('livesLost', ['audio/warning.mp3']);
	    this.game.load.audio('orbhit', ['audio/orbhit.mp3']);
	    this.game.load.audio('crowdBoo', ['audio/boo.mp3']);
	    this.game.load.audio('button', ['audio/button.mp3']);
	    this.game.load.audio('mainMusic', ['audio/mainMusic.mp3']);
	    this.game.load.audio('error', ['audio/error.mp3']);
	    this.game.load.audio('cashSound', ['audio/cash.mp3']);
	    
	},
  	create: function(){

  		mainMusicSound = this.game.add.audio('mainMusic');
  		mainMusicSound.volume = 0;
  		this.game.add.tween(mainMusicSound).to({volume:0.3}, 6500, null, true);
  		mainMusicSound.play('', 0, 1, true);
        mainMusicSound.onLoop.add(this.playMainMusic, this);


  		var brandText = this.game.add.text(w/2, h/2 - 50, 'Planlodge Games', { font: '65px Dancing Script', fill: '#ffffff' });  
  		brandText.anchor.setTo(0.5,0.5);
		brandText.alpha = 0;

        // Adding the fading animations to the stars and rocks
        this.game.add.tween(brandText).to({
            alpha: 1
        }, 1000, Phaser.Easing.Linear.None, true, 0, 0, true);


  		this.game.time.events.add(Phaser.Timer.SECOND * 3,function () {this.game.state.start("GameTitle"); }, this);
	},
	playMainMusic: function() {
        mainMusicSound.play('', 0, 1, true);
    }
}