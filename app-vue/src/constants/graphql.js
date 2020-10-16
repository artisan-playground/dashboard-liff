import gql from 'graphql-tag'

export const ALL_MEMBER_QUERY = gql`
  query Users{
    users{
      id
      name
      image
      email
      department
      position
      type
      skills
    }
  } 
`;

export const ALL_PROJECT_QUERY = gql `
  query {
    projects {
      id
      projectName
      projectType
      projectImage
      projectDetail
      status
      dueDate
      members {
      id
      name
      image
      }
    }
  }
`;

export const PROJECT_QUERY = gql`
query($projectId: Int!) {
  project(where: { id: $projectId }) {
    id
    projectName
    projectType
    projectImage
    projectDetail
    status
    dueDate
    tasks {
      id
      taskName
      startTime
      endTime
      taskDetail
      isDone
      members {
        id
        image
      }
    }
  }
}
`

