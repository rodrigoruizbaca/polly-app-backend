import React from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {getPostsAsync} from '../actions/post-action';
import VoiceListComponent from './voice-list-component';

const Loading = (props) => {
    return (        
        props.loading ? <span>Loading</span> : <span></span>       
    )
};

class PostGridComponent extends React.Component {
    render () {
        return (
            <div> 
                <Loading loading={this.props.loading}></Loading>
                <VoiceListComponent></VoiceListComponent>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Post ID</Table.HeaderCell>
                            <Table.HeaderCell>Voice</Table.HeaderCell>
                            <Table.HeaderCell>Post</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                            <Table.HeaderCell>Player</Table.HeaderCell>
                        </Table.Row>                
                    </Table.Header>
                    <Table.Body>
                        {
                            this.props.posts.map((post) => {
                                return (
                                    <Table.Row key={post.id}>
                                        <Table.Cell>{post.id}</Table.Cell>
                                        <Table.Cell>{post.voice}</Table.Cell>
                                        <Table.Cell>{post.text}</Table.Cell>
                                        <Table.Cell>{post.status}</Table.Cell>
                                        <Table.Cell>
                                            <audio controls><source src={post.url} type='audio/mpeg'/></audio>
                                        </Table.Cell>
                                    </Table.Row>   
                                )
                            })
                        }                        
                    </Table.Body>
                </Table>
            </div>
        );
    }

    componentDidMount() {
        this.props.dispatch(getPostsAsync());
    }
}

const mapStateToProps = (state) => {    
    return {'posts': state.posts, 'loading': state.loading};
};

export default connect(mapStateToProps)(PostGridComponent);
