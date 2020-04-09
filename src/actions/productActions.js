import { BUY_GAS, SELL_GAS, GET_GAS } from '../constants';

const boughtGas = () => {
    return {
        "name": "gas",
        "img": "gas.jpg"
    }
}

const GetGas = (data) => async dispatch => {
    let arr = [];
    arr = arr.concat(data)
    arr.map(d => dispatch(BuyGas()))
}

const BuyGas = () => {
    console.log("Action BuyGas", boughtGas())
    return {
        type: BUY_GAS,
        payload: boughtGas()
    }
}

const SellGas = () => {
    return {
        type: SELL_GAS
    }
}

export { BuyGas, SellGas, GetGas }