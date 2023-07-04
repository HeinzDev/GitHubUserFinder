
import { Link, Outlet } from "react-router-dom"

import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.app}>
      <Link to='/'>
       <h1> GitHub Users</h1>
      </Link>
      <Outlet />
    </div>
  )
}

export default App
