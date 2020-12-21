export const fetchAnimeInfo = `query ($id: Int!){
    Page(page: 1, perPage: 1) {
      media(id: $id) {
        id
        title {
          english
          userPreferred
        }
        format
        episodes
        studios{
          nodes{
            name
            
          }
        }
        genres
        description
        coverImage{
          large
        }
        bannerImage
        trailer {
          id
        }
        characters(perPage: 5, sort: ROLE){
          nodes{
           id
          name{
            last
            first
            alternative
            
          }
            image{
              medium
            }
          }
        }
      }
    }
  }`;
