import { History } from 'history';

export function goToUserTabActivePage(
  history: History,
  tabActive: string
): void {
  history.push(`/user/${tabActive}`);
}
