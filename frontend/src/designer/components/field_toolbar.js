import React from 'react';
import FieldToolbarCategory from './field_toolbar_category'

const FieldToolbar = (props) => {
    
    const fieldToolbarCategory = props.fieldToolbarCategories.map((fieldToolbarCategory) => {
        return (
         <div>
            <span><strong>{fieldToolbarCategory.name}</strong></span>
            <br/>   
            <FieldToolbarCategory
                key={fieldToolbarCategory.name}
                fieldToolbarItems={fieldToolbarCategory.fieldToolbarItems} />
          </div>  
        );
    });

    return (
        <div>
          <div className="col-md-4 list-group">
             {fieldToolbarCategory}            
          </div>
          
        </div>
    );
};

export default FieldToolbar;