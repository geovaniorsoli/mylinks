import Navbar from "../components/navbar"
import Image from "next/image"
import style from "../styles/link.module.css"
import { Link, Button} from "@nextui-org/react"
export default function geovaniorsoli() {
    return (
        <>
            <Navbar name="geovaniorsoli" copylink="geovani" />
            <Image src="/pic.png" width={200} height={200} className={style.avatar} />
            <h1 className={style.name}>geovani orsoli</h1>
            <h2 className={style.description}> desenvolvedor web</h2>

            <div className={style.container}>
                <Link className={style.link} href="https://github.com/geovaniorsoli"> Portfolio </Link>
                <Link className={style.link} href="https://github.com/geovaniorsoli"> Github </Link>
                <Link className={style.link} href="https://github.com/geovaniorsoli"> Currículo </Link>
                <Link className={style.link} href="https://github.com/geovaniorsoli"> Instagram </Link>
                <Link className={style.link} href="https://x.com/geovaniorsoli"> X </Link>
            </div>

            <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
        </>
    )
}