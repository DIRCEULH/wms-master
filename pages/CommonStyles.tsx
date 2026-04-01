import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { rotationHandlerName } from 'react-native-gesture-handler/lib/typescript/handlers/RotationGestureHandler';
import { RotationGesture } from 'react-native-gesture-handler/lib/typescript/handlers/gestures/rotationGesture';

interface Styles {
    container: ViewStyle;
    form: ViewStyle;
    card: ViewStyle;
    cardHeader: ViewStyle;
    cardBody: ViewStyle;
    input: ViewStyle;
    iconinput: ViewStyle;
    textHeader: TextStyle;
    btnGravar: ViewStyle;
    btnConsultar: ViewStyle;
    labelGravar: TextStyle;
    btnenv: TextStyle;
    table: ViewStyle;
    tableconsulta:  ViewStyle;
    titletable: TextStyle;
    titletable2: TextStyle;
    titletable3: TextStyle;
    titletable4: TextStyle;
    titletableButtom:TextStyle;
    titletableTop:TextStyle;
    item: ViewStyle;
    title: TextStyle;
    btn: ViewStyle;
    inputbox: TextStyle;
    pickerStyle: ViewStyle;
    textPicker: ViewStyle;
    spinnerTextStyle: TextStyle;
    picker: ViewStyle;
    loading: ViewStyle;
    scrollItem:ViewStyle;
    linhaSepara:ViewStyle;
  }

const styles = StyleSheet.create<Styles>({
    container: {
        flex:1,
        marginTop: 0 ,
        flexDirection:'column',
        backgroundColor:'#FFFBFE'   
    },
    form:{
        marginTop:10
    },
    card:{
        alignItems:'center'
    },
    cardHeader:{
        alignItems:'center',
        marginBottom:20
    },
    cardBody:{
        width: '100%',
        alignItems:'center',
        justifyContent:'center'
    },
    input:{
        width: 300,
        padding:10,
        marginBottom:10,
        flexDirection:'row',
        backgroundColor:'#DCDCDC',
        borderRadius: 20,
        borderColor: '#b3b3b3',
    },
    iconinput: {
        marginRight: 10,
    },
    textHeader:{
        fontSize:25,
        borderColor:'#000',
        borderRadius:5,
        padding:3,
      },
    btnGravar:{
        alignItems:'center',
        backgroundColor: '#DCDCDC',
        width:300,
        padding:10,
        marginTop:20,
        borderRadius:5,
        borderWidth:2
    },
    btnConsultar:{
        alignItems:'center',
        width: 300,
        padding:10,
        marginTop:10,
        marginBottom:10,
        borderRadius:5,
        backgroundColor: '#DCDCDC',
        borderWidth:2,
        borderColor:'#000'
    },
    labelGravar:{
        fontSize:20
    },
    btnenv:{
        fontSize:20
    },
    table: {
        borderTopWidth:1,
        borderBottomWidth:1,
        marginVertical: 1,
        marginHorizontal: 16,
        width: '90%',
        alignItems:'center',
        flexDirection:'row', 
        marginTop:10,
        backgroundColor:'#DCDCDC'
    },
    tableconsulta: {
        borderTopWidth:1,
        marginVertical: 1,
        marginHorizontal: 16,
        width: '90%',
        alignItems:'center'
    },
    linhaSepara: {
        borderTopWidth:1,
        marginVertical: 16,
        width: 300,
        alignItems:'center'
    },
    titletable:{
        fontSize:20,
        width: '100%',
        textAlign:'left',
        marginLeft:10
    },
    titletableTop:{
        fontSize:20,
        width: '100%',
        textAlign:'left',
        marginLeft:0,
        backgroundColor:'#DCDCDC'
    },
    titletableButtom:{
        fontSize:20,
        width: '100%',
        textAlign:'left',
        marginLeft:10,
        backgroundColor:'#FFF'
    },
    titletable2:{
        fontSize:20,
        width: '43%',
        textAlign:'left',
        marginLeft:180
    },
    titletable3:{
        fontSize:20,
        width: 140,
        textAlign:'left',
    },
    titletable4:{
        fontSize:20,
        width: 140,
        textAlign:'left',
        left:20
    },
    item: {
        backgroundColor: '#FFF',
        borderColor:'#000',
        borderWidth:1,
        padding: 2,
        marginVertical: 1,
        marginHorizontal: 16,
        width: '90%',
        alignItems:'center',
        flexDirection:'row',
    
    },
    scrollItem: {
        overflow: 'scroll'
    
    },
    title:{
        padding:5,
        width: '70%',
        textAlign:'center',
        fontSize:15,
       
    },
    btn:{
        alignItems:'center',
        borderColor:'black',
        borderWidth: 1,
        width: '45%',
        padding:8,
        marginTop:3,
        borderRadius:5,
        backgroundColor:'#DCDCDC'
    },
    loading:{
        width: '40%',
        textAlign:'center',
        fontSize:30,
        marginLeft:5,
        alignItems:'center',
        position: 'absolute'

    },
    inputbox:{
        width: 250,
        fontSize: 20
    },
    pickerStyle:{
        width:300,
        borderRadius:20 ,
        marginBottom:9,
        backgroundColor:'#DCDCDC'
    },
    textPicker:{
        backgroundColor:'#FFF',
        borderWidth:2
    },
    spinnerTextStyle:{
        color:'#FFF'
    },
    picker: {
        width: 300,
        backgroundColor:'#DCDCDC',
        borderRadius: 20,
        borderColor: '#DCDCDC',
    }
})

export default styles;