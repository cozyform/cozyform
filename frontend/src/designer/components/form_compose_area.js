import React,{Component} from  'react';

class FormComposeArea extends Component  {
    
    constructor(props) {
    super(props);
  
}

 listWidgets()
 {
    return this.props.widgets.map(widget =>{return(<div className="row">{widget.name}</div>)});
 }

     
render(){

    const renderWidgets=this.listWidgets();
    if(!this.props.selectedField)
    {
        return ( <div>Start Composing Forms!!!</div> );
    }  

    return (
        
        <div>
            <h1>This is Compose area!!</h1>
                {this.props.selectedField.name}
                {this.listWidgets()}
        </div>
    );   
    } 
    
}

export default FormComposeArea;