import Thumbnail from "./Thumbnail"
import FlipMove from 'react-flip-move'
function Results({results}) {
    return (
        <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3
        3xl:flex flex-wrap justify-center">
            {/* <h1 > Here is The Result 🔥📍🔥 {requests.id}</h1> */}
            {results.map((re)=> (
                <Thumbnail key={re.id} res={re}/>
            ))}
        </FlipMove>
    )
}

export default Results
