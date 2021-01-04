export const fetchUserSearch = `
query ($searchTerm: String, $genre: String, $sort: [MediaSort], $status: [MediaStatus], $pageNum: Int) {
  Page(page: $pageNum, perPage: 15) {
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
