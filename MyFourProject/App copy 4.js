import React  from 'react';
import {  Text, View, FlatList } from 'react-native';



export default  StateApp = () => {
return(

<View style={{flex: 1, paddingTop:22}}>
  <FlatList
  data={[


{Key: 'Alabama'},
{Key: 'Alaska'},
{Key: 'Arizona'},
{Key: 'ArKansas'},
{Key: 'California'},
{Key: 'Delaware'},
{Key: 'Florida'},
{Key: 'Georgia'},
{Key: 'Hawaii'},
{Key: 'Idaho'},
{Key: 'Illinois'},
{Key: 'Indiana'},
{Key: 'Colorado'},
{Key: 'Iowa'},
{Key: 'Kanshas'},
{Key: 'Kentucky'},
{Key: 'Maine'},
{Key: 'Maryland'},
{Key: 'Massachusetts'},
{Key: 'Michigan'},
{Key: 'Minnesota'},
{Key: 'Mississippi'},
  ]}

  returnItem={({item}) => <Text style={{padding: 10, fomtSize: 20, height: 44}}> {item.Key} </Text> }
    
   
    />

</View>


  
  
  
  ); //end of return

}