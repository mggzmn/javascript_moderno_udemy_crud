import { getUserById } from '../../use-cases/get-user-by-id';
import './render-modal.css';
import modalHtml from './render-modal.html?raw'
let modal, form;
let loadUser = {};
/**
 * 
 * @param {String|Number} id 
 */
export const showModal = async (id) => {
    modal?.classList.remove('hide-modal');
    loadUser = {};
    if (!id) return;
    const user = await getUserById(id);
    setFormValues(user);
}
export const hideModal = () => {
    modal?.classList.add('hide-modal');
    form?.reset();
}
/**
 * 
 * @param {User} user 
 */
const setFormValues = (user) => {
    form.querySelector('[name="firstName"]').value = user.firstName;
    form.querySelector('[name="balance"]').value = user.balance;
    form.querySelector('[name="lastName"]').value = user.lastName;
    form.querySelector('[name="isActive"]').checked = user.isActive;
    loadUser = user
}

/**
 * 
 * @param {HTMLDivElement} element 
 * @param {(userLike)=>Promise<void>} callback
 */
export const renderModal = (element, callback) => {
    if (modal) return;
    modal = document.createElement('div');
    modal.innerHTML = modalHtml;
    modal.className = 'modal-container hide-modal';

    form = modal.querySelector('form')

    modal.addEventListener('click', (event) => {
        if (event.target.className !== 'modal-container') return;
        hideModal();
    });

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        let formData = new FormData();
        formData.append("firstName",form.querySelector('[name="firstName"]').value );
        formData.append("balance",form.querySelector('[name="balance"]').value );
        formData.append("lastName",form.querySelector('[name="lastName"]').value );
        formData.append("isActive",form.querySelector('[name="isActive"]').checked);
        const userLike = { ...loadUser }
     
        for (const [key, value] of formData) {
              console.log([key, value])
            if (key == 'balance') {
                userLike[key] = +value;
                continue;
            }
           
            userLike[key] = value;
        }
        await callback(userLike)
        hideModal();
    });

    element.append(modal);
}