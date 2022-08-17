import React from 'react';
import styled from 'styled-components';

const Editor = ({ cards }: any) => {
  return (
    <section>
      <Heading>Card Maker</Heading>
      <CardForm>
        {/* <div>
              <span>{item.name}</span>
              <span>{item.company}</span>
              <span>{item.theme}</span>
            </div>
            <div>
              <span>{item.title}</span>
              <span>{item.email}</span>
            </div>
            <div>
              <span>{item.textarea}</span>
            </div> */}
        <div>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Company" />
          <select>
            <option value="Light">light</option>
            <option value="Dark">dark</option>
            <option value="Colorful">Colorful</option>
          </select>
        </div>
        <div>
          <input type="text" placeholder="Title" />
          <input type="text" placeholder="email@abc.com" />
        </div>
        <div>
          <textarea placeholder="Message" />
        </div>
        <div>
          <button>No file</button>
          <button>Add</button>
        </div>
      </CardForm>
    </section>
  );
};

const Heading = styled.h1`
  color: #385461;
  text-align: center;
`;
const CardForm = styled.form`
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

export default Editor;
