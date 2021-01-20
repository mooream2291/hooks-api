import React, { Component } from 'react';

const AddItem = (props) => {
    onChangeUsername(e) {
        this.setState({
          list: e.target.value
        });
      }
    return (
      <div>
        <p>You are on the Create Exercise component!</p>
      </div>
    )
  }
}
export default AddItem