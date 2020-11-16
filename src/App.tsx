/** @jsx jsx */
import { jsx } from '@emotion/core'
import { lazy, ComponentProps, FC, Suspense } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { IonApp, IonRouterOutlet } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { useAuth } from 'shared/contexts/AuthContext'
import routes from 'routes'

// Core CSS for platform specific style
import '@ionic/react/css/core.css'

// CSS reset
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'

const LoginPage = lazy(async () => import('features/login/Login'))
const SignUpPage = lazy(async () => import('features/sign_up/SignUp'))
const NotFoundPage = lazy(async () => import('features/not_found/NotFound'))
const SomethingWentWrongPage = lazy(
  async () => import('features/something_went_wrong/SomethingWentWrong')
)
const DashboardPage = lazy(async () => import('features/dashboard/Dashboard'))

const defaultPublicRoute = routes.login
const defaultPrivateRoute = routes.dashboard

// Only accessible if user is authenticated
const PrivateRoute: FC<ComponentProps<typeof Route>> = props => {
  const { isAuthenticated } = useAuth()
  return isAuthenticated ? <Route {...props} /> : <Redirect to={defaultPublicRoute} />
}

// Only accessible if user is un-authenticated
const PublicRoute: FC<ComponentProps<typeof Route>> = props => {
  const { isAuthenticated } = useAuth()
  return isAuthenticated ? <Redirect to={defaultPrivateRoute} /> : <Route {...props} />
}

const App = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <Suspense fallback={'loading...'}>
          <IonRouterOutlet>
            {/* // Public routes */}
            <PublicRoute path={routes.login}>
              <LoginPage />
            </PublicRoute>
            <PublicRoute path={routes.signUp}>
              <SignUpPage />
            </PublicRoute>
            <PublicRoute path={routes.somethingWentWrong}>
              <SomethingWentWrongPage />
            </PublicRoute>
            {/* // Private routes */}
            <PrivateRoute path={routes.notFound}>
              <NotFoundPage />
            </PrivateRoute>
            <PrivateRoute path={routes.dashboard}>
              <DashboardPage />
            </PrivateRoute>
            {/* // Redirects */}
            <Redirect from={routes.root} to={defaultPublicRoute} exact={true} />
            <Redirect to={routes.notFound} />
          </IonRouterOutlet>
        </Suspense>
      </IonReactRouter>
    </IonApp>
  )
}

export default App
