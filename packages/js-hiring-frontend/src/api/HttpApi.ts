import settings from "../settings";
const environment: string = process.env.NODE_ENV;
const BASE_URL: string = settings[environment].mongo_api_url;

async function get(path: string) {
    const response = await fetch(`${BASE_URL}${path}`);

    return await response.json();
}

async function post(path: string, data: any) {
    const response = await fetch(`${BASE_URL}${path}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    return response.json();
}

async function remove(path: string, data: any) {
    const response = await fetch(`${BASE_URL}${path}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    return response.json();
}

export { get, post, remove };
