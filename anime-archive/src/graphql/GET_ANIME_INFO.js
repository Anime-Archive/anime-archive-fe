import { gql } from "@apollo/client";

export const GET_ANIME_INFO = gql`
  query animeInfo($id: Int!) {
    Media(id: $id) {
      id
      status
      title {
        english
        userPreferred
      }
      format
      episodes
      studios {
        nodes {
          name
        }
      }
      genres
      description
      coverImage {
        large
      }
      bannerImage
      trailer {
        id
      }
      characters(perPage: 5, sort: ROLE) {
        nodes {
          id
          name {
            last
            first
            alternative
          }
          image {
            medium
          }
        }
      }
    }
  }
`;
