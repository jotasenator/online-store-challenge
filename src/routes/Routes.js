import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import CreateItem from '../screen/CreateItem'
import Table from '../screen/Table'
import UpdateItem from '../screen/UpdateItem'



export default function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path='/table' component={Table} />
                <Route exact path='/create' component={CreateItem} />
                <Route exact path='/update' component={UpdateItem} />

                <Redirect to='/table' />

            </Switch>

        </div>
    )
}
