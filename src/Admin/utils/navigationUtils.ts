import { History } from 'history';

export function goToAdminResourcePage(history: History, id: string): void {
  history.push(`/admin/resources/${id}`);
}

export function navigateToResourceAddItemPage(
  history: History,
  id: string
): void {
  history.push(`/admin/resources/${id}/add-item`);
}

export function goToRequestsPage(history: History): void {
  history.push(`/requests`);
}

export function goToTabActivePage(history: History, tabActive: string): void {
  history.push(`/admin/${tabActive}`);
}

export function goToUserDetailsPage(history: History, id: string) {
  history.push(`/admin/users/${id}`);
}
