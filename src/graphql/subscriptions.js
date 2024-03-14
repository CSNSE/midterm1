/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSport = /* GraphQL */ `
  subscription OnCreateSport($filter: ModelSubscriptionSportFilterInput) {
    onCreateSport(filter: $filter) {
      id
      name
      grad
      sport
      position
      height
      weight
      team
      highlight
      parentname
      parentemail
      parentphone
      coachname
      coachemail
      coachphone
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
export const onUpdateSport = /* GraphQL */ `
  subscription OnUpdateSport($filter: ModelSubscriptionSportFilterInput) {
    onUpdateSport(filter: $filter) {
      id
      name
      grad
      sport
      position
      height
      weight
      team
      highlight
      parentname
      parentemail
      parentphone
      coachname
      coachemail
      coachphone
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
export const onDeleteSport = /* GraphQL */ `
  subscription OnDeleteSport($filter: ModelSubscriptionSportFilterInput) {
    onDeleteSport(filter: $filter) {
      id
      name
      grad
      sport
      position
      height
      weight
      team
      highlight
      parentname
      parentemail
      parentphone
      coachname
      coachemail
      coachphone
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
export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile($filter: ModelSubscriptionProfileFilterInput) {
    onCreateProfile(filter: $filter) {
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
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile($filter: ModelSubscriptionProfileFilterInput) {
    onUpdateProfile(filter: $filter) {
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
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile($filter: ModelSubscriptionProfileFilterInput) {
    onDeleteProfile(filter: $filter) {
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
export const onCreateDiary = /* GraphQL */ `
  subscription OnCreateDiary($filter: ModelSubscriptionDiaryFilterInput) {
    onCreateDiary(filter: $filter) {
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
export const onUpdateDiary = /* GraphQL */ `
  subscription OnUpdateDiary($filter: ModelSubscriptionDiaryFilterInput) {
    onUpdateDiary(filter: $filter) {
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
export const onDeleteDiary = /* GraphQL */ `
  subscription OnDeleteDiary($filter: ModelSubscriptionDiaryFilterInput) {
    onDeleteDiary(filter: $filter) {
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
export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($filter: ModelSubscriptionNoteFilterInput) {
    onCreateNote(filter: $filter) {
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
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote($filter: ModelSubscriptionNoteFilterInput) {
    onUpdateNote(filter: $filter) {
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
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote($filter: ModelSubscriptionNoteFilterInput) {
    onDeleteNote(filter: $filter) {
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
