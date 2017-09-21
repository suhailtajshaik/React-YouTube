import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {};
    }
    render() {
        return (
            <div className="search-bar">
                <input placeholder="Search..." value={this.state.term} onChange={event=>this.onInputChange(event.target.value)}/>
            </div>
        );
    }

    onInputChange = (term) => {
        this.setState({term})
        this.props.onSearchChange(term);
        console.log(this.state);
    }
}

export default SearchBar;