import { useEffect, useState } from "react"
import { Crudal } from "./formcrudal"
import'bootstrap/dist/css/bootstrap.min.css'
import { Listall, Remove, fetchValue } from "./tempvalues"
import { Readapage } from "./readingpage"
import { Updating } from "./update"


export let Tabletask=()=>
{
    const[gettingpage,settingPage]=useState(false);
    const[getarray,setArray]=useState([]);
    const[readpage,setreadPage]=useState(false);
    const[position,setPosition]=useState(0);
    const[update,setUpdate]=useState(false);
    const[mention,setMention]=useState({})

    
    useEffect(
        ()=>{
           setArray(Listall);
        }
    )
    return(
        <>
        {
            (gettingpage)?
            <>
            <Crudal/>  
            <div className="text-center mt-3">
            <button className="btn btn-outline-primary container col-5 " onClick={
                ()=>{
                 settingPage(true)
                }
            }>
                BACK
            </button> 
            </div>  
           </>
           :


           (readpage)?
           <>
            <Readapage one={position}/>
            <div className="container">
            <button className="btn btn-outline-danger col-4" onClick={()=>
            {
                setreadPage(false)

            }}>
                GOTO TABLE
            </button>
            </div>

           </>:
           (update)?
           <>
           < Updating one={position} mentions={mention}/>
           <button className="btn btn-outline-danger" onClick={()=>{
            setUpdate(false)
           }}
           >
            BACK
           </button>
           
           </>:




           <>
           <div className="container col-4 mb-5">
           <button className=' btn btn-outline-info'
           onClick={()=>
           {
               settingPage(true)
           }}>
               Goto Form
           </button> 
           </div>

        <div className="container">
            <table  className='table-hover'>
            <thead className="text-light">
                <tr >
                <th>STUDENT NAME</th>
                <th> STUDENT NATIVE</th>
                <th>FATHER'S NAME</th>
                <th>MOTHER'NAME</th>
                <th>DATE OF BIRTH</th>  
                <th>HSC MARK</th> 
                <th>SSLC MARK</th> 
                <th>DEGREE</th>
                <th>MOBILE NUMBER</th>
                </tr>
            </thead>
            <tbody>
                
                    {
                    getarray.map((data,index)=>
                    
                    <tr>
                    <td>{data.name}</td>
                    <td>{data.place}</td>
                    <td>{data.fathername}</td>
                    <td>{data.mothername}</td>
                    <td>{data.date}</td>
                    <td>{data.HSCmark}</td>
                    <td>{data.SSLCmark}</td>
                    <td>{data.degree}</td>
                    <td>{data.number}</td>
                    <td>  
                         <button className='btn btn-outline-warning'
                          onClick={()=>{
                            setUpdate(true)
                            setPosition(index)
                            setMention(fetchValue(data.name))

                          }}
                         
                         >UPDATE</button>

                         <button className='btn btn-outline-secondary'
                         onClick={()=>{
                            setreadPage(true)
                            setPosition(index)
                          }}
                         
                         >READ</button>

                         <button className='btn btn-outline-danger'
                         onClick={()=>{
                            setArray(Remove(index));
                         }}
                         
                         
                         >DELETE</button>
                    </td>
                    </tr>
                    
                    
                      )  
                       
                }
            </tbody>
            </table>
        </div>
        
        </>
         }
        </>  
      )   
    }
