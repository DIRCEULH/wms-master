import * as React from 'react';
import { useState, useRef, useEffect } from 'react'
import { View, Alert, Text, ScrollView, TextInput, Pressable } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import HeaderBarPages from '../components/HeaderBarPages';
import {Feather as Icon,FontAwesome} from '@expo/vector-icons';
import { api } from '../services/api';
import { AntDesign } from '@expo/vector-icons';
import CommonStyles from './CommonStyles';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '../components/Loading';

function AddressPrint() {



    const [codDep, setCodDep] = useState('')
    const [codEnd, setCodEnd] = useState('')
    const [codPlt, setCodPlt] = useState('')
    const [seqPlt, setSeqPlt] = useState('')
    const [codEmp, setCodEmp] = useState('')
    const [codFil, setCodFil] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    const TextInput2 = useRef(null);

    // DEFINIÇÃO DA BASE DE DADOS
    const [connection, setConnection] = useState('')
    let setDataBase = async () => {
        const serverData = await AsyncStorage.getItem('database')
        if (serverData) setConnection(serverData)
    }
    useEffect(() => { setDataBase(); }, []);



    const handleSignInPress = async () => {
        const userData = await AsyncStorage.getItem('user')
        const passwordData = await AsyncStorage.getItem('password')
        setIsLoading(true);
        if ( codDep.length === 0 && codEnd.length === 0 && codPlt.length === 0 && seqPlt.length === 0) {
            Alert.alert('Dados não Informados', 'Verificar dados informados');
        } else {
            try {
                const response = await api(connection).post('/address-reprint', {
                    token_user: 'qMW3xgGUYwW8FeuG',
                    token_password: 'm2PzXWepAfHgupeT',
                    user: userData,
                    password: passwordData,
                    codEnd: codEnd,
                    codDep: codDep,
                    codPlt: codPlt,
                    seqPlt: seqPlt
                });


                if (response.data.payload.retorno.msgRet = 'Etiqueta impressa com Sucesso!!!') {
                    setCodEnd('')
                    setCodDep('')
                    setCodPlt('')
                    setSeqPlt('')
                    setIsLoading(false);  

                    Alert.alert('OK', response.data.payload.retorno.msgRet);
                } else {
                    setIsLoading(false);  
                    Alert.alert('Erro', 'Erro ao inserir as informações');
                }
            } catch (_err) {
                setIsLoading(false);  
                Alert.alert('Erro', 'Erro ao inserir as informações');
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
                            <Text style={CommonStyles.textHeader}> Reimprimir </Text>
                        </View>
                        </View>


                    {/* <View style={CommonStyles.pickerStyle}>

                            <Picker

                                selectedValue={typeLocation}
                                onValueChange={(itemValue) =>
                                    setTypeLocation(itemValue)
                                }>
                                <Picker.Item label="AL - Aguardando Liberação" value="AL" key='0' />
                                <Picker.Item label="PU - Pulmão" value="PU" key='1' />
                                <Picker.Item label="PI - Picking" value="PI" key='2' />
                                <Picker.Item label="IN - Inspeção" value="IN" key='3' />

                            </Picker>
                        </View>

                        <View style={CommonStyles.pickerStyle}>


                            <Picker

                                selectedValue={typeStock}
                                onValueChange={(itemValue) =>
                                    setTypeStock(itemValue)
                                }>
                                <Picker.Item label="E1" value="E1" key='0' />
                                <Picker.Item label="E5" value="E5" key='1' />


                            </Picker>
                        </View> */}

                <View style={CommonStyles.cardBody}>

                    <View style={CommonStyles.input}>

                        <AntDesign name="database" size={24} color="black" style={CommonStyles.iconinput} />
                        <TextInput
                            placeholder='Endereço :                                           '
                            onChangeText={value => setCodEnd(value)}
                            value={codEnd}
                            style={{ fontSize: 20 }}
                            onSubmitEditing={() => TextInput2}
                            placeholderTextColor='black'
                        />

                    </View>

                    <View style={CommonStyles.linhaSepara}></View>  
                    <View></View> 
                    <View style={CommonStyles.input}>

                        <AntDesign name="database" size={24} color="black" style={CommonStyles.iconinput} />
                        <TextInput
                            placeholder='Depósito:                                           '
                            onChangeText={value => setCodDep(value)}
                            value={codDep}
                            style={{ fontSize: 20 }}
                            onSubmitEditing={() => TextInput2}
                            placeholderTextColor='black'
                        />

                    </View>
                    <View style={CommonStyles.input}>

                        <AntDesign name="database" size={24} color="black" style={CommonStyles.iconinput} />
                        <TextInput
                            placeholder='Código Pallet :                                           '
                            onChangeText={value => setCodPlt(value)}
                            value={codPlt}
                            style={{ fontSize: 20 }}
                            onSubmitEditing={() => TextInput2}
                            placeholderTextColor='black'
                        />

                    </View>
                    <View style={CommonStyles.cardBody}>
                        <View style={CommonStyles.input}>
                            <AntDesign name="database" size={24} color="black" style={CommonStyles.iconinput} />
                            <TextInput
                                ref={TextInput2}
                                placeholder='Sequência Pallet :                                         '
                                onChangeText={value => setSeqPlt(value)}
                                value={seqPlt}
                                style={{ fontSize: 20, width: 300 }}
                                blurOnSubmit={false}
                                placeholderTextColor='black'
                            />
                           </View>

                            <Pressable style={CommonStyles.btnGravar} onPress={handleSignInPress}>
                        
                                <Text style={CommonStyles.labelGravar}>{isLoading ? <Loading /> :      <Icon name="save" size={24} color="black" style={CommonStyles.iconinput}> Imprimir   </Icon>} </Text>
                              
                            </Pressable>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAwareScrollView>
        </View>
    )
}

export default AddressPrint;


