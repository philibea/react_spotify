import React from 'react';

class Artist extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    id: '',
    loading: true,
    error: false,
    albums: [],
  }
  this.callAlbum = this.callAlbum.bind(this);
}

componentWillMount() {
  this.setState({
    id: this.props.params.id,
  })
}

componentDidMount () {
  this.callAlbum(this.state.id);
}

callAlbum(id) {
  fetch('http://localhost:3001/api/artist/'+id, {
    method: 'GET',
        headers: {
          mode: 'cors',
          Accept: 'application/json'
        }
      })
      .then( res => res.json())
      .then( json => {
        console.log(json);
        this.setState({loading: false, error: false, albums:json.items})
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
          <li className='active'>{ 'Artist' }</li>
        </ol>
          <div className='page-header'>
            <h1>Albums</h1>
            <h2>{ 'Artist' }</h2>
          </div>
          <div className='container albums'>
            <div className='row'>

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
              {this.state.albums.length == 0 && !this.state.loading && !this.state.error &&
              <div className='container text-center'>
                <div className="alert alert-info">
                  <strong>Dommage!</strong> Aucun Albums!
                </div>
              </div>
              }
              {this.state.albums.length > 0 && !this.state.loading &&
                this.state.albums.map((album,index) => (
                  <div key={album.id} className='col-xs-12 col-sm-4 col-md-4 col-lg-3'>
                    <div className='thumbnail text-center'>
                      <a href={`/album/${album.id}`}>
                        { album.images.length > 0 &&
                        <img className='media-object' src={album.images[1].url} height="300" width="300" alt={album.name} />
                         }
                        { album.images.length === 0 &&
                        <img className='media-object' src='http://placehold.it/300x300' height="300" width="300" alt={album.name} />
                        }
                      </a>
                      <div className='caption'>
                        <h4>{album.name }</h4>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
  );
}
}

export default Artist;
