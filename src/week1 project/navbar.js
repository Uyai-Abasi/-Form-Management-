import React from "react";


const Nav = () => {
     let nav = {
          border: "solid gray",
          display: "flex",
          justifyContent: "space-between",
          // alignItem:"right",
          // width:"92%",
          // position:"absolute",
          right: "0px",
          height:"90px",
          alignItems: "center"
        
          

     },
          icons={
               // border: "solid gray",
               display: "flex",

          }
     return (
          <nav style={nav}>
               <div className="circle"> </div>
               <div style={icons}>
                    <div className="circle"> </div>
                    <div className="circle"> </div>
               </div>
          </nav>
     );
}

export default Nav;