import { NEW_ITEM, TOGGLE_COMPLETE, TOGGLE_INCOMPLETE } from '../src/actions';



export default function (state = [], action){
    switch (action.type) {
        case NEW_ITEM:

            console.log(action.payload)
            return {
                ...state,
                    id: action.payload.id,
                    newItem: action.payload.newItem,
                    completed: false
            }

    
        case TOGGLE_COMPLETE:
            return state.map(todo => 
                todo.id === action.id ? {...todo, completed: !todo.completed } :todo
            )
        default:
            return state
    }

    

}

