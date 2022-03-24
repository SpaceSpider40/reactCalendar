import style from "../../../Styles/CalendarComponentsStyle.module.css"

export function label (year){
    return <div className={style.sideBarViewLabel}>
        {year}
    </div>
}

export function content(ctx){
    return <div className={style.siderBarViewContent}>{ctx.map(i=>(i))}</div>
}