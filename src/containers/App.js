import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
// import {robots} from '../components/robots'
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry';
import {setSearchField, requestRobots} from '../actions'
// import { render } from 'react-dom';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPanding: state.requestRobots.isPanding,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
   return {
       onSearchChange: (event) =>
        dispatch(setSearchField(event.target.value)),
       onRequestRobots: () => dispatch(requestRobots())
   }
}

class App extends Component {

    componentDidMount() {
        this.props.onRequestRobots();
    }
    render() {
        // const {robots} = this.state;
        const {searchField,onSearchChange, robots, isPanding} = this.props;
        const filteredRobots = robots.filter(robot => {
            return (robot.name.toLowerCase().includes(searchField.toLowerCase())
                || robot.email.toLowerCase().includes(searchField.toLowerCase()) ||
                robot.username.toLowerCase().includes(searchField.toLowerCase()))
        })
        return isPanding ? 
        <h1>Loading</h1>:
        (
                <div className="tc">
                    <h1 className="f1 ttu">Robo-friends</h1>
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                    </Scroll>
                </div>
        )
        

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);