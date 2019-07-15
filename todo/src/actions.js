export const NEW_ITEM = 'NEW_ITEM';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const TOGGLE_INCOMPLETE = 'TOGGLE_INCOMPLETE';

let nextTodoId = 0;

export function newItem(newItem,id) {
    return {
        type: NEW_ITEM,
        payload: {
            newItem,
            id:nextTodoId++
        }

    }
}

export function toggleComplete(completeItem,id) {
    return {
        type: TOGGLE_COMPLETE,
        payload: {
            completeItem,
            id
        }
    }
}

export function toggleIncomplete(incompleteItem,id) {
    return {
        type: TOGGLE_INCOMPLETE,
        payload: {
            incompleteItem,
            id
        }
    }
}
