import React, { Component } from 'react';
import { changeGrid } from '../../actions';
import { sortMangas } from '../../actions';
import { connect } from 'react-redux'

class HomePageMenus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slt_option: "",
        }
    }


    onChangeListGrid = () => {
        // đổi grid 
        // console.log("grid ban đầu :", this.state.grid)
        // this.setState({ grid: !this.props.grid });
        // console.log("gridchange:", this.props.grid)
        var dispatch = this.props.dispatch;
        dispatch(changeGrid(!this.props.grid));

    };
    onChangeSort = (e) => {
        var target = e.target
        console.log("target:",target.value)
        var dispatch = this.props.dispatch;
        dispatch(sortMangas(target.value));   
    }



    render() {

        var grid = this.props.grid;
        // console.log("grid inittial Reducer:", grid);
        // var slt_option = this.props.slt_option;
        // console.log("slt_option 1:",slt_option)

        return (
            <div className="home-page-menus">
                <div className="home-menu-left">
                    <p>
                        <i className="fas fa-sync mr-8"></i>
                        Truyện mới cập nhật
                    </p>
                </div>
                <div className="home-menu-right">
                    <button
                        title="Loại bỏ nội dung 18+"
                        className="button-circle"
                        style={{display:"none"}}
                    >
                        <i className="fas fa-baby"></i>
                    </button>
                    <button
                        title="Đổi giao diện List/Grid"
                        className={grid === true ? "button-circle" : "button-circle active-button"}
                        onClick={this.onChangeListGrid.bind(this)}
                    >
                        <i className="fas fa-list"></i>
                    </button>
                    <select className="update-sort" value={this.props.slt_option} onChange={this.onChangeSort}>
                        <option value="undateTime">Sắp xếp theo </option>
                        <option value="undateTime">Ngày cập nhật </option>
                        <option value="views">Tổng lượt xem </option>
                        <option value="follows">Người theo dõi  </option>
                    </select>
                </div>
            </div>
        );
    }
}
// const mapDispatchToProps = (dispatch,props) => (
//     dispatch(changeGrid(this.state.grid))
// )
const mapStateToProps = (state) => ({
    grid: state.changeGrid,
    slt_option: state.sort
})
export default connect(mapStateToProps, null)(HomePageMenus);