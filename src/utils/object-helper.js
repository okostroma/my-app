

export const updateObjectInArray = (items, itemId, objPropName,obj) => {
    items.map(user => {
        if (user[objPropName] === itemId) {
            return {...user, ...obj}
        }
        return user
    })
}

