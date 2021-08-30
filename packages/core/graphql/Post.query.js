import gql from 'graphql-tag';

export const GET_POST = gql`
  query getPost($slug: String, $lat: Float, $lng: Float) {
    post(slug: $slug, lat: $lat, lng: $lng) {
      id
      title
      content
      price
      authorId
      slug
      contactNumber
      condition
      isNegotiable
      createdAt
      distance
      author {
        name
        username
        image {
          url
          largeUrl
        }
      }
      image {
        url
        largeUrl
      }
      gallery {
        url
        largeUrl
      }
      favouritedBy
      formattedLocation {
        lat
        lng
        formattedAddress
        locationCategory
      }
      categories {
        id
        slug
        name
      }
      related(limit: 4) {
        id
        title
        slug
        price
        image {
          url
          largeUrl
        }
      }
    }
  }
`;

export const GET_POST_BY_LOCATION = gql`
  query getPostsByLocation($LIMIT: Int, $page: Int, $location: String) {
    locationPost(limit: $LIMIT,page: $page, location: $location) {
      data {
        id
        slug
        title
        price
        image {
          url
          largeUrl
        }
      }
      total
    }
  }
`;

export const GET_POST_FOR_EDIT = gql`
  query get($id: ID!) {
    post(id: $id) {
      id
      title
      content
      price
      slug
      status
      condition
      isNegotiable
      authorId
      contactNumber
      image {
        url
        largeUrl
      }
      gallery {
        url
        largeUrl
      }
      formattedLocation {
        lat
        lng
        formattedAddress
        locationCategory
      }
      categories {
        id
        slug
        name
        value
        label
      }
    }
  }
`;
