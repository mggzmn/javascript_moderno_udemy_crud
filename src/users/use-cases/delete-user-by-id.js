

/**
 * 
 * @param {String | Number } id 
 */
export const deleteUser = async (id) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`;
    const res = await fetch(url, {
        method: 'DELETE',
    });
    const data = await res.json();
    return true;
}