import Navbar from "./components/Navbar"
import style from "../styles/profile.module.css"
import Image from "next/image"
import Link from "next/link"
export default function profile() {
    return (
        <>
            <Navbar name="_lauraemidio" />
            <div className={style.imgContainer}>
                <Image className={style.img} src="/laura.png" width={200} height={200} />
            </div>

            <div className={style.NameContainer}>
                <h1 className={style.name}> Laura Emidio </h1>
                <h2 className={style.description}> gatinha </h2>
            </div>

            <div className={style.linksContainer}>
                <Link className={style.link} href="https://letterboxd.com/ldee/"> Letterbox </Link>
                <Link className={style.link} href="https://www.instagram.com/_lauraemidio/"> Instagram </Link>
                <Link className={style.link} href="https://twitter.com/lauraemid"> X </Link>
            </div>
        </>
  )
}
