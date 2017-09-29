import PageConst from './PageConst';
import { ListView } from 'antd-mobile';

export default {
    defaults(props) {
        //初始的state
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });
        const upcomings = [
            {"title":"工联单审批", "summary":"乙方合同负责人【敖博】工联单【碧景悦府拆除黄色标识护架工程】需要您审批，请尽快处理！" },
            {"title":"工联单审批", "summary":"乙方合同负责人【敖博】工联单【碧景悦府拆除黄色标识护架工程】需要您审批，请尽快处理！" },
            {"title":"工联单审批", "summary":"乙方合同负责人【敖博】工联单【碧景悦府拆除黄色标识护架工程】需要您审批，请尽快处理！" }
        ];
        const notices = [
            {"title":"工联单现场确认通过", "summary":"您发起的工联单【碧景悦府拆除黄色标识护架工程】现场确认通过，已转入地产内部审批，请关注！" },
            {"title":"工联单现场确认通过", "summary":"您发起的工联单【碧景悦府拆除黄色标识护架工程】现场确认通过，已转入地产内部审批，请关注！" },
            {"title":"工联单现场确认通过", "summary":"您发起的工联单【碧景悦府拆除黄色标识护架工程】现场确认通过，已转入地产内部审批，请关注！" }
        ];
        return {  ...PageConst,
            upcomings: upcomings,
            notices: notices,
            selectedIndex: 0,
        }
    },

    setUpcomings( ctx, data ) {
        ctx.setState({ upcomings:data })
    },

    setNotices( ctx, data ) {
        ctx.setState({ notices:data })
    },

    setSelectedIndex( ctx, data ) {
        ctx.setState({ selectedIndex:data })
    },

};
