import { History } from 'history';

export function goToUserTabActivePage(
  history: History,
  tabActive: string
): void {
  history.push(`/user/${tabActive}`);
}

export function goToUserMyRequestsPage(history: History): void {
  history.push(`/user/my-requests`);
}

export function goToUserRequestingPage(
  history: History,
  status: string,
  id: number
): void {
  history.push(`/user/my-requests/${status}/${id}`);
}
