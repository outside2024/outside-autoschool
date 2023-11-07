import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { CitySelectContainer } from './CitySelectstyled';

const CitySelect = ({ selectOptions, selectedOption, light, handleChange }) => (
  <CitySelectContainer light={light}>
    <Select
      onChange={(e) => handleChange(e)}
      options={selectOptions}
      value={selectedOption}
      classNamePrefix="citySelect"
    />
  </CitySelectContainer>
);
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

export default CitySelect;
