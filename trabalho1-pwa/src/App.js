import React, {Component} from 'react';
import 'primereact/resources/themes/nova/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.css';
import Main from "./Main";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Main/>
            </div>
        );
    }
}

export default App;
