import './App.css';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';
import Main from './components/Main.js';

function App() {
  return (
    <div className="App">
      <AppBar position="static" color='primary'>
        <Toolbar>
          <Button>Home</Button>
          <Typography className='title'>Light Tool</Typography>
        </Toolbar>
      </AppBar>
      <Main></Main>
    </div>
  );
}

export default App;
