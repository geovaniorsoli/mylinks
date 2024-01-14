import style from "../../styles/navbar.module.css"
export default function Navbar({name}) {
    return (
        <>
            <nav class={style.navBarBody}>
                <h1 class={style.name}>{name}</h1>
                <button class={style.navBarButton}> comparilhar </button>
            </nav>
        </>
    )
}