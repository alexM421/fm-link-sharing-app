import React from "react";
import styles from "./LinkItem.module.css"
import IconArrowRight from "../../assets/IconArrowRight";

export default function LinkItem ( { linkData,link}) {

    const { text, image, style } = linkData

    return(
        <a className={styles.container} style={{...style,border: text==="Frontend Mentor"? "1px solid var(--grey-500)":""}} href={link} target="_blank">
                    <div className={styles.text} style={style}>
                        {image}
                        <p className="text-preset-4">{text}</p>
                    </div>
                    <IconArrowRight/>
        </a>
    )
}