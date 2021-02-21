import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query GetCharacters($id: Int!) {
    Media(type: ANIME, id: $id) {
      id
      bannerImage
      title {
        userPreferred
        english
      }
      characters(sort: ROLE) {
        nodes {
          id
          image {
            large
          }
          name {
            first
            last
            alternative
          }
        }
      }
    }
  }
`;
