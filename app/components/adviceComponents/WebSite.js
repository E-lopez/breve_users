import React, { Component } from 'react';
import { View, Text, WebView, ActivityIndicator } from 'react-native';

export default class MyWeb extends Component {
    setLoader(arg){
        return arg
    }

    set_uri(uri) {
        var result;

        if(uri.split(':', 1)[0] !== 'https') {
            result = 'https://' + uri
        }
        else {
            result = uri
        }
        return result
    }

  render() {
    let { uri, set_loading } = this.props
    var uri_local = this.set_uri(uri)
    // console.log("WebSite", uri)
    return (
            <WebView
                onLoadEnd={() => set_loading()}
                renderError={() => {
                    return <View style={{justifyContent: 'center', padding: 30}}>
                                <Text style={{textAlign: 'center', fontFamily: 'Exo2-Regular', fontSize: 20, marginTop: 100}}>Disculpa, la conexión es insegura o no existe</Text> 
                            </View>    
                }}
                source={{uri: uri_local}}
                style={{flex: 1}}
            />
    );
  }
}