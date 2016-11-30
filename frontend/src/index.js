import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FieldToolbar from './designer/components/field_toolbar';
import FormComposeArea from './designer/components/form_compose_area';

const  fieldToolbarCategories=[{"name":"BasicField","fieldToolbarItems":[{"name":"TextField"},{"name":"CheckBox"},{"name":"TextArea"},{"name":"RadioButton"}]},{"name":"QuickField","fieldToolbarItems":[{"name":"Heading"},{"name":"EmailAddress"},{"name":"Name"},{"name":"Phone"}]}];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedField:null,
      widgets:[{"name":"TextField"}]
     };
       
 }
  
 updateWidgets(widget){
        let widgets = this.state.widgets;
        widgets.push(widget);
        this.setState({widgets:widgets});
   }; 
   
  render() {

    return (
      <div>
        <div className="row">
          This is Header
        </div>
        <div className="col-md-2">
          <FieldToolbar 
            fieldToolbarCategories={fieldToolbarCategories} 
            onFieldSelect={selectedField =>this.setState({selectedField:selectedField})} />
        </div>
        <div className="col-md-10">
           <FormComposeArea 
           selectedField={this.state.selectedField}
           widgets={this.state.widgets}/>
        </div>
      </div>
    );

  }
}

ReactDOM.render(<App />, document.querySelector('.container-fluid'));
