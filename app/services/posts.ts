import axios from 'axios';
import {DB_BASE_URL} from '../env';
export const getAllPosts = async () => {
  return await axios
    .get(DB_BASE_URL + '/posts')
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

export const getPostComments = async (post_id: number) => {
  return await axios
    .get(DB_BASE_URL + `/posts/${post_id}/comments`)
    .then(res => {
      // console.log(JSON.stringify(res, null, 2));
      return res;
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};
