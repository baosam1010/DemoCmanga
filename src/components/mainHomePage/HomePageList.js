import React, { Component } from 'react';
import ItemManga from './ItemManga';
import { connect } from 'react-redux';
// import callAPI from './../../utils/apiCaller'
import { listAllRequests } from './../../actions/index'

class HomePageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mangas: [],
            // sort: "",

        }
    }

    componentDidMount() {
        this.props.listAllMangas();
        // this.setState({ sort: this.props.sort })
    }

    render() {
        var mangas = this.props.mangas;
        var sort = this.props.sort;
        var filter = this.props.filter;
        console.log("filter-HomepageList:", filter)
        // console.log("sort: ", sort)
        // console.log("propsHomepage",this.props)
        // console.log("mangas:",mangas)



        // hàm so sánh động truyền vào 2 tham số key và kiểu sắp xếp
        function compareValues(key, order = 'asc') {
            return function (a, b) {
                if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                    // nếu không tồn tại
                    return 0;
                }
                const varA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
                const varB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];
                let comparison = 0;
                if (varA > varB) {
                    comparison = 1;
                } else if (varA < varB) {
                    comparison = -1;
                }
                return (
                    (order === 'desc') ? (comparison * -1) : comparison
                );
            };
        }
        mangas.sort(compareValues(sort,( sort === 'undateTime' ? 'asc' : 'desc')))
        // Hàm filter danh sách các truyện
            if (filter !== ""){
            //    return mangas= mangas.name.search(filter)
            }
            
        
        return (
            <div className="home-page-list">
                <ul className="lists-manga">
                    {mangas.map((manga) => (
                        <ItemManga key={manga.id} manga={manga} />
                    ))}
                </ul>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        listAllMangas: () => {// listAllMangas nhận được từ callAPI
            dispatch(listAllRequests()); // dispatch cái action được truyền đến cho store 
        }
    }
}
const mapStateToProps = (state) => {
    return {
        mangas: state.listAll, // lấy listAll từ store(store có chưa reducer listAll)
        sort: state.sort,
        filter: state.filterSearch,


    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePageList);