import React from 'react';
import {View, StyleSheet, Text, Dimensions, Pressable} from 'react-native';
import {gray, primary} from '../../../theme/colors';
// @ts-ignore
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import Avatar from '../../kit/Avatar';
import Card from '../../kit/Card';
import LikeButton from '../../kit/LikeButton';
import {Post as PostType} from '../../../types/post';

interface Props {
  post: PostType;
}

const {width} = Dimensions.get('window');

const Post = ({post}: Props) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        // @ts-ignore
        // Navigation routes could be all defined in a separate file
        // and the Navigation params could be specified to be one of these routes
        // for the sake of this task I'll just ignore the ts error
        navigation.navigate('PostDetails', {post});
      }}>
      <Card>
        <View style={styles.postHeader}>
          <View style={styles.infoContainer}>
            <Avatar
              uri={
                'https://api.dicebear.com/5.x/adventurer/png?seed=' + post.id
              }
            />
            <View>
              <Text style={styles.userName}>{'User ' + post.user_id}</Text>
              <Text style={styles.userHandle}>{'@user' + post.user_id}</Text>
            </View>
          </View>
          <MaterialIcon name="more-horiz" size={20} color={gray} />
        </View>
        <Text style={styles.postTitle} numberOfLines={1}>
          {post.title}
        </Text>
        <Text style={styles.bodyText}>
          {post.body.length > 200
            ? post.body.substring(0, 200) + '...'
            : post.body}
          {post.body.length > 200 && (
            <Text style={styles.seeMore}> See more</Text>
          )}
        </Text>

        <View style={styles.reactionsContainer}>
          <LikeButton
            style={{marginRight: 10}}
            iconName="heart-outline"
            count={272}
          />
          <LikeButton
            style={{marginRight: 10}}
            iconName="chatbubble-outline"
            count={123}
          />
          <LikeButton
            style={{marginRight: 10}}
            iconName="arrow-redo-outline"
            count={101}
          />
        </View>
      </Card>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  postHeader: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  postTitle: {
    fontWeight: 'bold',
    // fontFamily: 'Majorant-Rg',
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  infoContainer: {flexDirection: 'row', alignItems: 'flex-start'},
  userName: {fontSize: 14, fontWeight: 'bold'},
  userHandle: {fontSize: 12, color: gray},
  bodyText: {alignSelf: 'flex-start'},
  seeMore: {color: primary},
  reactionsContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default Post;
