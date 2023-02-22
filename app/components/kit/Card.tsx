import React, {PropsWithChildren} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const Card = ({children}: PropsWithChildren) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: width - 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    elevation: 10,
  },
});

export default Card;
