import { createStore } from 'redux';

let defaultState = {
    characterOne : {
        name: 'Hulk',
        image: '',
    },
    characterTwo : {
        fullname: 'two'
    },
    searchCharacter : {
        name: 'Hulk',
        altname: 'chazz',
        image: '',
    },

};

const Characters = (state = defaultState, action) => {
    if(action.type==='changecharacterone') {
        return {
            ...state,
            characterOne: action.data
        }
    } else if(action.type==='changecharactertwo') {
        return {
            ...state,
            characterTwo: action.data
        }
    } else if(action.type==='changesearchcharacter') {
        return {
            ...state,
            searchCharacter: action.data
        }
    }
    return state;
}

let store = createStore(Characters);
store.subscribe(function() {
    console.log('state', store.getState())
});
export default store