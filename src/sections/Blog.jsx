import { blogLinks, cardInfoBLog, cardInfoShowcase1, cardInfoShowcase2, logo } from "../constants"
import styles from "../style"
import  { BlogCard, Card }  from "../components"

const Blog = () => {
  return (
    <section className='py-[40px]'>

      {/* HEADING */}

      <h2 className={`${styles.heading2} max-w-[600px] py-[20px]`}>
        your favorite brands are having a moment
      </h2>

      {/* BLOG CONTENT */}

      <BlogCard 
      links={blogLinks}/>

      {/* CARD */}

      <div className="flex flex-row gap-9 pt-2 pb-5 justify-evenly ">
        {logo.map((image) => (
            <Card 
              logoImage={image.logoImage}
            />
        ))}
      </div>
      
        
    </section>
  )
}
// {cardInfoShowcase1.map((cardInfo) => (
//   <Card 
//   title={cardInfo.title}
//   description={cardInfo.description}
//   />
// ))}

export default Blog