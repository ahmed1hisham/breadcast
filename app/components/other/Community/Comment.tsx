import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Comment as CommentType} from '../../../types/comment';
import Avatar from '../../kit/Avatar';

interface Props {
  comment: CommentType;
}

const Comment = ({comment: {id, name, body}}: Props) => {
  return (
    <View key={id} style={styles.container}>
      <Avatar
        uri={'https://api.dicebear.com/5.x/adventurer/png?seed=' + id}
        size={30}
      />

      <View>
        <Text style={{fontSize: 14, fontWeight: '600'}}>{name}</Text>
        <Text style={{fontSize: 14}}>{body}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
});

export default Comment;
