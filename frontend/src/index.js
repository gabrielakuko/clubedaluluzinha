import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// Importando páginas
import Home from './Paginas/Home/Home';
import Embaixadoras from './Paginas/Embaixadoras/Embaixadoras';
import Mentorias from './Paginas/Mentorias/Mentorias';
import QuemSomos from './Paginas/QuemSomos/QuemSomos';
import Contato from './Paginas/Contato/Contato';

import DosesInsight from './Componentes/PlanosAssinatura/Planos/DosesInsight/DosesInsight';
import DonaTempo from './Componentes/PlanosAssinatura/Planos/DonaTempo/DonaTempo';
import MaisBusiness from './Componentes/PlanosAssinatura/Planos/MaisBusiness/MaisBusiness';
import TenhoAsas from './Componentes/PlanosAssinatura/Planos/TenhoAsas/TenhoAsas';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter, HashRouter, Switch, Route } from 'react-router-dom'; // Importando react router dom

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/embaixadoras" component={Embaixadoras} />
            <Route path="/mentorias" component={Mentorias} />
            <Route path="/quem-somos" component={QuemSomos} />
            <Route path="/contato" component={Contato} />
            <Route path="/planos/dosesinsight" component={DosesInsight} />
            <Route path="/planos/donadotempo" component={DonaTempo} />
            <Route path="/planos/tenhoasas" component={TenhoAsas} />
            <Route path="/planos/maisbusiness" component={MaisBusiness} />
        </Switch>
    </HashRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
