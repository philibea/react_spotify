import React from 'react';

class Album extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    id: '',
    loading: true,
    error: false,
    artist_id: '',
    artist_name: '',
    album: '',
    tracks: [],
  }
  this.callTracks = this.callTracks.bind(this);
  this.badge = this.badge.bind(this);
}

componentWillMount() {
  this.setState({
    id: this.props.params.id,
  })
}

componentDidMount () {
  this.callTracks(this.state.id);
}

callTracks(id) {
  fetch('http://localhost:3001/api/album/'+id, {
    method: 'GET',
        headers: {
          mode: 'cors',
          Accept: 'application/json'
        }
      })
      .then( res => res.json())
      .then( json => {
        console.log(json);
        let art = json.items[0].artists[0];
        this.setState({loading: false, error: false, artist_id:art.id,artist_name: art.name, tracks:json.items})
      })
      .catch( err => {
        this.setState({loading: false, error: true });
        console.log('err ' +err);
    });
  };

badge(t) {
  const s = Math.floor(t / 1000) % 60;
  const m = Math.floor(t / 60000) % 60;

  return <span className='badge'>{m}:{s}</span>;
};

render() {
  return (
    <div className='container'>
      <ol className='breadcrumb'>
        <li><a href='/'>Recherche</a></li>
        <li><a href={`/artist/${this.state.artist_id}`}>{this.state.artist_name}</a></li>
        <li className='active'>{ 'Album' }</li>
      </ol>
      <div className='page-header'>
        <h1>Pistes</h1>
        <h2>{this.state.artist} - { 'Album' }</h2>
      </div>

      <div className='row'>

        <div className='col-xs-12 col-md-6 col-lg-6'>
          {this.state.loading &&
            <div className='container text-center'>
              <i className="fa fa-circle-o-notch fa-spin" ></i>
            </div>
          }
          {this.state.error &&
          <div className='container text-center'>
            <div className="alert alert-danger">
              <strong>Mince!</strong> Une erreur est survenue!
            </div>
          </div>
          }
          {this.state.tracks.length == 0 && !this.state.loading && !this.state.error &&
          <div className='container text-center'>
            <div className="alert alert-info">
              <strong>Dommage!</strong> Aucun Albums!
            </div>
          </div>
          }
          <img src={'http://placehold.it/640x640'} className='thumbnail img-responsive' alt={ 'Album name' } />
        </div>

        <div className='col-xs-12 col-md-6 col-lg-6'>
          <ul className='list-group'>
            {this.state.tracks.length > 0 && !this.state.loading &&
            this.state.tracks.map((track,index) =>
              ( <li key={track.id} className='list-group-item'>{track.track_number}. {track.name} {this.badge(track.duration_ms)} </li>))
            }
          </ul>
        </div>

      </div>
    </div>
  );
}
}

export default Album;
