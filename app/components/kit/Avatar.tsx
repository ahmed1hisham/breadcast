import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {primary} from '../../theme/colors';

interface AvatarProps {
  uri: string;
  size?: number;
}

const Avatar = ({uri, size}: AvatarProps) => {
  return (
    <Image
      style={[
        styles.avatar,
        size ? {width: size, height: size, borderRadius: size} : undefined,
      ]}
      source={{uri}}
    />
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: primary,
    marginRight: 10,
  },
});

export default Avatar;
