import React from 'react';
// import Axios from 'axios';
const search = require('../img/search.png');

class ModalSearch extends React.Component {
    clear = () => {
        this.refs.blank.value = "";
    };
    state = {
        name: null,
        by: null
    };

    render() {
        return (
            <>
                <div className="modal fade modal-search" id="modal-search" tabIndex="-1" aria-labelledby="modal-search" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">

                            </div>
                            <div className="modal-body mb-3 m-2">
                                <div className="row">
                                    <div className="col-12">
                                    </div>
                                </div>
                                <form className="form-group" role="document">
                                    <div className="form-group">
                                        <input type="text" name="search" className="form-control" placeholder="Search" autoComplete="off" onChange={(event) => {
                                            this.setState({
                                                name: event.target.value
                                            });
                                        }} ref="blank"/>
                                        <button type="button" className="btn ml-2" onClick={() => {this.props.searchMenu(this.state.name, this.state.by); this.clear();}} data-dismiss="modal"><img src={search} alt={search} /></button>
                                    </div>
                                </form>
                                <div className="sort-by centered">
                                    <label htmlFor="sort">Sort by</label>
                                    <select className="form-control sort" name="sort" id="cat" autoComplete="off" defaultValue="sort by" onChange={(event) => {
                                        this.setState({
                                            by: event.target.value
                                        });
                                    }}>
                                        <option value="id_menu">id</option>
                                        <option value="name">Name</option>
                                        <option value="price">Price</option>
                                        <option value="name_category">Category</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );

    }

};

export default ModalSearch;