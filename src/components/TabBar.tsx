import React from 'react';
import {Text, View} from 'react-native';
import theme from '../theme';

const TabBar = () => {
  return (
    <View
      style={{
        flex: 1,
        height: 50,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
        backgroundColor: theme.colors.backgroundC,
      }}>
      <Text style={{textAlign: 'center'}}>TabBar</Text>
    </View>
  );
};

export default TabBar;
