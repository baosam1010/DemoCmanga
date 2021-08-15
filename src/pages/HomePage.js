import React from 'react'
import Content from './../components/Content';
import Footer from './../components/Footer';

export default function HomePage(props) {
    // var [search,setSearch] = useState{};

    // console.log("Props:", props)
    // url trên chorm
    var {match} = props;
    // var url = match.url;
    // console.log("homeMatch:",match)
    // console.log("HomeUrl:",url)
    return (
        
        <div>
            <Content match={match}/>
            <Footer/>
        </div>
    )
}
