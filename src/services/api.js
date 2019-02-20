export const apiCall = async (url, type='GET') => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}