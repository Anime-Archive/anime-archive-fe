// Function takes in an object and returns a query string
export const buildQueryString = (obj) => {
  let string = "?";
  for (const filter in obj) {
    if (obj[filter]) {
      string += `${filter}=${obj[filter]}&`;
    }
  }
  return string.slice(0, -1);
};
