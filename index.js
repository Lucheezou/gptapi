const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.CLIENT_SECRET,
});
const openai = new OpenAIApi(configuration);
async function xd(){

const response = await openai.createCompletion({
    "model": "text-davinci-003",
    "prompt": "make me a 300 word essay about ai",
    "temperature": 0,
    "max_tokens": 2048
});

const answer = response.data.choices[0].text

console.log(answer)
}

xd()

