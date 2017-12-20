import React from 'react';

class DemoPage extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div className='container'>
            <div className='page-header'>
              <h1>Artistes</h1>
            </div>
            <div className='panel panel-default'>
              <div className='panel-heading'>Rechercher un artiste Spotify</div>
              <div className='panel-body'>
                <form className='form-inline'>
                  <div className='form-group'>
                    <input type='search' className='form-control' placeholder='Mot(s)-clé(s)' />
                  </div>
                  <button type='submit' className='btn btn-primary'>Chercher</button>
                </form>
              </div>
            </div>
          </div>
          <div className='container artists'>
            <div className='media'>
              <div className='media-left'>
                <a href='#'>
                  <img className='media-object' src='http://placehold.it/64x64' alt='*' />
                </a>
              </div>
              <div className='media-body'>
                <h4 className='media-heading'>Artist name</h4>
                Artist genres
              </div>
            </div>
            <div className='media'>
              <div className='media-left'>
                <a href='#'>
                  <img className='media-object' src='http://placehold.it/64x64' alt='*' />
                </a>
              </div>
              <div className='media-body'>
                <h4 className='media-heading'>Artist name</h4>
                Artist genres
              </div>
            </div>
            <div className='media'>
              <div className='media-left'>
                <a href='#'>
                  <img className='media-object' src='http://placehold.it/64x64' alt='*' />
                </a>
              </div>
              <div className='media-body'>
                <h4 className='media-heading'>Artist name</h4>
                Artist genres
              </div>
            </div>
          </div>
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
        </div>

        <hr />

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
              <div className='col-xs-12 col-sm-4 col-md-4 col-lg-3'>
                <div className='thumbnail text-center'>
                  <a href='#'>
                    <img src={'http://placehold.it/300x300'} alt={ 'Album name' } />
                  </a>
                  <div className='caption'>
                    <h4>{ 'Album name' }</h4>
                  </div>
                </div>
              </div>
              <div className='col-xs-12 col-sm-4 col-md-4 col-lg-3'>
                <div className='thumbnail text-center'>
                  <a href='#'>
                    <img src={'http://placehold.it/300x300'} alt={ 'Album name' } />
                  </a>
                  <div className='caption'>
                    <h4>{ 'Album name' }</h4>
                  </div>
                </div>
              </div>
              <div className='col-xs-12 col-sm-4 col-md-4 col-lg-3'>
                <div className='thumbnail text-center'>
                  <a href='#'>
                    <img src={'http://placehold.it/300x300'} alt={ 'Album name' } />
                  </a>
                  <div className='caption'>
                    <h4>{ 'Album name' }</h4>
                  </div>
                </div>
              </div>
              <div className='col-xs-12 col-sm-4 col-md-4 col-lg-3'>
                <div className='thumbnail text-center'>
                  <a href='#'>
                    <img src={'http://placehold.it/300x300'} alt={ 'Album name' } />
                  </a>
                  <div className='caption'>
                    <h4>{ 'Album name' }</h4>
                  </div>
                </div>
              </div>
              <div className='col-xs-12 col-sm-4 col-md-4 col-lg-3'>
                <div className='thumbnail text-center'>
                  <a href='#'>
                    <img src={'http://placehold.it/300x300'} alt={ 'Album name' } />
                  </a>
                  <div className='caption'>
                    <h4>{ 'Album name' }</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

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
              <img src={'http://placehold.it/640x640'} className='thumbnail img-responsive' alt={ 'Album name' } />
            </div>
            <div className='col-xs-12 col-md-6 col-lg-6'>
              <ul className='list-group'>
                <li className='list-group-item'>#. Track name <span className='badge'>00:00</span></li>
                <li className='list-group-item'>#. Track name <span className='badge'>00:00</span></li>
                <li className='list-group-item'>#. Track name <span className='badge'>00:00</span></li>
                <li className='list-group-item'>#. Track name <span className='badge'>00:00</span></li>
                <li className='list-group-item'>#. Track name <span className='badge'>00:00</span></li>
                <li className='list-group-item'>#. Track name <span className='badge'>00:00</span></li>
                <li className='list-group-item'>#. Track name <span className='badge'>00:00</span></li>
                <li className='list-group-item'>#. Track name <span className='badge'>00:00</span></li>
                <li className='list-group-item'>#. Track name <span className='badge'>00:00</span></li>
                <li className='list-group-item'>#. Track name <span className='badge'>00:00</span></li>
                <li className='list-group-item'>#. Track name <span className='badge'>00:00</span></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default DemoPage;
