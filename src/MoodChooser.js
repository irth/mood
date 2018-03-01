import React from 'react';

import MoodEmoji from './MoodEmoji';

const EmojiButton = ({onClick, mood}) => (
  <a onClick={() => onClick(mood)} className="bigEmoji">
    <MoodEmoji mood={mood} size={50} />
  </a>
);

export default ({onSelected}) => (
  <div className="Chooser">
    <EmojiButton onClick={onSelected} mood={1} />
    <EmojiButton onClick={onSelected} mood={2} />
    <EmojiButton onClick={onSelected} mood={3} />
    <EmojiButton onClick={onSelected} mood={4} />
    <EmojiButton onClick={onSelected} mood={5} />
  </div>
);
