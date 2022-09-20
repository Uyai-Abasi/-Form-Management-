import React from "react";
import SingleItem from "./SingleItem";
const  Card = (props) => {
    let lists= props.data
    console.log(lists)
    let section = {
        border: "solid gray",
        width: "500px",
        height:"400px",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between"

    },
        content = {
            // border: "solid blue",
            display: "flex",
            justifyContent: "space-between"
        },
        text = {
            display: "flex",
            width: "150px",
            justifyContent: "space-between"
        }
    return (
        <>
        <div className="section" style={section}>
                <h1>Assign Task</h1>
                {
                    lists.map((item) => (
                        <SingleItem {...item} /> 
                    ))
                }
            </div>
        </>
      );
}
 
export default Card;