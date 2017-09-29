import { Route } from 'react-keeper'
import Page from './PageUser';

export default {
    page: Page,
    route: () => (
        <div>
            <Route component={Page} path= '/userinfo' >

            </Route>
        </div>)
};
