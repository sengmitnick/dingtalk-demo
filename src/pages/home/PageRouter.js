import { Route } from 'react-keeper'
import Page from './PageHome';
import PageSms from './pages/sms';
import PageUser from './pages/user';
import PageWork from './pages/work';
import PageUserInfo from 'pages/user';

export default {
    page: Page,
    route: () => (
        <div>
            <Route index component={Page} path= '/home' >
                <PageSms.route />
                <PageWork.route />
                <PageUser.route />
            </Route>
            <PageUserInfo.route />
        </div>)
};
