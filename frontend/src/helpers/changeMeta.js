const changeMeta = (title, link) => {
  document.title = title;
  document.head.querySelector('link').setAttribute('href', link);
};

export default changeMeta;
