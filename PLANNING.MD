

- Moveable types
    - Card
    - Stack of cards (containing cards)
    - Player position (containing a stack of cards, player name, bidding )

- Need to figure out a way to add modular components to a moveable type. Can probably abstract
this into am extendable ts class. 

- Potential schema: 
    - class Moveable 
        - id (readonly)
        - roomId (readonly)
        - draggable (readonly)      
        - x 
        - y
        - z 
        - lastOwner
        - inMotion
    - class Card extends Moveable 
        - faceUp
        - cardValue
    - class Player extends Moveable
        - name
        - position (1,2,3,...)
    - class room
        - id
        - players (type Player)
        - turn
    - class bid
        - playerId
        - bid
        - room (type Room)
    

    


    

- Init flow
    - Create room
    - Room initializes in lobby state, waiting for players to join
    - Players join room and ready up
    - After all players are ready, the room randomizes positions and places players in a circle
- Game flow
    - Based on position of dealer token, players enter bid