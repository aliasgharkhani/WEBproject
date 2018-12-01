import React, { Component } from 'react';
import { Tab, Segment, Dropdown} from 'semantic-ui-react'
import Template from '../components/template'



class App extends Component {
    constructor(props) {
        super(props);
        this.getTodoList = this.getTodoList.bind(this);
        this.state = {
            Fnews: ['ali'],
            Bnews: ''
        };
        this.state.Fnews.push('mammad');
    }
    getTodoList() {
        return this.state.Fnews.map((fnews,i) => {
            return <li key={i}>{fnews}</li>
        });
    }
    render() {

        const panes = [
            { menuItem: 'favorite', render: () => <Tab.Pane><ul>{this.getTodoList()}</ul></Tab.Pane> },
            { menuItem: 'new', render: () => <Tab.Pane><div>Taha</div></Tab.Pane> },
        ];
        const sport_news =
            <div>
                <Segment>
                    <div>Football</div>
                    <Tab panes={panes} />
                </Segment>
                <Segment>
                    <div>Basketball</div>
                    <Tab panes={panes} />
                </Segment>
            </div>;

        const news =
            <Segment>
                <a id="ew" href="https://www.google.com">news</a><br/>
                <a href="https://www.google.com">news</a><br/>
                <a href="https://www.google.com">news</a><br/>
                <a href="https://www.google.com">news</a><br/>
                <a href="https://www.google.com">news</a><br/>
                <a href="https://www.google.com">news</a><br/>
                <a href="https://www.google.com">news</a><br/>
                <a href="https://www.google.com">news</a><br/>
            </Segment>;
        const options = [
            { key: 1, text: 'football', value: 1 },
            { key: 2, text: 'basketball', value: 2 }
        ];

        const onGoing =
            <Segment>
                <div>on goings</div>
                <Dropdown placeholder='Select Sport' search selection options={options} onChange={(e,{value}) => {console.log(value)}}/>
                {/*<Tab panes={panes} />*/}
            </Segment>;
        return (



            <div>
                <Template {...this.props} template={{column_1: news, column_2: sport_news, column_3: onGoing}} />
            </div>
        );
    }
}
export default App;