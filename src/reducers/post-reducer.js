export const postReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_POSTS': {
            return action.posts;
        }
        case 'ADD_POST': {
            return state.concat([action.post]);
        }   
        case 'PROCESS_POST': {
            const updatedItem = action.post;
            const result = state.map((post) => {
                if (post.id === updatedItem.id) {
                    return updatedItem;                    
                } else {
                    return post;
                }
            });            
            return result;
        }        
        default:
            return state;
    }
};

export const loading = (state = false, action) => {
    switch (action.type) {
        case 'POSTS_LOADING':
            return action.loading;
        default:
            return state;
    }
};

export const processing = (state = false, action) => {
    switch (action.type) {
        case 'POSTS_PROCESSING':
            return action.processing;
        default:
            return state;
    }
};
