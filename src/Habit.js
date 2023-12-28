import { Link } from "react-router-dom";

function Habit () {
    return (
        
        <div>
            <header class="header">
        <h1  className="App" style={{fontFamily: 'Cairo Play', fontSize: '40px'}}> HabitsNTasks</h1>
        <nav role="navigation">
          <ul class="nav">
            <li class="has-sub-nav">
              <Link to="/Habit"><b>Habits</b></Link>
            </li>
            <li>
              <Link to="/Task"> Tasks </Link>
            </li>
            <li>
              <Link to="/friends"> Friends</Link>
            </li>
            <li>
              <Link to='/'>Home</Link>
            </li>
          </ul>
        </nav>
      </header>
              
        </div>      
    )
}

export default Habit;

