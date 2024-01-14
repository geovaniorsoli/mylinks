import Navbar from "@/components/Navbar"
import style from "../styles/profile.module.css"
import Image from "next/image"
import Link from "next/link"
export default function geovaniorsoli() {
    return (
        <>
            <Navbar name="@geovaniorsoli" />
            <div className={style.imgContainer}>
                <Image className={style.img} src="/pic.png" width={200} height={200} />
            </div>

            <div className={style.NameContainer}>
                <h1 className={style.name}> Geovani Orsoli </h1>
                <h2 className={style.description}> Desenvolvedor web</h2>
            </div>

            <div className={style.linksContainer}>
                <Link className={style.link} href="https://geovaniorsoli.vercel.com"> Portfolio </Link>
                <Link className={style.link} href="https://github.com/geovaniorsoli"> Github </Link>
                <Link className={style.link} href="https://www.instagram.com/geovaniorsoli/"> Instagram </Link>
                <Link className={style.link} href="https://www.instagram.com/berg.skt/"> Instagram - skate </Link>
                <Link className={style.link} href="https://x.com/geovaniorsoli"> X </Link>
                <Link className={style.link} href="https://nowecompany.com.br"> nowe company </Link>
            </div>
        </>
  )
}