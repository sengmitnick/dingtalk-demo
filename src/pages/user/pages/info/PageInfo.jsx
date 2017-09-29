require('./PageInfo.less');
import logic from './PageLogic';
import { Component, LogicRender } from 'refast';  
import { List, Icon } from 'antd-mobile';

const Item = List.Item;

class Info extends Component {
    constructor(props) { 
        super(props, logic);
    }

    render() {
        return (
            <div>
                <List renderHeader={() => ''}>
                    <Item 
                        extra={<Icon type={require(`icon/avatar.svg`)} size="lg"/>} 
                        arrow="horizontal"
                    >头像</Item>
                    <Item extra={'138123400981'}>手机号</Item>
                </List>
                <List renderHeader={() => ''}>
                    <Item extra={'甲方现场人员'}>角色</Item>
                    <Item extra={'监理工程师'}>岗位</Item>
                </List>
            </div>
        );
    }

}

export default Info ;
