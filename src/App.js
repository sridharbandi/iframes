import React, {Component} from 'react';
import Brettzbkar from './components/Iframe/Brettzbkar';
import Fvuysxcixg from './components/Iframe/Fvuysxcixg';
import Ovppntqvvk from './components/Iframe/Ovppntqvvk';
import Ndrljrwptz from './components/Iframe/Ndrljrwptz';
import Iframe from './components/Iframe/Frame';
import { Route } from 'react-router-dom';
import Aux from './hoc/Aux';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Aux>
                    <Route path='/' exact component={Iframe}/>
                    <Route path='/brettzbkar' component={Brettzbkar} />
                    <Route path='/fvuysxcixg' component={Fvuysxcixg} />
                    <Route path='/ovppntqvvk' component={Ovppntqvvk} />
                    <Route path='/ndrljrwptz' component={Ndrljrwptz} />
                </Aux>
            </BrowserRouter>
        );
    }
}

export default App;
