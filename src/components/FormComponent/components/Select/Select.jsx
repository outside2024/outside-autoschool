import React from 'react';
import { Field, useFormikContext } from 'formik';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
import { SelectContainer } from './Select.styled';

const Select = ({ name, selectOptions, error, label, placeholder }) => {
  const formik = useFormikContext();
  const handleSetSelectOption = (option) => {
    formik.setFieldValue(name, option.value);
  };


  const getFieldValue = (selectField) => selectOptions?.find((el) => el.id === selectField.value);

  return (
    <SelectContainer>
      {label && (
        <label htmlFor={name} className="inputLabel">
          {label}
        </label>
      )}
      <Field name={name}>
        {({ field }) => (
          <ReactSelect
            value={getFieldValue(field)}
            onChange={(e) => handleSetSelectOption(e)}
            options={selectOptions}
            placeholder={placeholder && placeholder}
            classNamePrefix="customSelect"
          />
        )}
      </Field>
      {/* {error && <div className="input-error-content">{error}</div>} */}
    </SelectContainer>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  selectOptions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ).isRequired,
  error: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.string]),
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

Select.defaultProps = {
  error: null,
  label: '',
  placeholder: '',
};

export default Select;