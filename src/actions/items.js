import { getInitialData, saveLikeToggle } from '../utils/API';

export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
export const TOGGLE_LIKE_ITEM = 'TOGGLE_LIKE_ITEM';

export function receiveItems(items) {
    return {
        type: RECEIVE_ITEMS,
        items
    }
}

export function handleInitialData() {
    return dispatch => {
        return getInitialData()
            .then(([items]) => {
                dispatch(receiveItems(items))
            })
    }
}

function toggleItem({ id, hasLiked }) {
    return {
        type: TOGGLE_LIKE_ITEM,
        id,
        hasLiked
    }
}

export function handleToggleItem(info) {
    return dispatch => {
        dispatch(toggleItem(info))

        return saveLikeToggle(info)
            .catch(error => {
                console.warn("Error in handleToggleItem: ", error)
                dispatch(toggleItem(info))
                alert("Sorry, but there was an error liking the item. Please try again...")
            })
    }
}
