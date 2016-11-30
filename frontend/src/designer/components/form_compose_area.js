import React,{Component} from  'react';

class FormComposeArea extends Component  {
    
    constructor(props) {
    super(props);
  
}

 listWidgets()
 {
    this.props.widgets.forEach(widget =>{
        return(<div class="row">widget.name</div>);
    });
 }

     
render(){

    const renderWidgets=this.listWidgets();
    if(!this.props.selectedField)
    {
        return ( 
                 {renderWidgets}
            );
    }  

    return (
        
        <div>
            <h1>This is Compose area!!</h1>
                {this.props.selectedField.name}
                {renderWidgets}
        </div>
    );   
    } 
    
}

export default FormComposeArea;