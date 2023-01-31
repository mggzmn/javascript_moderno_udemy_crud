import { User } from "../models/user"

/**
 * 
 * @param {Like<User>} userLike 
 */
export const saveUser = async (userLike) => {
    const user = new User(userLike);

    if (user.id) {
        throw 'No implementado'
        return;
    }
    const updatedUser = await createUser(user);
    return updatedUser;
}
/**
 * 
 * @param {Like<User>} user 
 */
const createUser = async (user) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users`;
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const newUser = await res.json();
    return newUser;
}