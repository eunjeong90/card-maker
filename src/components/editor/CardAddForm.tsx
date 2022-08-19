import { useRef } from 'react';
import { CardForm } from './cardStyles';

const CardAddForm = ({ card, addCard }: any) => {
  const { id, name, company, theme, title, email, message, fileURL } = card;
  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const msgRef = useRef<HTMLTextAreaElement>(null);

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
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
    <div>
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
          <label htmlFor="profile-btn">{fileURL ? name : 'No File'}</label>
          <input
            id="profile-btn"
            name="fileURL"
            className="ally-hidden"
            type="file"
          />
          <button onClick={onSubmit}>Add</button>
        </div>
      </CardForm>
    </div>
  );
};

export default CardAddForm;
