import React from 'react';
import AddPostComponent from './add-post-component';
import PostGridComponent from './grid-component';

const ContainerComponent = () => {
    return (
        <div className="content-container">
            <AddPostComponent/>
            <PostGridComponent/>            
        </div>
    );
};

export default ContainerComponent;