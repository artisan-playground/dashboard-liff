export const getUsers = gql`
  query {
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
