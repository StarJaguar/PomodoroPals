import React from "react"
import SignUp from "./SignUp"
import Dashboard from "./Dashboard"
import Login from "./Login"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
 
      <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>

      <div className="w-100" style={{ maxWidth: "400px"}}>

        <Router>
          <AuthProvider>
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route path="SignUp" element={<SignUp />} />
              <Route path="Login" element={<Login />} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
     
    </Container>
  
     
  )
}

export default App;
