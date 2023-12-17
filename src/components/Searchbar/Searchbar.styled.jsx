import { Field, Form } from 'formik';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

export const SearchForm = styled(Form)`
  margin: 0 auto 24px auto;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: var(--basic-white);
  border: 1px solid var(--basic-dark);
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchFormButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity var(--basic-transition);
  cursor: pointer;
  outline: none;
  background-color: var(--basic-light);

  &:hover {
    opacity: 1;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

export const ButtonImg = styled(BsSearch)`
  width: 36px;
  height: 36px;
  color: var(--additional);
`;

export const ButtonLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const SearchInput = styled(Field)`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  &:placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
