import { Route } from 'react-keeper'
import Page from './PageInfo';

export default {
    page: Page,
    route: () => (
        <div>
            <Route index component={Page} path= '/info' >

            </Route>
        </div>)
};
