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
            dispatch(postLoading(false));
        });
        
    };
};

export const processPostAsync = (id) => {
    return (dispatch) => {

        dispatch(processingPost({"processing":true, "id": id}));
        const options = {
            method:'PATCH', 
            headers:{'Accept':'application/json', 'Content-Type':'application/json'}            
        };
        fetch('http://localhost:4000/posts/process/' + id, options).then(res => res.json()).then((data) => {
            dispatch(processPost(data.item));
            dispatch(processingPost({"processing":false, "id": id}));
        }).catch((err) => {
            dispatch(processingPost({"processing":false, "id": id}));
        });
    }
}

export const savePostsAsync = ({voice, text}) => {
    return (dispatch) => {  
        const post = {voice, text};
        dispatch(postLoading(true));
        const options = {
            method:'POST', 
            headers:{'Accept':'application/json', 'Content-Type':'application/json'},
            body: JSON.stringify(post)
        };

        fetch('http://localhost:4000/posts', options).then(res => res.json()).then((data) => {
            dispatch(postLoading(false));
            dispatch(savePost(data.newPost));
            dispatch(processPostAsync(data.newPost.id));
        }).catch((err) => {
            dispatch(postLoading(false));
        });
    };
};

const getPosts = (posts) => {
    return {
        type: 'GET_POSTS',
        posts
    };
};

const savePost = (post) => {
    return {
        type: 'ADD_POST',
        post
    };
};

const processPost = (post) => {
    return {
        type: 'PROCESS_POST',
        post
    };
};

const postLoading = (loading) => {
    return {
        type: 'POSTS_LOADING',
        loading
    };
};

const processingPost = (processingObj) => {
    return {
        type: 'POSTS_PROCESSING',
        processing: {
            processingFlag: processingObj.processing,
            id: processingObj.id
         }
        
    };
};
