import style from "../../../Styles/CalendarComponentsStyle.module.css"
export function label (year){
    return <div className={style.yearsViewLabel}>
        {year}
    </div>
}

export function content(ctx){
    return <div className={style.yearsViewContent}>{ctx.map(i=>(<span>{i}</span>))}</div>
}