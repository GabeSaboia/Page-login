import{  BrowserRouter as Router, Routes, Route} from "react-router-dom"
import LoginPage from "./Pages/Login"

function App() {
  

  return (
    <Router>
      <Routes>
      <Route path="/" element={<LoginPage/>} />


      </Routes>


    </Router>
  )
}

export default App
