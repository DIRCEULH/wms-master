import React,{useState, useRef, useEffect} from 'react';
import { View, Text, ScrollView, TextInput, Pressable, Alert } from 'react-native';  
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {Feather as Icon,FontAwesome} from '@expo/vector-icons';
import Loading from '../components/Loading';
import  HeaderBarPages from '../components/HeaderBarPages';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../services/api';
import CommonStyles from './CommonStyles';

function PalletAddress(){
    const [endereco, setEndereco] = useState('')    
    const [pallet, setPallet] = useState('')
    const [isLoading, setIsLoading] = useState(false);

    const TextInput2= useRef<TextInput>(null);

    // DEFINIÇÃO DA BASE DE DADOS
    const [connection, setConnection] = useState('')
    let setDataBase = async () => {
        const serverData = await AsyncStorage.getItem('database')
        if (serverData) setConnection(serverData)       
    }
    useEffect(()=>{setDataBase();},[]);

    const handleSignInPress = async () => {
        setIsLoading(true);
        const userData = await AsyncStorage.getItem('user')
        const passwordData = await AsyncStorage.getItem('password')

        if (endereco.length === 0 || pallet.length === 0) {
            Alert.alert('Dados não Informados', 'Verificar dados informados'); 
        } else {
      
          try {
            const response = await api(connection).post('addressed', {              
                token_user: 'qMW3xgGUYwW8FeuG',
                token_password: 'm2PzXWepAfHgupeT',
                codEnd: endereco,
                codBar: pallet,
                user: userData,
                password: passwordData
            });

    
           if(response.data.payload.retorno){ 
            setIsLoading(false);  
                setEndereco('')
                setPallet('')
                alert(response.data.payload.retorno);
           }else{
            setIsLoading(false);  
                alert(response.data.payload.retorno);
           }
          } catch (_err) {
            setIsLoading(false);  
            Alert.alert('Erro', 'Erro ao inserir as informações');
          }
        }
    };

    return(
       <View style={CommonStyles.container}>
            <View>
                <HeaderBarPages></HeaderBarPages>
            </View>

            <KeyboardAwareScrollView>
                <ScrollView style={CommonStyles.form}>
                    <View style={CommonStyles.card}>
                        <View style={CommonStyles.cardHeader}>
                            <Text style={CommonStyles.textHeader}>Endereçar Pallet</Text>
                        </View>                   
                        <View style={CommonStyles.cardBody}>
                            <View style={CommonStyles.input}>   
                                <FontAwesome name="map-marker" size={24} color="black" style={CommonStyles.iconinput}/>                                 
                                <TextInput
                                    placeholder='Endereço:'
                                    onChangeText={(value)=>setEndereco(value)}
                                    value={endereco}
                                    autoFocus={true}
                                    style={CommonStyles.inputbox}
                                    onSubmitEditing={() => TextInput2.current?.focus()} 
                                    placeholderTextColor='black' 
                                />
                            </View>
                            <View style={CommonStyles.input}>     
                                <Icon name="box" size={24} color="black" style={CommonStyles.iconinput}/>                               
                                <TextInput
                                ref={TextInput2}  
                                    placeholder='Pallet:'
                                    onChangeText={(value)=>setPallet(value)}
                                    value={pallet}
                                    style={CommonStyles.inputbox}
                                    placeholderTextColor='black' 
                                />
                            </View>
                        </View>
                        <View>
                            <Pressable style={CommonStyles.btnGravar} onPress={handleSignInPress}> 
                             
                                <Text style={CommonStyles.labelGravar}>{isLoading ? <Loading /> : <Icon name="save" size={24} color="black" style={CommonStyles.iconinput}> Gravar </Icon>}</Text>
                   
                            </Pressable>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAwareScrollView>
        </View>
    )
}

export default PalletAddress;