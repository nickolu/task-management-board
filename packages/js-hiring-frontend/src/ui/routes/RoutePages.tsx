import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import { routes } from "./routes";

const RoutePages = () => {
    return (
        <Switch>
            {routes.public.map((route: any) => (
                <Route
                    key={route.path}
                    exact={!!route.exact}
                    path={route.path}
                    render={({ history, match }) => {
                        const Page = route.component;
                        return (
                            <Page
                                history={history}
                                token={match.params.token}
                            />
                        );
                    }}
                />
            ))}
        </Switch>
    );
};

RoutePages.propTypes = {
    currentUser: PropTypes.object,
};

export { RoutePages };
