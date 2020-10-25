import React from "react";
import Axios from "axios";
import {connect} from 'react-redux';
import {insertMenuCreator, getMenuCreator} from '../redux/actions/menuAndCart';
import {toast, Bounce} from 'react-toastify'

class ModalAdd extends React.Component {

  state = {
      name: '',
      image: '',
      price: '',
      id_category: 1,
  };
clearField = () => {
  this.setState({
    name: '',
    image: '',
    price: '',
    id_category: 1,
  })
}

  handleSubmit = () => {
    this.clearField()
    let formData = new FormData();
    formData.append("name", this.state.name);
    formData.append("image", this.state.image);
    formData.append("price", this.state.price);
    formData.append("id_category", this.state.id_category);

    const config = {
      headers: {
          "content-type": "multipart/form-data",
      }
  };

    const queryAdd = process.env.REACT_APP_INSERT_MENU;

    Axios.post(queryAdd, formData, config)
    .then(res=>{
      if(res.data.isSuccess){
        this.props.getMenuCreator()
        toast('Add menu success!',{
          draggable:true,
          autoClose:false,
          transition:Bounce,
        })
      }
      else{
        toast('Add menu failed. please try again!',{
          draggable:true,
          autoClose:false,
          transition:Bounce,
        })
      }
    })
    .catch(err=>{
      toast.error('Network Error',{
        draggable:true,
        autoClose:false,
      })
    })
  };


  render() {
    return (
      <>
        <div className="modal add fade" id="modal-add" tabIndex="-1" aria-labelledby="modal-add" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modal-add">Add Menu</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-2">
                    <label htmlFor="name">Name</label>
                  </div>
                  <div className="col-10">
                    <input className="form-control shadow" name="name" type="text" id="name" autoComplete="off" 
                    value={this.state.name}
                    onChange={(event) => this.setState({
                      name: event.target.value
                    })} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">
                    <label htmlFor="image">Image</label>
                  </div>
                  <div className="col-10">
                    <input className="form-control-file shadow" name="picture" type="file" id="image"
                     autoComplete="off" onChange={(event) => this.setState({
                      image : event.target.files[0]
                    }) } />
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">
                    <label htmlFor="price">Price</label>
                  </div>
                  <div className="col-10">
                    <input className="form-control shadow price" name="price" type="number" id="price" value={this.state.price} autoComplete="off" onChange={(event) => this.setState({
                      price: event.target.value
                    })} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">
                    <label htmlFor="cat">Category</label>
                  </div>
                  <div className="col-10">
                    <select className="form-control shadow category" name="id_category" id="cat" autoComplete="off" value={this.state.id_category}onChange={(event) => this.setState({
                      id_category: event.target.value
                    })}>
                      <option value="1">Appetizers</option>
                      <option value="2">Main Dish</option>
                      <option value="3">Dessert</option>
                      <option value="4">Beverages</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn  btn-pink btn-cancel" data-dismiss="modal" >Cancel</button>
                <button type="button" className="btn btn-blue btn-add" onClick={() => this.handleSubmit()} data-dismiss="modal">Add</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToPRops = (dispatch) => {
  return {
    insertMenuCreator: (name, picture, price, id_category) => {
      dispatch(insertMenuCreator(name, picture, price, id_category));
    },
    getMenuCreator: () => {
      dispatch(getMenuCreator())
    }
  };
};


export default connect(null, mapDispatchToPRops)(ModalAdd);