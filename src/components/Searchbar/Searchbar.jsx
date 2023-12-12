import { Formik } from 'formik';
import {
  SearchForm,
  SearchFormButton,
  ButtonLabel,
  SearchInput,
  ButtonImg,
} from './Searchbar.styled';

export const Searchbar = ({ handleSearch, handleChange, query }) => {
  return (
    <>
      <Formik initialValues={{ searchQuery: '' }} onSubmit={handleSearch}>
        <SearchForm>
          <SearchInput
            value={query}
            name="searchQuery"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search films"
            onChange={handleChange}
          />

          <SearchFormButton type="submit">
            <ButtonImg />
            <ButtonLabel>Search</ButtonLabel>
          </SearchFormButton>
        </SearchForm>
      </Formik>
    </>
  );
};
