export const getPostsAsync = () => {
    return (dispatch) => {  
        dispatch(postLoading(true));
        fetch('http://localhost:4000/posts').then(res => res.json())
        .then((data) => {
            return data.data.Items;            
        }).then((items) => {
            dispatch(postLoading(false));
            dispatch(getPosts(items));
        }).catch((err) => {

        });
        
    };
};

const getPosts = (posts) => {
    return {
        type: 'GET_POSTS',
        posts
    };
};



const postLoading = (loading) => {
    return {
        type: 'POSTS_LOADING',
        loading
    };
};

