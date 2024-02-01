import { useState } from "react";
import'bootstrap/dist/css/bootstrap.min.css'
export var Oddoreven=()=>{

    const [getvalue,setNumber]=useState();
    const check=()=>{  
        {
          setNumber(getvalue+1)
        }
        }
 
       const show=(temp)=>{

         setNumber(temp.target.value)
       }
    return(
        <>
        <form>
        <div>
            <label className="form-lable">enter the number </label>
            <input
             type="text" className="form-control" onChange={show}></input >
             <br></br>
             <br></br>
             {/* <button onClick={check}className="btn btn-outline-danger text-dark col-5"
             >start</button> */}

             {getvalue}-this number is :{
                getvalue%2===0?'evennumber':'odd number'
             }
        </div>
        </form>
        </>

    );
}