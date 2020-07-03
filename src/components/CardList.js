import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';

class CardList extends Component {
    render() {

        const { items, onLike, onUnlike } = this.props;

        return (
            <Container>
                <ol>
                    {items.map(
                        item => (
                            <li key={item.Id} >
                                <h2>{item.Title}</h2> 
                                {this.props.liked ? (
                                <button onClick={()=>this.props.onUnlike(item)}>
                                    Unlike
                                </button>
                                ) : (
                                <button onClick={()=>this.props.onLike(item)}>
                                    Like
                                </button>
                                )}
                                <button onClick={()=>this.props.toggleLike(item)}>
                                    Toggle Like Button
                                </button>
                            </li>
                        )
                    )}
                </ol>
            </Container>
        )
    }
}

export default connect()(CardList);
