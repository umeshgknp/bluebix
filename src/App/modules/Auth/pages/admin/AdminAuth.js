import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import Login from "./Login";
import Registration from "./Registration";
import Logout from "./Logout";
import ForgotPassword from "./ForgotPassword";
import { LayoutSplashScreen, ContentRoute } from "../../../../../_theme_parts/layout";

export default function AdminAuth() {
    return (
        <Suspense fallback={<LayoutSplashScreen />}>
            <Switch>
                {
                    <Redirect
                        exact={true}
                        from="/auth/admin"
                        to="/auth/admin/login"
                    ></Redirect>
                }
                <ContentRoute path="/auth/admin/login" component={Login} />
                <ContentRoute path="/auth/admin/registration" component={Registration} />
                <ContentRoute path="/auth/admin/forgot-password" component={ForgotPassword} />
                <ContentRoute path="/auth/admin/logout" component={Logout} />
            </Switch>
        </Suspense>
    );
}