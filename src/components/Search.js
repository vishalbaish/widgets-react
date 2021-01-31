import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  const RenderedResults = (results.map((result) => {
      return (<div key={result.pageid} className='ui item'>
          <div className='ui right floated content'>
                  <a className='ui button' href={`https://en.wikipedia.org?curid=${result.pageid}`}>GO</a>
              </div>
          <div className='ui content'>
              <div className='ui header'>
                  {result.title}
              </div>
              <div>
                  <span dangerouslySetInnerHTML={{  __html : result.snippet }}></span>
              </div>
          </div>
      </div>)
  }))
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      });

      setResults(data.query.search);
    };
    const timeoutId = setTimeout(() => {
        if (term) {
            search();
        }
    }, 500);

    return () => {
        clearTimeout(timeoutId);
    };
    }, [term]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className='ui celled list'>{RenderedResults}</div>
    </div>
  );
};

export default Search;