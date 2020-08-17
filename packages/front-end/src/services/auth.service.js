import agent from '../agent'

export function authenticate(id, password) {
    return agent.Auth.login(id, password)
        .then(data => {
            agent.setToken(data.token)
        })
}

export function getUser(id) {
    return {
        id,
        name: 'Karine Schoen'
    }
}