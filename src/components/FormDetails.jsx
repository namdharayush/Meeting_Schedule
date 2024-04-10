import React, { useRef } from 'react'
import '../style/FormDetails.css'

function FormDetails({handleSubmit}) {

    const name = useRef(null);

    return (
        <div>
            <form action="" className='custom_form' onSubmit={(e)=>handleSubmit(name.current.value,e)}>
                <h4>Enter Details</h4>
                <div>
                    <label className='label' htmlFor="name">Name *</label>
                    <input type="text" ref={name} id='name' />
                </div>
                <div>
                    <label className='label'  htmlFor="email">Email *</label>
                    <input type="email" id='email' />
                </div>
                <div className='checkBox1 mt-3 mb-3'>
                    <h6 className='fs-6'>I want Fibery to work for:*</h6>
                    <div>
                        <input type="checkbox" id="myself" name='myself' value='MySelf' />
                        <label htmlFor="myself">🥕 MySelf</label>
                    </div>
                    <div>
                        <input type="checkbox" id="10people" name='10people' value='10people' />
                        <label htmlFor="10people">{`👩🏽‍🤝‍👩🏻<10 people`}</label>
                    </div>
                    <div>
                        <input type="checkbox" id="10-50people" name='10-50people' value='10-50people' />
                        <label htmlFor="10-50people">🦄 10-50 people</label>
                    </div>
                    <div>
                        <input type="checkbox" id="50+people" name='50+people' value='50+people' />
                        <label htmlFor="50+people">🦅 50+people</label>
                    </div>
                </div>
                <div className='checkBox1 mt-3 mb-3'>
                    <h5 className='fs-6 '>Please, choose up to three options. You are more interested in: *</h5>
                    <div>
                        <input type="checkbox" id="strategy" name='strategy' value='Strategy' />
                        <label htmlFor="strategy">🗻 Strategy</label>
                    </div>
                    <div>
                        <input type="checkbox" id="product_management" name='product_management' value='Product Management' />
                        <label htmlFor="product_management">🌞 Product Management</label>
                    </div>
                    <div>
                        <input type="checkbox" id="engineering" name='engineering' value='Engineering' />
                        <label htmlFor="engineering">💻 Engineering</label>
                    </div>
                    <div>
                        <input type="checkbox" id="feedback_management" name='feedback_management' value='Feedback Management' />
                        <label htmlFor="feedback_management">🎣 Feedback Management</label>
                    </div>
                    <div>
                        <input type="checkbox" id="somethingelse" name='somethingelse' value='Something else' />
                        <label htmlFor="somethingelse">❓ Something else</label>
                    </div>
                </div>
                <div className='mb-3'>
                    <label className='label'  htmlFor="input3">Please, share anything that will help prepare for our meeting.</label>
                    <textarea className='pt-3 mt-2' name="input3" id="input3" style={{width:'100%'}} rows="2" />
                </div>
                <div>
                    <label className='label'  htmlFor="input3">Please, share with us the name of your Fibery workspace (if any)</label>
                    <input type="text" id='input3' />
                </div>
                <p>By proceeding, you confirm that you have read and agree to <span>Calendly's Terms of Use</span> and <span>Privacy Notice.</span></p>
                <button type='submit' className='btn btn-primary mb-5' style={{borderRadius : '50px',fontWeight : '650'}}>Scheduled Event</button>
            </form>
        </div>
    )
}

export default FormDetails