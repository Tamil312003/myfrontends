import'bootstrap/dist/css/bootstrap.min.css'
import'bootstrap-icons/font/bootstrap-icons.css'

import { Button } from 'bootstrap'

export let Bootstrap=()=>{
    return(
        <>
        <h1 align='center'>BOOTSTRAP</h1>  
        <div className=' container row-justify content-center bg-primary text-dark col-7'>
        <form >
            <div className='row'>
                <div className='col'>
                <label classNameform-lable>FIRST NAME</label>
                <input type='text' placeholder='enter your First name' classNameform-control></input>
            </div>
            <div className='col'>
                <label>LAST NAME</label>
                <input type='text' placeholder=' enter your last name'></input>
            </div>
            </div>
            <div className='mt-2 '>
                <div className='col-1'>
                <label>DEPARTMENT</label>
                <input type='text'></input>
                </div>
            </div>
            <br></br>
            <div className='mt-2'>
                <button className="btn btn-outline-danger text-center col-4">SUBMIT <i class="bi bi-1-circle"></i></button>
            </div>
        </form> 
</div>
     </>
    )
}