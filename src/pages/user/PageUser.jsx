require('./PageUser.less');
import logic from './PageLogic';
import { Control } from 'react-keeper';
import { Component, LogicRender } from 'refast';  
import { NavBar, Icon } from 'antd-mobile';


class User extends Component {
    constructor(props) { 
        super(props, logic);
        this.onLeftClick = this.onLeftClick.bind(this);
    }

    onLeftClick = () => {
        Control.go(-1);
    }

    render() {
        const title = Control.state.title;
        return (
            <div>
                <NavBar mode="light" onLeftClick={this.onLeftClick} >{title}</NavBar>
                {this.props.children}
            </div>
        );
    }

}

export default User ;
