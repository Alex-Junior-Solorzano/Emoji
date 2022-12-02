import React, {useState} from 'react'
import styles from "./emojiPiker.module.scss";

const EmojiSeacher = ({onSearch}) => {
    const [value, setValue] = useState('');

    function handleChange (e) {
        setValue(e.target.value);
        onSearch(e);
    }

  return (
    <input className={styles.search} type = "text" onChange={handleChange} value = {value}/>
  )
}

export default EmojiSeacher