import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import { Provider } from 'react-redux';

import App from './App';
import store from './src/store/store'

import {name as appName} from './app.json';

const ProviderApp = () => {
    return (
        <Provider store={store()}>
            <App />
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => ProviderApp);
