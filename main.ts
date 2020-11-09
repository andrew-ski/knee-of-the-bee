namespace SpriteKind {
    export const Spawn = SpriteKind.create()
    export const Yellow = SpriteKind.create()
    export const Red = SpriteKind.create()
}
function spawnHive (mySprite: Sprite) {
    Bee = sprites.create(img`
        5 5 5 
        f f f 
        5 5 5 
        f f f 
        . 5 . 
        `, SpriteKind.Yellow)
    Bee.setPosition(mySprite.x - 50 + RandSpawn * 15, mySprite.y + 5)
    Bee.setVelocity(0, BeeSpeed)
    RandSpawn = randint(1, 5)
    if (randint(1, 10) <= RedChance) {
        EneBee = sprites.create(img`
            2 2 2 
            f f f 
            2 2 2 
            f f f 
            . 2 . 
            `, SpriteKind.Red)
        EneBee.setVelocity(0, BeeSpeed)
        EneBee.setPosition(mySprite.x - 50 + RandSpawn * 15, mySprite.y + 5)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Yellow, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
info.onCountdownEnd(function () {
    pause(100)
    for (let value of sprites.allOfKind(SpriteKind.Yellow)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Red)) {
        value.destroy()
    }
    Pause = 1
    CurrentRound = info.score() - LastRound
    if (info.score() < Threshold) {
        info.changeLifeBy(-1)
    }
    Round += 1
    if (Round == 2 || (Round == 4 || (Round == 6 || Round == 8))) {
        RedChance += 1
    } else {
        if (Round >= 200) {
            refreshspeed += -50
        }
    }
    Threshold = Round * 20
    BeeSpeed += 10
    game.showLongText("You caught " + CurrentRound + " bees!", DialogLayout.Bottom)
    game.showLongText("Catch at least " + Threshold + " bees!", DialogLayout.Bottom)
    game.showLongText("Round: " + Round, DialogLayout.Bottom)
    LastRound = info.score()
    Pause = 0
    info.startCountdown(15)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Red, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let EneBee: Sprite = null
let RandSpawn = 0
let Bee: Sprite = null
let LastRound = 0
let CurrentRound = 0
let RedChance = 0
let BeeSpeed = 0
let Pause = 0
let Threshold = 0
let Round = 0
scene.setBackgroundColor(7)
tiles.setTilemap(tiles.createTilemap(hex`0c000c00000000000000000000000000000000000000000000000000000002000000010000000000000000000000000000000000000000000000000000020000000000000000000000000000000000010000000000000000000000000000000000000000000000000000020000000000000000000000000000010000000000000000000000000000000002000000000000000000`, img`
    2 2 2 2 2 2 2 2 2 2 2 2 
    2 . . . . . . . . . . 2 
    2 . . . . . . . . . . 2 
    2 . . . . . . . . . . 2 
    2 . . . . . . . . . . 2 
    2 . . . . . . . . . . 2 
    2 . . . . . . . . . . 2 
    2 . . . . . . . . . . 2 
    2 . . . . . . . . . . 2 
    2 . . . . . . . . . . 2 
    2 . . . . . . . . . . 2 
    2 . . . . . . . . . . 2 
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile2], TileScale.Sixteen))
scene.centerCameraAt(96, 0)
info.setScore(0)
info.setLife(3)
Round = 1
Threshold = Round * 20
game.showLongText("Catch at least " + Threshold + " bees!", DialogLayout.Bottom)
game.showLongText("Round: " + Round, DialogLayout.Bottom)
game.showLongText("Press A to start the game", DialogLayout.Bottom)
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
Hero.setPosition(90, 100)
controller.moveSprite(Hero, 100, 0)
let Hive = sprites.create(img`
    77777777777777777777777777777777
    77777777776667777777776677777776
    6677777766fff667776666ff6777776f
    ff666666ffeeeff666ffffeef67776f.
    .fffffffeeeeeeefffeeeeeeef676f..
    .......ffeeeeeeeeeeeeeeeecf6f...
    ........fbeeeeefffceeeeeecff....
    ........fbeeeef555fceeeeecf.....
    ........fbeeeef444fceeeeecf.....
    ........fbeeef55555fceeeecf.....
    .........fbeef44444fceeeecf.....
    .........fbef55ff555fceeecf.....
    .........fbef44ff444fceeecf.....
    ........fbeeeff444ffceeecf......
    ........fbeeeeefffceeeeecf......
    ........fbeeeeeeeeeeeeeecf......
    ........fbeeeeeeeeeeeeeecf......
    ........fbeeeeeeeeeeeeeecf......
    ........fbeeeeeeeeeeeeeecf......
    ........fbeeeeeeeeeeeeeecf......
    ........fbeeeeeeeeeeeeeecf......
    ........fbeeeeeeeeeeeeeeecf.....
    .......fbeeeeeeeeeeeeeeeecf.....
    ......fbeeeeeeeeeeeeeeeeeecf....
    .....fbeeeeeeeeeeeeeeeeeeecf....
    ....fbeeeeeeeeeeeeeeeeeeeeecf...
    `, SpriteKind.Spawn)
let Hive2 = sprites.create(img`
    77777777777777777777777777777777
    77777777776667777777776677777776
    6677777766fff667776666ff6777776f
    ff666666ffeeeff666ffffeef67776f.
    .fffffffeeeeeeefffeeeeeeef676f..
    .......ffeeeeeeeeeeeeeeeecf6f...
    ........fbeeeeefffceeeeeecff....
    ........fbeeeef555fceeeeecf.....
    ........fbeeeef444fceeeeecf.....
    ........fbeeef55555fceeeecf.....
    .........fbeef44444fceeeecf.....
    .........fbef55ff555fceeecf.....
    .........fbef44ff444fceeecf.....
    ........fbeeeff444ffceeecf......
    ........fbeeeeefffceeeeecf......
    ........fbeeeeeeeeeeeeeecf......
    ........fbeeeeeeeeeeeeeecf......
    ........fbeeeeeeeeeeeeeecf......
    ........fbeeeeeeeeeeeeeecf......
    ........fbeeeeeeeeeeeeeecf......
    ........fbeeeeeeeeeeeeeecf......
    ........fbeeeeeeeeeeeeeeecf.....
    .......fbeeeeeeeeeeeeeeeecf.....
    ......fbeeeeeeeeeeeeeeeeeecf....
    .....fbeeeeeeeeeeeeeeeeeeecf....
    ....fbeeeeeeeeeeeeeeeeeeeeecf...
    `, SpriteKind.Spawn)
let Hive3 = sprites.create(img`
    77777777777777777777777777777777
    77777777776667777777776677777776
    6677777766fff667776666ff6777776f
    ff666666ffeeeff666ffffeef67776f.
    .fffffffeeeeeeefffeeeeeeef676f..
    .......ffeeeeeeeeeeeeeeeecf6f...
    ........fbeeeeefffceeeeeecff....
    ........fbeeeef555fceeeeecf.....
    ........fbeeeef444fceeeeecf.....
    ........fbeeef55555fceeeecf.....
    .........fbeef44444fceeeecf.....
    .........fbef55ff555fceeecf.....
    .........fbef44ff444fceeecf.....
    ........fbeeeff444ffceeecf......
    ........fbeeeeefffceeeeecf......
    ........fbeeeeeeeeeeeeeecf......
    ........fbeeeeeeeeeeeeeecf......
    ........fbeeeeeeeeeeeeeecf......
    ........fbeeeeeeeeeeeeeecf......
    ........fbeeeeeeeeeeeeeecf......
    ........fbeeeeeeeeeeeeeecf......
    ........fbeeeeeeeeeeeeeeecf.....
    .......fbeeeeeeeeeeeeeeeecf.....
    ......fbeeeeeeeeeeeeeeeeeecf....
    .....fbeeeeeeeeeeeeeeeeeeecf....
    ....fbeeeeeeeeeeeeeeeeeeeeecf...
    `, SpriteKind.Spawn)
Hive.setPosition(95, 12)
Hive2.setPosition(48, 12)
Hive3.setPosition(144, 12)
info.startCountdown(15)
Pause = 0
BeeSpeed = 25
let refreshspeed = 500
RedChance = 0
CurrentRound = 0
LastRound = 0
game.onUpdateInterval(refreshspeed, function () {
    if (Pause == 0) {
        spawnHive(Hive)
        spawnHive(Hive2)
        spawnHive(Hive3)
    }
})
