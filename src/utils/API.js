import {
    _getItems,
    _saveLike,
    _saveUnlike,
    _saveLikeToggle,
} from "./_DATA.js";

export function getInitialData() {
    return Promise.all([
        _getItems()
    ]).then(([items]) => ([
        items
    ]));
}

export function saveLike(item) {
    return _saveLike(item);
}

export function saveUnlike(item) {
    return _saveUnlike(item);
}

export function saveLikeToggle(info) {
    return _saveLikeToggle(info)
}
