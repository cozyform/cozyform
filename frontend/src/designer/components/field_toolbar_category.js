import React from 'react';
import FieldToolbarCategoryItem from './field_toolbar_category_item'

const FieldToolbarCategory = ({fieldToolbarItems}) => {

    const toolbarItems = fieldToolbarItems.map((fieldToolbarItem) => {
    return (
      <FieldToolbarCategoryItem
        key={fieldToolbarItem.name}
        field={fieldToolbarItem} />
    );
  });

    return (
        <div>
              <ul className="col-md-4 list-group">
                    {toolbarItems}
              </ul>
        </div>
    );
};

export default FieldToolbarCategory;