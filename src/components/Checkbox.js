import React from 'react';

const Checkbox = props => {
  const onCheckboxChange = e => {
    const list = e.target.value;

    if (e.target.checked) {
      props.onAddLists(list);
    } else if (!e.target.checked) {
      props.onRemoveLists(list);
    }
  };

  return (
    <div>
      <label htmlFor={props.precept} className="checkbox">
        <input
          type="checkbox"
          id={props.precept}
          checked={props.lists.find(list => list === props.precept)}
          value={props.precept}
          onChange={onCheckboxChange}
        />
        <div className="checkbox-content">
        <span />
          
            <p className="checkbox-content__title">{props.precept}</p>
            
            {
              props.lists.indexOf(props.precept) > -1 &&
              <p className="checkbox-content__number">{props.lists.indexOf(props.precept) + 1}</p>
            } 
          
        </div>
      </label>
    </div>
  );
};

export default Checkbox;
