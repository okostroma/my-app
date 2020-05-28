import ava from './ava.png'

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'


let initialState = {
    users: [
        // {id: 0, followed: false, photoUrl: ava,  fullName: 'Dmitry', status: 'Hello', location: {city: 'Minsk', country: 'Belarus'}},
        // {id: 1, followed: false, photoUrl: ava, fullName: 'Oxa', status: 'Hi', location: {city: 'Moscow', country: 'Russia'}},
        // {id: 2, followed: true, photoUrl: ava, fullName: 'Andrew', status: 'I am superhero', location: {city: 'Minsk', country: 'Belarus'}},
        // {id: 3, followed: true, photoUrl: ava, fullName: 'Anna', status: 'Hello', location: {city: 'Minsk', country: 'Belarus'}},
        // {id: 4, followed: false, photoUrl: ava, fullName: 'Roman', status: 'Hello', location: {city: 'Minsk', country: 'Belarus'}}

    ]


};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }

                    return user
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }

                    return user
                })
            }
        case SET_USERS: {
            return {...state, users:[...state.users, ...action.users ] }
        }
        default:
            return state;

    }

}

export const followAC = (userId) => ({type: FOLLOW, userId: userId})
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId: userId})
export const setUsersAC = (users) => ({type: SET_USERS, users: users })

export default usersReducer;
