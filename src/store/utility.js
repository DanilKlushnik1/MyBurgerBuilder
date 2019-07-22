export const updateObject = (oldObject, updatesValue) => {
    return{
        ...oldObject,
        ...updatesValue
    }
}