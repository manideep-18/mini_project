import { History } from 'history';

import {
  ADMIN_RESOURCES_PAGE,
  ADMIN_USERS_PAGE,
  ADMIN_HOME_PAGE,
} from '../../Common/constants/RouteConstants';

export function goToAdminHomeResourcesPage(history: History): void {
  history.push(ADMIN_RESOURCES_PAGE);
}

export function goToAdminResourcePage(history: History, id: string): void {
  history.push(`${ADMIN_RESOURCES_PAGE}/${id}`);
}

export function navigateToResourceAddItemPage(
  history: History,
  id: string
): void {
  history.push(`${ADMIN_RESOURCES_PAGE}/${id}/add-item`);
}

export function goToTabActivePage(history: History, tabActive: string): void {
  history.push(`${ADMIN_HOME_PAGE}/${tabActive}`);
}

export function goToUserDetailsPage(history: History, id: string) {
  history.push(`${ADMIN_USERS_PAGE}/${id}`);
}

export function navigateToUserAddItemPage(history: History, id: string): void {
  history.push(`${ADMIN_USERS_PAGE}/${id}/add-item`);
}
