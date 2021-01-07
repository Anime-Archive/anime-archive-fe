export const fetchUserSearch = `
query ($searchTerm: String, $sort: [MediaSort], $genre: String, $streaming: String, $sMaterial: MediaSource, $status: [MediaStatus], $pageNum: Int) {
  Page(page: $pageNum, perPage: 15) {
    media(type: ANIME, search: $searchTerm, sort: $sort, genre: $genre, status_in: $status, licensedBy: $streaming, source: $sMaterial) {
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
