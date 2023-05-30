import React, { useState } from 'react';
import { Films as filmData } from '../shared/ListOfFilms';


export default function Films(){
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFilms, setFilteredFilms] = useState(filmData);
  const [film, setFilm] = useState([]);

  const handleSearchChange = event => {
    const query = event.target.value;
    setSearchQuery(query);
  
    const filtered = filmData.filter(film =>
      film.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredFilms(filtered);
  };
  
  return (
    <div>
      <h2 className="list-heading">List of Films</h2>
      <div className="film-search">
        <input
          type="text"
          placeholder="Search films..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="film-list">
        {filteredFilms.length === 0 ? (
          <p>No films found.</p>
        ) : (
          filmData.map(film => (
            <div className="film-item" key={film.id}>
              <div className="card">
                <img src={film.img} alt={film.title} />
                <h3>
                  {film.title.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </h3>
                <p>Year: {film.year}</p>
                <p>Nation: {film.nation}</p>
                <p className='btn'><button onClick={() => { setFilm(film) }}>
              <a href='#popup1' id='openPopUp'>Detail</a></button></p>
              </div>
            </div>
          ))
        )}
        <div id='popup1' className='overlay'>
        <div className='popup'>
          <img src={film.img} />
          <h2>{film.title}</h2>
          <a className='close' href='#'>&times;</a>
          <div className='content'>
            {film.info}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};


