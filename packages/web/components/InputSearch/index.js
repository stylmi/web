import React from 'react';
import Router from 'next/router';
import { SearchInputWrapper, SearchInput, SearchButton } from './style';
const InputSearch = ({
  type,
  value,
  buttonText,
  buttonIcon,
  placeholder,
  changed,
  style,
  onKeyPress,
  onBlur,
  placeholderAlign,
  addSubmit,
  pageToFilter
}) => {
  const handleSearch = e => {
    e.preventDefault();
    if (value.trim()) {
      Router.push(`${pageToFilter}?text=${value.trim()}`);
    }
  };
  return (
    <SearchInputWrapper onSubmit={handleSearch} style={style}>
      <SearchInput
        type={type}
        value={value}
        placeholder={placeholder}
        placeholderAlign = {placeholderAlign}
        onChange={changed}
        onKeyPress={onKeyPress}
        onBlur={onBlur}
        aria-label="search"
      />
      {addSubmit && <SearchButton type="submit">
        {buttonIcon} {buttonText}
      </SearchButton>
     }
    </SearchInputWrapper>
  );
};
export default InputSearch;
