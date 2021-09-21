import { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            todos: [],
            isLoading: true
        }
    }
    static getDerivedStateFromProps(props, state) {
        // return { counter: 100, todos: [] }
    }
    componentDidMount() {
        console.log('Counter is alive')
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(json => this.setState({ todos: json, isLoading: false }))
    }
    shouldComponentUpdate() {
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(prevProps, prevState)
    }
    componentDidUpdate() {
        console.log('I updated')
    }
    componentWillUnmount() {
        console.log('Counter is Deleted')
    }
    render() {
        return (
            <section>
                <div>
                    {this.state.counter}
                </div>
                <div>
                    {!this.state.isLoading && this.state.todos.map(elt => <ul>
                        <li>{elt.title}</li>
                        <li>{elt.id}</li>
                    </ul>)}
                    {this.state.isLoading === false ? this.state.todos.map(elt => <ul>
                        <li>{elt.title}</li>
                        <li>{elt.id}</li>
                    </ul>) : null}
                </div>
            </section>
        );
    }
}

export default Counter;