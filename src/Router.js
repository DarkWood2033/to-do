import React from "react"
import { Router as BaseRouter, Switch, Route } from "react-router-dom"
import { createBrowserHistory } from "history";
import MainLayout from './layouts/MainLayout';

/* Routes */
import ListRouter from './todo/ListRouter';
import CategoryRouter from './categories/CategoryRouter';

let history = createBrowserHistory({ basename: "" });

function Router(){
    return (
        <BaseRouter history={history}>
            <Switch>
                <Route path="/" exact>
                    <MainLayout>Главная</MainLayout>
                </Route>
                <Route path="/todos/:id">
                    <MainLayout><ListRouter /></MainLayout>
                </Route>
                <Route path="/todos">
                    <MainLayout><ListRouter /></MainLayout>
                </Route>
                <Route path="/categories">
                    <MainLayout><CategoryRouter /></MainLayout>
                </Route>
                <Route>
                    <MainLayout>404 Not found page</MainLayout>
                </Route>
            </Switch>
        </BaseRouter>
    );
}

export default Router;