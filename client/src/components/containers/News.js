import React, {Component} from 'react';
import NewsItemListing from '../presentation/NewsItemListing';
import { connect } from 'react-redux';
import { fetchNews } from '../../actions/actions'


// class News extends Component {
//     render() {
//         return (
//             <div>
//                 <h2>News Items</h2>
//                 <ul>
//                     <li><NewsItemListing id="1" title="Mad owl torments drivers" teaser="An owl has been seen chasing cars in Bridlington" /></li>
//                     <li><NewsItemListing id="2" title="Owl steals post" teaser="Letters have gone missing in Wigan. Owl suspected." /></li>
//                 </ul>
//             </div>
//         )
//     }
// }

class News extends Component {
    componentDidMount() {
        // var fakeNews = [{
        //     id: '1',
        //     title: 'Mad owl chases car',
        //     teaser: 'Mad owl seen tormenting drivers in Morecambe'
        // }, {
        //     id: '2',
        //     title: 'Owl stowaway',
        //     teaser: 'Despicable owl impersonates passenger to board flight to Luton'
        // }];

        // this.props.dispatch(fetchNews(fakeNews))
        this.props.dispatch(fetchNews())

    }
    render() {
        console.log(this.props.dispatch);
        console.log(this.props)
        const newsItems = this.props.news.map((news, i) => {
            return ( <li key={i}><NewsItemListing data={news} /></li>)
        })
        return (
            <div>
                <h2>New Items</h2>
                <ul>
                    {(this.props.news.length > 0) ? <ul>{newsItems}</ul> : <div>Sorry we have no news</div>}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        news: state.news.news
    }
}
export default connect(mapStateToProps)(News)
