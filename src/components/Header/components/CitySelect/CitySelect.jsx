import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { CitySelectContainer } from './CitySelectstyled';

const CitySelect = ({ selectOptions, selectedOption, light, handleChange }) => (
  <CitySelectContainer $light={light}>
    <Select
      onChange={(e) => handleChange(e)}
      options={selectOptions}
      value={selectedOption}
      classNamePrefix="citySelect"
      instanceId="citySelect"
    />
  </CitySelectContainer>
);

CitySelect.propTypes = {
  selectOptions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
  selectedOption: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  }),
  light: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
};

CitySelect.defaultProps = {
  light: false,
  selectOptions: [],
  selectOption: { value: '', label: '' },
};

export default CitySelect;
