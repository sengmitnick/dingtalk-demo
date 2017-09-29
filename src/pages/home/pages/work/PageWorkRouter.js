import { Route } from 'react-keeper'
import Page from './PageWork';

export default {
    page: Page,
    route: () => (
        <div>
            <Route component={Page} path= '/work' >

            </Route>
        </div>)
};
