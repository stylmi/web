import Post from '../lib/Post';
import Category from '../lib/Category';
import Author from '../lib/Author';

const post = new Post();
const category = new Category();
const author = new Author();

/**
 * All the query throughout the App
 */
const Query = {
  posts: (_, args) =>
    post.allPost({ limit: args.limit, page: args.page, status: args.status }),
  searchPosts: async (_, args) => {
    return post.search({ data: args.searchParams });
  },
  locationPost: async(_, args) => {
    return post.byLocation({
      limit: args.limit,
      page: args.page,
      location: args.location
    })
  },
  nearest: async (_, args) => {
    const radius = args.radius ? args.radius : 5000;
    const location = args.location
      ? args.location
      : { lat: 40.706877, lng: -74.011265 };
    return post.nearest({
      limit: args.limit,
      page: args.page,
      radius,
      location,
    });

  },
  post: async (_, args) => {
    if (args.slug) {
      let postData = await post.where({
        value: args.slug,
        field: 'slug',
      });
      let distance = false;
      if (
        args.lat &&
        args.lng &&
        postData &&
        postData.formattedLocation &&
        postData.formattedLocation.lat &&
        postData.formattedLocation.lng
      ) {
        const userLocation = { lat: args.lat, lng: args.lng };
        const postLocation = {
          lat: postData.formattedLocation.lat,
          lng: postData.formattedLocation.lng,
        };
        distance = await post.userDistance({ userLocation, postLocation });
      }
      if (distance) {
        postData = {
          ...postData,
          distance,
        };
      }
      return postData;
    } else if (args.id) {
      return post.byId({ id: args.id, lat: args.lat, lng: args.lng });
    }
  },
  authors: (_, args) => author.all({ limit: args.limit, page: args.page }),
  author: (_, args) => {
    if (args.username) {
      return author.where({ value: args.username, field: 'username' });
    } else if (args.id) {
      return author.byId({ id: args.id });
    }
  },

  categories: (_, args) => {
    const result = category.all({ limit: args.limit, page: args.page })
    return result;
  },
  category: (_, args) => {
    if (args.slug) {
      return category.where({ value: args.slug, field: 'slug' });
    } else if (args.id) {
      return category.byId({ id: args.id });
    }
  },
};
const AuthorQuery = {
  posts: (authorData, args) =>
    author.posts({ id: authorData.id, limit: args.limit, page: args.page }),
  favourite: (authorData, args) =>
    author.favourite({ id: authorData.id, limit: args.limit, page: args.page }),
  draft: (authorData, args) =>
    author.posts({
      id: authorData.id,
      status: 'draft',
      limit: args.limit,
      page: args.page,
    }),
};
const PostQuery = {
  author: postData => author.byId({ id: postData.authorId }),
  related: (postData, args) =>
    post.relatedPosts({
      value: postData.slug,
      field: 'slug',
    }),
};
const CategoryQuery = {
  posts: (categoryData, args) =>
    category.posts({
      value: categoryData.slug,
      limit: args.limit,
      page: args.page,
      field: 'slug',
      locationField: args.locationField,
      location: args.location
    })
};

export { Query, AuthorQuery, PostQuery, CategoryQuery };
