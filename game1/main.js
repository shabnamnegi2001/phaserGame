import './style.css'
import Phaser from 'phaser'

const sizes ={
 width:500,
height:500
}

const speedDown = 300;

class gameScene extends Phaser.Scene{
    constructor() {
        super("scene-game")
    }
    preload() {
        this.load.image("bg", "./public/assets/fantasy/Tiles/game1/public/assets/fantasy/Tiles/Beach_Tile.png")
    }
    create() {
        this.add.image(0,0, "bg")
    }
    update() {
        
    }
}

const config = {
    type: Phaser.WEBGL,
    width: sizes.width,
    height: sizes.height,
    canvas:gameCanvas,
    physics:{
        default:"arcade",
        arcade:{
            gravity:{speedDown},
            debug: true
        }
    }
}

const game = new Phaser.Game(config)