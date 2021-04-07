/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPageText = /* GraphQL */ `
  query GetPageText($id: ID!) {
    getPageText(id: $id) {
      id
      name
      text
      createdAt
      updatedAt
    }
  }
`;
export const listPageTexts = /* GraphQL */ `
  query ListPageTexts(
    $filter: ModelPageTextFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPageTexts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        text
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
