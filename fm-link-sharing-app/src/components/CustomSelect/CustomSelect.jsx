import React from "react";
import styles from "./CustomSelect.module.css"

import ChevronDown from "../../assets/ChevronDown"

export default function CustomSelect ( { legend, selectItemsArr, selected, setSelected}) {

    const [display, setDisplay] = React.useState(false)
    
    const displayRef = React.useRef(undefined)
    const selectedRef = React.useRef(undefined)

    const handleItemsDisplay = () => {

        const ItemsArr = []

        for(let item of selectItemsArr){
            ItemsArr.push(
                <div className={styles.item}>
                    <div 
                    name={item.text}
                    className={`${styles["item-desc"]} ${selected===item? styles["selected-item-wheel"]:""}`}
                    onClick={() => {setSelected(item),setDisplay(false)}}
                    >
                        {item.image}
                        <p className="text-preset-3">{item.text}</p>
                    </div>
                    <hr/>
                </div>
            )
        }

        return (
            <>
                {ItemsArr}
            </>
        )
    }

    React.useEffect(() => { 
        const handleClickOutside = (e) => {
            if(!displayRef.current.contains(e.target) && !selectedRef.current.contains(e.target)){
                setDisplay(false)
            }
        }
        document.addEventListener("mousedown",handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    },[])

    return(
        <div className={`${styles.container} ${display? styles.display:""}`}>
            <p className="text-preset-4">{legend}</p>
            <div className={styles.select}>
                <div 
                className={styles["selected-item"]} 
                onClick={() => setDisplay(prevDisplay => !prevDisplay)}
                ref={selectedRef}
                >
                    <div className={styles["item-desc"]}>
                        {selected.image}
                        <p className="text-preset-3">{selected.text}</p>
                    </div>
                    <ChevronDown className={styles.chevron}/>
                </div>
                 <div className={styles.items} ref={displayRef}>
                    {handleItemsDisplay()}
                 </div>
            </div>
        </div>
    )
}