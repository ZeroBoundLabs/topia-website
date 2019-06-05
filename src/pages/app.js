
import React from "react"
import { Router } from "@reach/router"
import Welcome from "../components/Welcome"
import Profile from "../components/Profile"
import Login from "../components/Login"
import PrivateRoute from "../components/PrivateRoute"
import ActivateAccount from "../components/ActivateAccount"

const App = () => (
  <Router>
    <PrivateRoute path="/app/profile" component={Profile} />
    <PrivateRoute path="/app/welcome" component={Welcome} />
    <Login path="/app/login" />
    <ActivateAccount path='/app/activate/:token' />
  </Router>
)

export default App
