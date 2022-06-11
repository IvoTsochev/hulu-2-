import Thumbnail from "../Tumbnail/Thumbnail";


function Results (props) {

  return (
    <div className="
      px-5
      my-10
      sm:grid
      md:grid-cols-2
      xl:grid-cols-3
      3xl:flex flex-wrap justify-center
    ">
      {
        props.results.map(result => (
          <Thumbnail key={ result.id } result={ result } />
        ))
      }
    </div>
  )
}

export default Results
