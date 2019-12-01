import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SignUp } from './model/SignUp';
import { SignIn } from './model/SignIn';
import { Home } from './model/Home';
import { About } from './model/About';
import { Catalog } from './model/Catalog';
import { NoMatch } from './model/NoMatch';
import { Layout } from './components/Layout';
import { Footer } from './components/Footer';
import { Spring } from 'react-spring/renderprops';
import { ProtectedRoute } from './components/protected.route';

const App = () => {
  return (
    <>
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/" component={SignIn} />

            <Spring from={{ marginTop: -500 }} to={{ marginTop: 0 }}>
              {props => (
                <div style={props}>
                  <ProtectedRoute exact path="/home" component={Home} />
                  <ProtectedRoute exact path="/catalog" component={Catalog} />
                  <ProtectedRoute exact path="/about" component={About} />
                </div>
              )}
            </Spring>
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
      <Footer />
    </>
  );
};

export default App;
