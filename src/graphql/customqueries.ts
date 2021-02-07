export const cardsByRoomFull = /* GraphQL */ `
  query CardsByRoomFull(
    $roomId: ID
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cardsByRoom(
      roomId: $roomId
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        roomId
        ownerId
        faceUp
        cardValue
        createdAt
        updatedAt
        moveable {
            id
            draggable
            x
            y
            z
            lastOwner
            inMotion
            createdAt
            updatedAt
      }
      }
      nextToken
    }
  }
`
export const stacksByRoomFull = /* GraphQL */ `
  query StacksByRoomFull(
  $roomId: ID
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelCardStackFilterInput
  $limit: Int
  $nextToken: String
) {
  stacksByRoom(
    roomId: $roomId
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      roomId
      cardIds
      createdAt
      updatedAt
      moveable {
            id
            draggable
            x
            y
            z
            lastOwner
            inMotion
            createdAt
            updatedAt
      }
    }
    nextToken
  }
}
`;

