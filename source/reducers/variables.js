import {CHANGE_VARIABLE} from '../action/type';

const InitialState =  {
    movies:[],
    search:'',
    movie_name:'',
    movie_description:'',
};

const reducer = (state = InitialState,action) =>{
    switch(action.type){
        case CHANGE_VARIABLE : 
                return {...state,[action.payload.key]:action.payload.value};
        default :
            return state;
    }
}

export default reducer;