import { RECEIVE_ITEMS, TOGGLE_LIKE_ITEM } from '../actions/items'

export function items(state = [], action) {
    switch (action.type) {
        case RECEIVE_ITEMS:
            return action.items

        case TOGGLE_LIKE_ITEM:
            return state.map(item =>
                item.Id === action.Id ? {...item, Likes: item.Likes + 1 } : item
            )
        default:
            return state
    }
}
