require('./PageWork.less');
import logic from './PageLogic';
import { Component, LogicRender } from 'refast';  


class Work extends Component {
    constructor(props) { 
        super(props, logic);        
        console.log("work");
    }

    render() {
        return (
            <div className="bg">
              
            </div>
        );
    }

}

export default Work ;
