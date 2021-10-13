import React,{useState} from 'react'
import './Contact.css'
import Header from '../Header/Header'
import { useEffect } from 'react/cjs/react.development'
import Footer from '../Footer/Footer'
const Contact = () => {
  const [state, setstate] = useState({
      name:'',
      email:'',
      contact:'',
      company:'',
      message:''
  })

  const {name,email,contact,company,message} = state

  const handleData = (e) =>{
      setstate({...state,[e.target.name]:e.target.value})
  }

//   api call for submitting data in google sheets 
  const submitData = async(e) =>{
      e.preventDefault();
      try{
        const response = await fetch(
            "https://v1.nocodeapi.com/blockreate/google_sheets/sXasARFzuWyJEckF?tabId=Sheet1",{
                method:'POST',
                headers:{
                    'Content-Type' :'application/json'
                },
                body: JSON.stringify([[name,email,contact,company,message,new Date().toLocaleString()]])
            })
            await response.json()
            setstate({...state,name:'',email:'',contact:'',company:'',message:''})
      }catch (err){
        console.log(err)
      }
  }


    return (
        <>
        <Header/>
        <div className="contact__page">
            <h1>Contact Us</h1>
            <p>Need help? You can always conatct us</p>
            <div className="parent-info">
            <input type="text" name="name" value={name}  onChange={handleData} placeholder="Full Name" class="popping-border"/>
            <input type="email" name="email" value={email} onChange={handleData} placeholder="Email" class="popping-border"/>
            <input type="tel" name="contact" value={contact} onChange={handleData} placeholder="Contat No." class="popping-border"/>
            <input type="text" name="company" value={company} onChange={handleData} placeholder="Company" class="popping-border"/>
            <input type="textarea" name="message" value={message} onChange={handleData} placeholder="Message" class="popping-border-area"/>
            <button className="submit_btn" onClick={submitData}>Submit</button>
            </div>
        </div>
        <Footer/>
    </>
    )
}

export default Contact
