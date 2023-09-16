import styles from "../style"
import { cardInfoShowcase1, cardInfoShowcase2, showcase } from "../constants"
import { img1 } from "../assets/images"
import { Card } from "../components"


const Showcase = ({num}) => {
  return (
    <section className='py-[40px]'>

      {/* MAIN CONTENT */}

      <h2 className={`${styles.heading2} max-w-[680px] pt-6`}>
        {showcase[num].title}
      </h2>
      <div className="flex pt-[30px] pb-[20px]">
        <p className={`${styles.paragraph} max-w-[410px]`}>
          {showcase[num].paragraph}
          <br />
          {showcase[num].paragraph2}
        </p>
        <div>
          <img 
          src={showcase[num].image}
          alt="image" 
          width={440}
          height={550}
          className="pl-3"/>
        </div>
      </div>

      {/* FEATURED */}

      {num === 0 
      ? 
        <div>
          <h3 className={`${styles.heading3} py-2`}>
            featured moments
          </h3>

          <div className="flex flex-row gap-5 pt-2 pb-5 justify-evenly">
            {cardInfoShowcase1.map((card) => (
              <Card 
                showcaseCard="True"
                title={card.title}
                description={card.description}
              />
            ))}
          </div> 
        </div>
      : 
      <div>
      <h3 className={`${styles.heading3} py-2`}>
        featured plays
      </h3>

      <div className="flex flex-row gap-5 pt-2 pb-5 justify-evenly">
        {cardInfoShowcase2.map((card) => (
          <Card 
            showcaseCard="True"
            title={card.title}
            description={card.description}
          />
        ))}
      </div> 
    </div>
      }

    </section>
  )
}

export default Showcase