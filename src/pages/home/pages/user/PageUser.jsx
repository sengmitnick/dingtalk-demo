require('./PageUser.less');
import logic from './PageLogic';
import { Control } from 'react-keeper';
import { Component, LogicRender } from 'refast';  
import { Flex, Icon, ActionSheet } from 'antd-mobile';
import List from 'components/menu-list';

const iconList = [
    { icon: <img src="https://zos.alipayobjects.com/rmsportal/WmEzpOsElbbvgmrexFSH.png" alt="icon" />, title: '发送给朋友' },
    { icon: <img src="https://zos.alipayobjects.com/rmsportal/HssPJKvrjEByyVWJIFwl.png" alt="icon" />, title: '新浪微博' },
    { icon: <img src="https://zos.alipayobjects.com/rmsportal/HCGowLrLFMFglxRAKjWd.png" alt="icon" />, title: '生活圈' },
    { icon: <img src="https://zos.alipayobjects.com/rmsportal/LeZNKxCTkLHDWsjFfqqn.png" alt="icon" />, title: '微信好友' },
    { icon: <img src="https://zos.alipayobjects.com/rmsportal/YHHFcpGxlvQIqCAvZdbw.png" alt="icon" />, title: 'QQ' },
];

class User extends Component {
    constructor(props) { 
        super(props, logic);        
        this.handleChange = this.handleChange.bind(this);
        this.showShareActionSheet = this.showShareActionSheet.bind(this);
        console.log("home/user");
    }

    showShareActionSheet = () => {
        const icons = [...iconList];
        icons.length = 4;
        ActionSheet.showShareActionSheetWithOptions({
          options: icons,
          // title: '标题',
          message: '邀请好友',
          className: 'my-action-sheet',
        },
        (buttonIndex) => {
          this.setState({ clicked1: buttonIndex > -1 ? icons[buttonIndex].title : 'cancel' });
          // also support Promise
          return new Promise((resolve) => {
            setTimeout(resolve, 100);
          });
        });
      }

    handleChange = (value) => {
        console.log(`value:${value}`);
        if (value == 1){
            this.showShareActionSheet();
        }else{
            const item = this.state.menu[value];
            Control.go(item.path, {title:item.title});
        }
    }

    render() {
        const { state: { menu, },  } = this;
        return (
            <div className="bg">
                <Flex direction="column" justify="center" className="ut">
                    <Icon type={require(`icon/avatar.svg`)} className="avatar"/>
                    <p>您好，敖 博</p>
                </Flex>
                <List menu={menu} onChange={this.handleChange} />
            </div>
        );
    }

}

export default User ;
