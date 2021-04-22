import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {IntlProvider} from 'react-intl';
import { PersistGate } from "redux-persist/integration/react";
import { Routes } from "../App/Routes";
import { LayoutSplashScreen, BlueBixThemeProvider } from "../_theme_parts/layout";

export default function App({ store, persistor, basename }) {
  return (
    <IntlProvider locale="en">
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<LayoutSplashScreen />}>
          <React.Suspense fallback={<LayoutSplashScreen />}>
            <BrowserRouter basename={basename}>
              <BlueBixThemeProvider>
                <Routes />
              </BlueBixThemeProvider>
            </BrowserRouter>
          </React.Suspense>
        </PersistGate>
      </Provider>
    </IntlProvider>
  )
}
