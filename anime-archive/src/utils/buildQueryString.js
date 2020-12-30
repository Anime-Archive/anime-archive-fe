// Function takes in an object and returns a query string
export const buildQueryString = (obj) => {
  let string = "?";
  for (const filter in obj) {
    if (obj[filter]) {
      if (typeof obj[filter] === "object" && obj[filter].length === 1) {
        string += `${filter}=${obj[filter][0]}&`;
      } else if (typeof obj[filter] === "string") {
        string += `${filter}=${obj[filter]}&`;
      }
    }
  }

  return string.slice(0, -1);
};
