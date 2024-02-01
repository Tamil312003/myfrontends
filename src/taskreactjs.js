import React from "react";

export let Listall=()=>{
    const veglist=["brinjal","carrot","beetroot","onion"];

    const Showlist=(showing)=>{
        return(
            <>
            <li>{showing.Show}</li>
            </>
        );
    }
    return(
        <>
        <h1>vegetable list</h1>          
        <ul>
            {                 
        veglist.map(
            (getlist)=>
            <Showlist Show={getlist}/>   
        )
       }
        </ul>
        </>
    );
}
export let List=()=>
{
    const Fruits=["Banana","Apple","Orange","Strawberry","Gooseburry","PineApple","Mango"];
    const Listall=(getting)=>
    {
        return(
            <>
                <li>{getting.show}</li>
            </>
        );
    }
    return(
        <>  
            <h1> Currently available fruits</h1>
            <ul>
                {
                    Fruits.map(
                        (get1)=>
                        <Listall show={get1} />  
                    )
                }
            </ul>
        </>     
    )
}
function Lightlist(){
    let lights=["redlight","greenlight","yellowlight","orangelight"];
    let Lightshow=(showing)=>{
        return(
            <>
            <li>{ showing.show}</li>
            </>
        );

    }
    return(
        <>
        <h1>LIGHTLIST</h1>
        <ul>
            {
        lights.map(
            (getlist)=>
            <Lightshow show={getlist}/>
               )
         }
        </ul>
        </>
        

    );
}
export default Lightlist;

// export class Penlist extends React.Component
// {
// render (){
// let penlist=["ballpoint pen","gel pen","ink pen"]
// let penshow=(showing)=>{
// return(
// <>
// <li>{}</li>
// </>

// );

// }

// return





