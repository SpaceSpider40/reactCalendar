import style from "../../../Styles/CalendarComponentsStyle.module.css"

export function label(txt){
    return <div className={style.monthsViewLabel}>
        {txt}
    </div>
}

export function content(ctx){
    return <div className={style.monthsViewContent}>{ctx.map(i=>(<span>{i}</span>))}</div>
}