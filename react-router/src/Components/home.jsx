import { useNavigate } from "react-router-dom";

export const Home=()=>{
    const Navigate = useNavigate()
    return(
    <div>Home
        {/* what does  {replace:true})} do???
        If you need to replace the current location instead of push a new one onto the history stack,
         use navigate(to, { replace: true }). If you need state, use navigate(to, { state }).
        
        <button onClick={()=>Navigate("order-summary", {replace:true})}>Place Order</button>
        */}
        <button onClick={()=>Navigate("order-summary")}>Place Order</button>

        <h3>What is the Virtual DOM?</h3>
        <p>The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.</p>

        <h4>Is the Shadow DOM the same as the Virtual DOM?</h4>
        <p>No, they are different. The Shadow DOM is a browser technology designed primarily for scoping variables and CSS in web components. The virtual DOM is a concept implemented by libraries in JavaScript on top of browser APIs.</p>


        <h4>Which js engine is used by google chrome?</h4>
        <p>V8 is the name of the JavaScript engine that powers Google Chrome. It's the thing that takes our JavaScript and executes it while browsing with Chrome. V8 provides the runtime environment in which JavaScript executes. The DOM and the other Web Platform APIs are provided by the browser.</p>
        <p>The biggest difference is in compilation. <b>SpiderMonkey</b>(Mozilla) compiles JavaScript to an intermediate language which is interpreted. V8 differs by compiling JavaScript to machine instructions, eliminating a need for an interpreter. During compilation and recompilation, they perform many optimizations.</p>

        <h4>Memoization</h4>
        <p>Memoization is an optimization technique for accelerating computer programs by caching the results of heavy function calls and returning them when similar inputs are encountered repeatedly. Simply, React memoization is similar to caching</p>
        <p> look at index.css for animation code</p>

        <h4>What is flux concept in ReactJS?</h4>
        <p>Flux is a programming concept, where the data is uni-directional. This data enters the app and flows through it in one direction until it is rendered on the screen.</p>

        <div className="MyMover"></div>
    </div>)
}