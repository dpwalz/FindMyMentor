import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { APIContext } from '../context/api-provider';
import './ViewProfile.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function ViewProfile() {
	const [userData, setUserData] = useState({});

	const { fetchUserData } = useContext(APIContext);

	useEffect(() => {
		async function prepareProfile() {
			const data = await fetchUserData();
			console.log("data: ")
			console.log(data);
			setUserData(data.user);
		}
		prepareProfile();
	}, []);

	return (
		<div className="profile-container">
			<div className='headshot'>
						<img src={"Images/DC_Headshot.jpg" } alt="headshot" width="200" length= "200" style={{borderRadius: '5%'}}></img>
			</div>
			<p>
				{userData.firstName} {userData.lastName}
			</p>
			<p>{userData.email}</p>
			<p>{userData.biography}</p>
			<p>{userData.workLocation}</p>
			<div className='yop'>
						<h1>Years of Practice</h1>
			</div>
			<p>{userData.yearsOfPractice}</p>
			<p>{userData.designation}</p>
			<div className='zone'>
						<h1>Zone</h1>
			</div>
			<p>{userData.zone}</p>
		</div>
		    
	);
}

export default ViewProfile;
