import React from 'react';
import { connect } from 'react-redux';
import { newItem } from '../actions';

class AddNew extends React.Component{
    constructor() {
        super()
        this.state = {
            newItem: '',
            completed: false
        }
    }
    
    changeHandler = (e) => {
        e.preventDefault()
        
        this.setState({
            [e.target.name]:e.target.value,
        })

    }

    submitItem = (e) => {
        e.preventDefault()
        const {newItem} = this.state;
        this.props.newItem(newItem)

        this.setState({
            newItem: '',

        })

}

    render() {
        const { list } = this.props;
        const { newItem } = this.state;


        return (
            <div>
                <h2>Add Todo Item</h2> 
                <h6>{list}</h6>   

                <form onSubmit={this.submitItem}>
                <input type = "text" name = "newItem" placeholder = "Enter New Item" value ={newItem} onChange = {this.changeHandler} required/>
                
                <button type = "submit">Add Todo</button>
                
                </form>        


        </div>



        )

}

      
}

const mapStateToProps = (state) =>{
    return{
        newItem: state.newItem
    }
}

const mapDispatchToProps = {
    newItem:newItem,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddNew)