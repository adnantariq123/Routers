import { useNavigate } from "react-router-dom";

export const Home = () => {
    const Navigate = useNavigate()
    return (
        <div>Home
            {/* what does  {replace:true})} do???
        If you need to replace the current location instead of push a new one onto the history stack,
         use navigate(to, { replace: true }). If you need state, use navigate(to, { state }).
        
        <button onClick={()=>Navigate("order-summary", {replace:true})}>Place Order</button>
        */}
            <button onClick={() => Navigate("order-summary")}>Place Order</button>

            <div className="content">
                <h3>What are Web Packs?</h3>
                <p>Webpack is a static module bundler for JavaScript applications — it takes all the code from your application and makes it usable in a web browser. Modules are reusable chunks of code built from your app’s JavaScript, node_modules, images, and the CSS styles which are packaged to be easily used in your website. </p>
                <p>Webpack is a free and open-source module bundler for JavaScript. It is made primarily for JavaScript, but it can transform front-end assets such as HTML, CSS, and images if the corresponding loaders are included. Webpack takes modules with dependencies and generates static assets representing those modules. </p>
            </div>

            <div className="content">
                <h4>What is a websocket service?</h4>
                <p>The WebSocket API is an advanced technology that makes it possible to open a two-way interactive communication session between the user's browser and a server. With this API, you can send messages to a server and receive event-driven responses without having to poll the server for a reply.</p>
            </div>

            <div className="content">
                <h3>What is the Virtual DOM?</h3>
                <p>The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.</p>
            </div>

            <div className="content">
                <h4>Is the Shadow DOM the same as the Virtual DOM?</h4>
                <p>No, they are different. The Shadow DOM is a browser technology designed primarily for scoping variables and CSS in web components. The virtual DOM is a concept implemented by libraries in JavaScript on top of browser APIs.</p>
            </div>

            <div className="content">
                <h4>what is event looping</h4>
                <p>JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks.</p>
            </div>

            <div className="content">
                <h4>Which js engine is used by google chrome?</h4>
                <p>V8 is the name of the JavaScript engine that powers Google Chrome. It's the thing that takes our JavaScript and executes it while browsing with Chrome. V8 provides the runtime environment in which JavaScript executes. The DOM and the other Web Platform APIs are provided by the browser.</p>
                <p>The biggest difference is in compilation. <b>SpiderMonkey</b>(Mozilla) compiles JavaScript to an intermediate language which is interpreted. V8 differs by compiling JavaScript to machine instructions, eliminating a need for an interpreter. During compilation and recompilation, they perform many optimizations.</p>
            </div>

            <div className="content">
                <h4>Memoization</h4>
                <p>Memoization is an optimization technique for accelerating computer programs by caching the results of heavy function calls and returning them when similar inputs are encountered repeatedly. Simply, React memoization is similar to caching</p>
                <p> look at index.css for animation code</p>
            </div>

            <div className="content">
                <h4>What is flux concept in ReactJS?</h4>
                <p>Flux is a programming concept, where the data is uni-directional. This data enters the app and flows through it in one direction until it is rendered on the screen.</p>
            </div>

            <div className="content">
                <h4>What is cross site scripting?</h4>
                <p>Cross-site scripting (also known as XSS) is a web security vulnerability that allows an attacker to compromise the interactions that users have with a vulnerable application. It allows an attacker to circumvent the same origin policy, which is designed to segregate different websites from each other.</p>
            </div>


            <div className="MyMover"></div>
        </div>)
}