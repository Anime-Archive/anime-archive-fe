export const fetchUserSearch = `
query ($searchTerm: String, $sort: [MediaSort], $genre: String, $status: [MediaStatus], $sMaterial: [MediaSource], $streaming: String, $format: [MediaFormat], $year: Int, $pageNum: Int) {
  Page(page: $pageNum, perPage: 15) {
    media(isAdult: false, type: ANIME, search: $searchTerm, sort: $sort, genre: $genre, status_in: $status, source_in: $sMaterial, licensedBy: $streaming, format_in: $format, seasonYear: $year) {
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
