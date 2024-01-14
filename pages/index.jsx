import style from "../styles/home.module.css"
export default function home() {
  return (
    <>

      <div className={style.container}>
        <h1 class={style.title}> Meus links </h1>
        <h2 className={style.description}>
          Um lugar
          para organizar
          todos seus links
        </h2>
      </div>
    </>
  )
}