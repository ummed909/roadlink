import {createStore} from 'redux';

// _______________registration_______________________//

const RegistrationReducer = (state={counter:'nr'},action)=>{


    if(action.type==='dr'){
        return {counter:'dr'}
    }
    if(action.type==='cr'){
        return {counter:'cr'}
    }

    return {state}
    








    // if(action.type==='increment'){
    //     return {counter:state.counter+1};
    // }
    // if(action.type === 'decrement'){
    //     return {counter:state.counter-1};
    // }
    // return state;
     

}


const store = createStore(RegistrationReducer);

export default store