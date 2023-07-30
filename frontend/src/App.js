import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUP from "./pages/SignUP";
import SignIN from "./pages/SignIN";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUP/>}/>
          <Route path="/login" element={<SignIN/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
