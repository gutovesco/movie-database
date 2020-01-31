import React from 'react'

import Result from './Result'

function Results ({ results, openPopup }) {
	return (
		<section className="results">
			{results.map(result => (
				<Result key={result.imdbID} result={result} openPopup={openPopup} />
			))}
		</section>
	)
}

//   const apiurl = "http://www.omdbapi.com/?i=tt3896198&apikey=65aceb7d";

export default Results