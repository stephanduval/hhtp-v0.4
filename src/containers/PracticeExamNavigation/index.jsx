import './PracticeExamNavigation.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@material-ui/core';

//




const ExamNavigation = () => {




    return (
        
            
        <div className="buttonSpace">

    <Button color ="primary" variant="contained" stringvalue={"Same as *n* photos Back"} onClick={()=>{}}>"W" - Same as photos Back
        </Button>

        <Button color ="default" variant="contained" stringvalue={"O - Predictive"} onClick={()=>{}}>"O" - Predictive - I was told to remember this
        </Button>

        <Button color ="secondary" variant="contained" stringvalue={"S - Unique Image"} onClick={()=>{}}>"S" - Unique Image
        </Button>



        </div>

        )
}

export default ExamNavigation