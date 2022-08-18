import styled from 'styled-components';

export const CardForm = styled.form`
  width: 100%;
  padding: 1em;
  div {
    display: flex;
    button,
    input,
    textarea,
    select {
      flex: 1;
      padding: 0.4em;
    }
    button {
      background-color: #c1bdbd;
      border-width: 1px;
      font-weight: bold;
      cursor: pointer;
      &:last-child {
        background-color: #2e4550;
        color: #ffffff;
      }
    }
  }
`;
