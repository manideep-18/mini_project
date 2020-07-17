import { History } from 'history';

export function goToAdminResourcePage(history: History, id: string): void {
  history.push(`/admin/${id}`);
}
