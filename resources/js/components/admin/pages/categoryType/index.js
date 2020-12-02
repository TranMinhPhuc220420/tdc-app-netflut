import React, {useState} from 'react';
import Swal from 'sweetalert2'
import {useDispatch, useSelector} from 'react-redux';
//Lang
import NetflutLang from '../../lang/NetflutLang';
//component
import GridViewTypeFilm from "../../components/gridView/TypeFilm"
//controller
import CategoryTypeController from '../../controller/TypeFilmController'
import {setTypeFilm} from "../../actions";
import TypeFilmModel from "../../model/TypeFilmModel";

const CategoryType = (props) => {
  const [nameTypeFilmAdd, setNameTypeFilmAdd] = useState('');
  const dispatch = useDispatch();

  const refreshStore = () => {
    TypeFilmModel.getAll((data) => {
      dispatch(setTypeFilm(data));
    });
  };

  //Data for GridView Type Film
  let columns = [
    {
      text: 'ID',
    },
    {
      text: 'Tên loại phim'
    },
    {
      text: 'Ngày thêm'
    },
    {
      text: 'Ngày cập nhật'
    }
  ];
  let store = useSelector(state => state.typeFilm);
  const submitAddNewCategoryType = (event) => {
    event.preventDefault();

    CategoryTypeController.addNewTypeFilm(nameTypeFilmAdd, (result) => {
      let icon, title, text;

      if (result === 'ok') {
        icon = 'success';
        title = NetflutLang.getMsg('SUCCESS_TITLE');
        text = NetflutLang.getMsg('SUCCESS_UPLOAD_NEW_TYPE_FILM');

        //Refresh store when add success
        refreshStore();

      } else {
        icon = 'error';
        title = NetflutLang.getMsg('FAIL_TITLE');
        text = NetflutLang.getMsg('FAIL_UPLOAD_NEW_TYPE_FILM');
      }

      Swal.fire({
        icon: icon,
        title: title,
        text: text,
      }).then(r => {
        //Clear input
        setNameTypeFilmAdd('');
      });
    });
  };

  /*Return render component*/
  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">

            {/* Title content */}
            <div className="col-sm-12 my-4">
              <h1 className="m-0">Thể loại phim</h1>
            </div>

            {/* content body */}
            <div className="col-sm-12">
              <section className="content">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-5 mb-5">

                      <form action='/add' onSubmit={submitAddNewCategoryType}>
                        <div className="form-group">
                          <label htmlFor="nameCategoryType">Tên loại phim</label>
                          <input type="text" className="form-control" id="nameCategoryType"
                                 placeholder="Nhập tên loại phim muốn thêm"
                                 value={nameTypeFilmAdd}
                                 onChange={(event) => setNameTypeFilmAdd(event.target.value)}/>
                        </div>

                        <button type="submit" className="btn btn-primary">Thêm</button>
                      </form>
                    </div>

                    <div className="col-md-12">
                      <GridViewTypeFilm
                        refreshStore={refreshStore}
                        title='Danh sách loại phim'
                        data={store}
                        columns={columns}/>
                    </div>

                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryType;
