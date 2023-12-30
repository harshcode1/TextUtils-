import React, { useState } from 'react'


export default function About() {

    // let myStyle = { here i could directly change the variables but then i need to change the color when clicked on the button so i will nedd to use {usestate}
    //     color: 'white',
    //     backgroundColor: 'black'
    // }
    const [myStyle, setMystyle] = useState({
        color: "white",
        backgroundColor: "black"
    })

    const [buttonText,setText] = useState("Enable Light Mode")

    const toggleIt = () => {
        if(myStyle.color=='white'){
            setMystyle({
                color: "black",
                backgroundColor: "white",
                border: '2px solid white'
            })
            setText("Enable Dark Mode")
        }else{
            setMystyle({
                color: "white",
                backgroundColor: "black"
            })
            setText("Enable Light Mode")
        }
    }
    return (
        <div className="container" style={myStyle}>
            <h2 className='header'>About US</h2>
            <div className="accordion" id="accordionPanelsStayOpenExample" >
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            <strong>Origin</strong>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                        <div className="accordion-body" style={myStyle}>
                            I created this Website as My first Website which I created while watching the React Tutorial and It is very close to me. like as It's Name says It is a Very good Website with great Utility. So you can Please Try all of it's functionalities
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" style={myStyle} aria-controls="panelsStayOpen-collapseTwo">
                            <strong>Uses</strong>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                        <div className="accordion-body" style={myStyle}>
                            It can Convert Upper case and Lowercase as well as It can extract all the extra spaces as well as It can Capitilize the first and to add the butter on it, it will tell you about the words and characters that are there in the text area that you will write and it's theme can also be changed to different - 2 colors. 
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree" style={myStyle}>
                            <strong>Contact Me </strong>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                        <div className="accordion-body" style={myStyle}>
                            Owner Name :- Harsh Soni 
                            <hr />
                            Mobile No :- 8950775755
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={toggleIt} type="button" className="btn btn-warning my-3" >{buttonText}</button>
        </div>
    )
}
