import { gql } from "@apollo/client";

export const GET_SECTION = gql`
  {
    upcoming: Page(page: 1, perPage: 5) {
      media(type: ANIME, sort: POPULARITY_DESC, status: NOT_YET_RELEASED) {
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
    airing: Page(page: 1, perPage: 5) {
      media(type: ANIME, sort: POPULARITY_DESC, status: RELEASING) {
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
  }
`;
