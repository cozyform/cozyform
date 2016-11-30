import React from 'react';
import FieldToolbarCategoryItem from './field_toolbar_category_item'

const FieldToolbarCategory = ({fieldToolbarItems,onFieldSelect}) => {

    const toolbarItems = fieldToolbarItems.map((fieldToolbarItem) => {
    return (
      <FieldToolbarCategoryItem
        key={fieldToolbarItem.name}
        field={fieldToolbarItem}
        onFieldSelect={onFieldSelect} />
    );
  });

    return (
        <div>
              <ul className="list-group">
                    {toolbarItems}
              </ul>
        </div>
    );
};

export default FieldToolbarCategory;