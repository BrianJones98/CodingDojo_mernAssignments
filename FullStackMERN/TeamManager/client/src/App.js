//Dependency imports
import './App.css';
import {Router, Redirect} from "@reach/router";
import {Paper, Button} from "@material-ui/core";

//View imports
import ManagePlayers from "./views/ManagePlayers.jsx";
import ManageStatus from "./views/ManageStatus.jsx";

function App() {
  return (
    <Paper className="App" elevation={2}>
      <nav>
        <Button
            variant="contained"
            color="primary"
            href="/players/list"
        >Manage Players</Button>
        <h1>Team Manager</h1>
        <Button
            variant="contained"
            color="primary"
            href="/status"
        >Manage Player Status</Button>
      </nav>
      
      <Router>
        <ManagePlayers path="/players/*"/>
        <ManageStatus path="/status/*"/>
        <Redirect noThrow from="/" to="/players"/>
      </Router>
    </Paper>
  );
}

export default App;