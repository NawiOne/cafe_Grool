import React from "react";

class ModalAdd extends React.Component {
  
  render() {
    return (
      <>
        <div className="modal fade" id="modal-add" tabIndex="-1" aria-labelledby="modal-add" aria-hidden="true">
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
                    <input className="form-control shadow" type="text" id="name" autoComplete="off" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">
                    <label htmlFor="image">Image</label>
                  </div>
                  <div className="col-10">
                    <input className="form-control shadow" type="text" id="image" autoComplete="off" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">
                    <label htmlFor="price">Price</label>
                  </div>
                  <div className="col-10">
                    <input className="form-control shadow price" type="number" id="price" autoComplete="off" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">
                    <label htmlFor="cat">Category</label>
                  </div>
                  <div className="col-10">
                    <select className="form-control shadow category" id="cat" aria-valuenow="category" autoComplete="off">
                      <option value="Appetizers">Appetizers</option>
                      <option value="Main Dish">Main Dish</option>
                      <option value="Dessert">Dessert</option>
                      <option value="Beverages">Beverages</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn  btn-cancel" data-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-add">Add</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ModalAdd;