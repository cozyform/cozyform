import React from 'react'

const FieldToolbarCategoryItem = (props) => {
    return (
           
          <li onClick={() => props.onFieldSelect(props.field)} className="list-group-item" >{props.field.name}</li>
        
    );
};

export default FieldToolbarCategoryItem;


