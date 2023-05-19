import axios from 'axios'
import {useState} from 'react'



export const Form=()=>{


    const [message,setMessage]=useState({
        name:'',
        email:'',
        subject:'',
        message:''
    })

    const nameInputHandler=(text:string)=>{
        setMessage({...message,name:text})
    }
    const emailInputHandler=(text:string)=>{
        setMessage({...message,email:text})
    }
    const subjectInputHandler=(text:string)=>{
        setMessage({...message,subject:text})
    }
    const messageInputHandler=(text:string)=>{
        setMessage({...message,message:text})
    }

    const  submit= async(event:React.FormEvent<HTMLFormElement>)=>{
        event?.preventDefault()
        const url='http://localhost:5050'
        try{
            const res=await axios.post(`${url}/sendmail`,{
                from:message.email,
                subject:message.subject,
                text:message.message ,
                to:'shamray.ruslan068@gmail.com'
            })
            alert('sent')
        }catch(e){
            console.error(e)
        }
        setMessage({
            name:'',
            email:'',
            subject:'',
            message:''
        })
    }


    return(
        <form onSubmit={(e)=>submit(e)}  style={{maxWidth:'400px',padding:'20px'}}>
            <div className="row ">
                <div className="col-md-6" style={{}}>
                    <label htmlFor="validationDefault01" className="form-label">Your name</label>
                    <input onChange={e=>nameInputHandler(e.target.value)} type="text" className="form-control" id="validationDefault01" value={message.name} required/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationDefault02" className="form-label">Your email</label>
                    <input onChange={e=>emailInputHandler(e.target.value)} type="text" className="form-control" id="validationDefault02" value={message.email} required/>
                </div>
            </div>
            <br/>
            <div >
                <label htmlFor="validationDefaultUsername" className="form-label">subject</label>
                <input onChange={e=>subjectInputHandler(e.target.value)} type="text" className="form-control" id="validationDefaultUsername" value={message.subject} aria-describedby="inputGroupPrepend2" required/> 
            </div>
            <div className="">
                <label htmlFor="validationDefault03" className="form-label">mesage</label>
                <textarea onChange={e=>messageInputHandler(e.target.value)} className="form-control" value={message.message} id="validationDefault03" required/>
            </div> 
            <div className="text-center">
                <button className="btn btn-primary" type="submit">Submit form</button>
            </div>
        </form>
    )
}