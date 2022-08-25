import React, { useRef } from 'react';
import { CardForm } from './cardStyles';

const CardEditForm = ({ FileInput, card, updateCard, deleteCard }: any) => {
  const { id, name, company, theme, title, email, message, fileURL, fileName } =
    card;
  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const msgRef = useRef<HTMLTextAreaElement>(null);

  const onFileChange = (file: { name: string; url: string }) => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };
  const onChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    if (e.currentTarget == null) {
      return;
    }
    e.preventDefault();
    updateCard({
      ...card,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    deleteCard(card);
  };

  return (
    <div>
      <CardForm ref={formRef}>
        <div>
          <input
            type="text"
            placeholder="name"
            name="name"
            value={name}
            ref={nameRef}
            onChange={onChange}
          />
          <input
            type="text"
            placeholder="company"
            name="company"
            value={company}
            ref={companyRef}
            onChange={onChange}
          />
          <select
            ref={selectRef}
            name="theme" //
            value={theme}
            onChange={onChange}
          >
            <option value="light">light</option>
            <option value="dark">dark</option>
            <option value="colorful">Colorful</option>
          </select>
        </div>
        <div>
          <input
            type="text"
            placeholder="title"
            name="title"
            value={title}
            ref={titleRef}
            onChange={onChange}
          />
          <input
            type="text"
            placeholder="email@abc.com"
            name="email"
            value={email}
            ref={emailRef}
            onChange={onChange}
          />
        </div>
        <div>
          <textarea
            placeholder="message"
            name="message"
            value={message}
            ref={msgRef}
            onChange={onChange}
          />
        </div>
        <div>
          <FileInput onFileChange={onFileChange} name={fileName} />
          <button onClick={onSubmit}>delete</button>
        </div>
      </CardForm>
    </div>
  );
};

export default CardEditForm;
