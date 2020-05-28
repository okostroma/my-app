import ava from "./ava.png";


let initialState = {
    friends: [
        {id: 1, name: "Sasha", ava: ava},
        {id: 2, name: "Oxa", ava: ava},
        {id: 3, name: "Andrew", ava: ava}
    ]
};


const friendsReducer = (state = initialState, action) => {
    return state;
}


export default friendsReducer;
