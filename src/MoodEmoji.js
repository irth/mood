import React from 'react';

import {Twemoji} from 'react-emoji-render';

const moodEmojis = [
  '\u{1F636}',
  '\u{1F61E}',
  '\u{1F610}',
  '\u{1F60A}',
  '\u{1F604}',
];

export default ({mood, size}) => (
  <Twemoji text={moodEmojis[mood - 1]} style={{fontSize: size || 32}} />
);
