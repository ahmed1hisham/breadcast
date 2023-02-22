import {useRoute} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {gray, primary} from '../theme/colors';
// @ts-ignore
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Comment from '../components/other/Community/Comment';
import Avatar from '../components/kit/Avatar';
import LikeButton from '../components/kit/LikeButton';
import Divider from '../components/kit/Divider';
import {Comment as CommentType} from '../types/comment';
import {getPostComments} from '../services/posts';

const PostDetails = () => {
  const {
    params: {post},
  }: any = useRoute();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [comments, setComments] = useState<CommentType[]>([]);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = useCallback(async () => {
    setIsLoading(true);
    await getPostComments(post.id)
      .then(res => {
        console.log(res.data);

        setComments(res.data);
      })
      .catch(err => console.log(err));
    setIsLoading(false);
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}>
      <View style={styles.postContainer}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            marginBottom: 10,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
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
          <MaterialIcon name="more-horiz" size={20} color="#777777" />
        </View>
        <Text style={styles.postTitle}>{post.title}</Text>
        <Text style={styles.bodyText}>{post.body}</Text>
      </View>
      <View style={styles.reactionsContainer}>
        <View style={styles.likeAndShareContainer}>
          <LikeButton
            style={styles.likeButton}
            iconName="heart-outline"
            count={272}
          />
          <LikeButton
            style={styles.likeButton}
            iconName="chatbubble-outline"
            count={comments.length}
          />
        </View>
        <LikeButton iconName="arrow-redo-outline" count={3227} />
      </View>
      <Divider />
      {isLoading ? (
        <ActivityIndicator size={'small'} />
      ) : (
        <View style={styles.commentsContainer}>
          {comments.map(item => (
            <Comment key={item.id} comment={item} />
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    alignItems: 'center',
    padding: 15,
  },
  postContainer: {
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  likeButton: {marginRight: 10},
  likeAndShareContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reactionsContainer: {
    flexDirection: 'row',
    marginTop: 10,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  postTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  infoContainer: {flexDirection: 'row', alignItems: 'flex-start'},
  userName: {fontSize: 14, fontWeight: 'bold'},
  userHandle: {fontSize: 12, color: gray},
  bodyText: {alignSelf: 'flex-start'},
  seeMore: {color: primary},
  commentsContainer: {width: '100%'},
});

export default PostDetails;
