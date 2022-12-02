import React, { useState } from 'react';
import { render } from 'react-dom';
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';


const  TodosApp = () => {
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  return (
    <div>
      <Picker onEmojiClick={onEmojiClick} disableAutoFocus={true} native />
      {chosenEmoji && <EmojiData chosenEmoji={chosenEmoji} />}
    </div>
  );
};

const EmojiData = ({ chosenEmoji }) => (
  <div>
    <strong>Unified:</strong> {chosenEmoji.unified}
    <br />
    <strong>Names:</strong> {chosenEmoji.names.join(', ')}
    <br />
    <strong>Symbol:</strong> {chosenEmoji.emoji}
    <br />
    <strong>ActiveSkinTone:</strong> {chosenEmoji.activeSkinTone}
  </div>
);

export default TodosApp;