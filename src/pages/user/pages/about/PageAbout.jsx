require('./PageAbout.less');
import logic from './PageLogic';
import { Component, LogicRender } from 'refast';  


class About extends Component {
    constructor(props) { 
        super(props, logic);        
        
    }

    render() {
        return (
            <div>
              
            </div>
        );
    }

}

export default About ;
