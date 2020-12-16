export const fetchHomepage = `{
    carousel: Page(page: 1, perPage: 5) {
      media(type: ANIME, sort: TRENDING_DESC) {
        id
        coverImage {
          large
        }
        title {
          english
        }
        averageScore
      }
    }
    upcoming: Page(page: 1, perPage: 5) {
      media(type: ANIME, sort: POPULARITY_DESC, status: NOT_YET_RELEASED) {
        id
        coverImage {
          large
        }
        title {
          native
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
    airing: Page(page: 1, perPage: 5) {
      media(type: ANIME, sort: POPULARITY_DESC, status: RELEASING) {
        id
        coverImage {
          large
        }
        title {
          native
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
  }  
  `;
