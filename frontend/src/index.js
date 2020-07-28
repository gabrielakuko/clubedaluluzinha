import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// Importando páginas
import Home from './Paginas/Home/Home';
import Embaixadoras from './Paginas/Embaixadoras/Embaixadoras';
import Mentorias from './Paginas/Mentorias/Mentorias';
import QuemSomos from './Paginas/QuemSomos/QuemSomos';
import Contato from './Paginas/Contato/Contato';

// Importando Embaixadoras
import Greice from './Paginas/Embaixadoras/greiceEmbaixadora/greiceEmbaixadora';
import Jani from './Paginas/Embaixadoras/JaniMenezes/JaniMenezes';
import Anne from './Paginas/Embaixadoras/AnneCosta/AnneCosta';
import Karine from './Paginas/Embaixadoras/KarineGraeff/KarineGraeff';
import Charlene from './Paginas/Embaixadoras/CharleneMoraes/CharleneMoraes';
import Monica from './Paginas/Embaixadoras/MonicaNogueira/MonicaNogueira';


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
            <Route path="/embaixadoras" exact={true} component={Embaixadoras} />
              <Route path="/embaixadoras/greice" exact={true} component={Greice} />
              <Route path="/embaixadoras/anne" exact={true} component={Anne} />
              <Route path="/embaixadoras/jani" exact={true} component={Jani} />
              <Route path="/embaixadoras/karine" exact={true} component={Karine} />
              <Route path="/embaixadoras/charlene" exact={true} component={Charlene} />
              <Route path="/embaixadoras/monique" exact={true} component={Monica} />
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
