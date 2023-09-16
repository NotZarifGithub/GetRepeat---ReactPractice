import { Button } from '../components'
import styles from '../style'
import { heroLinks } from "../constants"
import HeroCard from '../components/HeroCard'

const Hero = ({num}) => {
  return (
    <section className='flex flex-col max-w-[800px]'>
      
      <HeroCard 
      num={num}
      /> 

    </section>
  )
}

export default Hero