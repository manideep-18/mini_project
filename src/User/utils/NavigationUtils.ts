import { History } from 'history';

import { USER_MY_REQUESTS_PAGE } from '../../Common/constants/RouteConstants';

export function goToUserTabActivePage(
  history: History,
  tabActive: string
): void {
  history.push(`/user/${tabActive}`);
}

export function goToUserMyRequestsPage(history: History): void {
  history.push(USER_MY_REQUESTS_PAGE);
}

export function goToUserRequestingPage(
  history: History,
  status: string,
  id: number
): void {
  history.push(`${USER_MY_REQUESTS_PAGE}/${status}/${id}`);
}
