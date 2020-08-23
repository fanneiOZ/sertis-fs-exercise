const http = require('axios')

export const Get = (url, data = undefined, headers = undefined) => {
    const options = {
        url,
        method: 'GET',
    }

    if (headers) {
        Object.assign(options, headers)
    }

    if (data) {
        Object.assign(options, data)
    }

    return http.get(url)
}