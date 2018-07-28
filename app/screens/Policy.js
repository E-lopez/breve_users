import React, { Component } from 'react';
import {Text, 
        View,
        Image, 
        Button,  
        TextInput,
        ScrollView, 
        ToastAndroid,
        ToolbarAndroid, 
        ActivityIndicator, 
        TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-material-design';

import { firebaseApp } from '../services/Firebase';
import { CREATE_USER } from '../services/DataManager';

import style from '../style/LoginStyle';


export default class Policy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            firstName: '',
            surname: '',
            phone: '',
            email: '',
            password: '',
            confirm: ''
        }
    }
    
    validation() {
        if(this.state.password !== this.state.confirm) {
            ToastAndroid.showWithGravity('Passwords no coinciden.', ToastAndroid.LONG, ToastAndroid.CENTER);
            return false
        }
        else if (!this.state.firstName || !this.state.surname || !this.state.phone) {
            ToastAndroid.showWithGravity('Por favor, llena todos los campos.', ToastAndroid.LONG, ToastAndroid.CENTER);
            return false
        }
        else return true;
    }

    signUp(){
        if(this.validation()) {
            this.setState({ loading: true });
            firebaseApp.auth().createUserWithEmailAndPassword(
                this.state.email,
                this.state.password
            )
            .then(() => {
                firebaseApp.auth()
                .signInWithEmailAndPassword(this.state.email, this.state.password)
                .then(() => {
                    CREATE_USER(this.state)
                    .then(() => {
                        return;
                    })
                    .catch((err) => {
                        ToastAndroid.showWithGravity(err, ToastAndroid.LONG, ToastAndroid.CENTER);
                    })
                })
                .catch((err) =>{
                    ToastAndroid.showWithGravity('Algo salió mal, intenta de nuevo.' + err, ToastAndroid.LONG, ToastAndroid.CENTER);
                });   
            })
            .catch((error) => {
                this.setState({
                    loading: false
                });
                alert('failed' + error.message);
            }); 
        } 
        else {
            return;
        }  
    }

    goBack(){
        this.props.navigation.navigate('Login')
    }  

    render() {
            return(
                <ScrollView style={{flex: 1, backgroundColor: '#00bfff'}}>
                    <View style={style.policyWrap}>
                        <Text style={style.policyTitle}>Política de privacidad</Text>
                        <Text style={style.policyText}>Al ingresar a la aplicación de Breve (en adelante la “aplicación”), reconoces que has leído, entendido, aceptado la política de privacidad y te obliga a cumplir con sus términos y con todas las leyes y reglamentos aplicables. Si no aceptas los términos y condiciones, te solicitamos abstenerte de utilizar esta aplicación.</Text>
                        <Text style={style.policyText}>Breve se reserva el derecho de realizar actualizaciones, mejoras o cambios en cualquier momento y sin previo aviso del contenido o alguna funcionalidad de la aplicación.</Text>
                        <Text style={style.policyText}>Breve es titular de todos los derechos sobre el software de la aplicación, así como de los derechos de propiedad intelectual referidos a las imágenes, contenidos de información y servicios virtuales que se pongan a disposición del público, exceptuando aquellos  productos o servicios que no son propiedad de Breve, como son algunos de los íconos utilizados para la aplicación, resultado de la modificiación de materiales obtenidos a través de www.flaticon.com y www.pexels.com. </Text>
                        <Text style={style.policyText}>Todos los contenidos de esta la aplicación se encuentran protegidos por la legislación vigente de derechos de autor y no podrán ser almacenados, copiados, publicados, reproducidos, vendidos o utilizados para la creación o promoción de servicios privados o con fines de lucro. Para dichos contenidos, Breve no concede ninguna licencia o autorización de uso de ninguna clase sobre sus derechos de propiedad intelectual, secretos empresariales o sobre cualquier otra propiedad o derecho relacionado con la aplicación y sus contenidos.</Text>
                        <Text style={style.policyText}>El incumplimiento de los términos y condiciones contenidos en este Sitio Web puede violar las normas y leyes colombianas vigentes, con las sanciones y consecuencias que en ellas se establezcan. La autorización concedida para utilizar este sitio se entenderá automáticamente terminada en caso de infringir cualquiera de estos términos y condiciones, con lo cual el usuario infractor tendrá la obligación de destruir inmediatamente cualquier material obtenido o impreso de la aplicación, sin perjuicio de las acciones judiciales que puedan ser instauradas por Breve por tal incumplimiento.</Text>
                        <Text style={style.policyText}>Toda la información personal es suministrada de forma libre y voluntaria por el usuario a la aplicación, esto aplica para todos los datos necesarios para su registro, autenticación e ingreso a la aplicación, como para aquellos que se requieran ingresar para el registro de bases de datos en el sistema, los cuales serán tratados por Breve. El usuario podrá editar o actualizar la información ingresada en el momento en el que lo desee.</Text>
                        <Text style={style.policyText}>Breve no compartirá ni revelará ningún tipo de información confidencial a terceros, excepto en los casos en los que se trate de información pública o se cuente con la autorización expresa del titular de la información o cuando esta sea requerida por orden judicial, administrativa o legal. Esto con el fin de proteger los derechos de propiedad intelectual y de protección de datos personales.</Text>
                        <Text style={style.policyText}>Breve garantiza el responsable y debido tratamiento de confidencialidad de la información relacionada y suministrada de acuerdo con las Leyes 1581 de 2012 y las demás leyes aplicables.</Text>
                        <Text style={style.policyText}>El uso de la aplicación se rige por las leyes de la República de Colombia, en los aspectos que no estén expresamente establecidos en los presentes términos y condiciones. Por lo tanto, cualquier disputa o conflicto que se genere entre el Usuario y Breve, se llevará ante los jueces de la República de Colombia y será resuelto de acuerdo con las leyes de la República de Colombia sin tener efecto el conflicto con otras leyes de otros países o su estado de residencia actual.  Si, por alguna razón, el juez competente considera inaplicable alguna parte de estos términos y condiciones, el resto de ellos continuará aplicándose en su total efecto.</Text>
                        <Text style={style.policyText}>El usuario que ingrese a la aplicación desde lugares que se encuentren fuera de la jurisdicción de Colombia, lo hace por su propia cuenta y riesgo y es total y personalmente responsable por el cumplimiento de las leyes que rigen el lugar desde donde ingresa.</Text>
                        <Text style={style.policyText}>Gracias por leer.</Text>

                        <TouchableHighlight
                                underlayColor={'transparent'} 
                                onPress={this.goBack.bind(this)}>
                                <View>
                                    <Icon name="arrow-back" color="#fff" size={30}/>
                                </View>
                        </TouchableHighlight>
                    </View>
                </ScrollView>
            );
        } 
}

