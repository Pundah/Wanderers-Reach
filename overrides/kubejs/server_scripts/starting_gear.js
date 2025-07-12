// Player login event
PlayerEvents.loggedIn(event => {
  // Get the player
  const player = event.player
  
  // Check if this is the first time logging in
  if (!player.stages.has('first_login')) {
    // Send welcome message
    player.tell([
      Text.of('Welcome to the server, ').gold(),
      Text.of(player.name).darkGreen(),
      Text.of("! Here's a starter kit.").gold()
    ])
    
    // Give starter items
    player.give('mekanismtools:stone_paxel')
    player.give('minecraft:iron_sword')
    player.give('minecraft:leather_leggings')
    
    // Mark player as having logged in
    player.stages.add('first_login')
  } else {
    // Send welcome back message
    player.tell([
      Text.of('Welcome back, ').aqua(),
      Text.of(player.name).darkGreen(),
      Text.of('!').aqua()
    ])
  }
})