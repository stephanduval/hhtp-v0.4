import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './ResultChecker.css';



const ResultChecker = () => {

    const reduxFinalFileNameArray = useSelector(state => state.imageArrayReducer.finalFileNameArray);
    const shortenedReduxFinalFileNameArray = reduxFinalFileNameArray.map(element => element.slice(32));
    let resultCheckerArray = [
    {name: "ReduxFinalArray", arrayData: shortenedReduxFinalFileNameArray},
    {name: "ReduxFinalArray", arrayData: shortenedReduxFinalFileNameArray},
    {name: "ReduxFinalArray", arrayData: shortenedReduxFinalFileNameArray},
    ];


//    {ReduxArray.map(element => <th colspan="1">{element.name}</th>)};
//{ReduxArray.map(element => <th>{element.name}</th>)}
    const tableGenerator = (ReduxArray) => {
        return (
            <div className="resultsChecker">
          <table>
            <thead>
                
                <tr>
                  {/*ReduxArray.map(column => <th>{column.name}</th>)*/}
                  
                </tr>
            </thead>
            <body>
            <tr>  
            
            {ReduxArray.map(column => <td><b>{column.name}</b></td>)}
            </tr>
            <tr>  
            {ReduxArray.map(column => <td>{column.arrayData.map(thing => <tr>{thing}</tr>)}</td>)}
            </tr>
            
            </body>
          </table>
          </div>
            )
            };
        

    
    // const tableGenerator = (array) => {
    // return (
    //     <table id="resultCheckerTable">
    // <thead>
    // <tr>
    //         <th colSpan="100%" >Array Results</th>
    //     </tr>
    //     <tr>
    //         <th colspan="1" >Redux_Array</th>
    //         <th colspan="1" >Array Results</th>
    //         <th colspan="1" >Array Results</th>
    //         <th colspan="1" >Array Results</th>
    //         <th colspan="1" >Array Results</th>
    //         <th colspan="1" >Array Results</th>
    //         <th colspan="1" >Array Results</th>
    //         <th colspan="1" >Array Results</th>
    //         <th colspan="1" >Array Results</th>
    //         <th colspan="1" >Array Results</th>
    //     </tr>
    // </thead>
    // <tbody>

    //     <tr>
    //         <td>es</td>
    //         <td>se</td>
    //         <td>The table body</td>
    //         <td>with two columns</td>
    //         <td>The table body</td>
    //         <td>with two columns</td>
    //         <td>The table body</td>
    //         <td>with two columns</td>
    //         <td>The table body</td>
    //         <td>with two columns</td>
    //     </tr>
    // {/* )} */}
    // </tbody>
    // </table>
    //    );
    // };




    // const stack = (array) => {
    //     var t = document.getElementById("hi");
    //     var trs = t.getElementsByTagName("tr");
    //     var tds = t.getElementsByTagName("td");
        

    //     for (var i=0; i<trs.length; i++)
    //     {
    //         // tds = trs[i].getElementsByTagName("td");
    //         // for (var n=0; n<tds.length;n++)
    //         // {
    //         //     tds[n].onclick=function() { alert(this.innerHTML); }
    //         // }
    //     tds[i].innerHTML = array[i];
    //     // t = document.getElementById("hi").getElementsByTagName("td")
    //     // t[i].innerHTML = array[i];

    //     }

    // };



useEffect(() => {
    //stack(ReduxFinalFileNameArray);
    // return () => {
        
    // }
},)

//console.log("stack return",stack(ReduxFinalFileNameArray));

return (


<div className="resultsChecker">
{/*ableGenerator(ReduxFinalFileNameArray)*/}
{/* {Stack()} */}
{/* {tableGenerator2()} */}


{tableGenerator(resultCheckerArray)}

</div>

);

}


export default ResultChecker;