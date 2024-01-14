import Navbar from "./components/Navbar"
import style from "../styles/profile.module.css"
import Image from "next/image"
import Link from "next/link"
export default function geovaniorsoli() {
    return (
        <>
            <Navbar name="@arthuraraujo" />
            <div className={style.imgContainer}>
                <Image className={style.img} src="/araujo.jpeg" width={200} height={200} />
            </div>

            <div className={style.NameContainer}>
                <h1 className={style.name}> Arthur Araujo </h1>
                <h2 className={style.description}>deixa eu pensa dps eu falo</h2>
            </div>

            <div className={style.linksContainer}>
                <Link className={style.link} href="https://github.com/unknowuser6969"> Github </Link>
                <Link className={style.link} href="https://www.instagram.com/araujo0.05?igsh=bDQwb3F6azY0ajY2&utm_source=qr"> Instagram </Link>
                <Link className={style.link} href="https://nowecompany.com.br"> nowe company </Link>
            </div>
        </>
  )
}