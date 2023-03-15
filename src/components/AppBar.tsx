import React from 'react';
import {Text, View} from 'react-native';
import theme from '../theme';

const AppBar = () => {
  return (
    <View
      style={{
        flex: 1,
        height: 50,
        width: '100%',
        position: 'absolute',
        top: 0,
        justifyContent: 'center',
        backgroundColor: theme.colors.backgroundC,
      }}>
      <Text style={{textAlign: 'center'}}>AppBar</Text>
    </View>
  );
};

export default AppBar;
