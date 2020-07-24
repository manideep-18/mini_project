import { History } from 'history';

export function goToUserTabActivePage(
  history: History,
  tabActive: string
): void {
  history.push(`/user/${tabActive}`);
}

export function goToUserRequestPage(history: History, id: number): void {
  history.push(`/user/my-requests/${id}`);
}
