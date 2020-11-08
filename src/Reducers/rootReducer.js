let initialState = {
    posts: [
        { id: 1, content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nesciunt beatae aspernatur laudantium aperiam perspiciatis quod ipsum labore, hic dolores vero neque necessitatibus sapiente, dolorem cupiditate dolor cumque, nobis saepe?' },
        { id: 2, content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nesciunt beatae aspernatur laudantium aperiam perspiciatis quod ipsum labore, hic dolores vero neque necessitatibus sapiente, dolorem cupiditate dolor cumque, nobis saepe?' },
        { id: 3, content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nesciunt beatae aspernatur laudantium aperiam perspiciatis quod ipsum labore, hic dolores vero neque necessitatibus sapiente, dolorem cupiditate dolor cumque, nobis saepe?' },
        { id: 4, content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nesciunt beatae aspernatur laudantium aperiam perspiciatis quod ipsum labore, hic dolores vero neque necessitatibus sapiente, dolorem cupiditate dolor cumque, nobis saepe?' },
        { id: 5, content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nesciunt beatae aspernatur laudantium aperiam perspiciatis quod ipsum labore, hic dolores vero neque necessitatibus sapiente, dolorem cupiditate dolor cumque, nobis saepe?' }
    ]
}


const rootReducer = (state = initialState, action) => {
    if (action.type === 'DELETE') {

        const newPosts = state.posts.filter(post => post.id !== action.id)
        return {
            ...state,
            posts: newPosts
        }
    }

    else if (action.type === 'UPDATE') { 

        for (let i = 0; i < state.posts.length; i++) {
            if (state.posts[i].id === action.payload.id) {
                state.posts[i].content = action.payload.newContent
            }
        }
 
        return {
            ...state
        }

    }
    return state
}


export default rootReducer