import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import styled from 'styled-components';

const DropdownWrapper = styled.div`
  display: flex;
  gap: 25px;

  .btn {
    --bs-btn-font-size: 12px;
    --bs-btn-font-weight: 500;
    --bs-btn-line-height: 1.5;
    --bs-btn-color: var(--bs-body-color);
    --bs-btn-bg: transparent;
    --bs-btn-border-color: transparent;
    --bs-btn-hover-border-color: transparent;
    cursor: pointer;
  }
  .btn {
    /* --bs-btn-padding-x: 0.75rem; */
    /* --bs-btn-padding-y: 0.375rem; */
    --bs-btn-font-family: ;
    --bs-btn-font-size: 12px;
    --bs-btn-font-weight: 500;
    --bs-btn-line-height: 1.5;
    --bs-btn-color: var(--bs-body-color);
    --bs-btn-bg: transparent;
    /* --bs-btn-border-width: var(--bs-border-width); */
    --bs-btn-border-color: transparent;
    --bs-btn-border-radius: var(--bs-border-radius);
    --bs-btn-hover-border-color: transparent;
    /* --bs-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075); */
    /* --bs-btn-disabled-opacity: 0.65; */
    --bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb), .5);
    display: inline-block;
    padding: var(--bs-btn-padding-y) var(--bs-btn-padding-x);
    font-family: var(--bs-btn-font-family);
    font-size: var(--bs-btn-font-size);
    font-weight: var(--bs-btn-font-weight);
    line-height: var(--bs-btn-line-height);
    color: var(--bs-btn-color);
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    border: var(--bs-btn-border-width) solid var(--bs-btn-border-color);
    border-radius: var(--bs-btn-border-radius);
    background-color: var(--bs-btn-bg);
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.dropdown-menu {
  border: none;
  border-radius: 0px;
}
`;

const dropdownData = [
  {
    id: 1,
    title: 'KLAA FESTIVAL',
    items: [
      { href: '#/action-1', label: 'Embellished dupattas' },
      { href: '#/action-2', label: 'Saree' },
      { href: '#/action-3', label: 'Lehnga ' },
      { href: '#/action-3', label: 'Two pc' },
    ],
  },
  {
    id: 2,
    title: 'SEASONAL HIT',
    items: [
      { href: '#/action-1', label: 'Hoodie' }, 
      
       
       
      
      { href: '#/action-2', label: 'Denim jackets ' },
      { href: '#/action-3', label: 'Sweat shirts' },
      { href: '#/action-4', label: 'Coats' },
    ],
  },
  {
    id: 3,
    title: 'GOOD TO GO',
    items: [
      { href: '#/action-1', label: '2 pc' },
      { href: '#/action-2', label: '3 pc' },
      { href: '#/action-3', label: 'T shirts' },
      { href: '#/action-4', label: 'Track suits' },
      { href: '#/action-5', label: 'Caps ' },
    ],
  },
  {
    id: 4,
    title: 'LUXURY ONE',
    items: [
      { href: '#/action-1', label: 'Embellished dupattas' },
      { href: '#/action-2', label: 'Saree' },
      { href: '#/action-3', label: 'Lehnga ' },
      { href: '#/action-3', label: 'Two pc' },
    ],
  },
  {
    id: 5,
    title: "MEN'S WEAR",
    items: [
      { href: '#/action-1', label: 'jeans' },
      { href: '#/action-2', label: 'polo shirts' },
      { href: '#/action-3', label: 't shirts' },
      { href: '#/action-3', label: 'dress shirts' },
      { href: '#/action-3', label: 'belts' },
      { href: '#/action-3', label: 'caps' },     
    ],
  },
  {
    id: 6,
    title: "KID'S WEAR",
    items: [
       
      
       
       
      
      { href: '#/action-1', label: 'two pc' },
      { href: '#/action-2', label: 'jackets' },
      { href: '#/action-3', label: 'caps ' },
      { href: '#/action-3', label: '3pc' },
      { href: '#/action-3', label: 'Jeans' },
    ],
  },
];

function DropDownBtn() {
  const [showDropdown, setShowDropdown] = useState(null);

  const handleMouseEnter = (id) => {
    setShowDropdown(id);
  };

  const handleMouseLeave = () => {
    setShowDropdown(null);
  };

  return (
    <DropdownWrapper>
      {dropdownData.map((dropdown) => (
        <Dropdown
          key={dropdown.id}
          onMouseEnter={() => handleMouseEnter(dropdown.id)}
          onMouseLeave={handleMouseLeave}
          show={showDropdown === dropdown.id}
        >
          <Dropdown.Toggle as="div" className="btn">
            {dropdown.title}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {dropdown.items.map((item, index) => (
              <Dropdown.Item key={index} href={item.href}>
                {item.label}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      ))}
    </DropdownWrapper>
  );
}

export default DropDownBtn;
