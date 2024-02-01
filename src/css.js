  
  import'./external.css'
  
  export let Cssdesign=()=>{

    let Internalcss={
        backgroundColor:'red',
        textDecoration:'line-through'

    }
    return(
        <>
        <h1 align='center'>CSS</h1>
        <br></br>
        <h6 style={{color:"red",background:"black"} } align='center'>at FlowParserMixin.parseMaybeUnary (D:\design\frontend\learning-frontend\node_modules\@babel\parser\lib\index.js:10816:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (D:\design\frontend\learning-frontend\node_modules\@babel\parser\lib\index.js:10654:61)
    at FlowParserMixin.parseExprOps (D:\design\frontend\learning-frontend\node_modules\@babel\parser\lib\index.js:10659:23)
    at FlowParserMixin.parseMaybeConditional (D:\design\frontend\learning-frontend\node_modules\@babel\parser\lib\index.js:10636:23)</h6>
    <hr></hr>
    <hr></hr>
    <br></br>
    <div align='center' >
    <q style={Internalcss}>at FlowParserMixin.parseMaybeAssignAllowIn (D:\design\frontend\learning-frontend\node_modules\@babel\parser\lib\index.js:10567:17)</q>
   </div>
   <hr></hr>      
   <hr></hr>
    <br></br>
    <div align='center'>
        <h1 align='center'>CSS DESIGN</h1>
        <table >
            <thead>
            <tr>
                <th>SI NO</th>
                <th>NAME</th>
                <th>REG.NO</th>
                <th>DEPARTMENT</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                    <td>1</td>
                    <td>P.K.Tamilselvan</td>
                    <td>2061047</td>
                    <td>Mett</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Nivash</td>
                    <td>2061030</td>
                    <td>CSE</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Mukilan</td>
                    <td>2061024</td>
                    <td>EEE</td>
                </tr>
                
            </tbody>
        </table>  
    </div>
        </>
    );
}