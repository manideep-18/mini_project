import { History } from 'history';

export function goToAdminResourcePage(history: History, id: string): void {
  history.push(`/admin/${id}`);
}

export function navigateToResourceAddItemPage(
  history: History,
  id: string
): void {
  history.push(`/admin/${id}/add-item`);
}

export function goToRequestsPage(history: History): void {
  history.push(`/requests`);
}

export function goToTabActivePage(history: History, tabActive: string): void {
  history.push(`/admin/${tabActive}`);
}
