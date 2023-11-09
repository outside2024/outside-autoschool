import React from 'react';
import { Field, useFormikContext } from 'formik';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
import { SelectContainer } from './Select.styled';

const Select = ({ name, selectOptions, label, placeholder, instanceId }) => {
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
            instanceId={instanceId}
          />
        )}
      </Field>
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
  label: PropTypes.string,
  placeholder: PropTypes.string,
  instanceId: PropTypes.string.isRequired,
};

Select.defaultProps = {
  label: '',
  placeholder: '',
};

export default Select;
