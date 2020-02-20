function hashString(str) {
  let hash = 0;
  let i;
  let chr;
  if (str.length === 0) return hash;
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

function isObject(value) {
  return value && typeof value === 'object' && value.constructor === Object;
}


const hashContents = contents => {
  let hashable = contents;
  if (Array.isArray(contents)) hashable = contents.join(', ')
  if (isObject(contents)) hashable = Object.keys(contents).join(', ')
  return hashString(hashable)
}

export default hashContents
