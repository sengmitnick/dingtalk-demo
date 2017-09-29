require('./PageSms.less');
import logic from './PageLogic';
import { Component, LogicRender } from 'refast';  
import { SegmentedControl, WingBlank } from 'antd-mobile';
import SmsList from 'components/sms-list';

class Sms extends Component {
    constructor(props) { 
        super(props, logic);
        this.onChange = this.onChange.bind(this);
    }

    onChange = (e) => {
        let selectedIndex = e.nativeEvent.selectedSegmentIndex;
        this.dispatch('setSelectedIndex',selectedIndex);
    }

    render() {
        const { state: { upcomings, notices, selectedIndex, },  } = this;
        return (
            <div>
              <WingBlank size="lg" className="sc">
                <SegmentedControl
                    selectedIndex={selectedIndex}
                    values={["待办(" + upcomings.length + ")","通知(" + notices.length + ")"]}
                    onChange={this.onChange}
                />
              </WingBlank>
              <div style={ selectedIndex === 0 ? {display: 'inline'} : {display: 'none'} }><p>upcoming</p></div>
              <div style={ selectedIndex === 1 ? {display: 'inline'} : {display: 'none'} }><p>notice</p></div>
              {/* <SmsList display={selectedIndex === 1 ? 'inline' :  'none'} /> */}
            </div>
        );
    }

}

export default Sms ;
