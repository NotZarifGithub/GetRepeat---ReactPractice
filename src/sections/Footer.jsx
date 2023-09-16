import { instagram, tiktok, twitter, linkedin } from "../assets/icons"
import { footerLinks } from "../constants"
import styles from "../style"

const Footer = () => {
  return (
    <footer className='text-white'>

      {/* FOOTER CONTENT */}

      <div className="flex items-center justify-between">

        {/* LOGO IMAGE*/}
        
        <div>
          <img 
          src="https://assets.super.so/18f07db5-d58c-4144-a891-0df945119dae/uploads/logo/d1b51549-14d0-4e6e-83f8-e947eb2a3df5.svg" 
          alt="image" 
          />
        </div>

        {/* SOCIAL LINKS */}

        <div className="flex">
          <img src={linkedin} alt="linkedin" width={30} height={30}/>
          <img src={twitter} alt="twitter" width={30} height={30} />
          <img src={instagram} alt="instagram" width={30} height={30} />
          <img src={tiktok} alt="tiktok" width={30} height={30}/>
        </div>
      </div>

      {/* FOOTER LINKS */}
      
      <div className="flex gap-4 py-8">
        {footerLinks.map((link) => (
          <h4 className={`${styles.heading4} text-white font-light cursor-pointer`}>
            {link.title}
          </h4>
        ))}
      </div>

      {/* TERMS & CONDITIONS */}
      
      <div>
          <p className={`${styles.paragraph}`}>
          © 2023 REPEAT INC. Moments is a trademark of Repeat, Inc.
          </p>
      </div>
    </footer>

  )
}

export default Footer