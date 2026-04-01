import React, {useState, useRef, useEffect} from 'react';
import {View, Alert, Text,ScrollView,TextInput,Pressable } from 'react-native';  
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {Feather as Icon,FontAwesome} from '@expo/vector-icons';
import  HeaderBarPages from '../components/HeaderBarPages';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../services/api';
import CommonStyles from './CommonStyles';
import Loading from '../components/Loading';

const PalletReceivement = () => { 
    const [qrcode, setQrCode] = useState('')    
    const [dum, setDum] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [isLoading, setIsLoading] = useState(false);

    const TextInput2= useRef<TextInput>(null);
    const TextInput3 = useRef<TextInput>(null);

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

        if (qrcode.length === 0 || dum.length === 0 || quantidade.length === 0) {
            Alert.alert('Dados não Informados', 'Verificar dados informados'); 
        } else {
            
          try {
            const response = await api(connection).post('receivement', {
                token_user: 'qMW3xgGUYwW8FeuG',
                token_password: 'm2PzXWepAfHgupeT',
                codBar: qrcode,
                numDum: dum,
                qtdPro: quantidade,
                user: userData,
                password:passwordData
            });

            
           if(response.data.payload.retorno){  
            setIsLoading(false);           
                setDum('')
                setQuantidade('')
          
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
                            <Text style={CommonStyles.textHeader}> Gerar Pallet Recebimento</Text>
                        </View>                   
                        <View style={CommonStyles.cardBody}>
                            <View style={CommonStyles.input}>   
                                <FontAwesome name="qrcode" size={24} color="black" style={CommonStyles.iconinput}/>                                 
                                <TextInput
                                    placeholder='QR Code OC:'
                                    onChangeText={value => setQrCode(value)}                                   
                                    autoFocus={true}
                                    value={qrcode}
                                    style={CommonStyles.inputbox}
                                    onSubmitEditing={() => TextInput2.current?.focus()} 
                                    blurOnSubmit={false}  
                                    placeholderTextColor='black' 
                                />
                            </View>
                            <View style={CommonStyles.input}>     
                                <Icon name="box" size={24} color="black" style={CommonStyles.iconinput}/>                               
                                <TextInput    
                                    ref={TextInput2}   
                                    onSubmitEditing={() => TextInput3.current?.focus()}                             
                                    placeholder='DUM:'
                                    onChangeText={value => setDum(value)} 
                                    value={dum}
                                    enterKeyHint="next"
                                    style={CommonStyles.inputbox}
                                    placeholderTextColor='black' 
                                />
                            </View>
                            <View style={CommonStyles.input}>
                                <FontAwesome name="th" size={24} color="black" style={CommonStyles.iconinput}/>   
                                <TextInput
                                    placeholder='Quantidade:'
                                    ref={TextInput3}
                                    onChangeText={value => setQuantidade(value)} 
                                    value={quantidade}
                                    style={CommonStyles.inputbox}
                                    inputMode="numeric"
                                    placeholderTextColor='black'
                                />
                            </View>
                        </View>
                        <View>
                            <Pressable style={CommonStyles.btnGravar} onPress={handleSignInPress}>
                             
                                <Text style={CommonStyles.labelGravar}>{isLoading ? <Loading /> : <Icon name="save" size={24} color="black" style={CommonStyles.iconinput}> Gravar   </Icon>}  </Text>
                         
                     
                            </Pressable>
                        </View>
                    </View>
                 
                </ScrollView>
            </KeyboardAwareScrollView>
           
        </View>
        
    )
}

export default PalletReceivement;