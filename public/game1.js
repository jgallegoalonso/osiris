var game = new Phaser.Game(1000, 428, Phaser.AUTO, 'game1', { preload:preload, create: create, update: update });
 
function preload() {
    game.load.image('papiro','./img/papiro.png');
    game.load.image('piramide','./img/piramide.png');
    game.load.image('ojo','./img/ojo2.png');
    game.load.spritesheet('protagonista', 'img/escarabajo.png', 177, 121, 2);
}
 
function create() {
    game.world.setBounds(0, 0, 1000, 428);
   game.physics.startSystem(Phaser.Physics.ARCADE);
   fondo = game.add.sprite(0, 0, 'papiro');
   prota = game.add.sprite(game.world.centerX,   game.world.centerY, 'protagonista'); 
    prota.animations.add('walk');

    prota.animations.play('walk', 50, true);
    ojo =game.add.sprite(709,115,'ojo');
    ojo.inputEnabled = true;
    ojo.events.onInputDown.add(app.ojo, this);
    prota.anchor.set(0.5);
    
   
   game.physics.arcade.enable(prota); 
   hola = game.add.text(game.world.width/2, game.world.height/2, "Juego con Phaser!!!", {font: 'Bold 40px Arial', fill: '#FFF' });
    hola.anchor.x=0.5;
    hola.anchor.y=0.5;
}
function update() {
    //  If the sprite is > 8px away from the pointer then let's move to it
    if (game.physics.arcade.distanceToPointer(prota, game.input.activePointer) > 8)
    {
        //  Make the object seek to the active pointer (mouse or touch).
        game.physics.arcade.moveToPointer(prota, 300);
    }
    else
    {
        //  Otherwise turn off velocity because we're close enough to the pointer
        prota.body.velocity.set(0);
    }
}