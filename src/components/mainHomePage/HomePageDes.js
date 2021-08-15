import React, { Component } from 'react';
import {connect} from 'react-redux';

class HomePageDes extends Component {
    render() {
        var isColor = this.props.isColor;
        return (
            <div 
                className="home-page-des"
                style={{
                    backgroundColor: isColor ? "#242526" :"var(--light-background)",
                    color: isColor ? "#91B3B8" : "black"

                }}
            >
                <p style={{color: isColor ? "#91B3B8" : "black"}}> [Thông báo] Cập nhật tỉ lệ xuất chiêu kỹ năng Từ Chối Tử Thần </p>
                <p style={{color: isColor ? "#91B3B8" : "black"}}>[Cập nhật] Tỉ lệ nhận thưởng cược từ Chiến Trường Sinh Tử từ gấp 2 lên gấp 3 lần. </p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isColor: state.changeColor,// nhận từ reducer
    }
}
export default connect(mapStateToProps)(HomePageDes);