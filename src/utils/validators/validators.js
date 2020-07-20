export const required = (value) => {
   if (value) {
       return undefined
   } else {
       return 'Field is required'
   }

}

export const maxLenghtCreator = (maxLength) => {
    return (value) => {
        if (value.length < maxLength) {
            return undefined
        } else {
            return `Max length is ${maxLength} symbols`
        }
    }

}

// export const maxlenght30 = (value) => {
//     if (value.length < 30) {
//         return undefined
//     } else {
//         return 'Max length is 30 symbols'
//     }
//
// }

