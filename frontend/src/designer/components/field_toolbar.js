import React from 'react';
import FieldToolbarCategory from './field_toolbar_category'

const FieldToolbar = (props) => {
    
    const fieldToolbarCategory = props.fieldToolbarCategories.map((fieldToolbarCategory) => {
        return (
         <div>
            <h4>{fieldToolbarCategory.name}</h4>
            <FieldToolbarCategory
                key={fieldToolbarCategory.name}
                fieldToolbarItems={fieldToolbarCategory.fieldToolbarItems} 
                onFieldSelect={props.onFieldSelect} />
          </div>  
        );
    });

    return (
        <div>
          <div className="list-group">
             {fieldToolbarCategory}            
          </div>
          
        </div>
    );
};

export default FieldToolbar;