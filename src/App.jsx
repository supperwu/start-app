import StarRating from './StarRating'
import './App.css'

function App() {
  return (
    <StarRating
      style={{ padding: '10px', backgroundColor: 'lightblue' }}
      totalStars={6}
      onDoubleClick={() => alert('Double clicked!')}
    />
  )
}

export default App
