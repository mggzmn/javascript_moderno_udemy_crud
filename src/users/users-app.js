import { renderAddButton } from "./presentatiton/render-add-button/render-add-button";
import { renderButtons } from "./presentatiton/render-buttons/render-buttons";
import { renderModal } from "./presentatiton/render-modal/render-modal";
import { renderTable } from "./presentatiton/render-table/render-table";
import usersStore from "./store/users-store";
import { saveUser } from "./use-cases/save-user";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UserApp = async (element) => {
    element.innerHTML = "Loading...";
    await usersStore.loadNextPage();
    element.innerHTML = "";
    renderTable(element)
    renderButtons(element);
    renderAddButton(element);
    renderModal(element, async(userLike)=>{
        const user = await saveUser( userLike);
        usersStore.onUserChanged(user);
        renderTable();
    });
}