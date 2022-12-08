import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import SignInForm from "./components/login/pages/SignInForm";
import SignUpForm from "./components/login/pages/SignUpForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="login/*" element={<Home />}>
            <Route path="sign-in" element={<SignInForm/>}/>
            <Route path="sign-up" element={<SignUpForm/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
