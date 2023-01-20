
import { Home } from './Components/home';
import { About } from './Components/about';
import {Routes, Route} from "react-router-dom";
import { NavBar } from './Components/NavBar';
import { OrderSummary } from './Components/orderSummary';
import {NoMatch} from "./Components/NoLink"
import { Products } from './Components/Products';

//used for nexted routes
import {FeaturedProducts} from "./Components/FeaturedProducts";
import {NewProducts} from "./Components/NewProducts";

function App() {
  return (
    <>
    <h1 className='text-3xl font-bold underline text-blue-600 bg'>what </h1>
    <NavBar/>

    <Routes>

        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="order-summary" element={<OrderSummary/>}/>

        {/* when you dont have a proper link , you cathc that using the wild card * in path */}
        <Route path="*" element={<NoMatch/>}></Route>


        {/* Lust how easy it was to write nexted routes ^-^ 
        BUT YOU NEED and <Outlet/> INSIDE the products component*/}
        <Route path="products" element={<Products/>}> 
            <Route path="featured" element={<FeaturedProducts/>}></Route>
            <Route path="new" element={<NewProducts/>}> </Route>
        </Route>
        
     
   
    </Routes>
    </>
  );
}

export default App;
