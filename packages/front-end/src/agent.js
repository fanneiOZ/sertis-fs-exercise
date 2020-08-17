import superagent from 'superagent'

const API_ROOT = 'http://localhost:80/api';

const responseBody = res => res.body;

let token = null;

const tokenPlugin = req => {
    if (token) {
        req.set('authorization', `Bearer ${token}`);
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
    edit: card =>
        requests.post(`/card/${id}`, {
            name: card.name,
            categoryName: card.categoryName,
            content: card.content
        }),
    delete: id =>
        request.del(`/card/${id}`),
}

const Auth = {
    login: (username, password) =>
        requests.post('/authenticate', {id: username, password}),
    register: (username, name, password) =>
        requests.post('/user', {id: username, name, password}),
};

export default {
    Card,
    Auth,
    setToken: _token => { token = _token }
};