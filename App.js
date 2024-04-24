import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const applicants = [{
  name: 'Joe', work: 'freelance-developer',
  blogs: '54', websites:'32',
  hackathons: '6', location: 'morocco', id:'0'
},
  {
    name:'Janet', work:'fullstack-developer',
    blogs:'34', websites:'32',
    hackathons:'8', location:'Mozambique', id:'1',
  }
];

export default function App() {
  return (
    <View styles={styles.container}>
    <>
    {applicants.map(function(applicant) {
      return (
        <Text key={applicant.id} style={styles.textFont}>
          <Text style={styles.p}>Applicant Name:{applicant.name}</Text>

          <Text>Applicant location:{applicant.location}</Text>
          
          <Text>Hackathons participated:{applicant.hackathons}</Text>

        </Text>
      )
    })}
    </>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  p: {
    marginTop: 5,
    marginBottom:5,
    paddingVertical:20,
    lineHeight:50
  },
  textFont:{
    marginTop:100,
    marginLeft:50,
    marginRight:50,
    marginBottom:10,
    fontSize:20,
    fontWeight:'100',
  }
});
