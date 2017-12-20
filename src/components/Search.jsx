import React from 'react';
import Link from 'react-router';
class Search extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      value: '',
      valueEmpty: false,
      error: false,
      artists: [],
    }
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.callArtistes = this.callArtistes.bind(this);
  }

  componentDidMount() {
    console.log('App component did mounted ===> ' + new Date().toString());
    fetch('http://localhost:3001/api/credential', {
      method: 'GET',
      headers: {
        mode: 'cors',
        Accept: 'application/json'
      }
    });
  }
  componentWillMount() {
    console.log('App component will mounted ===> ' + new Date().toString());
  }

  handleChangeText(e) {
    const value = e.target.value;
    this.setState({ value });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.value === '') {
      this.setState({valueEmpty: true})
    } else {
      this.setState({ loading: true, valueEmpty: false });
      this.callArtistes(this.state.value);
    }
  };

  callArtistes(terms) {
    fetch('http://localhost:3001/api/search?artist='+terms, {
      method: 'GET',
      headers: {
        mode: 'cors',
        Accept: 'application/json'
      }
    })
    .then( res => res.json())
    .then( json => {
      console.log(json);
      this.setState({loading: false, error: false, artists:json.artists.items, value:''})
    })
    .catch( err => {
      this.setState({loading: false, error: true });
      console.log('err ' +err);
    });
  };

  renderPagination() {
    return (
      <div className='container text-center'>
      <nav aria-label='Page navigation'>
        <ul className='pagination'>
          <li>
            <a href='#' aria-label='Previous'>
              <span aria-hidden='true'>&laquo;</span>
            </a>
          </li>
          <li><a href='#'>1</a></li>
          <li><a href='#'>2</a></li>
          <li><a href='#'>3</a></li>
          <li><a href='#'>4</a></li>
          <li><a href='#'>5</a></li>
          <li>
            <a href='#' aria-label='Next'>
              <span aria-hidden='true'>&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className='container'>
          <ol className='breadcrumb'>
            <li className='active'><a href='/'>Recherche</a></li>
          </ol>
          <div className='page-header'>
            <h1>Artistes</h1>
          </div>
          <div className='panel panel-default'>
            <div className='panel-heading'>Rechercher un artiste Spotify</div>
            <div className='panel-body'>
              <form className='form-inline' onSubmit={this.handleSubmit}>
                <div className='form-group'>
                  <input type='search' className='form-control' value={this.state.value} onChange={this.handleChangeText} placeholder='Mot(s)-clé(s)' />
                </div>
                <button type='submit' className='btn btn-primary'>Chercher</button>
              </form>
            </div>
          </div>
        </div>
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
          {this.state.artists.length === 0 && !this.state.loading &&
            <div className='container text-center'>
              <div className="alert alert-info">
                <strong>Dommage!</strong> Aucun Artistes!
              </div>
            </div>
          }
          {this.state.valueEmpty &&
            <div className='container text-center'>
              <div className="alert alert-warning">
                <strong>Warning!</strong> Vous recherez dans le vide.
              </div>
            </div>
          }
          { this.state.artists.length > 0 && !this.state.loading &&
            <div className='container artists'>
              {this.state.artists.map((artist,index) => (
                <div key={artist.id} className='media'>
                  <div className='media-left'>
                  <a href={`/artist/${artist.id}`}>
                    { artist.images.length > 0 &&
                    <img className='media-object' src={artist.images[artist.images.length-1].url} height="128" width="128" alt='*' />
                    }
                    { artist.images.length === 0 &&
                    <img className='media-object' src='http://placehold.it/64x64' height="128" width="128" alt='*' />
                    }
                  </a>
                  </div>
                <div className='media-body'>
                  <h4 className='media-heading'>{artist.name}</h4>
                  {artist.genres}
                </div>
              </div>
              ))}
            </div>
          }
        </div>
    );
  };
};

export default Search;
