import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';

function ParentComponent() {
	const handleChildClick = () => {
		console.log("Child button clicked!");
	};
	
	return <ChildComponent onClick={handleChildClick} />;
	}

function ChildComponent({ onClick }) {
	return <button onClick={onClick}> Child Button</button>;
}


function Button(){
	// Define the handleClick function here
  const handleClick= () => {
    console.log("Button clicked!");
  };
	return(
		<button onClick={handleClick}>
			Click Me
		</button> 
	);	
}