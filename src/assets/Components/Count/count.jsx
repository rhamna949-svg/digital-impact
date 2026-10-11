// import React, { useState } from "react";
// import "./count.css"
// const Count=()=>{
//     const [count ,setCount]= useState(0);
//     const [display , setDisplay] = useState(true);
//     const DisplayCounter = ()=>{
//         setDisplay(!display)
//     }

//     function More () {
//         setCount(count+1);
//     }
//      function Less() {
//          setCount(count-1);
//      }
//      function Refresh() {
//         if (count >0) {
//             setCount(0)
//         }else{
//             setCount(0)
//         }
        
        
//      }
//    return(
//     <>
//     <center>
//         <div className="div">
//         { display &&<h1>{count}</h1>}
//         <button onClick={More} className="btn">More</button>
//         <button onClick={Less} className="btn"> Less</button>
//         <button onClick={Refresh} className="btn">Refresh</button>
//         <button onClick={DisplayCounter} className="btn">{(display)? "click to Hide": "click to show"}</button>

// </div>
//     </center>
//     </>

//    )
// }
// export default Count