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
        var { match } = this.props;


        // console.log("filter-HomepageList:", filter)
        // console.log("sort: ", sort)
        // console.log("propsHomepageList", this.props.match)
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
        mangas = mangas.sort(compareValues(sort, (sort === 'undateTime' ? 'asc' : 'desc')))

        // console.log("sau Sort:", mangas)
        // console.log("filter:", filter)

        //-------------- Hàm sort theo Category-----------
        if (match !== undefined) {
            var url = match.url;
            if (url.includes('category')) {
                // console.log("HomePageListUrl:", match.url)
                mangas = mangas.filter((manga) => {
                    var categories = [];
                    if (manga.category.length > 0) {
                        manga.category.map((category) => {
                            return categories.push(category.normalize('NFD')
                                .replace(/[\u0300-\u036f]/g, '')
                                .replace(/đ/g, 'd').replace(/Đ/g, 'D')
                                .toLowerCase()
                                .trim()
                                .replace(/ /, '-'))
                        })
                    }
                    manga.categories = categories
                    // console.log('categories:', manga)
                    for (let i = 0; i <manga.categories.length; i++) {
                        return url.includes(manga.categories[i])
                    }
                    return manga
                })
                // console.log("mangasCategory:", mangas)
            }
        }
        // console.log('mangas_Category:', mangas)

// ----------Hàm filter danh sách các truyện------------
        var filterManga = null;
        if (filter === "") {
            // console.log("filter ở đây rỗng")
            filterManga = mangas;

        } else {
            console.log("filter ở đây có giá trị", filter)
            filterManga = mangas.filter(function (manga, index, array) {
                // chuyển có dấu thành không dấu rồi so sánh chuỗi có trong tên truyện hay không
                var a = manga.name.normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '')
                    .replace(/đ/g, 'd').replace(/Đ/g, 'D')
                    .toLowerCase();
                var b = filter.normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '')
                    .replace(/đ/g, 'd').replace(/Đ/g, 'D')
                    .toLowerCase();
                return a.includes(b)
            })
        }

        // console.log("filterManga:", filterManga)

        return (
            <div className="home-page-list">
                <ul className="lists-manga">
                    {filterManga.map((manga) => (
                        <ItemManga key={manga.id} manga={manga} match={match}/>
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