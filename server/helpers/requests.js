const fetch = require('node-fetch');

exports.fetch = async (accessToken, url, headers) => {
    var requestOptions = {
        headers: {
            "Authorization": "Bearer " + accessToken,
            "Accept": "application/json",
            ...headers
        }
    }

    var response = await fetch(url, requestOptions);
    var json = await response.json();
    console.log(JSON.stringify(json));
    return json;
}

exports.fetchApiKey = async (url) => {
    var requestOptions = {
        headers: {
            "Accept": "application/json"
        }
    }

    var response = await fetch(url, requestOptions);
    var json = await response.json();

    console.log(JSON.stringify(json));
    return json;
}

exports.post = async (accessToken, url, body, headers) => {
    var requestOptions = {
        method: 'post',
        body: JSON.stringify(body),
        headers: {
            "Authorization": "Bearer " + accessToken,
            "Content-type": "application/json; charset=utf-8",
            "Accept": "application/json",
            ...headers
        }
    }

    var response = await fetch(url, requestOptions)
    const contentType = response.headers.get("content-type")
    if (!contentType || contentType.indexOf("application/json") === -1) {
        return {
            response: await response.text(),
            headers: {
                location : response.headers.get("Location")
            }
        }
    } else {
        var json = await response.json()
        return json
    }
}

exports.put = async (accessToken, url, body) => {
    var requestOptions = {
        method: 'put',
        body: JSON.stringify(body),
        headers: {
            "Authorization": "Bearer " + accessToken,
            "Content-type": "application/json; charset=utf-8",
            "Accept": "application/json"
        }
    }

    var response = await fetch(url, requestOptions);
    var json = await response.json();
    console.log(json);
    return json;
}

exports.postUpload = async (accessToken, url, body) => {
    var requestOptions = {
        method: 'post',
        body: body,
        headers: {
            "Authorization": "Bearer " + accessToken
        }
    }

    var response = await fetch(url, requestOptions);
    var json = await response.json();
    console.log(json);
    return json;
}

exports.patchUpload = async (accessToken, url, body) => {
    var requestOptions = {
        method: 'patch',
        body: body,
        headers: {
            "Authorization": "Bearer " + accessToken
        }
    }

    var response = await fetch(url, requestOptions);
    var json = await response.json();
    console.log(json);
    return json;
}

exports.patch = async (accessToken, url, body) => {
    var requestOptions = {
        method: 'patch',
        body: JSON.stringify(body),
        headers: {
            "Authorization": "Bearer " + accessToken,
            "Content-type": "application/json; charset=utf-8",
            "Accept": "application/json"
        }
    }

    var response = await fetch(url, requestOptions);
    var json = await response.json();
    console.log(json);
    return json;
}


exports.delete = async (accessToken, url) => {
    var requestOptions = {
        method: 'delete',
        headers: {
            "Authorization": "Bearer " + accessToken,
            "Accept": "application/json"
        }
    }

    var response = await fetch(url, requestOptions);
    var json = await response.json();
    console.log(json);
    return json;
}