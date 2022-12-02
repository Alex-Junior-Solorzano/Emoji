import React, {useRef} from 'react'
import EmojiPiker from './emojiPiker.jsx'
import styles from "./emojiPiker.module.scss";

const EmojiPikerInput = () => {

    const refInput = useRef(null);


  return (
    <div className={styles.inputContainer} >
        <input ref={refInput} type="text" />

        <EmojiPiker ref={refInput} />
    </div>
  )
}

export default EmojiPikerInput