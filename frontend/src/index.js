import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FieldToolbar from './designer/components/field_toolbar';
import FormComposeArea from './designer/components/form_compose_area';

const  fieldToolbarCategories=[{"name":"BasicField","fieldToolbarItems":[{"name":"TextField"},{"name":"CheckBox"},{"name":"TextArea"},{"name":"RadioButton"}]},{"name":"QuickField","fieldToolbarItems":[{"name":"Heading"},{"name":"EmailAddress"},{"name":"Name"},{"name":"Phone"}]}];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { };
       
 }

   
  render() {
  
    return (
      <div>
        <div className="row">
          This is Header
        </div>
        <div className="col-md-2">
          <FieldToolbar
            fieldToolbarCategories={fieldToolbarCategories} />
        </div>
        <div className="col-md-10">
           <FormComposeArea/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container-fluid'));
