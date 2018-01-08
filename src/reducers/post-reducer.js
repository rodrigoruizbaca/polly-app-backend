export const postReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_POSTS': {
            return action.posts;
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
