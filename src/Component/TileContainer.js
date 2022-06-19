import React,{useState} from 'react'
import CheckBoxContainer from './CheckBoxContainer'
import DescriptionContainer from './DescriptionContainer'
import TitleContainer from './TitleContainer'

const TileContainer = (props) => {
  const [bgColor, setbgColor] = useState("red")
   const selectShortlistedApplicant = (e) => {
     const checked = e.target.checked;
     if (checked) {
      setbgColor("lightgreen");
       console.log(checked); //checked
     } else {
      setbgColor("red");
       console.log(false); //unchecked
     }
   };
    
  return (
    <div className="tile" style={{backgroundColor:bgColor}}>
      <TitleContainer title={props.title} />
      <DescriptionContainer description={props.description} />
      <CheckBoxContainer
        onClick={(e) => {
          selectShortlistedApplicant(e);
        }}
      />
    </div>
  );
}

export default TileContainer