import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {primary} from '../../theme/colors';
// @ts-ignore
import Icon from 'react-native-vector-icons/Octicons';

const Header = (props: any) => {
  return (
    <View style={styles.container}>
      <Icon name="broadcast" size={30} color={primary} />
      <Text
        style={{
          fontSize: 30,
          color: primary,
          marginLeft: 10,
        }}>
        Breadcast
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});

export default Header;
