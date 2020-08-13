import React from 'react';

class SearchBar extends React.Component {
    
    state = { term: ''}

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.toReceive(this.state.term);
        // console.log('Searchbar',this.state.term);
    }
    
    render() {
        return (
            <div className = "ui segment">
                <form  onSubmit={this.onFormSubmit} className = "ui form">
                    <div className="field">
                        <label>Search Images</label>
                        <input 
                            type="text"  
                            placeholder="animals, cars, flowers..."
                            value= {this.state.term} 
                            onChange={(e)=> this.setState({term: e.target.value})} 
                        />
                    </div>
                </form>
            </div>
        );
    }
};


export default SearchBar;