export const ALL_LISTS = "lists";
export const ALL_TODOS = "all";
export const ACTIVE_TODOS = "active";
export const COMPLETED_TODOS = "completed";

export default {
  uuid() {
    /*jshint bitwise:false */
    var i, random;
    var uuid = "";

    for (i = 0; i < 32; i++) {
      random = (Math.random() * 16) | 0;
      if (i === 8 || i === 12 || i === 16 || i === 20) {
        uuid += "-";
      }
      // eslint-disable-next-line
      uuid += (i === 12 ? 4 : i === 16 ? (random & 3) | 8 : random).toString(
        16
      );
    }

    return uuid;
  },

  pluralize(count, word) {
    return count === 1 ? word : word + "s";
  },

  store(namespace, data) {
    if (data) {
      return localStorage.setItem(namespace, JSON.stringify(data));
    }

    var store = localStorage.getItem(namespace);
    return (store && JSON.parse(store)) || [];
  },

  extend() {
    var newObj = {};
    for (var i = 0; i < arguments.length; i++) {
      var obj = arguments[i];
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          newObj[key] = obj[key];
        }
      }
    }
    return newObj;
  },

  searchClarify: file => {
		console.log(file)
    window.fetch(
      `/.netlify/functions/clarifai`,
      {
				method: "POST",
				// type: 'image/json',
        body: file
      }
    ).then(res => {
			console.log('resing', res)
			return res.json()
		}).then(json => console.log(json)).catch(err => console.log(err))
		// const res = await response.json();
		// console.log(res)
		// return res
  }
};

// getUrl: async file => {
// 	var reader = new FileReader();
// 	reader.addEventListener('loadend', ()=> {

// 		const response = await window.fetch(
// 			`https://f6qcg6chj5.execute-api.us-east-1.amazonaws.com/dev/requestUploadURL`,
// 			{
// 				method: "POST",
// 				body: new Blob([reader.result], { type: file.type })
//     }
// 		);
// 		return await response.json();
// 	})
// },
// upload: async (url, file) => {
//   const ack = await window.fetch(url, {
//     method: "PUT",
//     body: file
//   });
//   console.log(ack);
// }
