import { Route } from 'react-keeper'
import Page from './PageSms';

export default {
    page: Page,
    route: () => (
        <div>
            <Route index component={Page} path= '/sms' >
            </Route>
        </div>)
};
