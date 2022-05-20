import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
query Articles {
  articles {
    data {
      attributes {
        title
        content
        image {
          data {
            attributes {
              url
            }
          }
        }
        published
        category {
          data {
            attributes {
              name
            }
          }
        }
      }
    }
  }
}
`;

export default ARTICLES_QUERY;
