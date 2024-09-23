import '../App.css';
import About from '../components/About.js'
import Blog from '../components/Blog.js';
import Contact from '../components/Contact.js'
import Voting from '../components/Voting.js'
import Clicker from '../components/Clicker.js'
import ChildComponent from '../components/ChildComponent.js'
import Department from './Department.js';
function Home() {
  const regn={regno: 111722202043, cp: "&copy;"};
  const brands=[
    {name:"Samsung",model:"Galaxy F41"},
    {name:"Motorola",model:"g62 5g"},
    {name:"Apple",model:"iPhone 12 Pro Max"}
  ]
  const handleClick=()=>{alert("Button clicked in child component")};
  return (
    <div className="App">
      <h1>Yo!!</h1>
      <Blog />
      <About />
      <Contact reg={regn}/>
      <p>&copy; 111722202043</p>
      <div>
        {brands.map((mob)=>(<Voting brandname={mob.name} model={mob.model}/>))}
      </div>
      <Clicker />
      <ChildComponent onClick={handleClick} />
      <Department />
    </div>
  );
}

export default Home;
