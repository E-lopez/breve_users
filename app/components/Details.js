import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    Button,
    ScrollView,
    TouchableHighlight
  } from 'react-native';

import SkillCard from './SkillCard'; 
import { ProSkills, DailySkills } from '../data/data';


export default function detail(props) {
  var Db;

  if(props.cat === "jb") { Db = ProSkills }
  else { Db = DailySkills }

  let children = Db.filter(item => item.id === props.id)
  const listItems = children.map((item) =>
    <SkillCard 
      key={item.id}
      img={item.picture.large}
      title={item.name}
      description={item.description}
      how={"Empty"}
      expectations={"Empty"}
      {...props}
    />
  )

  return (
    <View>
      {listItems}
    </View>
  );
}


