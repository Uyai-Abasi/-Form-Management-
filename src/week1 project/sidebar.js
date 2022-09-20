import React from "react";
import'./sidebar.css'
const Sidebar = () => {

    return (
        <>
            <div className="bar">
            <div className="sidebar">
                <h1>TASKS</h1>
                </div>
                <div className="sidebar">
                    <div className="circle"></div>
                    <a href="">Task List</a>
                </div>
                <div className="sidebar">
                <div className="circle"></div>
                    <a href="">Task Page</a>
                </div>
                <div className="sidebar">
                <div className="circle"></div>
                    <a href="">New Task</a>
                </div>
                <div className="sidebar">
                <div className="circle"></div>
                    <a href="">Task progress</a>
                </div>
                <div className="sidebar">
                <div className="circle"></div>
                    <a href="">Editing of a task</a>
                </div>
                <div className="sidebar">
                <div className="circle"></div>
                    <a href="">Adding of a new comment</a>
                </div>

            </div>
        </>
    );
}

export default Sidebar;