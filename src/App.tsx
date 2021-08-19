import React, { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
} from 'react-router-dom';
import { Button, Space } from 'antd';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import logo from './logo.jpg';
import { hot } from 'react-hot-loader/root';

function App() {
  const history = useHistory();

  useEffect(() => {
    history.replace('/home');
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <div className="app">
          <Helmet titleTemplate="%s - webpack-react-typescript" defaultTitle="React App">
            <meta name="description" content="a webpack5.x + react + typescript practices" />
          </Helmet>

          <h1>欢迎使用 webpack-react-typescript 模板</h1>
          <Space size={60}>
            <Link to="/home">
              <Button type="primary">HomePage</Button>
            </Link>
            <Link to="/about">
              <Button>AboutPage</Button>
            </Link>
          </Space>

          {/* Roues */}
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route path="/home" component={HomePage} />
            <Route path="/about" component={AboutPage} />
          </Switch>

          <img src={logo} alt="" style={{ width: 400, height: 400 }} />
          <h4>a webpack5.x + react + typescript practices</h4>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default hot(App);
