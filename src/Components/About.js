import React, {useState} from 'react'

 
export default function About() {
    const[themeTXT,setthemeTXT] = useState('Enable Dark Mode');
    const [myStyle,setmyStyle] = useState({
        color : 'black',
        backgroundColor: 'white'
    })
    const toggletheme = ()=>{
        if(myStyle.color==='white'){
            setmyStyle({
                color : 'black',
                backgroundColor: 'white'
            });
            setthemeTXT('Enable Dark Mode');
        }
        else{
            setmyStyle({
                color : 'white',
                backgroundColor: 'black'
            });
            setthemeTXT('Enable Light Mode');
        }
    }
  return (
    <div>
        <div className="heading" style={myStyle}>
            <h1 className="my-3">About Us</h1>
            <div className="form-check form-switch mx-10">
                <input className="form-check-input" type="checkbox" role="switch" id="theme" onChange={toggletheme}/>
                <label className="form-check-label" htmlFor="theme">{themeTXT}</label>
            </div>
        </div>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item" >
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze Your Text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    TextUtil give you a way to analyze your text quickly and efficiently. It contains various functions and we will be adding more functions which will be helpful.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to Use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Textutils is a free character counter tool that provides instant character count and word count statistics for a given text. It contains other fucntions as well like change font to random, remoe extra space, copy with single click.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    This word counter software works in any web browsers such as chrome, firefox, edge, safari, opera etc. It suits to manipulate your text for your school projects, your pdf file, blogs and writing scripts.
                </div>
                </div>
            </div>
       </div>
    </div>
  )
}
