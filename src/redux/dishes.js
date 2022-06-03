import * as ActionTypes from './ActionTypes';

export const Dishes = (state = { isLoading: true, errMess: null, dishes:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            return { isLoading: false, errMess: null, dishes: action.payload};

        case ActionTypes.DISHES_LOADING:
            return { isLoading: true, errMess: null, dishes: []}

        case ActionTypes.DISHES_FAILED:
            return { isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};



// ...state => create new obj FROM THAT -> return that obj with new changes

// no err? 
// maybe cuz of splitting reducers => 'state' points to specific one => no need to spread out ?