import { Route } from 'react-keeper'
import Page from './PageUser';
import PageInfo from './pages/info';
import PageSetting from './pages/setting';
import PageAbout from './pages/about';

export default {
    page: Page,
    route: () => (
        <div>
            <Route component={Page} path= '/user' >
                <PageInfo.route />
                <PageSetting.route />
                <PageAbout.route />
            </Route>
        </div>)
};
