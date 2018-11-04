const Clarifai = require("clarifai");

const predict = (event, context, callback) => {
  const app = new Clarifai.App({
    apiKey: process.env.CLARIFAI_KEY
  });
  callback(null, {
    statusCode: 200,
    body: { data: "here", api: process.env.CLARIFAI_KEY }
  });
};

exports.handler = predict;
