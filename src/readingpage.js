import { useEffect, useState } from "react";
import { Read } from "./tempvalues";
import'bootstrap/dist/css/bootstrap.min.css'

export const Readapage=(INDEX)=>{
let [details,setDetails]=useState({
        "name":"",
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
const getvalue=()=>{
    setDetails(Read(INDEX.one));
}
useEffect(
    ()=>
{
    getvalue();
})




    return(
        <>
        <div className="container">
            <div className="card col-5">
                <div className="card-body bg-info">
                    <h1 className="text-light bg-dark">STUDENT DETAILS</h1>
                    <p>STUDENT NAME:{details.name}</p>
                    <p>STUDENT NATIVE:{details.place}</p>
                    <p>FATHER'S NAME:{details.fathername}</p>
                    <p>MOTHER'S NAME:{details.mothername}</p>
                    <p>DATE OF BIRTH:{details.date}</p>
                    <p>10TH MARK :{details.HSCmark}</p>
                    <p>12TH MARK:{details.SSLCmark}</p>
                    <p>DEGREE QUALIFICATION:{details.degree}</p>
                    <p>MOBILE NUMBER:{details.number}</p>



                </div>
            </div>
        </div>
        </>
    );
}