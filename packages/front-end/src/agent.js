import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'https://conduit.productionready.io/api';

const encode = encodeURIComponent;
const responseBody = res => res.body;

let token = null;
const tokenPlugin = req => {
    if (token) {
        req.set('authorization', `Token ${token}`);
    }
}

const requests = {
    del: url =>
        superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
    get: url =>
        superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
    put: (url, body) =>
        superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
    post: (url, body) =>
        superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody)
};

const Card = {
    fetch: () =>
        requests.get('/cards'),
    add: card =>
        requests.post('/card', {
            name: card.name,
            categoryName: card.categoryName,
            content: card.content
        }),
    delete: id =>
        request.del(`/card/${id}`),
}
const Auth = {
    current: () =>
        requests.get('/user'),
    login: (email, password) =>
        requests.post('/users/login', { user: { email, password } }),
    register: (username, email, password) =>
        requests.post('/users', { user: { username, email, password } }),
    save: user =>
        requests.put('/user', { user })
};

export default {
    Card,
    Auth,
    setToken: _token => { token = _token; }
};