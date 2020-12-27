import './App.css';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';
import Basics from './components/Basics.js';
import Patterns from './components/Patterns.js';

function App() {
  return (
    <div className="App">
      <AppBar position="static" color='primary'>
        <Toolbar>
          <Button>Home</Button>
          <Typography className='title'>Light Tool</Typography>
        </Toolbar>
      </AppBar>
      <Basics></Basics>
      <Patterns></Patterns>
    </div>
  );
}

export default App;
