import React, { useState } from "react";

const Card = (props) => {
  let [count, setCounts] = useState(0);
function onClickHandler() {
  setCount(prevSate => prevSate +1);
}
const setCount =() =>{

}
  return (
    <div>
      <div>
        <h2>{count}</h2>
        <button onClick={onClickHandler}>up count</button>
        <button onClick={()=>setCount(count-1)}>down Count</button>
      </div>
      <div className="card">
        <div className="top">
          <p>{props.key}</p>
          <h2 className="name ">{props.name}</h2>
          <img className="circle-img" src={props.imgURL} alt="avatar_img" />
        </div>
        <div className="bottom">
          <p className="info">{props.phone}</p>
          <p className="info">{props.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
