import styled, { css } from 'styled-components';
import DEFAULT_PROFILE from '../../assets/images/default_profile.png';

const Card = ({ card }: any) => {
  const { id, name, company, theme, title, email, message, fileURL } = card;
  return (
    <>
      {id && (
        <CardItem theme={theme}>
          <div>
            <img src={fileURL || DEFAULT_PROFILE} alt={`${name} profile`} />
          </div>
          <div>
            <div>
              <strong>{name}</strong>
              <span>{company}</span>
            </div>
            <div>
              <span>{title}</span>
              <span>{email}</span>
            </div>
            <div>
              <span>&quot;{message}&quot;</span>
            </div>
          </div>
        </CardItem>
      )}
    </>
  );
};

const CardItem = styled.li`
  display: flex;
  line-height: 1.5;
  border-radius: 0.8em;
  padding: 1em;
  margin-bottom: 1em;
  background-color: #f3f3f3;
  color: #242424;
  ${(props) =>
    props.theme === 'light' &&
    css`
      background-color: #f3f3f3;
      color: #242424;
    `}
  ${(props) =>
    props.theme === 'dark' &&
    css`
      background-color: #242424;
      color: #ffffff;
    `}
  ${(props) =>
    props.theme === 'colorful' &&
    css`
      background-color: #af78a1;
      color: #ffffff;
    `}
  > div {
    padding: 1em;
    &:first-child {
      flex: 1 1 30%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &:last-child {
      flex: 1 1 70%;
      div {
        &:first-child {
          &:after {
            content: '';
            height: 1px;
            width: 100%;
            display: block;
            margin: 0.4em 0;
            background-color: ${(props) =>
              props.theme === 'dark' || 'colorful' ? '#888888' : '#ffffff'};
          }
        }
      }
    }
    img {
      width: 9rem;
      height: 9rem;
      border-radius: 50%;
    }
    strong {
      font-size: 1.3em;
    }
    span {
      display: block;
      font-size: 0.8em;
    }
  }
`;
export default Card;
