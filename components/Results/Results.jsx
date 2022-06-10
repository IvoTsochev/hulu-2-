import Thumbnail from "../Tumbnail/Thumbnail";


function Results ({ results }) {

  console.log('results', results.results);

  return (
    <div>
      {
        results.results.map(result => (
          <Thumbnail key={ result.id } result={ result } />
        ))
      }
    </div>
  )
}

export default Results
