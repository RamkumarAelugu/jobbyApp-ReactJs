import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="home-background">
    <Header />
    <h1 className="heading">Find The Job That Fits Your Life</h1>
    <p className="discription">
      Millions of people are searching for jobs, salary <br /> information,
      company reviews. Find the job that fits your <br />
      abilities and potential.
    </p>
    <button type="button" className="buttn">
      <Link to="/jobs" className="findjobs-button">
        Find Jobs
      </Link>
    </button>
  </div>
)

export default Home
