/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPageText = /* GraphQL */ `
  mutation CreatePageText(
    $input: CreatePageTextInput!
    $condition: ModelPageTextConditionInput
  ) {
    createPageText(input: $input, condition: $condition) {
      id
      name
      text
      createdAt
      updatedAt
    }
  }
`;
export const updatePageText = /* GraphQL */ `
  mutation UpdatePageText(
    $input: UpdatePageTextInput!
    $condition: ModelPageTextConditionInput
  ) {
    updatePageText(input: $input, condition: $condition) {
      id
      name
      text
      createdAt
      updatedAt
    }
  }
`;
export const deletePageText = /* GraphQL */ `
  mutation DeletePageText(
    $input: DeletePageTextInput!
    $condition: ModelPageTextConditionInput
  ) {
    deletePageText(input: $input, condition: $condition) {
      id
      name
      text
      createdAt
      updatedAt
    }
  }
`;
