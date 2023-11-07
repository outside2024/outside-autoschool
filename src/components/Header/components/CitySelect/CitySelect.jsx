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

CitySelect.propTypes = {
  selectOptions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ).isRequired,
  selectedOption: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
  light: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
};

CitySelect.defaultProps = {
  light: false,
};

export default CitySelect;
