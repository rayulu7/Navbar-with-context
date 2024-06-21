import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const bgClassName = isDarkTheme ? 'bg-home-dark' : 'bg-home-light'
      const imageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      const textClassName = isDarkTheme ? 'text-home-light' : 'text-home-dark'

      return (
        <div className={`bg-container ${bgClassName}`}>
          <Navbar />
          <div className="home-page-container">
            <div className="home-container">
              <img className="image" src={imageUrl} alt="home" />
              <h1 className={`heading ${textClassName}`}>Home</h1>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
