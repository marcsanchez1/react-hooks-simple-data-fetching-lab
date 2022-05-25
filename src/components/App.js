// create your App component here
import React, {useState, useEffect} from 'react'

function App() {
  const [image, setImage] = useState(null)
   useEffect(() => {
    console.log("This is the useEffect")
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(resp => resp.json())
      .then((data) => {
        setImage(data.message);
      })
    },[])

  if (!image) return <p>Loading...</p>;

  return (
    <img src={image} alt="A Random Dog" />
  )
}


export default App