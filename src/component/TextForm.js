// Now here we will learn how to use hook that are available in react. Simply they enable us to use class based features without creating an actual class

import React,{useState} from 'react'

export default function TextForm(props) {
    // Here text is the variable that will be assigned by us or given by us on the website 
    const [text, setText] = useState(''); //-> Enter Text Here' It's like a default Value like of a Constructor...
    // text = "set text"  // Wrong way to set the text
    // setText("This is my new Text");  // -->> This is the Correct Way

    const handleUpClick = () =>{
        console.log("UpperCase was Clicked "+text)
        let Uptext = text.toUpperCase();
        setText(Uptext)
        props.showAlert("Converted to Uppercase","success")
    }

    const handleLoClick = () =>{
        // console.log("UpperCase was Clicked "+text)
        let Uptext = text.toLowerCase();
        setText(Uptext)
        props.showAlert("Converted to Lowercase","success")
    }

    const changeOnClick = (event) =>{
        console.log("Just a Thing")
        setText(event.target.value)
    }

    const cleanLoClick = (event) =>{
        let vy = ("")
        setText(vy)
        props.showAlert("Cleared PATH","success")
    }

    // This is the way how you can copy the text through Javascript..........
    const copyFunc = () => {
        // var text = document.getElementById("myBox")
        // text.select();
        navigator.clipboard.writeText(text)
        props.showAlert("Copy the TEXT","success")
    }

    // Now we need to remove the extra Spaces using js regex
    const removeSpace = () => {
        let newtext = text.split(/[ ]+/)
        setText(newtext.join(" "))
        props.showAlert("REMOVED THE EXTRA SPACES","success")
    } 

    const firstWordCapital = () => {
        console.log(typeof text);
        if(text==null){
            return " "
        }
        let newText = text.split(/[ ]+/);
        console.log(newText);
        for (let i=0;i<newText.length;i++) {
            newText[i] = newText[i].charAt(0).toUpperCase()+newText[i].slice(1).toLowerCase();
        }
        setText(newText.join(" "))
        props.showAlert("SETTED THE FIRST WORD CAPITAL","success")
    }

    const countCharacters = (word) => {
        if(word==null){
            return 0;
        }
        let m = word.split(" ")
        return m.join('').length
    }

    const countWords = (word) => {
        let newtext = word.split(/[ ]+/)
        return newtext.length
    }

    return (
        <>
        <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox"onChange={changeOnClick} style={{backgroundColor: props.mode==='dark'?'grey':'dark',color: props.mode==='light'?'dark':'light'}} value={text} rows="8"></textarea>
            </div>
            <button disabled={text.length == 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}  >Convert UpperCase</button>
            <button disabled={text.length == 0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}  >Convert Lowercase</button>
            <button disabled={text.length == 0} className="btn btn-primary mx-2 my-1" onClick={cleanLoClick}  >Clear SPACE</button>
            <button disabled={text.length == 0} className="btn btn-primary mx-2 my-1" onClick={copyFunc}  >Copy Text</button>
            <button disabled={text.length == 0} className="btn btn-primary mx-2 my-1" onClick={removeSpace}  >Extract Spaces</button>
            <button disabled={text.length == 0} className="btn btn-primary mx-2 my-1" onClick={firstWordCapital}  >Capital</button>
        </div>
        <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
        <h2>You Text Summary</h2>
        <p>{countWords(text)} Words and {countCharacters(text)} Characters</p>
        <p>{0.008 * countWords(text)} Minutes are required to READ IT...</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Your Text So that You can have a Preview"}</p>
        </div>
        </>
    )
}