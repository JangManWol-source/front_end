import { Provider } from 'react-redux';
import { store } from './app/store';
import './App.css';
import Main from './Main';

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
