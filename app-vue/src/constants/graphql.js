import gql from 'graphql-tag'

export const ALL_MEMBER_QUERY = gql`
  query Users {
    users {
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
`

export const ALL_PROJECT_QUERY = gql`
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
`

export const MEMBER_QUERY = gql`
  query User($memberId: Int!) {
    user(where: { id: $memberId }) {
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
`

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
      members {
        id
        name
        image
      }
    }
  }
`

export const TOGGLE_STATUS = gql`
  mutation UpdateTask($id: Int!, $data: TaskUpdateInput!) {
    updateOneTask(where: { id: $id }, data: $data) {
      id
      isDone
    }
  }
`

export const ADD_TASK = gql`
  mutation CreateTask(
    $projectId: Int!
    $taskName: String!
    $taskDetail: String!
    $startTime: DateTime!
    $endTime: DateTime!
    $isDone: Boolean!
    $members: Int!
  ) {
    createOneTask(
      data: {
        project: { connect: { id: $projectId } }
        taskName: $taskName
        taskDetail: $taskDetail
        startTime: $startTime
        endTime: $endTime
        isDone: $isDone
        members: { connect: [{ id: $members }] }
      }
    ) {
      id
      project {
        id
      }
      taskName
      startTime
      endTime
      taskDetail
      isDone
      members {
        id
      }
      files {
        id
        url
        name
        status
        task {
          id
        }
      }
      comments {
        id
        task {
          id
        }
        timestamp
        image
        message
      }
    }
  }
`
