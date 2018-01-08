import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import {Provider} from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import configureStore from './store/configure-store';
import PostGridComponent from './components/grid-component';

const store = configureStore();

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <PostGridComponent/>
            </Provider>
            
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));