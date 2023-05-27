import { Provider } from 'react-redux';
import { wrapper } from './redux/store/index';
import '../styles/globals.css';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

function MyApp({ Component }) {
  
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Component />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;