import React from 'react';
import './SearchBox.css';

const SearchBox = () => {
  return (
    <label>
      <input type="text" required />
      <ul>
        <li data-char="s">s</li>
        <li data-char="e">e</li>
        <li data-char="a">a</li>
        <li data-char="r">r</li>
        <li data-char="c">c</li>
        <li data-char="h">h</li>
      </ul>
    </label>
  );
};

export default SearchBox;
