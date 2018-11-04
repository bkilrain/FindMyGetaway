const Clarifai = require("clarifai");

const predict = (event, context, callback) => {
  const app = new Clarifai.App({
    apiKey: process.env.CLARIFAI_KEY
  });
  callback({ data: "blah", api: process.env.CLARIFAI_KEY });
};

exports.handler = predict;
