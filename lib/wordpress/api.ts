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

export const GET_ALL_POSTS_WITH_SLUG = `query AllPostsWithSlug {
  posts(first: 10000) {
    nodes {
      slug
    }
  }
}`;

export const POST_BY_SLUG = `query PostBySlug ($id: ID!, $idType: PostIdType!) {
  post(id: $id, idType: $idType) {
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
}`;
