import { POSTS_RECEIVED } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
    switch (action.type) {


        case POSTS_RECEIVED:
            return _.mapKeys(action.payload.data, 'id');

    default: 
        return state
    }
}