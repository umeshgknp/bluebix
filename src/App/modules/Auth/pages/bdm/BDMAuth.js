import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import Login from "./Login";
import Registration from "./Registration";
import Logout from "./Logout";
import ForgotPassword from "./ForgotPassword";
import { LayoutSplashScreen, ContentRoute } from "../../../../../_theme_parts/layout";

export default function BDMAuth() {
    return (
        <Suspense fallback={<LayoutSplashScreen />}>
            <Switch>
                {
                    <Redirect
                        exact={true}
                        from="/auth/bdm"
                        to="/auth/bdm/login"
                    ></Redirect>
                }
                <ContentRoute path="/auth/bdm/login" component={Login} />
                <ContentRoute path="/auth/bdm/registration" component={Registration} />
                <ContentRoute path="/auth/bdm/forgot-password" component={ForgotPassword} />
                <ContentRoute path="/auth/bdm/logout" component={Logout} />
            </Switch>
        </Suspense>
    )
}
