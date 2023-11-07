import React from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
import { SelectContainer } from './Select.styled';

const Select = ({ selectOptions, placeholder }) => {
  const handleSetSelectOption = (option) => {};

  return (
    <SelectContainer>
      <ReactSelect
        onChange={(e) => handleSetSelectOption(e)}
        options={selectOptions}
        placeholder={placeholder && placeholder}
        classNamePrefix="customSelect"
      />
    </SelectContainer>
  );
};

// Select.propTypes = {
//   name: PropTypes.string.isRequired,
//   selectOptions: PropTypes.arrayOf(
//     PropTypes.shape({
//       label: PropTypes.string,
//       value: PropTypes.string,
//     }),
//   ).isRequired,
//   label: PropTypes.string,
//   placeholder: PropTypes.string,
//   instanceId: PropTypes.string.isRequired,
// };

// Select.defaultProps = {
//   label: '',
//   placeholder: '',
// };

export default Select;
