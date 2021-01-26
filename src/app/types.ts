

// currently used for planning, will probably throw this out later

export interface room  {
    roomId: string  // key 
    players: player[]
    // gameState: gameState  // RF only
    cards: card[]
    cardStacks: cardStack[]
}



export interface moveable {
    moveableId: string
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
export interface player {
    id: string //key 
    roomId: string // secondary index
    name: string
    position: number
}

// moveable
export interface cardStack extends moveable{
    id: string
    spread: boolean // each card offset or not 
    cards: card[]

}

// moveable
export interface card extends moveable {
    id: string 
    faceUp: boolean
    cardValue: string
}
//////////////////////////////
// RF only:
////////////

export interface gameState {
    roomId: string // key
    turn: number
    bids: bid[]
}

// raw type, not a model subscribed to
export interface bid {
    turn: number
    playerId: string
    bid: number
    actual: number // start at -1, fill in with actual value on turn completion
}

