

// currently used for planning, will probably throw this out later

type room = {
    roomId: string  // key 
    players: player[]
    // gameState: gameState  // RF only
    cards: card[]
    cardStacks: cardStack[]
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
    lastUpdated: number
}

// moveable
type player = {
    id: string //key 
    roomId: string // secondary index
    name: string 
    position: number 
}

// moveable
interface card extends moveable {
    id: string 
    faceUp: boolean
    cardValue: string 
}

// moveable
type cardStack = {
 id: string 
 spread: boolean // each card offset or not 
 cards: card[] 

}

//////////////////////////////
// RF only:
////////////

type gameState = {
    roomId: string // key
    turn: number 
    bids: bid[]
}

// raw type, not a model subscribed to
type bid = {
    turn: number 
    playerId: string 
    bid: number 
    actual: number // start at -1, fill in with actual value on turn completion
}