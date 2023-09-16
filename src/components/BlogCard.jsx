import styles from "../style"
import { blogLinks } from "../constants"

const BlogCard = ({links}) => {
  return (

    // BLOG CONTENT

    <div className='flex flex-row flex-wrap gap-4 py-3'>
        {links.map((link) => (
          <div className="border-solid border border-black rounded-3xl max-w-[260px]">
            <a 
              href=""
              className=""
              >

                {/* IMAGE */}

              <div className="">
                <img 
                src={link.image} 
                alt="image" 
                className="rounded-t-3xl "/>
              </div>

              {/* TITLE & DESCRIPTION */}

              <div className="p-5 max-w-[260px]">
                <h4 className={`${styles.heading4} pb-2`}>
                  {link.title}
                </h4>
                <p className={`${styles.paragraph1} pb-2 leading-6`}>
                  {link.description}
                <p  className={`${styles.paragraph1} pt-1 italic`}>
                  {link.descriptionBy}
                  </p>
                </p>
                <p className={`${styles.paragraph1} font-semibold`}>
                  {link.by}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
  )
}

export default BlogCard