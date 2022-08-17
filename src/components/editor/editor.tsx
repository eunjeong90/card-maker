import React, { useRef } from 'react';
import styled from 'styled-components';

const Editor = ({ addCard }: any) => {
  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const msgRef = useRef<HTMLTextAreaElement>(null);

  const onSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current?.value || '',
      company: companyRef.current?.value || '',
      theme: selectRef.current?.value,
      title: titleRef.current?.value || '',
      email: emailRef.current?.value || '',
      message: msgRef.current?.value || '',
      fileName: '',
      fileURL: '',
    };
    console.log(card);
    formRef.current?.reset();
    addCard(card);
  };
  return (
    <section>
      <Heading>Card Maker</Heading>
      <CardForm ref={formRef}>
        <div>
          <input type="text" placeholder="name" ref={nameRef} />
          <input type="text" placeholder="company" ref={companyRef} />
          <select ref={selectRef}>
            <option value="light">light</option>
            <option value="dark">dark</option>
            <option value="colorful">Colorful</option>
          </select>
        </div>
        <div>
          <input type="text" placeholder="Title" ref={titleRef} />
          <input type="text" placeholder="email@abc.com" ref={emailRef} />
        </div>
        <div>
          <textarea placeholder="message" ref={msgRef} />
        </div>
        <div>
          <button>No file</button>
          <button onClick={onSubmit}>Add</button>
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
