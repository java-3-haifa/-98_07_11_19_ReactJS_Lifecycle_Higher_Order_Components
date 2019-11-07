import React,{Component} from 'react';

export default class extends Component{
    state = {

    }
    componentWillMount() {
        console.log("componentWillMount");
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    /*Updating*/
    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps" ,nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate",nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate",nextProps, nextState);
    }

    static getDerivedStateFromProps(nextProps, nextState){
        console.log("getDerivedStateFromProps",nextProps,nextState);
        return nextState;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate",prevProps, prevState);
        return prevState;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate",prevProps, prevState);
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    render() {
        console.log("render");
        return (
            <div>
                <p>Counter: {this.props.count}</p>
                <button onClick={()=>this.props.addCount()}>Count</button>
            </div>
        );
    }

}
