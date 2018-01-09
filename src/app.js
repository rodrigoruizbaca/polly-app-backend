import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import {Provider} from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import configureStore from './store/configure-store';
import ContainerComponent from './components/post-container-component';

const store = configureStore();

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ContainerComponent/>
            </Provider>
            
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));