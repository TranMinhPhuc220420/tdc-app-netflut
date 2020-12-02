import React from 'react';

import { Link } from 'react-router-dom';

const GridView = (props) => {
  return (
    <div className="card">

      {/* Title grid */}
      <div className="card-header border-transparent">
        <h3 className="card-title">Đơn hàng mới nhất</h3>
      </div>

      {/* Grid body */}
      <div className="card-body p-0">
        <div className="table-responsive">
          <table className="table m-0">
            <thead>

            {/* Header columns */}
            <tr>
              <th>ID</th>
              <th>Mục</th>
              <th>Trạng thái</th>
              <th>Ngày đặt</th>
            </tr>
            </thead>

            {/* Row items */}
            <tbody>
              <tr>
                <td>
                  <a href="pages/examples/invoice.html">OR9842</a>
                </td>
                <td>
                  Call of Duty IV
                </td>
                <td>
                  <span className="badge badge-success">Shipped</span>
                </td>
                <td>
                  <div className="sparkbar" data-color="#00a65a" data-height="20">90,80,90,-70,61,-83,63</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/*Footer grid*/}
      <div className="card-footer clearfix">
        <Link to={'/admin'} className="btn btn-sm btn-secondary float-right">View All Orders</Link>
      </div>
    </div>
  )
};

export default GridView;
