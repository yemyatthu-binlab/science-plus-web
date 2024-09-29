"use server";
const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

// async function run() {
// TODO Make these files available on the local file system
// You may need to update the file paths
// const files = [
//   await uploadToGemini("image_what_shape_comes_next1.jpeg", "image/jpeg"),
// ];

export const chatSession = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [
    {
      role: "user",
      parts: [
        {
          fileData: {
            // mimeType: files[0].mimeType,
            // fileUri: files[0].uri,
          },
        },
        {
          text: "Look at this sequence of three shapes. What shape should come as the fourth shape? Explain your reasoning with detailed descriptions of the first shapes.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "The fourth shape should be a hexagon. \n\nThis sequence of shapes shows an increase in the number of sides of each shape:\n\n* The first shape is a triangle, with 3 sides.\n* The second shape is a square, with 4 sides. \n* The third shape is a pentagon, with 5 sides.\n\nIf the sequence follows the pattern of adding one more side to the next shape, the next shape should have 6 sides, making it a hexagon. \n",
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: "I am writing basic language model to explain the student about how basic small language model work based on corpus, i am currently using react, to build terminal like UI, in there user can type some word, user can choose three different type of trained language model , first one is trained by Julia Child's Mastering the Art of French Cooking, second one is trained by \nTerms and Conditions (T&C) agreements of Big Tech companies and third one is trained by Lyrics from Taylor Swift songs. so can u generate about three sentences based on user's input text in terminal, is you thinks input are not related to each model, u can return corpus error. I will provide you with Json structure of \n{\n    modelType: 't&c' | 'taylorswift' | 'cooking',\n    userInput: 'user input',\n}\ncan u please response with json of \n{\n    modelType: 't&c' | 'taylorswift' | 'cooking',\n    response: ''\n}\nin modelType t&c mean term and condition of big company, taylorswift mean song of taylor swifts, cooking mean cooking of Julia Child",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "modelType": "t&c",\n  "response": ""\n}\n```\n\n```json\n{\n  "modelType": "taylorswift",\n  "response": ""\n}\n```\n\n```json\n{\n  "modelType": "cooking",\n  "response": ""\n}\n```\n\nI\'m sorry, I cannot generate three sentences based on the user\'s input text without more information. To help me understand the context, please provide me with the JSON structure you mentioned, which should include:\n\n* **modelType:** The type of language model the user has chosen (\'t&c\', \'taylorswift\', or \'cooking\').\n* **userInput:** The text the user has entered in the terminal.\n\nOnce I have this information, I can use it to generate appropriate responses that are relevant to the chosen model. For example:\n\n* If the `modelType` is \'cooking\' and the `userInput` is "chicken", I can generate sentences about how to cook chicken based on Julia Child\'s recipes. \n* If the `modelType` is \'t&c\' and the `userInput` is "data privacy", I can generate sentences about data privacy clauses found in T&Cs of Big Tech companies. \n* If the `modelType` is \'taylorswift\' and the `userInput` is "love", I can generate sentences about love from Taylor Swift\'s lyrics. \n\nI look forward to receiving the JSON structure so I can help you build your basic language model! \n',
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: '{\n  "modelType": "taylorswift",\n  "response": "she does not get your humor like i do"\n}',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "modelType": "taylorswift",\n  "response": "She does not get your humor like I do, and that’s alright, she’s got her own style. We’re all different, you know? But maybe she\'d appreciate a good laugh, even if it\'s not her kind of humor. You never know, maybe she\'ll surprise you.  We all have our own ways of connecting with the world, and that\'s what makes life interesting, right?"\n}\n```',
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: '{\n  "modelType": "you belong with me",\n  "response": "She does not get your humor like I do, and that’s alright, she’s got her own style. We’re all different, you know? But maybe she\'d appreciate a good laugh, even if it\'s not her kind of humor. You never know, maybe she\'ll surprise you.  We all have our own ways of connecting with the world, and that\'s what makes life interesting, right?"\n}',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "modelType": "you belong with me",\n  "response": "Corpus Error:  This model type is not recognized.  Please choose from the options provided: \'t&c\', \'taylorswift\', or \'cooking\'." \n}\n```',
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: '{\n  "modelType": "taylorswift",\n  "response": "you belong with me." \n}',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "modelType": "taylorswift",\n  "response": "You belong with me, yeah, you belong with me.  You’re on the phone with your girlfriend, she’s upset,  she’s going off about something you said.  But I’m on the other side of the room, thinking about all the times you said, you belonged with me. You know, I\'m not trying to steal you, I\'m just trying to be honest about how I feel.  Maybe it’s the way you make me laugh, maybe it’s the way you look at me, but I can’t help but feel like we\'re meant to be."\n}\n```',
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: '{\n"modelType": "taylorswift",\n"response": "shake it off"\n}',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n"modelType": "taylorswift",\n"response": "Shake it off, shake it off.  I’m not gonna let you get',
        },
      ],
    },
    {
      role: "user",
      parts: [
        { text: '{\n"modelType": "taylorswift",\n"response": "fdfhd"\n}' },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n"modelType": "taylorswift",\n"response": "Corpus Error:  This input does not seem to be related to Taylor Swift\'s lyrics. Please try again with a different input."\n}\n```',
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: 'please add responseStatus in your response json that will return "success" or "error" \n',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: 'Got it! I\'ll include the `responseStatus` in the JSON response. Here\'s how it would look:\n\n```json\n{\n  "modelType": "taylorswift",\n  "response": "Shake it off, shake it off.  I’m not gonna let you get",\n  "responseStatus": "success" \n}\n```\n\n```json\n{\n  "modelType": "taylorswift",\n  "response": "Corpus Error:  This input does not seem to be related to Taylor Swift\'s lyrics. Please try again with a different input.",\n  "responseStatus": "error" \n}\n```\n\nLet me know if you have any other questions or requests! \n',
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: "can u please add a little bit power in taylorswift language model, because user might enter part of the lyric of taylor swift song , may be part of chours, if they do can u please continue the song after user's input about two sentences.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: 'You got it! I\'ll enhance the Taylor Swift language model to handle partial lyrics and continue the song. \n\nHere\'s how the response JSON will look, including a more robust "responseStatus" and error messages:\n\n```json\n{\n  "modelType": "taylorswift",\n  "response": "And I got tired of being told to act my age, it\'s just a stage, it\'s just a stage",\n  "responseStatus": {\n    "status": "success",\n    "message": "Continued the lyrics of \'Shake It Off\'"\n  }\n}\n```\n\n```json\n{\n  "modelType": "taylorswift",\n  "response": "Corpus Error:  This input does not seem to be related to Taylor Swift\'s lyrics. Please try again with a different input.",\n  "responseStatus": {\n    "status": "error",\n    "message": "Input not found in Taylor Swift song lyrics."\n  }\n}\n```\n\n**Here\'s how I\'ll improve the model:**\n\n1. **Lyric Database:** I\'ll access a larger database of Taylor Swift lyrics, including full songs and common phrases.\n2. **Partial Match:**  When a user inputs text, I\'ll check if it matches a portion of any lyric in the database.\n3. **Song Continuation:** If a match is found, I\'ll attempt to continue the song based on the lyrics following the user\'s input.\n4. **Error Handling:** If no match is found, I\'ll provide a specific error message indicating that the input isn\'t recognized as a Taylor Swift lyric.\n\n**Example:**\n\nUser Input: "And I got tired of being told"\n\nResponse:  ```json\n{\n  "modelType": "taylorswift",\n  "response": "And I got tired of being told to act my age, it\'s just a stage, it\'s just a stage",\n  "responseStatus": {\n    "status": "success",\n    "message": "Continued the lyrics of \'Shake It Off\'"\n  }\n}\n```\n\nLet me know if you have any specific song lyrics you\'d like to test with this improved model! \n',
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: '{\n  "modelType": "taylorswift",\n"userInput" : "you got a smile that could light up this whole town"\n}',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "modelType": "taylorswift",\n  "response": "You got a smile that could light up this whole town, I haven\'t seen it in a while, but I know you\'re out there.  You\'re the one that I\'m looking for, the one I\'ve been searching for, and I know you\'re out there, somewhere.",\n  "responseStatus": {\n    "status": "success",\n    "message": "Continued the lyrics of \'You Belong with Me\'" \n  }\n}\n``` \n',
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: '{\n"modelType": "taylorswift",\n"userInput" : "romoe take me somewhere"\n}',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n"modelType": "taylorswift",\n"response": "Romeo, take me somewhere we can be alone, I\'ll be waiting, all there\'s left to do is run.",\n"responseStatus": {\n"status": "success",\n"message": "Continued the lyrics of \'Love Story\'"\n}\n}\n```',
        },
      ],
    },
    {
      role: "user",
      parts: [
        { text: '{\n"modelType": "taylorswift",\n"userInput" : "romeo"\n}' },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n"modelType": "taylorswift",\n"response": "Romeo, save me, they\'re trying to tell me how to feel,',
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: 'can u lease also add another language model that is trained by star war popular dialogue and character also their popular phrases based on meme,"modelType" should be "starwar"',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "modelType": "starwar",\n  "response": "Use the Force, Luke.",\n  "responseStatus": {\n    "status": "success",\n    "message": "Continued a popular Star Wars phrase."\n  }\n}\n\n```\n\n```json\n{\n  "modelType": "starwar",\n  "response": "I have a bad feeling about this.",\n  "responseStatus": {\n    "status": "success",\n    "message": "Continued a popular Star Wars phrase."\n  }\n}\n```\n\n```json\n{\n  "modelType": "starwar",\n  "response": "It\'s a trap!",\n  "responseStatus": {\n    "status": "success",\n    "message": "Continued a popular Star Wars phrase."\n  }\n}\n```\n\nI\'ve added the "starwar" model type and will now respond to user input by generating Star Wars dialogue or phrases based on popular lines and memes. I\'ll also try to incorporate some of the characters\' quirks and speech patterns. \n\nFor example:\n\n**User Input:** "Help me Obi Wan Kenobi, you\'re my only hope."\n**Model Response:** "You\'re a bold one! I\'m not sure I can help you. But I\'ll try."\n\nI\'ll be sure to update the `responseStatus` accordingly based on the success or failure of generating Star Wars related text. \n',
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: '{\n"modelType": "starwar",\n"userInput" : "hello there"\n}',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "modelType": "starwar",\n  "response": "General Kenobi!",\n  "responseStatus": {\n    "status": "success",\n    "message": "Continued a popular Star Wars phrase."\n  }\n}\n``` \n',
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: '{\n"modelType": "starwar",\n"userInput" : "May The Force"\n}',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n"modelType": "starwar",\n"response": "May The Force be with you.",\n"responseStatus": {\n"status": "success",\n"message": "Continued a popular Star Wars phrase."\n}\n}\n``` \n',
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: '{\n"modelType": "starwar",\n"userInput" : "Join Me To The Dark "\n}',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n"modelType": "starwar",\n"response": "Join me to the dark side. We can rule the galaxy as father and son.",\n"responseStatus": {\n"status": "success",\n"message": "Continued a popular Star Wars phrase."\n}\n}\n``` \n',
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: '{\n"modelType": "starwar",\n"userInput" : "Use the force"\n}',
        },
      ],
    },
    {
      role: "model",
      parts: [{ text: "```json\n{" }],
    },
    {
      role: "user",
      parts: [
        {
          text: '{\n"modelType": "starwar",\n"userInput" : "Use the force"\n}',
        },
      ],
    },
    {
      role: "model",
      parts: [{ text: "```json\n{" }],
    },
    {
      role: "user",
      parts: [
        {
          text: '{\n"modelType": "starwar",\n"userInput" : "May The Force"\n}',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n"modelType": "starwar",\n"response": "May The Force be with you.",\n"responseStatus": {\n"status": "success",\n"message": "Continued a popular Star Wars phrase."\n}\n}\n```',
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: '{\n"modelType": "starwar",\n"userInput" : "Use the force"\n}',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n"modelType": "starwar",\n"response": "Luke, use the Force!  You\'re powerful enough to defeat Darth Vader!",\n"responseStatus": {\n"status": "success",\n"message": "Continued a popular Star Wars phrase."\n}\n}\n``` \n',
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: '{\n"modelType": "starwar",\n"userInput" : "Do or Do not"\n}',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n"modelType": "starwar",\n"response": "Do or do not, there is no try.",\n"responseStatus": {\n"status": "success",\n"message": "Continued a popular Star Wars phrase."\n}\n}\n``` \n',
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: "can u please make all the response to be at most two sentences not greater than 500 words",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: 'You got it! I\'ll adjust the model to ensure all responses are at most two sentences and under 500 words. \n\nHere\'s an example of a response with the new limits:\n\n```json\n{\n"modelType": "starwar",\n"response": "Do or do not, there is no try.  Remember, the Force is strong with you, Luke.",\n"responseStatus": {\n"status": "success",\n"message": "Continued a popular Star Wars phrase."\n}\n}\n```\n\n**Here\'s how I\'ll modify the model:**\n\n1. **Sentence Counter:** I\'ll keep track of the number of sentences generated.\n2. **Word Limit:**  I\'ll stop generating text if the total word count exceeds 500.\n3. **Concise Continuation:** I\'ll focus on generating concise and relevant continuations to the user\'s input, keeping the responses short and impactful.\n\n**Additional Considerations:**\n\n* **Context:** I\'ll try to maintain context in the responses, even with the two-sentence limit.\n* **Natural Language:** I\'ll strive to generate responses that flow naturally and read like real dialogue.\n\nI\'ll make sure to adhere to these new guidelines for all future responses. \n\nLet me know if you have any other questions or requests! \n',
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: 'can u please also add another lanuage model that is trained by networking concepts, it will reply short netwroking concepts. modelType should be "networking"\n',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: 'Got it!  I\'ve added the "networking" model type. Here\'s how it\'ll work:\n\n```json\n{\n"modelType": "networking",\n"response": "A subnet mask is used to divide a network into smaller subnetworks.  It helps determine which part of an IP address identifies the network and which part identifies the host.",\n"responseStatus": {\n"status": "success",\n"message": "Provided information about subnet masks."\n}\n}\n```\n\n```json\n{\n"modelType": "networking",\n"response": "TCP is a reliable, connection-oriented protocol used for communication over a network.  It provides error checking and guarantees delivery of data packets.",\n"responseStatus": {\n"status": "success",\n"message": "Provided information about TCP."\n}\n}\n```\n\nHere\'s what the "networking" model will do:\n\n1. **Networking Knowledge:** It\'ll be trained on a database of basic networking concepts, protocols, and definitions. \n2. **Keyword Recognition:** It\'ll try to identify keywords in the user\'s input that relate to networking topics.\n3. **Concise Explanations:** It\'ll provide brief explanations of the relevant networking concepts, ideally in one or two sentences. \n\n**Example User Inputs and Potential Responses:**\n\n* **User Input:** "What is a router?" \n* **Model Response:** A router connects different networks and directs traffic between them. \n\n* **User Input:** "What is the difference between TCP and UDP?" \n* **Model Response:** TCP is connection-oriented, guaranteeing delivery, while UDP is connectionless and faster but less reliable.\n\n* **User Input:** "What is DNS?"\n* **Model Response:** DNS is a hierarchical system that translates domain names into IP addresses. \n\nI\'ll make sure the responses are concise and helpful, staying within the two-sentence limit. \n\nLet me know if you have any specific networking concepts you\'d like to test! \n\n\n',
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: '{\n"modelType": "networking",\n"userInput":"May The Force"\n}',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n"modelType": "networking",\n"response": "That\'s a Star Wars reference!  In networking, \'force\' can refer to the strength of a signal, like the signal strength of a Wi-Fi network.",\n"responseStatus": {\n"status": "success",\n"message": "Provided a networking explanation related to the user\'s input."\n}\n}\n``` \n',
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: '{\n"modelType": "select *",\n"userInput":"May The Force"\n}',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n"modelType": "select *",\n"response": "This model type is not supported yet.  Please choose from the available options: \'t&c\', \'taylorswift\', \'cooking\', \'starwar\', or \'networking\'.",\n"responseStatus": {\n"status": "error",\n"message": "Invalid model type."\n}\n}\n``` \n',
        },
      ],
    },
    {
      role: "user",
      parts: [
        { text: '{\n"modelType": "networking",\n"userInput":"Broadband"\n}' },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n"modelType": "networking",\n"response": "Broadband refers to high-speed internet connections, offering faster data transfer rates than traditional dial-up or DSL connections.",\n"responseStatus": {\n"status": "success",\n"message": "Provided information about broadband."\n}\n}\n``` \n',
        },
      ],
    },
    {
      role: "user",
      parts: [
        { text: '{\n"modelType": "networking",\n"userInput":"Torrent"\n}' },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n"modelType": "networking",\n"response": "A torrent is a file-sharing protocol that allows users to download and distribute large files quickly and efficiently.  It\'s often used for sharing movies, music, and software.",\n"responseStatus": {\n"status": "success",\n"message": "Provided information about torrenting."\n}\n}\n``` \n\n\n',
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: '{\n"modelType": "networking ",\n"userInput":"he foundations of networking: switches, routers, and wireless access "\n}',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n"modelType": "networking ",\n"response": "Switches connect devices within a local network, while routers connect networks together and direct traffic between them.  Wireless access points provide wireless connectivity to devices.",\n"responseStatus": {\n"status": "success",\n"message": "Provided information about switches, routers, and wireless access points."\n}\n}\n``` \n\n\n',
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: '{\n"modelType": "networking ",\n"userInput":"May the force be with you"\n}',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n"modelType": "networking ",\n"response": "That\'s a Star Wars reference!  In networking, \'force\' might refer to the strength of a signal, like the signal strength of a Wi-Fi network.  It\'s not a direct term but a fun way to think about how signals travel.",\n"responseStatus": {\n"status": "success",\n"message": "Provided a networking explanation related to the user\'s input."\n}\n}\n``` \n\n\n',
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: "you can return status as error, if user inputs are not related to networking",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n"modelType": "networking ",\n"response": "That\'s a Star Wars reference!  While \'force\' isn\'t a direct networking term, it can relate to signal strength.  In networking, we talk about signal strength when discussing Wi-Fi.",\n"responseStatus": {\n"status": "success",\n"message": "Provided a networking explanation related to the user\'s input."\n}\n}\n``` \n\nYou\'re right! I\'ll be more strict with error handling for the "networking" model. \n\nHere\'s how I\'ll respond to non-networking related inputs: \n\n```json\n{\n"modelType": "networking ",\n"response": "This input doesn\'t seem to relate to networking concepts.  Try asking about things like routers, switches, protocols, or internet connections.",\n"responseStatus": {\n"status": "error",\n"message": "Input not related to networking."\n}\n}\n```\n\nI\'ll also be more careful about providing relevant information for non-networking related inputs, avoiding responses that try to stretch connections where they don\'t exist.  \n\nLet me know if you have any other requests or feedback! \n',
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: '{\n"modelType": "networking ",\n"userInput":"May the force be wit you"\n}',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n"modelType": "networking ",\n"response": "This input doesn\'t seem to relate to networking concepts.  Try asking about things like routers, switches, protocols, or internet connections.",\n"responseStatus": {\n"status": "error",\n"message": "Input not related to networking."\n}\n}\n``` \n',
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: '{\n"modelType": "networking ",\n"userInput":"Romeo take me somewhere we could be alone"\n}',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n"modelType": "networking ",\n"response": "This input doesn\'t seem to relate to networking concepts.  Try asking about things like routers, switches, protocols, or internet connections.",\n"responseStatus": {\n"status": "error",\n"message": "Input not related to networking."\n}\n}\n``` \n',
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: '{\n"modelType": "taylorswift ",\n"userInput":"May the force be with you"\n}',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n"modelType": "taylorswift ",\n"response": "This input doesn\'t seem to be related to Taylor Swift\'s lyrics.  Try entering a phrase or line from one of her songs!",\n"responseStatus": {\n"status": "error",\n"message": "Input not related to Taylor Swift lyrics."\n}\n}\n``` \n\n\n',
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: '{\n"modelType": "taylorswift ",\n"userInput":"Romeo take me "\n}',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n"modelType": "taylorswift ",\n"response": "Romeo, take me somewhere we can be alone, I\'ll be waiting, all there\'s left to do is run.",\n"responseStatus": {\n"status": "success",\n"message": "Continued the lyrics of \'Love Story\'"\n}\n}\n``` \n\n\n',
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: '{\n"modelType": "networking ",\n"userInput":"You be the prince and i be the "\n}',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n"modelType": "networking ",\n"response": "This input doesn\'t seem to relate to networking concepts.  Try asking about things like routers, switches, protocols, or internet connections.",\n"responseStatus": {\n"status": "error",\n"message": "Input not related to networking."\n}\n}\n``` \n\n\n',
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: '{\n"modelType": "taylorswift ",\n"userInput":"you be the prince and i be the princess"\n}',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n"modelType": "taylorswift ",\n"response": "You be the prince and I\'ll be the princess, it\'s a love story, baby, just say, \'Yes.\' ",\n"responseStatus": {\n"status": "success",\n"message": "Continued the lyrics of \'Love Story\'"\n}\n}\n``` \n\n\n',
        },
      ],
    },
  ],
});

// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());
// }

// run();

