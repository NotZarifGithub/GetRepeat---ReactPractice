import styles from "../style"

const Card = ({title, description, showcaseCard, logoImage}) => {
  return (
    <div>
        {showcaseCard
        ? <div className={`border-solid border border-black rounded-3xl max-w-[290px] py-7 px-5 
            bg-white hover:bg-[#f6f5f4] transition duration-150 cursor-pointer`}>
            <h4 className={`${styles.heading4} pb-1`}>
                {title}
            </h4>
            <p className={`${styles.paragraph1}`}>
                {description}
            </p>
        </div>
        : <div className={`${styles.flexCenter} border border-solid rounded-3xl bg-black w-[180px] h-[110px]`}>
            <h3 className={`${styles.heading4} text-white`}>
                {logoImage}
            </h3>
        </div>
        }
    </div>
  )
}

export default Card