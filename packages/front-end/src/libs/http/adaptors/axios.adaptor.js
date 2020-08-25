const http = require('axios')

export const Get = (url, data = undefined, headers = undefined) => {
    const config = {
        url,
        method: 'GET',
    }

    if (headers) {
        Object.assign(config, {headers})
    }

    if (data) {
        Object.assign(config, data)
    }

    return http.get(url)
}

export const Post = (url, data, headers) => {
    const config = {}

    if (headers) {
        Object.assign(config, {headers})
    }

    return http.post(url, data, config)
}

export const Delete = (url, headers) => {
    const config = {}
    if (headers) {
        Object.assign(config, {headers})
    }

    return http.delete(url, config)
}