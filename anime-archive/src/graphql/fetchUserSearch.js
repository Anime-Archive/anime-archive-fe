export const fetchUserSearch = `
query ($searchTerm: String, $genre: String) {
  Page(page: 1, perPage: 5) {
    media(search: $searchTerm, genre: $genre) {
      id
      coverImage {
        large
      }
      title {
        userPreferred
        english
      }
      startDate {
        year
        month
        day
      }
      status
    }
  }
}`;
