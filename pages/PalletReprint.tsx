import React, {useState, useRef, useEffect} from 'react';
import {View, Alert, Text,ScrollView,TextInput,Pressable} from 'react-native';  
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {FontAwesome5,MaterialCommunityIcons as Icon} from '@expo/vector-icons';
import  HeaderBarPages from '../components/HeaderBarPages';
import {api} from '../services/api';
import CommonStyles from './CommonStyles'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface Params {
 SeqPal: string;
 CodPal: string;
}  

function PalletReprint(){
    const [CodPal,setCodPal] = useState('')
    const [SeqPal,setSeqPal] = useState ('')

    const TextInput2 = useRef<TextInput>(null);

     // DEFINIÇÃO DA BASE DE DADOS
     const [connection, setConnection] = useState('')
     let setDataBase = async () => {
         const serverData = await AsyncStorage.getItem('database')
         if (serverData) setConnection(serverData)       
     }
     useEffect(()=>{setDataBase();},[]);

    const handleSignInPress = async () => {
        if (CodPal.length === 0 || SeqPal.length === 0) {
            Alert.alert('Dados não Informados', 'Verificar dados informados'); 
        } else {
            const retorno = await api(connection).post('/pallet-reprint', {              
                token_user: 'qMW3xgGUYwW8FeuG',
                token_password: 'm2PzXWepAfHgupeT',
                CodPal: CodPal,
                SeqPal: SeqPal
            });
            
            if(retorno.data.payload.retorno){ 
                setCodPal('')
                setSeqPal ('')
                alert('Imprimido com sucesso!');
            }else{
                Alert.alert('Erro', 'Nenhum retorno');
            }

        }
      };
      
return (
        <View style={CommonStyles.container}>
            <View>
                <HeaderBarPages></HeaderBarPages>
            </View>
            <KeyboardAwareScrollView>
                <ScrollView style={CommonStyles.form}>
                    <View style={CommonStyles.card}>
                        <View style={CommonStyles.cardHeader}>
                            <Text style={CommonStyles.textHeader}> Reimprimir Pallet</Text>
                        </View>                   
                        <View style={CommonStyles.cardBody}>
                            <View style={CommonStyles.input}>   
                                <FontAwesome5 name="boxes" size={24} color="black" style={CommonStyles.iconinput}/>                                 
                                <TextInput
                                    placeholder='Código do pallet:'
                                    onChangeText={value => setCodPal (value)}                                   
                                    autoFocus={true}
                                    value={CodPal}
                                    style={{width: '75%', fontSize:20}}
                                    onSubmitEditing={() => TextInput2} 
                                    blurOnSubmit={false}   
                                />
                            </View>
                            <View style={CommonStyles.input}>     
                                <Icon name="view-sequential-outline" size={24} color="black" style={CommonStyles.iconinput}/>                               
                                <TextInput    
                                    ref={TextInput2}                                
                                    placeholder='Sequencia do pallet'
                                    onChangeText={value => setSeqPal (value)} 
                                    value={SeqPal}
                                    enterKeyHint="next"
                                    style={{width: '75%', fontSize:20}} 
                                />
                            </View>
                        </View>
                        <View>
                            <Pressable style={CommonStyles.btnGravar} onPress={handleSignInPress}> 
                                <Text style={CommonStyles.labelGravar}>Imprimir</Text>
                            </Pressable>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAwareScrollView>
        </View>
    )
}

export default PalletReprint ;