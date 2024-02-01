import 'bootstrap/dist/css/bootstrap.min.css'
import'bootstrap-icons/font/bootstrap-icons.css'
import { useState } from 'react'
import { value } from './tempvalues'
export let Crudal=()=>{
    let [getdetials,setDetials]=useState(
        {"name":"",
        "place":"",
        "fathername":"",
        "mothername":"",
        "date":"",
        "HSCmark":[],
        "SSLCmark":[],
        "degree":"",
        "number":[],  
        }
    )
    const storedetails=(getting)=>
    {
         const{name,value}=getting.target;
         setDetials(
            (settingvalue)=>
            {
                return{
                    ...settingvalue,
                    [name]:value
                }
            }
         )
    }
    const register=()=>{
        alert("form registered successfully"+JSON.stringify(getdetials))
        value(getdetials);
    }
    const cancel=()=>{
        alert("Refill the form")
    }
    return(
        <>
     
        <div className='container bg-primary col-7'>
        <div className='text-center'>
            <h1> STUDENT REGISTERATION FORM</h1>
        </div>
        <div>
            <label className='form-lable'> Student Name</label>
            <input className='form-control' placeholder='enter the name' name='name'
             onChange={storedetails}
             value={getdetials.name}
            
            ></input>
        </div>
        <div>
            <label className='form-lable'>Student native</label>
            <input className='form-control' placeholder='enter the place' name='place'
            onChange={storedetails}
            value={getdetials.place}
            ></input>
        </div>
        <div>
            <label className='form-lable'>Father's name</label>
            <input className='form-control' placeholder='enter your Father name' name='fathername'
            onChange={storedetails}
            value={getdetials.fathername}
            ></input>
        </div>
        <div>
            <label className='form-lable'>Mother'sname</label>
            <input className='form-control' placeholder='enter your Mother name'name='mothername'
            onChange={storedetails}
            value={getdetials.mothername}
            ></input>
        </div>
        <div>
            <label className='form-lable'>Date of Birth</label>
            <input className='form-control' type='date' name='date'
            onChange={storedetails}
            value={getdetials.date}
            ></input>
        </div>
        <div>
            <label className='form-lable'>10TH mark</label>
            <input className='form-control' placeholder='enter your 10th mark' name='HSCmark'
            onChange={storedetails}
            value={getdetials.HSCmark}
            ></input>
        </div>
        <div>
            <label className='form-lable'>12TH mark</label>
            <input className='form-control' placeholder='enter your 12th mark'name='SSLCmark'
            onChange={storedetails}
            value={getdetials.SSLCmark}
            ></input>
        </div>
        <div>
            <label className='form-lable'>Degree Qualification</label>
            <input className='form-control' placeholder='enter your Degree'name='degree'
            onChange={storedetails}
            value={getdetials.degree}
            ></input>
        </div>
        <div>
            <label className='form-lable'>Mobile number</label>
            <input className='form-control' placeholder='enter your phonenumber'name='number'
            onChange={storedetails}
            value={getdetials.number}
            ></input>
        </div>

        <div className='mt-2 text-center'>
            <button className='btn btn-outline-info col-5' onClick={register}>Register</button>
        </div>
        <div className='mt-2 text-center'>
            <button className='btn btn-outline-danger col-5' onClick={cancel}>Cancel</button>
        </div>
        
        </div>
    
    </>
    )
    }
