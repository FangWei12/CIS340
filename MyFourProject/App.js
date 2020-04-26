import React  from 'react';
import {  Text, View, SectionList } from 'react-native';



export default  StateApp = () => {
return(

<View style={{flex: 1, paddingTop:22}}>
  <SectionList
  sections={[
  {title: 'A', data: ['Alabams', 'Alaska','Arizona','Arkansas']},
  {title: 'C', data: ['California', 'Colorado','Connecticut']},
  {title: 'D', data: ['Delaware']},
  {title: 'F', data: ['Florida']},
  {title: 'G', data: ['Georgia']},
  {title: 'H', data: ['Hawaii']},
  ]}

  renderItem={({item}) => <Text style={{padding: 10, fomtSize: 20, height: 44}}> {item} </Text> }
    renderSectionHeader={({section}) => <Text style={{paddingTop: 4, paddingLeft: 10,
      paddingRight: 10,
    paddingBottom: 4,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: '#9FA8DA'}}>{section.title}</Text>}//set your customer color
   KeyExtractor={(item,index) =>index}
    
   
    />

</View>


  
  
  
  ); //end of return

}