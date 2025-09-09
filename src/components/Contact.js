import './Contact.css'
import { useRef} from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_dvxbogf','template_yeyke98',form.current,{publicKey:'RonycO_shrxYXg_vA,'})
        .then(() => {
            console.Log('successfully sent')
        }).catch((error) => {
            console.Log('FAILED..', error.text)
        })
    }
    return(
        <div>
            <h3 className='contacth3'>Contact me by sending your message</h3>
            <div className='inputfield'>
                <form name='contact' data-netlify='true' ref={form}>
                <input type='hidden' name='form-name' value='contact'/>
                <input type='text' placeholder='Type your Name' required/>
                <input type='email' placeholder='Type your Email' required/>
                <input type='text' placeholder='Type Your Subject'/>
                <textarea placeholder='Type your message'/>

                <button type='submit' onSubmit={sendEmail}>Send</button>

                </form>
                
            </div>
        </div>
    );
}

export default Contact