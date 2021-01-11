import React, { useState, useEffect } from 'react';
import './Form.css'

export default function Form(props){
    const [lists, setLists] = useState([]);
    let refs = {};

    useEffect(()=>{
        setLists(props.formItems || []);
    }, [props.formItems])

    const addInputRef = (ref, name)=>{
        console.log(ref);
        refs = {
            ...refs,
            [name]: ref,
        };
    }

    const submitForm = (event)=>{
        event.preventDefault();
        const form = {
            which: props.which,
        };
        for(const [key, val] of Object.entries(refs)){
            if(val.type === "checkbox"){
                form[key] = val.checked;
            } else {

                form[key] = val.value;
            }
        }
        props.closePopup({
            submit: true,
            form: form
        });
    }


    return (
        <>
            { (props.open)?
                <div className="popup">
                    <div className="popup-heading">
                        <h3 style={{color: '#042F19'}}>{props.which}</h3>
                    </div>
                    <div className="formDiv">
                    <form className="form" onSubmit={submitForm}>
                        {lists.map((item, index)=>(
                            <div key={index} className="formItem">
                                <label
                                    title={item.name}
                                    aria-label={item.name} 
                                    htmlFor={index} 
                                    style={{flex: 1}}
                                >{item.label}:</label>
                                <input 
                                    id={index} 
                                    type={item.type} 
                                    name={item.name} 
                                    aria-label={item.title} 
                                    title={item.title}
                                    required={item.required} 
                                    ref={(ref)=>addInputRef(ref, item.name)}
                                    style={{flex:1}}
                                />
                            </div>
                        ))}
                        {props.customFormInput && {...props.customFormInput}}
                        <div className="formItem" style={{justifyContent: 'space-evenly'}}>
                            <input type='submit' value="Submit" title="Click to submit form" aria-label="submit form" onClick={submitForm}/>
                            <input type='button' value="Close" title="Click to close form" aria-label="close form" onClick={()=>props.closePopup({submit: false})}/>
                        </div>
                    </form>
                    </div>
                </div>
                :null
            }
        </>
    );
}