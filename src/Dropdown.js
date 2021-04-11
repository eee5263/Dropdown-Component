import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown, faCheckCircle } from '@fortawesome/fontawesome-free-solid';
import { faCircle } from '@fortawesome/fontawesome-free-regular';
import './Dropdown.css';

const Dropdown = ({ selection, setSelection, items }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  // Function that handles dropdown item click
  const handleSelect = item => {
    // if item does not exist in selection array, add the item
    if (!isItemInSelection(item)) {
        setSelection([...selection, item]);
        return;
    }

    // if item already exists, remove item
    const selectionAfterRemoval = selection.filter(current => current.id !== item.id);
    setSelection(selectionAfterRemoval);
  }

  // Function that handles select all 
  const handleSelectAll= () => {
    setSelection(items);
  }

  // Function that handles deselect all
  const handleDeselectAll = () => {
    setSelection([]);
  }

  // Function that checks whether item is already in selection array
  const isItemInSelection = item => selection.some(current => current.id === item.id);
  
  return (
    <div className="dropdown-wrapper">
      <div className="dropdown-header" onClick={() => toggle(!open)}>
        <div className="dropdown-header-title">
            {selection.length < 1 ? 'Select Options': selection.map(({value}) => value).join(', ')}
        </div>
        <div className="dropdown-header-arrow">
         <FontAwesomeIcon icon={open ? faAngleUp : faAngleDown} />
        </div>
      </div>
      {open && (
        <>
          <div className="dropdown-content">
            {items.map(item => (
              <div key={item.id}>
              <div className="dropdown-content-item" onClick={() => handleSelect(item)}>
                <span><FontAwesomeIcon icon={isItemInSelection(item) ? faCheckCircle : faCircle} /></span>
                <span className="dropdown-content-item-text">{item.value}</span>
              </div>
              </div>
            ))}
            <div className="dropdown-content-buttons-wrapper">
              <button className="dropdown-content-buttons" onClick={handleSelectAll}>
                <span>Select All</span>
              </button>
              <button className="dropdown-content-buttons" onClick={handleDeselectAll}>
                <span>Deselect All</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Dropdown;