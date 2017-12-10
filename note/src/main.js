import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import ReactDom from 'react-dom';
import './style/app.scss';


import Header from './components/header';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Home from './components/home';
import Notes from './components/notes';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
    };
  }

  componentDidMount() {
    console.log('__STATE__', this.state);
  }

  app() {
    return {
      state: this.state,
      setState: this.setState.bind(this),
      showErrors: true,
    };
  }

  render() {
    return (
      <div>
        <Header appTitle="D's Note App" />

        <Navbar />

        <main>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/notes"
            component={() =>
              <Notes handler={this.updateTheBudget} app={this.app()} />}
          />
        </main>

        <Footer>

          <p>&copy;2017 D&apos;s Notes</p>
        </Footer>
      </div>
    );
  }
}

ReactDom.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
