import React from 'react';
import './nBackSettings.css';
import { useSelector } from 'react-redux';

const Settings = () => { 

    const numberOfPhotos = useSelector(state => state.nBackSettingsReducer.numberOfPhotos);
    console.log("number of Photos",numberOfPhotos,useSelector(state => state));
    return (
        
<div className="nBackSettings">
settings bar

<form>
<ul>
  <li><label>
    numberOfPhotos:  
    <input type="text" name="name" />  {numberOfPhotos}
  </label>
  </li>
  <li><label>
  numberOfPredictivePhotos:
    <input type="text" name="name" />
  </label>
  </li>
  <li><label>
  NumberofnBackMatches:
    <input type="text" name="name" />
  </label>
  </li>
  <li><label>
  nBackDegree:
    <input type="text" name="name" />
  </label>
  </li>
  <li><label>
  timerSeconds:
    <input type="text" name="name" />
  </label>
  </li>

  <input type="submit" value="Submit" />
</ul>
</form>


  </div>
 
    )
    }

export default Settings;


