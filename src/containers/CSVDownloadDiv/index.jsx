import './CSVDownload.css';
import React from 'react';


import { CSVLink, CSVDownload } from "react-csv";

const csvData = [
  ["firstname", "lastname", "email"],
  ["Ahmed", "Tomi", "ah@smthing.co.com"],
  ["Raed", "Labes", "rl@smthing.co.com"],
  ["Yezzi", "Min l3b", "ymin@cocococo.com"]
];





const CSVDownloadDiv = () => {
 
    return (
            
        <div>
               <CSVLink data={csvData}>Download CSV</CSVLink>

  
        </div>

        )
}

export default CSVDownloadDiv