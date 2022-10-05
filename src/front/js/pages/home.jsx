import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	//const { store, actions } = useContext(Context);
	const [ people, setPeople ] = useState([]);
	const url = 'https://swapi.dev/api/people';

	useEffect(()=> {
			fetch(url).then(response => response.json()).then(data => setPeople(data.results))
	},[])

	return (
		<>
			<h1>
				Characters
			</h1>
		
			<div className="d-flex flex-row flex-nowrap overflow-auto">
			{
				people.map((personaje,index)=>{
					return(
						<div className="col-10 border" key={index} style={{width:"250px", height:"200px", margin: "10px"}}>
							<img src={personaje.url} class="card-img-top" alt=""></img>
							<div className="card-body">
								<h5 className="card-title">{personaje.name}</h5>
								<p className="card-text">Gender: {personaje.gender}</p>
								<p className="card-text">Hair Color : {personaje.hair_color}</p>
								<p className="card-text">Eye-Color : {personaje.eye_color}</p>
							</div>
						</div>
					)
				})
				}
			</div>
			</>
	);};