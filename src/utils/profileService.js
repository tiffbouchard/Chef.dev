import tokenService from "./tokenService";

const BASE_URL = "/api/profiles/";

function signup(profile) {
    return (
        fetch(BASE_URL + "signup", {
            method: "POST",
            headers: new Headers({ "Content-Type": "application/json" }),
            body: JSON.stringify(profile),
        })
        .then((res) => {
            if (res.ok) return res.json();
            throw new Error("Email already taken!");
        })
        .then(({ token }) => tokenService.setToken(token))
    );
}

function newProfile(newProfile) {
    console.log(newProfile)
    return (
        fetch(BASE_URL + "newprofile", {
            method: "POST",
            headers: new Headers({ "Content-Type": "application/json" }),
            body: JSON.stringify(newProfile),
        })
        .then((res) => {
            if (res.ok) return res.json();
            throw new Error("Email already taken!");
        })
        .then(({ token }) => {
            console.log(token)
            tokenService.setToken(token)
        })

    );
}

function getProfile() {
    return tokenService.getProfileFromToken();
}

function logout() {
    tokenService.removeToken();
}

function login(creds) {
    return fetch(BASE_URL + "login", {
            method: "POST",
            headers: new Headers({ "Content-Type": "application/json" }),
            body: JSON.stringify(creds),
        })
        .then((res) => {
            // Valid login if we have a status of 2xx (res.ok)
            if (res.ok) return res.json();
            throw new Error("Bad Credentials!");
        })
        .then(({ token }) => tokenService.setToken(token));
}

export default {
    signup,
    getProfile,
    logout,
    login,
    newProfile
};