import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import SimpleReactValidator from 'simple-react-validator';

const ContactForm = () => {
    const router = useRouter();
    const { message } = router.query; // get ?message=...

    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });

    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));

    useEffect(() => {
        if (message) {
            // Prefill message if query param exists
            setForms((prev) => ({ ...prev, message }));
        }
    }, [message]);

    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = e => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            alert('Form submitted!'); // or your API call
            setForms({
                name: '',
                email: '',
                subject: '',
                phone: '',
                message: ''
            })
        } else {
            validator.showMessages();
        }
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="input_title" htmlFor="input_name">Full Name</label>
                        <input
                            value={forms.name}
                            type="text"
                            name="name"
                            className="form-control"
                            onBlur={changeHandler}
                            onChange={changeHandler}
                            placeholder="Goladria Gomez"
                        />
                        {validator.message('name', forms.name, 'required|alpha_space')}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="input_title" htmlFor="input_email">Your Email</label>
                        <input
                            value={forms.email}
                            type="email"
                            name="email"
                            className="form-control"
                            onBlur={changeHandler}
                            onChange={changeHandler}
                            placeholder="Corp-Digital@example.com"
                        />
                        {validator.message('email', forms.email, 'required|email')}
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-group">
                        <label className="input_title" htmlFor="input_phone">Your Phone</label>
                        <input
                            value={forms.phone}
                            type="phone"
                            name="phone"
                            className="form-control"
                            onBlur={changeHandler}
                            onChange={changeHandler}
                            placeholder="+8250-3560 6565"
                        />
                        {validator.message('phone', forms.phone, 'required|phone')}
                    </div>
                </div>
                {/* other inputs unchanged */}
                <div className="col-12">
                    <div className="form-group">
                        <label className="input_title" htmlFor="input_textarea">Message</label>
                        <textarea
                            value={forms.message}
                            name="message"
                            className="form-control"
                            onBlur={changeHandler}
                            onChange={changeHandler}
                            placeholder="How can we help you?"
                        ></textarea>
                        {validator.message('message', forms.message, 'required')}
                    </div>
                    <button type="submit" className="btn btn-primary">
                        <span className="btn_label" data-text="Send Message">Send Message</span>
                        <span className="btn_icon">
                            <i className="fa-solid fa-arrow-up-right"></i>
                        </span>
                    </button>
                </div>
            </div>
        </form>
    )
}

export default ContactForm;
