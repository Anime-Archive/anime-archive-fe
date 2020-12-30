export const fetchUserSearch = `
query ($searchTerm: String, $genre: String,$sort: [MediaSort], $status: [MediaStatus]) {
  Page(page: 1, perPage: 5) {
    media(type: ANIME, search: $searchTerm, genre: $genre, sort: $sort, status_in: $status) {
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
