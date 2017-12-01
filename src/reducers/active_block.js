import { DISPLAY_ACTIVE_BLOCK } from '../actions';

export default function(state = 'empty', action) {
    switch (action.type) {


        case DISPLAY_ACTIVE_BLOCK:
            return action.payload;

    default: 
        return state
    }
}