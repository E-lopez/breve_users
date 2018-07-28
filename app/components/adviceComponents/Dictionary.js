import React, { Component } from 'react';
import { View, Text, Image, ActivityIndicator, WebView, Modal, TouchableHighlight, Button } from 'react-native';

import WebSite from './WebSite';
import style from '../../style/adviceComponentStyle/adviceComponentStyle';

import Logo from '../../assets/breve_logo_0.2.png'

export class Dictionary extends Component {

  render() {
      let { data } = this.props
      console.log("DIcTIONARY 13", data)
    return(
        <View style={{flex: 1,
          justifyContent: 'center',
          alignItems: 'center', marginVertical: 20}}>
            {data.map((key, i) => {
                var word = Object.keys(key)[0]
                console.log("DICTIONARY 20", key[word].definition, word)
                return (
                    <View style={style.wordWrap} key={i}>
                        <Text style={style.wordTitle}>{word}</Text>
                        <Text style={style.wordDefinition}>{key[word].definition}</Text>
    
                        <Text style={style.wordExample}>"{key[word].example}"</Text>
                    </View>
                )
            })}
        </View>
    )
  }
}


export class Resource extends Component {
    constructor(props) {
        super(props);
        this.set_loading = this.set_loading.bind(this);
        this.state = {
            link: '',
            loading: true,
            showResource: false
        }
    }
    
    set_loading() {
        this.setState({loading: false})
    }

    render() {
        let { data, type } = this.props
        console.log("DICTIONARY 51", data, type)
        return(
            <View style={{flex: 1,
              justifyContent: 'center',
              alignItems: 'center', marginVertical: 20}}>
                {Object.keys(data).map((key, i) => {
                    let content = data[key]
                    if(type !== content.key.toLowerCase().trim()) { return; }
                    else {
                        return (
                            <TouchableHighlight 
                            key={i}
                            onPress={() => this.setState({link: content.link, showResource: true})}
                            style={style.wordWrap}
                            underlayColor="transparent">
                                <View>
                                    <Text style={style.wordTitle}>{content.key}</Text>
                                    <Text style={style.wordDefinition}>{content.title}</Text>
                                    <Text style={style.wordExample}>{content.link}</Text>
                                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                        <Text style={{paddingTop: 10, fontFamily: 'Exo2-Regular'}}>Toca para abrir</Text>
                                    </View>
                                </View>
                            </TouchableHighlight>
                        )
                    }
                })}

                <Modal
                animationType="fade"
                transparent={false}
                visible={this.state.showResource}
                onRequestClose={() => {return;}}>
                  <View style={{flex: 1}}>
                    <TouchableHighlight
                        onPress={() => this.setState({showResource: false, loading: true})}
                        underlayColor="transparent">
                        <View style={style.closeModalWeb}>
                            <Text style={{fontFamily: 'Exo2-Regular'}}>Toca Aquí para cerrar</Text>
                            <Image source={Logo} style={{width:80, height: 40}} />
                        </View>
                    </TouchableHighlight>

                    
                    {this.state.loading ?  
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end', height: 250}}>
                            <Text style={{marginHorizontal: 15}}>Cargando...</Text>
                            <ActivityIndicator size='large' color="#4682b4" />
                        </View>
                        : 
                        null
                    } 

                    <WebSite uri={this.state.link} set_loading={this.set_loading} /> 
                  </View>
                </Modal>
                
            </View>
        )
      }
    }


    //
    
