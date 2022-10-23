import Footer from "../components/Footer"
import Header from "../components/Header"
import { Grid, Image } from 'semantic-ui-react'
import BodyHome from "../components/BodyHome"

const Home = () => {
  return (
    <div>
        <Header/>
        <BodyHome/>
        <Footer/>
    </div>
  )
}

export default Home