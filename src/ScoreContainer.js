import React from 'react';

function ScoreContainer(props){
	return(
		<div className="scorecontainer">
	        <button className="scorebtn plus" onClick={props.plus}>+</button>
	        <button className="scorebtn minus" onClick={props.minus}>–</button>
		</div>
	);
}
export default ScoreContainer;
