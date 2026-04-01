import React from 'react';
import {Feather as Icon} from '@expo/vector-icons';
import CommonStyles from '../pages/CommonStyles';  
import { View, Alert, Text, ScrollView, TextInput, Pressable } from 'react-native';

function Loading() {
  return (
    <Pressable style={CommonStyles.loading}>
      <Icon name="loader" size={20} color="#00BFFF" >...Processando.....</Icon> 
    </Pressable>
  );
}


// function Loading() {
//   return (
//     <div className="loader-container">
//       <center><div className="loader"><Icon name="loader" size={50} color="black" style={CommonStyles.loading}></Icon> </div></center>
//     </div>
//   );
// }

export default Loading;