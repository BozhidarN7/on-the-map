import { gql } from '@apollo/client';

export const CREATE_USER = gql`
    mutation CreateUser($email: String!, $password: String!) {
        createUser(email: $email, password: $password) {
            email
            password
        }
    }
`;
