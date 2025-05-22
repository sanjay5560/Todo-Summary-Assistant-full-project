const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function generateSummary(todos) {
  const prompt = `Summarize the following pending to-dos:\n\n${todos.map(t => `- ${t.task}`).join('\n')}`;
  const res = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt,
    max_tokens: 100,
  });
  return res.data.choices[0].text.trim();
}

module.exports = { generateSummary };
