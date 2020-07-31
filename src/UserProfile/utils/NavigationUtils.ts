import { History } from 'history';

export function goToProfileStatusPage(
  history: History,
  profileStatus: string
): void {
  history.push(`/${profileStatus}`);
}
