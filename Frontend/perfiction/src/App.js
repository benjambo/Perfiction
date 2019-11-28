import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { SignUp } from './SignUp'
import { Home } from './Home'
import { About } from './About'
import { Contact } from './Contact'
import { NoMatch } from './NoMatch'
import { Layout } from './components/Layout'
import { NavigationBar } from './components/NavigationBar'
import { Footer } from './components/Footer'

const App = () => {
  return (
    <>
    <NavigationBar />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch> 
          </Router>
        </Layout>
      <Footer />
    </>
  )
}

export default App;
