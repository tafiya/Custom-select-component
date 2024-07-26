import React from 'react';
import Select from 'react-select';
import './CustomSelect.css';

const CustomSelect = ({
    isClearable,
    isSearchable,
    isDisabled,
    options,
    value,
    placeholder,
    isGrouped,
    isMulti,
    onChangeHandler,
    onMenuOpen,
    onSearchHandler,
}) => {
    const handleChange = (selectedOption) => {
        onChangeHandler(selectedOption);
    };

    const handleMenuOpen = () => {
        onMenuOpen();
    };

    const handleInputChange = (inputValue) => {
        onSearchHandler(inputValue);
    };

    const formatGroupLabel = (data) => (
        <div className="select-group-label">{data.label}</div>
    );

    return (
        <Select
            className="select-container"
            classNamePrefix="select"
            isClearable={isClearable}
            isSearchable={isSearchable}
            isDisabled={isDisabled}
            options={options}
            value={value}
            placeholder={placeholder}
            isMulti={isMulti}
            isOptionDisabled={(option) => option.isDisabled}
            onChange={handleChange}
            onMenuOpen={handleMenuOpen}
            onInputChange={handleInputChange}
            menuPlacement="auto"
            noOptionsMessage={() => 'No options available'}
            formatGroupLabel={isGrouped ? formatGroupLabel : null}
        />
    );
};

export default CustomSelect;
