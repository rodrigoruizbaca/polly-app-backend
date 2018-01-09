import React from 'react';
import { Button, Form, TextArea } from 'semantic-ui-react';
import VoiceListComponent from './voice-list-component';
import { connect } from 'react-redux';
import { savePostsAsync } from '../actions/post-action';



class AddPostComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    onChangeVoice = (data) => {
        const voice = data.value;
        this.setState(() => ({ voice }));
    };
    
    onChangeText = (event, data) => {
        const text = data.value;
        this.setState(() => ({ text }));
    };
    
    onClick = () => {
        const post = { "text": this.state.text, "voice": this.state.voice };        
        this.props.dispatch(savePostsAsync(post));
    }

    render() {
        return (
            <div>
                <Form>
                    <Form.Field>
                        <label>Voice</label>
                        <VoiceListComponent onChangeVoice={this.onChangeVoice}></VoiceListComponent>
                    </Form.Field>
                    <Form.Field>
                        <label>Text</label>
                        <TextArea onChange={this.onChangeText} placeholder='Text' style={{ minHeight: 100 }} />
                    </Form.Field>
                    <Button primary disabled={this.props.loading} onClick={this.onClick} type='button'>Submit</Button>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { 'posts': state.posts, 'loading': state.loading };
};

export default connect(mapStateToProps)(AddPostComponent);
