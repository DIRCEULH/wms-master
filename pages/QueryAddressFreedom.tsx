import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, TextInput, Pressable, FlatList} from 'react-native';  
import {Feather as Icon, FontAwesome} from '@expo/vector-icons';
import  HeaderBarPages from '../components/HeaderBarPages';
import AsyncStorage from '@react-native-async-storage/async-storage'
import CommonStyles from './CommonStyles'
import {api} from '../services/api';

interface Item {
    endereco: string;
    situacao: string;
    retMsg:string;    
  }[]

function QueryAddressFreedom(){
    const [sku, setSku] = useState('')
    const [items, setItems] = useState<Item[]>([]);   

    // DEFINIÇÃO DA BASE DE DADOS
    const [connection, setConnection] = useState('')
    let setDataBase = async () => {
        const serverData = await AsyncStorage.getItem('database')
        if (serverData) setConnection(serverData)       
    }
    useEffect(()=>{setDataBase();},[]);

    const handleSignInPress = async () => {
        const userData = await AsyncStorage.getItem('user')
        const passwordData = await AsyncStorage.getItem('password')

        try {
            const retorno = await api(connection).post('free-address', {              
                token_user: 'qMW3xgGUYwW8FeuG',
                token_password: 'm2PzXWepAfHgupeT', 
                skuprod: sku,
                user: userData,
                password: passwordData
            });
            if(retorno.data.payload.retorno.enderecos != undefined){
                const data = retorno.data.payload.retorno.enderecos;

                if (Array.isArray(data)) {
                    setItems(data)
                  } else {
                    setItems([data])
                  }
            }else{
                setItems([
                    {
                        endereco: '',
                        situacao: '',                 
                        retMsg:''
                    }
                ]);
                alert(retorno.data.payload.retorno.retMsg);
            }
        } catch (error) {
            alert("Ocorreu um erro ao buscar os items");
        }       
    }      
   
    return(
        <View style={CommonStyles.container}>
            <View>
                <HeaderBarPages></HeaderBarPages>
            </View>
            <View>
                <ScrollView style={CommonStyles.form}>
                    <View style={CommonStyles.card}>
                        <View style={CommonStyles.cardHeader}>
                            <Text style={CommonStyles.textHeader}> Endereços Livres</Text>
                        </View>                   
                        <View style={CommonStyles.cardBody}>                            
                            <View style={CommonStyles.input}>     
                                <FontAwesome name="th" size={24} color="black" style={CommonStyles.iconinput}/>                                  
                                <TextInput
                                    placeholder='SKU / DUM:'
                                    onChangeText={value => setSku(value)}                                   
                                    autoFocus={true}
                                    value={sku}
                                    style={CommonStyles.inputbox}
                                    placeholderTextColor='black'
                                />
                            </View>   
                        </View>
                        <View>
                            <Pressable style={CommonStyles.btnConsultar} onPress={handleSignInPress} > 
                                <Text style={CommonStyles.labelGravar}>Consultar</Text>
                            </Pressable>
                        </View>
                        <View style={CommonStyles.table}>
                            <Text style={CommonStyles.titletable3}>Endereço</Text>
                            <Text style={CommonStyles.titletable4}>Situação</Text>
                        </View>      
                    </View>
                </ScrollView>
            </View>
            <FlatList
                data={items}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => (
                        <View style={CommonStyles.item} >
                            <Text style={CommonStyles.title}>{/*  items > 1 ?  */item.endereco/*  : '' */}</Text>
                            <Text style={CommonStyles.title}>{/*  items > 1 ?  */item.situacao /* : '' */}</Text>
                        </View>                  
                    )
                }     
            />           
        </View>
    )
}

export default QueryAddressFreedom;