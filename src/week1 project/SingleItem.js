let content = {
    // border: "solid blue",
    display: "flex",
    justifyContent: "space-between"
},
text = {
    display: "flex",
    width: "150px",
    justifyContent: "space-between"
}

export default function SingleItem(props) {

    return(
        <div className="content" style={content}>
                            <span style={text}>
                                <div className="circle"></div>
                                <div>
                                    <p>{props.name}</p>
                                    <p>{props.time}</p>
                                </div>
                            </span>
                            <div>
                                <p>{props.task}</p>
                            </div>
                        </div>
    )
}