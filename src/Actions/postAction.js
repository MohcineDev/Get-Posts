export const deleteAction = (id) => {
    return {
        type: 'DELETE',
        id
    }
}

export const updateAction = (id, newContent) => {
    return {
        type: 'UPDATE',
        payload: {
            id,
            newContent
        }
    }
}

///Action Creator