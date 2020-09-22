export function pluralize(str) {
  switch (str) {
    case 'logo':
      return str + 's';
      break;
    default:
      return str;
      break;
  }
}
export function depluralize(str) {
  switch (str) {
    case 'logos':
      return str.slice(0, -1);
      break;
    default:
      return str;
      break;
  }
}
