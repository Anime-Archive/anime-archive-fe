import { gql } from "@apollo/client";

export const GET_CAROUSEL = gql`
  query GetCarousel($filterName: [MediaSort]) {
    Page(page: 1, perPage: 5) {
      media(type: ANIME, sort: $filterName) {
        id
        coverImage {
          large
        }
        title {
          userPreferred
          english
        }
        averageScore
      }
    }
  }
`;
