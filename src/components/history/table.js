import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHistoryCreator } from "../../redux/actions/menuAndCart";

const Table = () => {
  const { auth, menuAndCart } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHistoryCreator(auth.user.token));
  }, []);

  return (
    <>
      <div className='row'>
        <div className='col-12 order'>
          <div className='card shadow'>
            <div className='card-header bg-transparent'>
              <h3>Recent Order</h3>
              <select name='select' id=''>
                <option value='month'>Today</option>
                <option value='month'>Yesterday</option>
              </select>
            </div>
            <div className='card-body table-responsive'>
              <table className='table table-borderless table-hover'>
                <thead className='bordered'>
                  <tr>
                    <th scope='col '>INVOICES</th>
                    <th scope='col'>CHASIER</th>
                    <th scope='col'>DATE</th>
                    <th scope='col'>ORDERS</th>
                    <th scope='col'>AMOUNT</th>
                  </tr>
                </thead>
                <tbody>
                  {menuAndCart.history !== undefined ? (
                    menuAndCart.history.map((data) => {
                      return (
                        <tr className='font-weight-normal' key={data.invoice}>
                          <td className='font-weight-normal'>
                            #{data.invoice}
                          </td>
                          <td className='font-weight-normal'>{data.cashier}</td>
                          <td className='font-weight-normal'>{data.date}</td>
                          <td className='font-weight-normal'>{data.orders}</td>
                          <td className='font-weight-normal'>
                            Rp. {data.amount}
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr className='font-weight-normal' key='id'>
                      <td className='font-weight-normal'></td>
                      <td className='font-weight-normal'></td>
                      <td className='font-weight-normal'></td>
                      <td className='font-weight-normal'></td>
                      <td className='font-weight-normal'></td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
