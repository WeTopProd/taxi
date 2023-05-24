import {useEffect} from 'react';

const changeMeta = (title, link) => {
  document.title = title;
  console.log(document.head.querySelector('link').setAttribute('href', link));
}

export default changeMeta;
