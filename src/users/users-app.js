import { renderAddButton } from "./presentatiton/render-add-button/render-add-button";
import { renderButtons } from "./presentatiton/render-buttons/render-buttons";
import { renderTable } from "./presentatiton/render-table/render-table";
import usersStore from "./store/users-store";

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
}