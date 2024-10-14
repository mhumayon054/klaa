import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import styled from 'styled-components';
import Sidebar from '../Sidebar/Sidebar';

const DropdownWrapper = styled.div`
  display: flex;
  gap: 25px;


  @media screen and (max-width:768px) {
    display: none;
  } 

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
      { href: '/', label: 'Embellished dupattas' },
      { href: '/', label: 'Saree' },
      { href: '/', label: 'Lehnga ' },
      { href: '/', label: 'Two pc' },
    ],
  },
  {
    id: 2,
    title: 'SEASONAL HIT',
    items: [
      { href: '#/action-1', label: 'Hoodie' }, 
      
       
       
      
      { href: '/', label: 'Denim jackets ' },
      { href: '/', label: 'Sweat shirts' },
      { href: '/', label: 'Coats' },
    ],
  },
  {
    id: 3,
    title: 'GOOD TO GO',
    items: [
      { href: '/', label: '2 pc' },
      { href: '/', label: '3 pc' },
      { href: '/', label: 'T shirts' },
      { href: '/', label: 'Track suits' },
      { href: '/', label: 'Caps ' },
    ],
  },
  {
    id: 4,
    title: 'LUXURY ONE',
    items: [
      { href: '/', label: 'Embellished dupattas' },
      { href: '/', label: 'Saree' },
      { href: '/', label: 'Lehnga ' },
      { href: '/', label: 'Two pc' },
    ],
  },
  {
    id: 5,
    title: "MEN'S WEAR",
    items: [
      { href: '/', label: 'jeans' },
      { href: '/', label: 'polo shirts' },
      { href: '/', label: 't shirts' },
      { href: '/', label: 'dress shirts' },
      { href: '/', label: 'belts' },
      { href: '/', label: 'caps' },     
    ],
  },
  {
    id: 6,
    title: "KID'S WEAR",
    items: [
      { href: '/', label: 'two pc' },
      { href: '/', label: 'jackets' },
      { href: '/', label: 'caps ' },
      { href: '/', label: '3pc' },
      { href: '/', label: 'Jeans' },
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
    <>
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
    </>
  );
}

export default DropDownBtn;
