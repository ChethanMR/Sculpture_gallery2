import { useState } from "react";

export default function Webpage(props) {
  const [index, setindex] = useState(0);
  const [ishidden, setishidden] = useState(false);

  let handleNextClick = () => {
    if (index >= 11) {
      return;
    }
    setindex(index + 1);

    // console.log('next btn clicked',index);
  };

  const handlePrevBtn=()=>{
    if(index<=0){
        return;
    }
    else
    setindex(index-1);
  }
  const  handleShow = () => {
    setishidden(!ishidden);
  };

  return (
    <div>
        <button className="prev_btn" onClick={handlePrevBtn}>Previous</button>
      <button className="next_btn" onClick={handleNextClick}>Next</button>
      <h2>{props.sculptureList[index].name}</h2>
      <p>
        ({index + 1} of {props.sculptureList.length})
      </p>
      <button onClick={handleShow}>{ishidden ? "Show" : "Hide"}</button>
      {ishidden ? "" : <p>{props.sculptureList[index].description}</p>}
      <div>
        <img
          src={props.sculptureList[index].url}
          alt={props.sculptureList[index].alt}
        />
      </div>
    </div>
  );
}
