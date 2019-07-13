export const NEW_ITEM = 'NEW_ITEM';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const TOGGLE_INCOMPLETE = 'TOGGLE_INCOMPLETE';

export function newItem(newItem) {
    return {
        type: NEW_ITEM,
        payload: {
            newItem
        }

    }
}

export function toggleComplete(completeItem) {
    return {
        type: TOGGLE_COMPLETE,
        payload: {
            completeItem
        }
    }
}

export function toggleIncomplete(incompleteItem) {
    return {
        type: TOGGLE_INCOMPLETE,
        payload: {
            incompleteItem
        }
    }
}
