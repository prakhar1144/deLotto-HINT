import './App.css';
import Welcome from './Sections/Welcome';
import Steps from './Sections/Steps';
import Features from './Sections/Features';
import { CssBaseline } from '@mui/material';
import Footer from './Sections/Footer';
import Action from './Sections/Action';
import Winners from './Sections/Winners';

function App(props) {
  return (
    <>
      <CssBaseline />
      <Welcome {...props}/>
      <Steps/>
      <Action/>
      <Features/>
      <Winners/>
      <Footer/>
    </>
  );
}

export default App;
