import {base, token, author, posts, dateOrder} from './api_keys';
import axios from 'axios';

module.exports.getPost = (slug) => {
    return axios.get(base + 'entries' + token + posts + '&fields.slug=' + slug);
}

module.exports.getImage = (id) => {
   return  axios.get(base + 'assets/' + id + token);
}

module.exports.getPosts = (amt, start) => {
    return axios.get(base + 'entries' + token + dateOrder + posts + '&skip=' + start + '&limit=' + amt);
}