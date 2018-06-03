import React, {Component} from 'react';

class SearchBar extends Component{

  constructor(props){
    super(props);
    this.state = {term:''};
  }

  render(){

    //return <input onChange={this.onInputChange}/>;
    //return <input onChange={(event)=>console.log(event)}/>;
    //this.setState.term = event.target.value  BAD !!! never do that
    /*
    return(
      <div>
        <input onChange={(event)=>this.setState({term:event.target.value})}/>
        Value of the input :{this.state.term}
      </div>
    );
    */

  return(
      <div className="search-bar">
        <input
          value = {this.state.term}
          onChange={event=>this.onInputChange(event.target.value)}/>
        </div>
    );
  }

  onInputChange(term){
    this.setState({term})
    this.props.onSearchTermChange(term);
  }

  /*
  onInputChange(event){

    console.log(event)

  }
  */

}

export default SearchBar;
