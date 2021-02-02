import React from 'react'
import { Route } from 'react-router-dom'

import Corretora from '../pages/Corretora'
import Geradores from '../pages/Geradores'
import Pecas from '../pages/Pecas'
import Sobre from '../pages/Sobre'
import Home from '../pages/Home'
import Contato from '../pages/Contato/Contato'

const Routes = () => (
    <>
        <Route exact path="/" component={Home} />
        <Route exact path="/corretora" component={Corretora} />
        <Route exact path="/geradores" component={Geradores} />
        <Route exact path="/pecas" component={Pecas} />
        <Route exact path="/sobre" component={Sobre} />
        <Route exact path="/contato" component={Contato} />
    </>
);

export default Routes