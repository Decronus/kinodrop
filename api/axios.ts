import axios from "axios";

const axiosInst = axios.create({
    baseURL: "https://api.legaldozor.ru/",
    headers: {
        "X-Api-Key": "any",
        "X-Device-OS": "any",
        Accept: "application/json",
    },
});

// const protectedEndpoints = ["/logout", "/lists", "/subjects", "/events", "/settings", "/delete"];

// axiosInst.interceptors.request.use((config) => {
//     if (protectedEndpoints.some((endpoint) => config.url?.includes(endpoint))) {
//         config.headers["X-User-Token"] = getToken();
//     }
//     return config;
// });

export default axiosInst;
