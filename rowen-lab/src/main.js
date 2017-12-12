import ./style/app.scss;

import React from react;
import ReactDom from react-dom
import {BrowserRouter,Route} from react-router-dom

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            notes:[],
            showErrors:true
        }
        //maintaining context
        this.app = this.app.bind(this);
        // this.function = this.function.bind(this);

    }

    componentDidMount() {
        console.log("__STATE__", this.state);
    }

    updateTheNote(note) {
        this.setState({note})
    }

    app() {
        return {
            state: this.state,
            setState: this.setState.bind(this),
            showErrors: true
        }
    }

    render() {
        return (
            <div>
                <Header appTitle="React Note App" />
                <main>
                    <Route exact path=/ component={Home} />
                    <Route exact path=/notes component={() => <Expenses handler={this.updateTheNote} app={this.app()}/>} />
                </main>
            </div>
        )
    }
}

ReactDom.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById(root));
