import React, {Component} from 'react'
import { connect } from 'react-redux';

class BookList extends Component{
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">
                    <div>{book.title}</div>
                    <div>{book.writer}</div>
                </li>
                
            )
        });
    }
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state){
    //watever is returnd will show up as props
    //inside of booklist
    return {
        books : state.books
    };
}

export default connect(mapStateToProps)(BookList);