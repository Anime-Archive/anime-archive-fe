export const fetchCharacters = `
query ($id: Int!) {
    Media(type: ANIME, id: $id) {
      id
      bannerImage
      title {
        userPreferred
        english
      }
      characters {
        nodes {
          id
          image {
            large
          }
          name {
            first
            last
            full
            native
          }
        }
      }
    }
  }
`;
