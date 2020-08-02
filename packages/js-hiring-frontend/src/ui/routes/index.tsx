import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router } from "react-router-dom";
import { RoutePages } from "./RoutePages";

const Routes = () => {
    return (
        <Router>
            <RoutePages />
        </Router>
    );
};

Routes.propTypes = {
    currentUser: PropTypes.object,
};

export { Routes };
