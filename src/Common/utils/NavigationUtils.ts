import { History } from 'history';

export function goToAdminPage(history: History): void {
  history.push('/admin');
}
