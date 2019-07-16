import { NEW_ITEM, TOGGLE_COMPLETE, TOGGLE_INCOMPLETE } from '../src/actions';

const initialState = {
    todos: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case NEW_ITEM:

            
            return {
                ...state,
                todos: [...state.todos, action.payload]

            }


        case TOGGLE_COMPLETE:
        
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)
            }
          
        default:
            return state
    }



}

