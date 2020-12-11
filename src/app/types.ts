

// currently used for planning, will probably throw this out later

type room = {
    roomId: string 
    players: player[]
    gameState: gameState 
    cards: card[]
}

type gameState = {
    turn: number 
    bids: bid[]
}

type bid = {
    playerId: string 
    bid: number 
    actual: number // start at -1, fill in with actual value on turn completion
}

type moveable = {
    id: string 
    roomId: string
    draggable: boolean
    x: number 
    y: number 
    z: number
    lastOwner: string 
    inMotion: boolean 
}

type player = {
    id: string
    name: string 
    position: number 
}


type card = {
    faceUp: boolean
    cardValue: string 
}