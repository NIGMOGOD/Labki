    function filterBy(arr, type) {
      let result = [];
      arr.forEach(item => {
        if (typeof item !== type) {
          result.push(item);
        }
      });
      return result;
    }

    const array = ['hello', 'world', 23, '23', null];
    const typeToFilter = 'string';
    const filteredArray = filterBy(array, typeToFilter);
    console.log(filteredArray);
