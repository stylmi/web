import gql from 'graphql-tag';

export const GET_CATEGORY_POST = gql`
  query getCategoryPost($id: ID, $SLUG: String, $LIMIT: Int, $page: Int, $location: String, $locationField: String) {
    category(id: $id, slug: $SLUG) {
      id
      name
      slug
      posts(limit: $LIMIT, page: $page, locationField: $locationField, location: $location ) {
        data {
          id
          title
          price
          slug
          image {
            url
            largeUrl
          }
        }
        total
      }
    }
  }
`;
