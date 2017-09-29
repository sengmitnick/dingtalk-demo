import { Route } from 'react-keeper'
import Page from './PageAbout';

export default {
    page: Page,
    route: () => (
        <div>
            <Route index component={Page} path= '/about' >

            </Route>
        </div>)
};
