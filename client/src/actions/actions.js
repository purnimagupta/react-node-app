import actionTypes from '../constants/actionTypes';

export function newsReceived(news){
    return {
        type: actionTypes.NEWS_RECEIVED,
        news: news
    }
}

export function newsItemReceived(newsItem){
    return {
        type: actionTypes.NEWSITEM_RECEIVED,
        newsItem: newsItem
    }
}

export function fetchNews(){
    // this is redux-thunk. we're returing a function which has one argument called dispatch.
    console.log('presend')
    // return (dispatch)=> {
    //     dispatch(newsReceived(fakeNews));
    // }
    return (dispatch) => {
        return fetch('http://localhost:5000/news')
        .then( (response) => response.json() )
        .then( (data) => dispatch(newsReceived(data.data)))
        .catch( (e) => {console.log(e)} )
    }
}


// If we were to use a different server for our API; we would
// alter our action.js to use cors as follows.

// export function fetchNews(fakeNews){
//     console.log('presend')
//     return dispatch => {
//         return fetch(`http://[INSERT SERVER ADDRESS]/news`, {method: 'GET', mode: 'cors'})
//         .then( (response) =>{
//             console.log(response);
//         });
//     }    
// }
function newsItemLoading() {
    return {
        type: actionTypes.NEWSITEM_LOADING
    }
}
export function fetchNewsItem(id){
    // return dispatch => {
    //     dispatch(newsItemReceived(fakeNewsItem));
    // }
    return dispatch => {
        return fetch(`/news/${id}`)
        .then( (response) => response.json() )
        .then( (data) => dispatch(newsItemReceived(data.data)) )
        .catch( (e) => console.log(e) )
    }

}

export function submitNewStory(data) {
    return dispatch => {
        return fetch('/news', {
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
                mode: 'cors'
            })
            .catch( (e)=> console.log(e))
    }
}