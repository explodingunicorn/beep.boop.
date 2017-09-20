import {base, token, author, posts, queue, dateOrder} from './api_keys';
import axios from 'axios';

module.exports.getPost = (slug) => {
    return axios.get(base + 'entries' + token + posts + '&fields.slug=' + slug);
}

module.exports.getImage = (id) => {
   return  axios.get(base + 'assets/' + id + token);
}

module.exports.getPosts = (amt, start, types) => {
    let typeStr = '';

    if (types) {
        for (var i = 0; i < types.length; i++) {
            typeStr += types[i];

            if(i !== types.length - 1) {
                typeStr += ',';
            }
        }
    }
    else {
        typeStr = 'Game,Movie,Book,Music,Opinion';
    }

    console.log(typeStr);

    return axios.get(base + 'entries' + token + dateOrder + posts + '&skip=' + start + '&limit=' + amt + '&fields.type[in]=' + typeStr);
}

module.exports.getQueue = () => {
    return axios.get(base + 'entries' + token + queue);
}