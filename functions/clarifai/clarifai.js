const Clarifai = require("clarifai");

const predict = (event, context, callback) => {
  const file = event.body
  
  const app = new Clarifai.App({
    apiKey: process.env.CLARIFAI_KEY
  });

  app.inputs.search({ input: { base64: file } }).then(
    function (response) {
      callback(null, { statusCode: 200, body: JSON.stringify(response)})
    },
    function (err) {
      callback(JSON.stringify(err))
    }
  ).catch(err => callback(JSON.stringify(err)));

}
  
exports.handler = predict;
  
