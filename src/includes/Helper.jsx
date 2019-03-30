// import React from 'react';
// const BASEURL = 'http://192.168.43.41:3001/api/'
import BASEURL from '../includes/BASEURL';

export const Helper = (method, url, token, body) => {
    if (method === "POST") {
        return (
            fetch(BASEURL + "api/" + + url, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
                .then(res => { return res.json() })
                .catch(err => {
                    console.log(err);
                })

        )
    } else if (method === "GET") {
        return (
            fetch(BASEURL + "api/" + url, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            })
                .then(res => { return res.json() })
                .catch(err => {
                    // this.props.history.push('/login');
                    console.log(err);
                })

        )
    }
    else if (method === "DELETE") {
        return (
            fetch(BASEURL + "api/" + url, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            })
                .then(res => { return res.json() })
                .catch(err => {
                    console.log(err);
                })

        )
    } else if (method === "PUT") {
        return (
            fetch(BASEURL + "api/" + url, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
                .then(res => { return res.json() })
                .catch(err => {
                    console.log(err);
                })

        )
    } else if (method === "FILE") {
        return (
            fetch(BASEURL + "api/" + url, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    // 'Content-Type': 'multipart/form-data'
                },
                body: body
            })
                .then(res => { return res.json() })
                .catch(err => {
                    console.log(err);
                })

        )
    }
}