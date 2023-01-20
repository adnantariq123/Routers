
import { Home } from './Components/home';
import { About } from './Components/about';
import {Routes, Route} from "react-router-dom";
import { NavBar } from './Components/NavBar';

function App() {
  return (
    <>
    <h1 className='text-3xl font-bold underline text-blue-600 bg'>what </h1>
    <NavBar/>
    <Routes>

        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
     
   
    </Routes>
    </>
  );
}

export default App;
