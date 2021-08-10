import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Button, Empty, Space } from 'antd';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import logo from './logo.jpg';
import { hot } from 'react-hot-loader/root';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="app">
          <Helmet titleTemplate="%s - webpack-react-typescript" defaultTitle="React App">
            <meta name="description" content="a webpack5.x + react + typescript practices" />
          </Helmet>

          <h1>欢迎使用 webpack-react-typescript 模板</h1>
          <Space size={60}>
            <Link to="/">
              <Button type="primary">HomePage</Button>
            </Link>
            <Link to="/about">
              <Button>AboutPage</Button>
            </Link>
          </Space>

          {/* Roues */}
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route render={() => <Empty />} />
          </Switch>

          <img src={logo} alt="" style={{ width: 400, height: 400 }} />
          <h4>a webpack5.x + react + typescript practices</h4>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default hot(App);
