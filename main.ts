namespace SpriteKind {
    export const Spawn = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
info.onCountdownEnd(function () {
    Pause = 1
    pause(1000)
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.destroy()
    }
    if (info.score() < Threshold) {
        info.changeLifeBy(-1)
    }
    Round += 1
    Threshold = Round * 45
    BeeSpeed += 10
    game.showLongText("Round: " + Round, DialogLayout.Bottom)
    game.showLongText("Catch at least " + Threshold + "bees!", DialogLayout.Bottom)
    Pause = 0
    info.startCountdown(10)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy(effects.rings, 100)
    info.changeScoreBy(1)
})
let Bee: Sprite = null
let RandSpawn = 0
let Pause = 0
let Threshold = 0
let Round = 0
scene.setBackgroundColor(7)
info.setScore(0)
info.setLife(3)
Round = 1
Threshold = Round * 45
game.showLongText("Catch at least " + Threshold + " bees!", DialogLayout.Bottom)
game.showLongText("Round: " + Round, DialogLayout.Bottom)
game.showLongText("Press A to start the game", DialogLayout.Bottom)
info.startCountdown(15)
let Hero = sprites.create(img`
    . . . b b b b b c . . . 
    . . b . 1 . 1 . 1 c . . 
    . b . 1 . 1 . 1 . 1 c . 
    . b 1 . 1 . 1 . 1 . c . 
    . . b 1 . 1 . 1 . c . . 
    . . . b b b b c c . . . 
    . . . . . b c . . . . . 
    . . . . f f f f . . . . 
    . . f f e e e e f f . . 
    . f e e e e e e e f f . 
    f f e f e e e e e e f f 
    f f f e e e e e e e e f 
    f f f e e e e e e f e f 
    f f f f e e e e f f f f 
    f f f f f f f f f f f f 
    f f f f f f f f f f f f 
    . f f f f f f f f f f . 
    . e f f f f f f f f e . 
    e 4 f b b b b b b f 4 e 
    4 d f d d d d d d c d 4 
    4 4 f 6 6 6 6 6 6 f 4 4 
    . . . 8 8 8 8 8 8 . . . 
    . . . 8 8 . . 8 8 . . . 
    `, SpriteKind.Player)
Hero.setPosition(80, 96)
let Hive = sprites.create(img`
    .....6feeeeeeeeeef6.....
    ....6776eeeeeeeee676....
    ...6777666eeee6667776...
    ..6776ee67777777667776..
    ...668ee7768867788666...
    ......ee77eeee67ee......
    ......ee6eeeeee6ce......
    ......eefeeeeeeece......
    ......eeceeeeeeece......
    ......eecefffeeefe......
    ......eecf555feefe......
    ......eeef444feefe......
    ......eef55555fece......
    .....6eef44444fece6.....
    ....677f55ff555fe676....
    ...6776f44ff444f66776...
    ..6776eeff444ff7667776..
    ...668ce77fff67788666...
    ......ce77eeee67ee......
    ......eeeeeeeeeeee......
    ......eeeeeeeeeeee......
    ......eeeeeeeeeeee......
    ......eeeeeeeeeeee......
    ......eeeeeeeeeeee......
    ......eeeeeeeeeeee......
    ......eeeeeeeeeeee......
    ......beeeeeeeeeeb......
    .......beeeeeeeeb.......
    ........beeeeeeb........
    ........................
    ........................
    ........................
    `, SpriteKind.Spawn)
controller.moveSprite(Hero, 100, 0)
Hive.setPosition(80, 20)
Pause = 0
let BeeSpeed = 25
game.onUpdateInterval(200, function () {
    if (Pause == 0) {
        RandSpawn = randint(1, 5)
        Bee = sprites.create(img`
            . 5 5 5 . 
            f f f f f 
            5 5 5 5 5 
            f f f f f 
            . 5 5 5 . 
            f . . . f 
            `, SpriteKind.Enemy)
        Bee.setVelocity(0, BeeSpeed)
        Bee.setPosition(Hive.x - 25 + RandSpawn * 10, Hive.y + 5)
    }
})
