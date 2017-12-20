import React from 'react';

class Album extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    id: '',
    loading: true,
    error: false,
    tracks: [],
  }
  this.callTracks = this.callTracks.bind(this);
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
        this.setState({loading: false, error: false, tracks:json.items})
      })
      .catch( err => {
        this.setState({loading: false, error: true });
        console.log('err ' +err);
    });
  };

render() {
  return (
    <div className='container'>
      <ol className='breadcrumb'>
        <li><a href='/'>Recherche</a></li>
        <li><a href='#'>{ 'Artist' }</a></li>
        <li className='active'>{ 'Album' }</li>
      </ol>
      <div className='page-header'>
        <h1>Pistes</h1>
        <h2>{ 'Artist' } - { 'Album' }</h2>
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
              ( <li key={track.id}className='list-group-item'>{track.track_number}. {track.name} <span className='badge'>00:00</span></li>))
            }
          </ul>
        </div>

      </div>
    </div>
  );
}
}

export default Album;
