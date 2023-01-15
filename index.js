
let SPOTIFY_ACCESS_TOKEN= 'BQBELNbAniQDIquPOyBoFdxmQPtLqvKsQJG2Bi5BsfCmdsRfSkgfLuWeYk6sE60xhRj22jwFEwiBnV9qazCej5DqvvZCHUqlHkejIcplqOyvXNL0ghFNaR9VxryuH2rypXuy';
let GET_CURRENT_TRACK_URL;

function get_current_track(access_token) {
    let response = request.get(GET_CURRENT_TRACK_URL,Headers={
        "Authorization" : 'Bearer'+" "+access_token
    }
    )
    let resp_json = response.json();
    let track_id = resp_json['item']['id'];
    let track_name = resp_json['item']['name'];
    let artists = resp_json['item']['artists'];
    let artists_name = [artists['name']].join(', ');
    let link = resp_json['item']['external_urls']['spotify'];
    current_track_info = {
        "id": track_id,
        "name": track_name,
        "artists": artists_name,
        "link": link
    }

};

function main(){
    var current_track_info = get_current_track(SPOTIFY_ACCESS_TOKEN);

    console.log(current_track_info);
};



main();

