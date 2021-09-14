// grab the frist 20 posts
export const ALL_POSTS = `query Allposts {
  posts(first: 20, where: {orderby: {field: DATE, order: DESC}}) {
    nodes {
      id
      date
      slug
      title
      extraPostInfo {
        postContent
        previewImage {
          mediaItemUrl
        }
        previewInfo
      }
      author {
        node {
          firstName
          nickname
        }
      }
    }
  }
}`;
// get all the slugs for static

// post by a slug to displat to user
