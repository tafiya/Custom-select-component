import  { useState } from 'react';
import CustomSelect from './CustomSelect';
import './CustomSelect.css';

const App = () => {
  const [selectedValue, setSelectedValue] = useState([]);
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const handleChange = (selectedOption) => {
    setSelectedValue(selectedOption);
  };

  const handleMenuOpen = () => {
    console.log('Menu opened');
  };

  const handleSearch = (inputValue) => {
    console.log('Searching for:', inputValue);
    // Here you can make an API call or filter options based on inputValue
  };

  return (
    <div style={{ margin: '20px' }}>
      <h1>Custom Select Component</h1>
      <CustomSelect
        isClearable={true}
        isSearchable={true}
        isDisabled={false}
        options={options}
        value={selectedValue}
        placeholder="Select an option..."
        isGrouped={false}
        isMulti={true}
        onChangeHandler={handleChange}
        onMenuOpen={handleMenuOpen}
        onSearchHandler={handleSearch}
      />
    </div>
  );
};

export default App;
