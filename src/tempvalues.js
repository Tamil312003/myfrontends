let tempvalue=[]
//  "name":"tamil",
// "place":"mettur",
// "fathername":"kumar",
// "mothername":"periaponnu",
// "date":"03/01/2003",
// "HSCmark":[489],
// "SSLCmark":[501],
// "degree":"BE",
// "number":[6383045998]




export let value=(obj)=>
{
    tempvalue.push(obj);
} 

export let Listall=()=>
{
    return tempvalue;
}


export let Read=(index)=>
{
return tempvalue[index];
}
export let fetchValue=(name)=>{
const temp=tempvalue.filter((data,index)=>{
    return data.name===name;
}

)
return temp[0];
}

export let Altervalue=(data,index)=>{
    return tempvalue[index]=data;
}



export let Remove=(index)=>{
tempvalue=tempvalue.filter((data,pos)=>
{
    return pos!==index;
}
)
return tempvalue;
}