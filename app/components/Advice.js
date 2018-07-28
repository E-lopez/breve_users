import React, { Component } from 'react';
import { 
    Text,
    View,
    Image,
    TextInput,
    Dimensions,
    ScrollView,  
    TouchableHighlight, 
    Button } from 'react-native';
import { Icon } from 'react-native-material-design';

import { Resources } from '../data/data';

import Header from '../components/UserHeader';
import { Dictionary, Resource } from './adviceComponents/Dictionary';

import style from '../style/FeedbackSubStyle'

let { width } = Dimensions.get('screen')


class Badge extends Component {
    render() {
        let { res, filter, active } = this.props
        console.log("ADVICE BADGE 26", active, res)
        return (
            <TouchableHighlight 
                underlayColor={res.color}
                style={[style.badgeWrapper, {backgroundColor: active ? "#eee" : res.color}]}
                onPress={() => filter(res.title)}>
                <View style={{backgroundColor: active ? "#eee" : res.color}}>
                    <View style={style.badgeImg}>
                        <Image source={res.img} style={{height: 70, width: 70, marginHorizontal: 20}} />
                    </View>
                    <View style={style.badgeLabel}>
                        <Text style={style.badgeText}>{res.title}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
};


export default class Advice extends Component {
    constructor(props) {
        super(props);
        this.filterContent = this.filterContent.bind(this);
        this.state = {
            filter: false
        }
    };

    filterContent(arg) {
        this.setState({filter: arg.toLowerCase()})
    }; 

    serveContent(arg) {
        let { filter } = this.state
        let { vocabulary, resources } = this.props

        console.log("ADVICE 55", filter)
        if (filter && filter === 'vocabulary') {
            return vocabulary ? <Dictionary data={Object.values(vocabulary)} /> 
                                : 
                                <Text style={{textAlign: 'center', padding: 20}}>Nada todavía</Text>
        }
        else {
            return resources ?  <Resource type={filter} data={Object.values(resources)} />
                                :
                                <Text>Aquí aparecerán tus materiales</Text>
        }
    }

    componentDidUpdate() {
        this.props.scroll(580)
    }

  render() {
    let { filter } = this.state
    let { vocabulary, resources, user } = this.props

    console.log("ADVICE RENDER", filter)

    return(
      <ScrollView ref="scroll">

      <Header title={'Tus Recursos'} pic={user.photo} color={"#eee"}/>
        <View style={style.badgeContainer}>
            {
                Resources.map((res, i) => {
                    return <Badge key={i} res={res} filter={this.filterContent} active={filter === (res.title).toLowerCase() ? true: false} />
                })
            }
        </View>

        <View style={{padding: 10}}>
            {!vocabulary || !resources ?
                <Text style={{textAlign: 'center'}}>¡Nada todavía!</Text>
                :
                <View>{this.serveContent() || <Text>Rien Ici</Text>}</View>
            }
        </View>
        <View style={{paddingHorizontal: width * 0.35}}>
            <Button title="go Up" color={"#F46036"} onPress={() => {this.props.scroll(0)}} />
        </View>
      </ScrollView>
    )
  }
}
