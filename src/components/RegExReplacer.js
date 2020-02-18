const RegExReplacer = () => {
  const sortAndReplace = obj => {
    let sortedKeys = [];
    for (let [k, v] of Object.entries(obj)) {
      if (v === "link-color") {
        sortedKeys = [...sortedKeys, k];
      } else {
        sortedKeys = [k, ...sortedKeys];
      }
    }

    const sortedObj = JSON.stringify(obj, sortedKeys);

    let replacedObject = sortedObj.replace(/[:](\"link-color\")/g, ':"#244cde"');
    return replacedObject;
  };

  window.sortAndReplace = sortAndReplace;
  return "";
};

export default RegExReplacer;
