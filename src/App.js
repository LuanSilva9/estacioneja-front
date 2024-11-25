import { BrowserRouter } from 'react-router-dom';

import RouterPaper from './RouterPaper';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import './MobileFormat.css';
import './fonts.css'

export default function App() {
  //  console.log(process.env.REACT_APP_AUTH_KEY);

  return (
    <BrowserRouter>
      <RouterPaper/>
    </BrowserRouter>
  );
}


