import styled from 'styled-components';

export const CardForm = styled.form`
  width: 100%;
  padding: 1em;
  div {
    display: flex;
    button,
    input,
    textarea,
    select,
    label {
      flex: 1;
      padding: 0.4em;
    }
    button,
    label {
      background-color: #c1bdbd;
      border-width: 1px;
      font-weight: bold;
      font-size: 0.8em;
      text-align: center;
      cursor: pointer;
      &:last-child {
        background-color: #2e4550;
        color: #ffffff;
      }
    }
  }
`;
