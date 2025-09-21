import React from 'react';
import { useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_4pm9n2i','template_0focnl7',form.current,{publicKey:'RonycO_shrxYXg_vA,'})
        .then(() => {
            console.log('successfully sent')
        }).catch((error) => {
            console.log('FAILED..', error.text)
        })
    }
    return(
        <div className='container-sm|md|lg|xl bg-dark text-white text-center mt-3 p-3 rounded mx-auto'>
            <h3>Contact me by sending your message</h3>
            <div className='mx-auto' >
                <form name='contact' data-netlify='true' ref={form} onSubmit={sendEmail}>
                    <div className='mb-3 mt-3 mx-auto' style={{width:'350px'}}>
                        <label For='name' className='form-label'>Name</label>
                        <input type='text' className='form-control'id='name' name='name' placeholder='Type your Name' required/>
                    </div>
                    <div className='mb-3 mt-3 mx-auto'style={{width:'350px'}}>
                        <label For='email' className='form-label'>email</label>
                        <input type='email' className='form-control' name='email' placeholder='Type your email' required/>
                    </div >
                    <div className='mb-3 mt-3 mx-auto' style={{width:'350px'}}>
                        <label For='sunject' className='form-label'>Subject</label>
                        <input type='text' className='form-control' name='subject' placeholder='Type your subject' required/>
                    </div>
                    <div className='mb-3 mt-3 mx-auto' style={{width:'400px'}}>
                        <label For='comment' className='form-label'>Comment</label>
                        <textarea className='form-control' rows='5' placeholder='Type your message'/>

                    </div>
                <button type='submit' className='btn btn-primary'>Send</button>

                </form>
                
            </div>
        </div>
    );
}

export default Contact