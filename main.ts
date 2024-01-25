player.onChat("zoo", function () {
    let list: number[] = []
    for (let value of list) {
        mobs.spawn(value, pos(3, 0, 0))
        mobs.spawn(value, pos(3, 0, 0))
        mobs.spawn(value, pos(3, 0, 0))
    }
})
player.onChat("pen", function () {
    builder.teleportTo(pos(5, 0, -5))
    builder.face(WEST)
    builder.mark()
    for (let index = 0; index < 4; index++) {
        builder.move(FORWARD, 10)
        builder.turn(LEFT_TURN)
        builder.tracePath(MOSSY_COBBLESTONE_WALL)
    }
})
let animal_array = [
COW,
CHICKEN,
SHEEP,
PIG,
ZOMBIE_HORSE,
SKELETON_HORSE,
LLAMA,
PANDA,
GOAT
]
