@namespace
class SpriteKind:
    Spawn = SpriteKind.create()

def on_a_pressed():
    pass
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_countdown_end():
    global Pause, Round, Threshold, BeeSpeed
    Pause = 1
    pause(1000)
    for value in sprites.all_of_kind(SpriteKind.enemy):
        value.destroy()
    if info.score() < Threshold:
        info.change_life_by(-1)
    Round += 1
    Threshold = Round * 45
    BeeSpeed += 10
    game.show_long_text("Round: " + str(Round), DialogLayout.BOTTOM)
    game.show_long_text("Catch at least " + str(Threshold) + "bees!",
        DialogLayout.BOTTOM)
    Pause = 0
    info.start_countdown(10)
info.on_countdown_end(on_countdown_end)

def on_on_overlap(sprite, otherSprite):
    sprite.destroy(effects.rings, 100)
    info.change_score_by(1)
sprites.on_overlap(SpriteKind.enemy, SpriteKind.player, on_on_overlap)

Bee: Sprite = None
RandSpawn = 0
Pause = 0
Threshold = 0
Round = 0
scene.set_background_color(7)
info.set_score(0)
info.set_life(3)
Round = 1
Threshold = Round * 45
game.show_long_text("Catch at least " + str(Threshold) + " bees!",
    DialogLayout.BOTTOM)
game.show_long_text("Round: " + str(Round), DialogLayout.BOTTOM)
game.show_long_text("Press A to start the game", DialogLayout.BOTTOM)
info.start_countdown(15)
Hero = sprites.create(img("""
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
    """),
    SpriteKind.player)
Hero.set_position(80, 96)
Hive = sprites.create(img("""
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
    """),
    SpriteKind.Spawn)
controller.move_sprite(Hero, 100, 0)
Hive.set_position(80, 20)
Pause = 0
BeeSpeed = 25

def on_update_interval():
    global RandSpawn, Bee
    if Pause == 0:
        RandSpawn = randint(1, 5)
        Bee = sprites.create(img("""
                . 5 5 5 . 
                            f f f f f 
                            5 5 5 5 5 
                            f f f f f 
                            . 5 5 5 . 
                            f . . . f
            """),
            SpriteKind.enemy)
        Bee.set_velocity(0, BeeSpeed)
        Bee.set_position(Hive.x - 25 + RandSpawn * 10, Hive.y + 5)
game.on_update_interval(200, on_update_interval)
