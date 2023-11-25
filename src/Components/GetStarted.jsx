import { arrowUp } from "../assets"
import styles from "../style"

const Getstarted = () => (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} w-[100%] h-[100%] rounded-full bg-primary flex-col`}>
        <div className={`${styles.flexStart} flex-row`}>
            <p className="font-poppins font-medium text-[18px] leading-[23px]">
              <span className="text-gradient">Get</span>
            </p>
        </div>
      </div>
      </div>
  )


export default Getstarted