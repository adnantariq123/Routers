import React from 'react';

import { Home } from './Components/home';
// import { About } from './Components/about'; turning it off for lazy laoding demo
import {Routes, Route} from "react-router-dom";
import { NavBar } from './Components/NavBar';
import { OrderSummary } from './Components/orderSummary';
import {NoMatch} from "./Components/NoLink"
import { Products } from './Components/Products';

//used for nexted routes AND index routing
import {FeaturedProducts} from "./Components/FeaturedProducts";
import {NewProducts} from "./Components/NewProducts";

//used for dynamic routes
import { Users } from './Components/Users';
import {UserDetail} from "./Components/UserDetails"



// HOOKS
import { Defaulted } from './Hooks/DefaultDrop';
import {StateUser} from './Hooks/StateUse';
import { Reduction } from './Hooks/Reduction';
import { Effective } from './Hooks/Effective';

// But we are too darn lazy ^,^
//import { Context } from './Hooks/Context';





//************ LAZY LOADING ********************* */
// instead of laoding like we normally did 
// we do a React.lazy which take an arrow funtion with the import
// VERY IMPORTANT FOR LAZY LOADING YOU NEED THE DEFAULT IN which component we are lazy loading or it will throw an error
const LazyAbout = React.lazy(()=>import("./Components/about"));
const LazyContext = React.lazy(()=>import("./Hooks/Context"));


//IMPORTANT ALL imports have to be above the const variable  ¯\_(ツ)_/¯
// will cause an error -  so we define the import above
//import {StateUser} from './Hooks/StateUse';




function App() {
  return (
    <>
    <h1 className='text-3xl font-bold underline text-blue-600 bg'>what </h1>
    <NavBar/>

    <Routes>

        <Route path="/" element={<Home />}></Route>



        {/* <Route path="about" element={<About />}></Route>  TURNED OFF for lazy loading

        for lazy loading we require a React.SUSPENSE with a fallback. This fall back 
        could have been simple text of a component*/}
        
        <Route path="about" element={
          <React.Suspense fallback={<NoMatch/>}>
            <LazyAbout namer="whatever text"/>
          </React.Suspense>}>
        </Route>
        {/* Lazy loading ends here  PRETTY COOL STUFF*/}


        <Route path="order-summary" element={<OrderSummary/>}/>

        {/* when you dont have a proper link , you cathc that using the wild card * in path */}
        <Route path="*" element={<NoMatch/>}></Route>


        {/* Just how easy it was to write nexted routes ^-^ 
        BUT YOU NEED and <Outlet/> INSIDE the products component*/}
        <Route path="products" element={<Products/>}> 
            <Route path="featured" element={<FeaturedProducts/>}></Route>
            <Route path="new" element={<NewProducts/>}> </Route>

            {/* addtionally when you have nested routes and you want one of those nested route 
            to be rendered WITH THE PARENT URL, we then use an index route
            
            in other words both:
            http://localhost:3000/products
            http://localhost:3000/products/featured
            will show the same thing

            */}
            <Route index element={<FeaturedProducts/>}/>
        </Route>

        {/* Dynamic Routing */}
        <Route path="users" element={<Users />}>
          <Route path=":userDetail" element={<UserDetail/>}/>


        </Route>

        <Route path="hooks" element={<Defaulted/>}>
          <Route path="useState" element={<StateUser/>}/>
          <Route path="useReducer" element={<Reduction/>}/>
          <Route path="useEffect" element={<Effective/>}/>
          {/* <Route path="useContext" element={<Context/>}/>  we are so lazy ^_^*/}
          
          <Route path='useContext' element={
            <React.Suspense fallback={<NoMatch/>}>
                <LazyContext />
            </React.Suspense>
          }/>

        </Route>
        
        
     
   
    </Routes>
    </>
  );
}

export default App;
