import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import store from './operations/Redux/store';
import MainScreen from './screen';

function App() {
  return (
    <Provider store={store}>
      <MainScreen/>
    </Provider>
  );
}

export default App;
