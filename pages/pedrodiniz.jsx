import Navbar from "@/components/Navbar"
import style from "../styles/profile.module.css"
import Image from "next/image"
import Link from "next/link"
export default function geovaniorsoli() {
    return (
        <>
            <Navbar name="@wwdiniz" />
            <div className={style.imgContainer}>
                <Image className={style.img} src="/dinispic.png" width={200} height={200} />
            </div>

            <div className={style.NameContainer}>
                <h1 className={style.name}> Pedro Diniz </h1>
                <h2 className={style.description}> Gamer e amante de carros </h2>
            </div>

            <div className={style.linksContainer}>
                <Link className={style.link} href="https://github.com/Diiniz"> Github </Link>
                <Link className={style.link} href="https://www.instagram.com/wwdiniz/"> Instagram </Link>
                <Link className={style.link} href="https://twitter.com/sapecagen"> X </Link>
            </div>
        </>
  )
}