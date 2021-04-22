import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import Login from "./Login";
import Registration from "./Registration";
import Logout from "./Logout";
import ForgotPassword from "./ForgotPassword";
import { LayoutSplashScreen, ContentRoute } from "../../../../../_theme_parts/layout";

export default function RecruiterAuth() {
    return (
        <Suspense fallback={<LayoutSplashScreen />}>
            <Switch>
                {
                    <Redirect
                        exact={true}
                        from="/auth/recruiter"
                        to="/auth/recruiter/login"
                    ></Redirect>
                }
                <ContentRoute path="/auth/recruiter/login" component={Login} />
                <ContentRoute path="/auth/recruiter/registration" component={Registration} />
                <ContentRoute path="/auth/recruiter/forgot-password" component={ForgotPassword} />
                <ContentRoute path="/auth/recruiter/logout" component={Logout} />
            </Switch>
        </Suspense>
    )
}
