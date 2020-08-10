import React from "react";
import Axios from "axios";


class Table extends React.Component {
    constructor() {
        super();
        this.state = {
            hist: [],
        };
    }

    getHistory = () => {
        const urlGet = "http://localhost:8000/history/getall";
        Axios.get(urlGet)
            .then((res) =>
                this.setState({
                    hist: res.data.data
                })
            );

    };

    componentDidMount = () => {
        this.getHistory();
    };
    componentDidUpdate = () => {
        this.getHistory();
    };



    render() {
        return (

            <>
                <div className="row">
                    <div className="col-12 order">
                        <div className="card shadow">
                            <div class="card-header bg-transparent">
                                <h3>Recent Order</h3>
                                <select name="select" id="" >
                                    <option value="month">Today</option>
                                    <option value="month">Yesterday</option>
                                </select>
                            </div>
                            <div class="card-body table-responsive">
                                <table class="table table-borderless table-hover">
                                    <thead class="bordered">
                                        <tr>
                                            <th scope="col ">INVOICES</th>
                                            <th scope="col">CHASIER</th>
                                            <th scope="col">DATE</th>
                                            <th scope="col">ORDERS</th>
                                            <th scope="col">AMOUNT</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.hist.map((data) => {
                                            return (
                                                <tr>
                                                    <td>{data.invoice}</td>
                                                    <td>{data.cashier}</td>
                                                    <td>{data.date}</td>
                                                    <td>{data.orders}</td>
                                                    <td>{data.amount}</td>
                                                </tr>
                                            );


                                        })}

                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>

                </div>
            </>
        );


    }
}
export default Table;