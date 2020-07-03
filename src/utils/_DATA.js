let items = require('./items.json');

export function _getItems() {
    return new Promise((res, rej) => {
        setTimeout(() => res([...items]), 1000)
    })
}

export function _saveLike(item) {
    return new Promise((res, rej) => {

        setTimeout(() => {
            items = {
                ...items,
                item
            }

            res(items)
        }, 1000)
    })
}

export function _saveUnlike(item) {
    return new Promise((res, rej) => {

        setTimeout(() => {
            items = {
                ...items,
                item
            }

            res(items)
        }, 1000)
    })
}

export function _saveLikeToggle({ id, hasLiked }) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            items = {
                ...items,
                [id]: !hasLiked
            }

            res()
        }, 500)
    })
}
