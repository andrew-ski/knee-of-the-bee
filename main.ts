namespace SpriteKind {
    export const Spawn = SpriteKind.create()
    export const Yellow = SpriteKind.create()
    export const Red = SpriteKind.create()
    export const BugNet = SpriteKind.create()
    export const Player2 = SpriteKind.create()
}
function spawnHive (mySprite: Sprite) {
    RandSpawn = randint(-1, 5)
    Bee = sprites.create(img`
        . . f f f . . 
        1 1 5 5 5 5 1 
        1 1 f f f 1 1 
        . 1 5 5 5 1 . 
        . f f f f f . 
        . . 5 5 5 . . 
        . f . . . f . 
        `, SpriteKind.Yellow)
    Bee.z = 6
    Bee.setPosition(mySprite.x - 10 + RandSpawn * 5, mySprite.y + 5)
    Bee.setVelocity(0, BeeSpeed + randint(-5, 5))
    if (randint(1, 10) <= RedChance) {
        EneBee = sprites.create(img`
            . . f f f . . 
            1 1 2 2 2 1 1 
            1 1 f f f 1 1 
            1 2 2 2 2 2 1 
            . f f f f f . 
            . . 2 2 2 . . 
            . f . . . f . 
            `, SpriteKind.Red)
        EneBee.setVelocity(0, BeeSpeed + randint(-5, 5))
        EneBee.setPosition(mySprite.x - 10 + RandSpawn * 5, mySprite.y + 5)
        EneBee.z = 6
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.player1.hasLife() && Net1Swing == false) {
        Net1Swing = true
        animation.runImageAnimation(
        Net,
        [img`
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..........................cc..
            .........................cc1b.
            ........................cc1.bb
            .......................cc1.b1b
            ......................cc1.b1.b
            ......................c1.b1.1b
            .......................cb1.1.b
            ........................b.1.1b
            .........................bb1.b
            ...........................bb.
            `,img`
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ........................ccc...
            .......................cc1c...
            ......................cc1.bb..
            .....................cc1.b1.b.
            ....................cc1.b1.1b.
            ....................c1.b1.1.b.
            .....................cb1.1.1b.
            .....................cb.1.1.b.
            ....................cbb1.1.1b.
            ...................cb..b1.1b..
            ..................cb....bbb...
            .................cb...........
            ..............................
            `,img`
            ..............................
            ..............................
            ...............cccc...........
            ...............b.1.bb.........
            ...............b1.1.1b........
            ...............b.1.1.1b.......
            ...............b1.1.1.1b......
            ...............b1.1.1.1b......
            ...............b.1.1.1b.......
            ...............b1.1.1.b.......
            ...............b.1bbbb........
            ...............cbb............
            ...............cb.............
            ...............cb.............
            ...............cb.............
            ...............cb.............
            ...............cb.............
            ..............................
            `,img`
            ..............................
            ..............................
            ..............................
            ..............................
            .........bbb..................
            ........b.1.b.................
            .......b.1.1.b................
            .......cb.1.1.b...............
            .......c.b.1.1b...............
            .......c1.b.1.b...............
            ........c1.b.1b...............
            .........c1.bb................
            ..........ccb.................
            ............cb................
            .............cb...............
            ..............cb..............
            ...............cb.............
            ..............................
            `,img`
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            .....bbb......................
            ....b.1.b.....................
            ....b1.1.b....................
            .....c1.1.b...................
            ......c1.1b...................
            .......c1.b...................
            ........cb....................
            `,img`
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            `],
        100,
        false
        )
        pause(600)
        Net1Swing = false
    }
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (info.player2.hasLife() && Net2Swing == false) {
        Net2Swing = true
        animation.runImageAnimation(
        Net2,
        [img`
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..........................88..
            .........................8816.
            ........................881.66
            .......................881.616
            ......................881.61.6
            ......................81.61.16
            .......................861.1.6
            ........................6.1.16
            .........................661.6
            ...........................66.
            `,img`
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ........................888...
            .......................8818...
            ......................881.66..
            .....................881.61.6.
            ....................881.61.16.
            ....................81.61.1.6.
            .....................861.1.16.
            .....................86.1.1.6.
            ....................8661.1.16.
            ...................86..61.16..
            ..................86....666...
            .................86...........
            ..............................
            `,img`
            ..............................
            ..............................
            ...............8888...........
            ...............6.1.66.........
            ...............61.1.16........
            ...............6.1.1.16.......
            ...............61.1.1.16......
            ...............61.1.1.16......
            ...............6.1.1.16.......
            ...............61.1.1.6.......
            ...............6.16666........
            ...............866............
            ...............86.............
            ...............86.............
            ...............86.............
            ...............86.............
            ...............86.............
            ..............................
            `,img`
            ..............................
            ..............................
            ..............................
            ..............................
            .........666..................
            ........6.1.6.................
            .......6.1.1.6................
            .......86.1.1.6...............
            .......8.6.1.16...............
            .......81.6.1.6...............
            ........81.6.16...............
            .........81.66................
            ..........886.................
            ............86................
            .............86...............
            ..............86..............
            ...............86.............
            ..............................
            `,img`
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            .....666......................
            ....6.1.6.....................
            ....61.1.6....................
            .....81.1.6...................
            ......81.16...................
            .......81.6...................
            ........86....................
            `,img`
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            `],
        100,
        false
        )
        pause(600)
        Net2Swing = false
    }
})
scene.onHitWall(SpriteKind.Red, function (sprite, location) {
    sprite.destroy()
})
info.onCountdownEnd(function () {
    pause(200)
    Pause = 1
    Net.destroy()
    Net = sprites.create(img`
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        `, SpriteKind.BugNet)
    for (let value of sprites.allOfKind(SpriteKind.Yellow)) {
        value.destroy()
    }
    for (let value2 of sprites.allOfKind(SpriteKind.Red)) {
        value2.destroy()
    }
    if (Players == 2) {
        CombinedScore = info.player1.score() + info.player2.score()
    } else {
        CombinedScore = info.player1.score()
    }
    CurrentRound = CombinedScore - LastRound
    if (CombinedScore < Threshold) {
        pause(1000)
        game.showLongText("You need Bees... You didn't get enough Bees...", DialogLayout.Bottom)
        game.showLongText("Score: " + CombinedScore, DialogLayout.Bottom)
        game.reset()
    }
    Round += 1
    if (Round == 2 || (Round == 4 || (Round == 6 || Round == 8))) {
        RedChance += 1
    } else {
        if (Round >= 150) {
            refreshspeed += -50
        }
    }
    if (Players == 2) {
        Threshold = Round * 35
        Net2.destroy()
        Net2 = sprites.create(img`
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            `, SpriteKind.BugNet)
    } else {
        Threshold = Round * 25
    }
    BeeSpeed += 10
    game.showLongText("You caught " + CurrentRound + " bees!", DialogLayout.Bottom)
    if (Threshold - CombinedScore < 1) {
        game.showLongText("Catch as many bees as you can!", DialogLayout.Bottom)
    } else {
        game.showLongText("Catch at least " + (Threshold - CombinedScore) + " bees!", DialogLayout.Bottom)
    }
    game.showLongText("Round: " + Round, DialogLayout.Bottom)
    LastRound = CombinedScore
    Pause = 0
    info.startCountdown(15)
})
sprites.onOverlap(SpriteKind.BugNet, SpriteKind.Yellow, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (sprite == Net) {
        info.player1.changeScoreBy(1)
    } else if (sprite == Net2) {
        info.player2.changeScoreBy(1)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Red, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (Players == 2) {
        if (sprite == Hero) {
            info.player1.changeLifeBy(-1)
        } else if (sprite == Hero2) {
            info.player2.changeLifeBy(-1)
        }
        if (info.player1.life() == 0) {
            Hero.destroy()
        }
        if (info.player2.life() == 0) {
            Hero2.destroy()
        }
        if (info.player1.life() == 0 && info.player2.life() == 0) {
            pause(1000)
            game.showLongText("You died... What an (anaphylactic) shock!", DialogLayout.Bottom)
            game.showLongText("Score: " + CombinedScore, DialogLayout.Bottom)
            game.reset()
        }
    } else {
        info.player1.changeLifeBy(-1)
        if (info.player1.life() == 0) {
            game.over(false)
        }
    }
})
scene.onHitWall(SpriteKind.Yellow, function (sprite, location) {
    sprite.destroy()
})
let Net2Swing = false
let Net1Swing = false
let EneBee: Sprite = null
let Bee: Sprite = null
let RandSpawn = 0
let Net: Sprite = null
let Hero: Sprite = null
let CombinedScore = 0
let Net2: Sprite = null
let Hero2: Sprite = null
let Threshold = 0
let Players = 0
let Round = 0
let LastRound = 0
let CurrentRound = 0
let RedChance = 0
let BeeSpeed = 0
let Pause = 0
scene.centerCameraAt(96, 0)
scene.setBackgroundColor(7)
tiles.setTilemap(tiles.createTilemap(hex`0c000900000000000000000000000000000000000300000000000000000002000000010000000300000000000000000000000000000000000000000000020000000000000000030000000000000000010000000000000000000000000000000000000000000003000000020000000000`, img`
    2 2 2 2 2 2 2 2 2 2 2 2 
    2 . . . . . . . . . . 2 
    2 . . . . . . . . . . 2 
    2 . . . . . . . . . . 2 
    2 . . . . . . . . . . 2 
    2 . . . . . . . . . . 2 
    2 . . . . . . . . . . 2 
    2 . . . . . . . . . . 2 
    2 2 2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3], TileScale.Sixteen))
game.setDialogCursor(img`
    . . f f f . . 
    1 1 5 5 5 5 1 
    1 1 f f f 1 1 
    . 1 5 5 5 1 . 
    . f f f f f . 
    . . 5 5 5 . . 
    . f . . . f . 
    `)
game.setDialogFrame(img`
    e e e e e e e e e e e e e e e 
    e 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
    e 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
    e 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
    e 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
    e 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
    e 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
    e 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
    e 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
    e 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
    e 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
    e 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
    e 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
    e 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
    e e e e e e e e e e e e e e e 
    `)
game.showLongText("You need Bees! Use your Bug Net (A) to catch as many Honey Bees as you can in 15s. Avoid Killer Bees!", DialogLayout.Bottom)
Pause = 0
BeeSpeed = 25
let refreshspeed = 500
RedChance = 0
CurrentRound = 0
LastRound = 0
Round = 1
if (game.askForNumber("One or Two player?") == 2) {
    Players = 2
} else {
    Players = 1
}
if (Players == 2) {
    info.player2.setLife(3)
    info.player2.setScore(0)
    Threshold = Round * 35
    Hero2 = sprites.create(img`
        . . . 8 8 8 8 . . . 
        . 8 8 6 6 6 6 8 8 . 
        8 6 6 1 1 1 1 6 8 8 
        8 1 1 6 1 1 1 1 6 8 
        8 6 1 1 1 1 1 6 1 8 
        8 6 1 1 6 1 1 1 6 8 
        8 6 6 6 6 6 6 6 6 8 
        6 8 8 8 8 8 8 8 8 6 
        . 6 8 8 8 8 8 8 6 . 
        . . . 6 8 8 6 . . . 
        . . 8 8 8 8 8 8 8 . 
        8 8 6 6 6 6 6 6 8 8 
        8 6 6 1 1 1 1 6 6 8 
        1 1 6 1 1 1 1 6 1 1 
        . . 1 1 6 6 1 1 . . 
        . . 8 8 . . 8 8 . . 
        `, SpriteKind.Player)
    Net2 = sprites.create(img`
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        `, SpriteKind.BugNet)
    Hero2.setPosition(100, 100)
    Hero2.z = 5
    Net2.z = 4
    CombinedScore = info.player1.score() + info.player2.score()
    controller.player2.moveSprite(Hero2, 100, 0)
} else {
    Threshold = Round * 25
}
CombinedScore = info.player1.score()
info.player1.setLife(3)
info.player1.setScore(0)
game.showLongText("Catch at least " + Threshold + " bees!", DialogLayout.Bottom)
game.showLongText("Round: " + Round, DialogLayout.Bottom)
game.showLongText("Press A to start round.", DialogLayout.Bottom)
Hero = sprites.create(img`
    . . . c c c c . . . 
    . c c b b b b c c . 
    c b b 1 1 1 1 b c c 
    c 1 1 b 1 1 1 1 b c 
    c b 1 1 1 1 1 b 1 c 
    c b 1 1 b 1 1 1 b c 
    c b b b b b b b b c 
    b c b b b b b b c b 
    . b c c c c c c b . 
    . . b b c c b b . . 
    . c c b b b b c c . 
    c c b b b b b b c c 
    c b b 1 1 1 1 b b c 
    1 1 b 1 1 1 1 b 1 1 
    . . 1 1 b b 1 1 . . 
    . . c c . . c c . . 
    `, SpriteKind.Player)
Net = sprites.create(img`
    .........................
    .........................
    .........................
    .........................
    .........................
    .........................
    .........................
    .........................
    .........................
    .........................
    .........................
    .........................
    .........................
    .........................
    .........................
    .........................
    .........................
    .........................
    `, SpriteKind.BugNet)
Hero.setPosition(80, 100)
Hero.z = 5
Net.z = 4
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
game.onUpdate(function () {
    Net.x = Hero.x + 2
    Net.bottom = Hero.y - 3
    if (Players == 2) {
        Net2.x = Hero2.x + 2
        Net2.bottom = Hero2.y - 3
    }
})
game.onUpdateInterval(refreshspeed + randint(-10, 10), function () {
    if (Pause == 0) {
        spawnHive(Hive)
        spawnHive(Hive2)
        spawnHive(Hive3)
        if (Round >= 6) {
            spawnHive(Hive)
        }
    }
})
