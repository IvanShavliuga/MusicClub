//const axios = require("axios");
import axios from 'axios'
export const state = () =>({
    activetrack: 2,
    activeplaylist: 0,
    tracks: [{
      id: 0,
      title: 'Dame Dame',
      songer: 'Claydee feat',
      playcounter: 39566,
      playlistid: 0,
      time: '4:21'
    },{
      id: 1,
      title: 'Kamelia',
      songer: 'DDY Nunes',
      playcounter: 32420,
      playlistid: 0,
      time: '3:30'
    },{
      id: 2,
      title: 'Laugh Till You Cry',
      songer: 'Faydee',
      playcounter: 28221,
      playlistid: 0,
      time: '3:56'
    },{
      id: 3,
      title: 'I don\'t know',
      songer: 'Deejay Fly',
      playcounter: 21528,
      playlistid: 0,
      time: '2:26'
    }, {
      id: 4,
      title: 'Un Dame',
      songer: 'Untitled #1',
      playcounter: 39566,
      playlistid: 1,
      time: '4:21'
    },{
      id: 5,
      title: 'Kamelia',
      songer: 'Untitled #2',
      playcounter: 32420,
      playlistid: 1,
      time: '3:30'
    },{
      id: 6,
      title: 'Untitled #3',
      songer: 'Untitled #3',
      playcounter: 28221,
      playlistid: 1,
      time: '3:56'
    },{
      id: 7,
      title: 'Untitled #4',
      songer: 'Untitled #4',
      playcounter: 21528,
      playlistid: 1,
      time: '2:26'
    }, {
      id: 8,
      title: 'Dame Dame',
      songer: 'tret #1',
      playcounter: 39566,
      playlistid: 2,
      time: '4:21'
    },{
      id: 9,
      title: 'Kamelia',
      songer: 'tret #2',
      playcounter: 32420,
      playlistid: 2,
      time: '3:30'
    },{
      id: 10,
      title: 'Laugh Till You Cry',
      songer: 'tret #3',
      playcounter: 28221,
      playlistid: 2,
      time: '3:56'
    },{
      id: 11,
      title: 'I don\'t know',
      songer: 'tret #4',
      playcounter: 21528,
      playlistid: 2,
      time: '2:26'
    }],
    playlists: [{
      id: 0,
      name: 'Dance'
    },{
      id: 1,
      name: 'Untitled'
    },{
      id: 2,
      name: 'My Styles'
    }],
    playlistsdata: [],
    client_id : 'la64n2rmwbr592p4v9ekn7999',
    client_secret : 'BQDvnh9XXAnvOwz_QomtPoaVEmmCDFUAmYLYH7FIY8GNZA43XROrRMoyLaPQvXLOyIXdlwZ9xd1hoyug1GmwxBJdYUgu9U-eZnhTZ61hB8BL3qt2MywZ7yQLdrtKmk8vwH4JZi6bckOY9GRRuKu3XjoOixL1BGrflN0sSVQHWiSU4E9BkOWSBbkhI2vgLjXYL1nu3PlBn4ArybQQKX_SQx0uCog7eiR-czwsiPfKIV70kaOw1LgMkSOBdw7wE0hTgRj8xGaNOONB_JDCaYHtqKNsObr6TDbuh0U'
  })
export const mutations = {
  SELECT_PLAYLIST(state, id) {
    state.activeplaylist = id
  },
  INIT_USER(state) {
    let response =  axios({
        method: 'post',
        url: 'https://accounts.spotify.com/api/token',
        headers: {
            'Authorization': 'Basic ' + (new Buffer(state.client_id + ':' + state.client_secret).toString('base64')),
            'Content-Type': 'application/x-www-form-urlencoded'
         },
        params: {
            grant_type: 'refresh_token',
            refresh_token: state.client_secret
        }
    });
  },
  LOAD_PLAYLIST(state) {
    let response =  axios({
        method: 'post',
        url: 'https://accounts.spotify.com/api/token',
        headers: {
            'Authorization': 'Basic ' + (new Buffer(state.client_id + ':' + state.client_secret).toString('base64')),
            'Content-Type': 'application/x-www-form-urlencoded'
         },
        params: {
            grant_type: 'refresh_token',
            refresh_token: 'BQDvnh9XXAnvOwz_QomtPoaVEmmCDFUAmYLYH7FIY8GNZA43XROrRMoyLaPQvXLOyIXdlwZ9xd1hoyug1GmwxBJdYUgu9U-eZnhTZ61hB8BL3qt2MywZ7yQLdrtKmk8vwH4JZi6bckOY9GRRuKu3XjoOixL1BGrflN0sSVQHWiSU4E9BkOWSBbkhI2vgLjXYL1nu3PlBn4ArybQQKX_SQx0uCog7eiR-czwsiPfKIV70kaOw1LgMkSOBdw7wE0hTgRj8xGaNOONB_JDCaYHtqKNsObr6TDbuh0U'
        }
    });
    let lt = axios({
       method: 'get',
       url: 'https://api.spotify.com/v1/users/la64n2rmwbr592p4v9ekn7999/playlists',
       headers: { 'Authorization': 'Bearer BQDvnh9XXAnvOwz_QomtPoaVEmmCDFUAmYLYH7FIY8GNZA43XROrRMoyLaPQvXLOyIXdlwZ9xd1hoyug1GmwxBJdYUgu9U-eZnhTZ61hB8BL3qt2MywZ7yQLdrtKmk8vwH4JZi6bckOY9GRRuKu3XjoOixL1BGrflN0sSVQHWiSU4E9BkOWSBbkhI2vgLjXYL1nu3PlBn4ArybQQKX_SQx0uCog7eiR-czwsiPfKIV70kaOw1LgMkSOBdw7wE0hTgRj8xGaNOONB_JDCaYHtqKNsObr6TDbuh0U'}
     });
     lt.then(response => (state.playlistsdata = response.data));
  }
}
export const actions = {
  selectPlaylist({commit}, id) {
    commit('SELECT_PLAYLIST', id)
  },
  initPlaylist({commit}) {
    commit('LOAD_PLAYLIST')
  },
  initUser({commit}) {
    commit('INIT_USER')
  }
}
export const getters = {
  tracks: state=>{
    let tl = state.tracks.filter((t)=>{return t.playlistid==state.activeplaylist})
    return tl
  },
  playlist: state=>{
    console.log(state.activeplaylist)
    let pl = state.playlists.filter((p)=>{return p.id==state.activeplaylist})
    return pl
  },
  playlistsdata: state=>{
    console.log(state.playlistsdata)
    let pl = state.playlistsdata
    return pl
  }
}
