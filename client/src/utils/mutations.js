import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, password: String!) {
    loginUser(email: $email, password: $password) {
    username
    email
    _id
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password:String!) {
    addUser(username: $username, email: $email, password: $password) {
      username
      email
      _id
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookList:bookInput!) {
    saveBook(bookList:$bookList) {
        username
        email
        _id
        saveBooks {
            bookId
            authors            
            description
            image            
            link            
            title
        }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId:ID!) {
    removeBook(bookId:$bookId) {
        username
        email
        _id
        saveBooks {
            bookId
            authors            
            description
            image            
            link            
            title
        }
    }
  }
`;