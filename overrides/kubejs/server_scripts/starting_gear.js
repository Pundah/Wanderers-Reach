PlayerEvents.loggedIn(event => {
    const player = event.player;
    if (!player.nbt.contains('kubejs:received_starting_gear')) {
        player.give('minecraft:stone_pickaxe')
        player.give('minecraft:cooked_beef', 16);
        player.nbt.kubejs.received_starting_gear = true;
    }
});