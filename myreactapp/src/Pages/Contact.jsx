import React from 'react'
import "./Contact.css"
import {useState} from 'react'

const Contact = () => {
 const [form,setForm]=useState({
   name:'',
   email:'',
   subject:'',
  message:'',
   


})
const handleChange=(e)=>{
  const{name,value}=e.target;
  // setForm([name],value) this only works for accessing the particular element and storing not the previous or next element will be stored
  setForm((prev)=>({
    ...prev,
    [name]:value
  }))
}

const handleSubmit=(e)=>{
  e.preventDefault()
  console.log(form)
}
 
 
  return (
    <>
    <div className='connect'>
    <h1>Let's Connect</h1>
    
    <form className="form" onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor=" ">Name:</label>
    <input type="text" name="name" value={form.name} onChange={handleChange}/>
  </div>
  <div className="form-group">
    <label htmlFor=''>Email:</label>
    <input type="email" name="email" value={form.email} onChange={handleChange}/>
  </div>

  <div className="form-group">
    <label htmlFor=''>Subject:</label>
    <input type="text"  name="subject" value={form.subject} onChange={handleChange}/>
  </div>
  <div className="form-group">
    <label htmlFor='' className="message-box">Message:</label>
    <textarea name="message" rows="5" cols="40" value={form.message} onChange={handleChange}></textarea>
  </div>
  {/* <div className="form-group">
    <label htmlFor=''>Gender</label>
    <input type="radio" name="gender"/>
    <label htmlFor='male'>Male</label>
    <input type="radio" name="gender"/>
    <label htmlFor='female'>Female</label>
  </div> */}
  <button className='btn1'>Send Message</button>
</form>
</div>


    </>
  )
}

export default Contact