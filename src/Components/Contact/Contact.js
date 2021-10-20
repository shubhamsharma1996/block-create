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
  const [successMessage,setSuccessMessage] = useState('')
  const [errorMessage,setErrorMessage] = useState('')

  const {name,email,contact,company,message} = state

  const handleData = (e) =>{
      setstate({...state,[e.target.name]:e.target.value})
  }
  const msgs = (msg) =>{
      setErrorMessage(msg)
      setTimeout(()=>{
        setErrorMessage('')
    },3000)
  }
//   api call for submitting data in google sheets 
  const submitData = async(e) =>{
      e.preventDefault();
      const number = /^\d+$/
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if(!re.test(email)){
          return msgs("Please enter valid email address")
      }
      if(!number.test(contact)){
        return  msgs("Please enter number values only in contact") 
      }
      
      if(name === "" || contact === "" || email === "" || company === "" || message==='' ){
        setErrorMessage('Please Fill All The Field')
             setTimeout(()=>{
                setErrorMessage('')
            },3000)
      }else{

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
                    setSuccessMessage('Thank You!! We have recieved your query, Look for our email in this next 24 Business Hours')
                    setTimeout(()=>{
                            setSuccessMessage('')
                    window.open( "https://blockreate.com/Docs/Blockreate%20Pitch%20Deck.pdf", "_blank");

                        },3000)
                }catch (err){
                    console.log(err)
                }
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
            <button className="submit_btn" onClick={submitData}><span class="mdi mdi-spin"/>Submit</button>
            {successMessage &&
                <h3 className="success__message">{successMessage}</h3>
            }
            {errorMessage &&
                <h3 className="error__message">{errorMessage}</h3>
            }
            </div>
        </div>
        <Footer/>
    </>
    )
}

export default Contact
