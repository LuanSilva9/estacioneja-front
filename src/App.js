import { BrowserRouter } from 'react-router-dom';
import RouterPaper from './RouterPaper';


import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import './MobileFormat.css';
import './fonts.css'

import HeaderbarClient from './components/HeaderbarClient';
import FooterClient from './components/FooterClient';

export default function App() {
  return (
    <BrowserRouter>
      <HeaderbarClient/>
      <RouterPaper/>
      <FooterClient/>
    </BrowserRouter>
  );
}


