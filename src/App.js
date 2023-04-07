// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Routes>
            {/* <Route exact path = "/div">
                <div>Vipin chauhan</div>
            </Route> */}
            <Route exact path = "/search" element={<SearchPage />}>
                
            </Route>
            <Route path = "/" element={<Home />}>
                
            </Route>
        </Routes>
    </div>
</BrowserRouter>

//         <div className="App">
//             <Home />
//         </div>
  );
}

export default App;
