export function ascendingOrderAlphabetical(
  fetchedData: any,
  attribute: any
): any {
  return fetchedData.sort(function (a: any, b: any) {
    if (a[attribute] < b[attribute]) {
      return -1;
    }
    if (a[attribute] > b[attribute]) {
      return 1;
    }
    return 0;
  });
}
