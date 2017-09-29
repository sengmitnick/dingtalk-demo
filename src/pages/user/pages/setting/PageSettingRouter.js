import { Route } from 'react-keeper'
import Page from './PageSetting';

export default {
    page: Page,
    route: () => (
        <div>
            <Route index component={Page} path= '/setting' >

            </Route>
        </div>)
};
