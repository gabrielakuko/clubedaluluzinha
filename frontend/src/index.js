import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// Importando páginas
import Home from './Paginas/Home/Home';
import Embaixadoras from './Paginas/Embaixadoras/Embaixadoras';
import Mentorias from './Paginas/Mentorias/Mentorias';
import QuemSomos from './Paginas/QuemSomos/QuemSomos';
import Contato from './Paginas/Contato/Contato';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; // Importando react router dom

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/embaixadoras" component={Embaixadoras} />
            <Route path="/mentorias" component={Mentorias} />
            <Route path="/quem-somos" component={QuemSomos} />
            <Route path="/contato" component={Contato} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
