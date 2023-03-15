import React from 'react';
import {Text, View} from 'react-native';

const TabBar = () => {
  return (
    <View
      style={{
        flex: 1,
        height: 30,
        bottom: 0,
        justifyContent: 'center',
        backgroundColor: 'grey',
      }}>
      <Text style={{textAlign: 'center'}}>TabBar</Text>
    </View>
  );
};

export default TabBar;
