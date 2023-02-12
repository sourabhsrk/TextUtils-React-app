import React , { useState } from 'react'

export default function Textform(props) {
    const[Text,setText] = useState("Enter text here");

    const handleUpClick = () =>{
        let ntext = Text.toUpperCase();
        setText(ntext);
        props.showAlert("Text has been converted to UpperCase","success")
    }
    const handleLoClick = () =>{
       let ntext = Text.toLowerCase();
       setText(ntext);
       props.showAlert("Text has been converted to LowerCase","success")
   }
    const handleClearText = () =>{
      let ntext = '';
      setText(ntext);
      props.showAlert("Text Cleared","success")
   }
   const handleExtraSpace = () =>{
    let txt_arr = Text.split(/[ ]+/);
    setText(txt_arr.join(" "));
    props.showAlert("Extra Spaces has been removed","success")
 }
    const handleChangeFont = () =>{
      let arr_font = ['Roboto','Caveat','Noto Sans Cherokee','Noto Sans Cherokee','Oswald','Poppins','sans-serif'];
      document.getElementById("mybox").style.fontFamily = arr_font[Math.floor(Math.random()*(arr_font.length+1))];
   }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const handleCopy = () =>{
      navigator.clipboard.writeText(Text);
      props.showAlert("Text Copied","success")
    }
  return (
    <>
      <div className="container">
          <h1 style={{color:props.mode==='light'?'black':'white'}}>{props.heading}</h1>
          <div className="mb-3">
              <label htmlFor="mybox" className="form-label" style={{color:props.mode==='light'?'black':'white'}}>Textarea</label>
              <textarea className="form-control" id="mybox" rows="8" value={Text} onChange={handleOnChange} style={{color:props.mode==='light'?'black':'white',caretColor:props.mode==='light'?'black':'white'}}></textarea>
          </div>
          <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
          <button className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear</button>
          <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>
          <button className="btn btn-primary mx-1 my-1" onClick={handleChangeFont}>Random Font</button>
          <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
      </div>
      <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
        <h2>Text Summary</h2>
        <p>{Text.split(/\s+/).filter((elm)=>{return elm.length!==0}).length} words and {Text.length} characters</p>
        <p>{0.08*Text.split(/\s+/).length}Minutes to read</p>
        <h2>Preview</h2>
        <p>{Text}</p>
      </div>
    </>

  )
}
