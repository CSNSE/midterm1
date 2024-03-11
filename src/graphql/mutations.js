/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSport = /* GraphQL */ `
  mutation CreateSport(
    $input: CreateSportInput!
    $condition: ModelSportConditionInput
  ) {
    createSport(input: $input, condition: $condition) {
      id
      name
      grad
      sport
      position
      height
      weight
      team
      highlight
      Parentname
      Parentemail
      Parentphone
      Coachname
      Coachemail
      Coachphone
      gpa
      test
      image
      author
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateSport = /* GraphQL */ `
  mutation UpdateSport(
    $input: UpdateSportInput!
    $condition: ModelSportConditionInput
  ) {
    updateSport(input: $input, condition: $condition) {
      id
      name
      grad
      sport
      position
      height
      weight
      team
      highlight
      Parentname
      Parentemail
      Parentphone
      Coachname
      Coachemail
      Coachphone
      gpa
      test
      image
      author
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteSport = /* GraphQL */ `
  mutation DeleteSport(
    $input: DeleteSportInput!
    $condition: ModelSportConditionInput
  ) {
    deleteSport(input: $input, condition: $condition) {
      id
      name
      grad
      sport
      position
      height
      weight
      team
      highlight
      Parentname
      Parentemail
      Parentphone
      Coachname
      Coachemail
      Coachphone
      gpa
      test
      image
      author
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
      id
      Biography
      Preference
      Location
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
      id
      Biography
      Preference
      Location
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
      id
      Biography
      Preference
      Location
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createDiary = /* GraphQL */ `
  mutation CreateDiary(
    $input: CreateDiaryInput!
    $condition: ModelDiaryConditionInput
  ) {
    createDiary(input: $input, condition: $condition) {
      id
      name
      image
      description
      author
      address
      website
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateDiary = /* GraphQL */ `
  mutation UpdateDiary(
    $input: UpdateDiaryInput!
    $condition: ModelDiaryConditionInput
  ) {
    updateDiary(input: $input, condition: $condition) {
      id
      name
      image
      description
      author
      address
      website
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteDiary = /* GraphQL */ `
  mutation DeleteDiary(
    $input: DeleteDiaryInput!
    $condition: ModelDiaryConditionInput
  ) {
    deleteDiary(input: $input, condition: $condition) {
      id
      name
      image
      description
      author
      address
      website
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
      __typename
    }
  }
`;
