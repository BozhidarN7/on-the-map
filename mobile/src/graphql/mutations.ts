import { gql } from '@apollo/client';

export const REGISTER = gql`
  mutation Register($registerData: RegisterData!) {
    register(registerData: $registerData) {
      email
      firstName
      lastName
    }
  }
`;
