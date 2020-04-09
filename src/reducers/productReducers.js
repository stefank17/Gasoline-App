import { BUY_GAS, SELL_GAS, GET_GAS } from '../constants';

function printState(state, payload) {
    console.log(state,"And Payload", payload)
}

function Sell(products) {
    const lessProducts = products.map((d,i) => d).filter((d,i) => i!==products.length-1)
    return lessProducts
}

const gasMarket = (state=[], action) => {
    console.log("StateReducer", action)
    switch(action.type) {
        case GET_GAS:
            return [...state, ...action.payload]
        case BUY_GAS:
            printState(state, action.payload)
            return state.concat(action.payload)
        case SELL_GAS:
            return Sell(state)
        default: return state;
    }
}

export { gasMarket }