import React, { useState, useEffect } from 'react';

const styles = {
    popup: {
        position: 'absolute',
        top: '15vh',
        width: '70vw',
        height: '70vh',
        backgroundColor: 'white',
        borderRadius: 20,
        boxShadow: "6px 6px 8px -2px #262626",
        display: 'flex',
        flexDirection: 'column',
    },
    formDiv: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        placeContent: 'center',
    },
    form: {
        placeContent: 'center',
        padding: 15,
    },
    formItem: {
        display: 'flex',
        flex:1, 
        justifySelf: 'center',
        padding: 10,
        margin: 15,
    }

}

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
                <div style={styles.popup}>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                        <h3 style={{color: '#042F19'}}>{props.which}</h3>
                    </div>
                    <div style={styles.formDiv}>
                    <form style={styles.form} onSubmit={submitForm}>
                        {lists.map((item, index)=>(
                            <div key={index} style={styles.formItem}>
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
                        <div style={{...styles.formItem, justifyContent: 'space-evenly'}}>
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