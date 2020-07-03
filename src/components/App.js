import React, { Component } from 'react';
import CardList from './CardList';
import MyNavbar from './Navbar';

import { connect } from 'react-redux';
import { handleInitialData, UNLIKE_ITEM, LIKE_ITEM, handleToggleItem } from '../actions/items';

class App extends Component {

  componentDidMount() {
		this.props.dispatch(handleInitialData());
	}

  onLike = (item) => {
    const { dispatch } = this.props

        dispatch(handleToggleItem({
            id: item.Id,
            hasLiked: !item.hasLiked,
        }))

  };
  onUnlike = (item) => ({ type: UNLIKE_ITEM, item });

  render() {

    const { items } = this.props;

    return (
      <div className="App">
        <MyNavbar />
        <CardList items={items} onLike={this.onLike} onUnlike={this.onUnlike} />
      </div>
    );
  }
}

const mapStateToProps = ({items}) => {
	return {
		items
	};
};

export default connect(mapStateToProps)(App);
