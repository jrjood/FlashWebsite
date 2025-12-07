import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../assets/wrappers/CheckboxFilter';

const CheckboxFilter = ({ title, options, selected, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleCheckboxChange = (value) => {
    if (selected.includes(value)) {
      onChange(selected.filter((item) => item !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  const handleClearAll = () => {
    onChange([]);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <Wrapper ref={dropdownRef}>
      <button
        type='button'
        className='filter-toggle-btn'
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        {selected.length > 0 && (
          <span className='filter-badge'>{selected.length}</span>
        )}
        <span className='dropdown-arrow'>{isOpen ? '▲' : '▼'}</span>
      </button>

      {isOpen && (
        <div className='filter-dropdown-menu'>
          <div className='dropdown-header'>
            <span className='dropdown-title'>{title}</span>
            {selected.length > 0 && (
              <button
                type='button'
                className='clear-btn'
                onClick={handleClearAll}
              >
                Clear all
              </button>
            )}
          </div>

          <div className='filter-options'>
            {options.length === 0 ? (
              <div className='no-options'>No options available</div>
            ) : (
              options.map((option) => (
                <label key={option} className='checkbox-label'>
                  <input
                    type='checkbox'
                    checked={selected.includes(option)}
                    onChange={() => handleCheckboxChange(option)}
                  />
                  <span className='checkbox-text'>{option}</span>
                </label>
              ))
            )}
          </div>
        </div>
      )}
    </Wrapper>
  );
};

CheckboxFilter.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CheckboxFilter;
