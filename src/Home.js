import { useState } from "react"

const Home = () => {
    const [name, setName] = useState('Mario')
    const [age, setAge] = useState(17)

    const handleClick = () => {
        setName('Luigi')
        setAge(19)
    }
    
    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>Hallo, my name's {name} and I'm {age}</p>
            <button onClick={ handleClick }>Click Me</button>
        </div>
      );
}
 
export default Home;