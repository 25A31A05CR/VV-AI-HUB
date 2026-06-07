// ===============================
// VV AI HUB
// ===============================

// -------------------------------
// AI TOOLS DATABASE
// -------------------------------

const aiTools = {

"Text Generation": [
{name:"ChatGPT",url:"https://chatgpt.com"},
{name:"Claude",url:"https://claude.ai"},
{name:"Gemini",url:"https://gemini.google.com"},
{name:"Jasper",url:"https://jasper.ai"},
{name:"Copy.ai",url:"https://copy.ai"},
{name:"Writesonic",url:"https://writesonic.com"},
{name:"Rytr",url:"https://rytr.me"},
{name:"Anyword",url:"https://anyword.com"},
{name:"Sudowrite",url:"https://sudowrite.com"},
{name:"Notion AI",url:"https://notion.so"}
],

"Prompt Generation": [
{name:"PromptPerfect",url:"https://promptperfect.jina.ai"},
{name:"FlowGPT",url:"https://flowgpt.com"},
{name:"PromptHero",url:"https://prompthero.com"},
{name:"AIPRM",url:"https://www.aiprm.com"},
{name:"PromptBase",url:"https://promptbase.com"}
],

"Image Generation": [
{name:"DALL-E",url:"https://openai.com/dall-e"},
{name:"Midjourney",url:"https://midjourney.com"},
{name:"Stable Diffusion",url:"https://stability.ai"},
{name:"Leonardo AI",url:"https://leonardo.ai"},
{name:"Ideogram",url:"https://ideogram.ai"},
{name:"Playground AI",url:"https://playgroundai.com"},
{name:"DreamStudio",url:"https://dreamstudio.ai"},
{name:"NightCafe",url:"https://nightcafe.studio"}
],

"Image Editing": [
{name:"Canva AI",url:"https://canva.com"},
{name:"Adobe Firefly",url:"https://firefly.adobe.com"},
{name:"Photoshop AI",url:"https://adobe.com"},
{name:"Pixlr",url:"https://pixlr.com"},
{name:"Fotor",url:"https://fotor.com"},
{name:"Remove.bg",url:"https://remove.bg"}
],

"Video Generation": [
{name:"Sora",url:"https://openai.com/sora"},
{name:"Runway",url:"https://runwayml.com"},
{name:"Pika",url:"https://pika.art"},
{name:"Synthesia",url:"https://synthesia.io"},
{name:"HeyGen",url:"https://heygen.com"},
{name:"Colossyan",url:"https://colossyan.com"}
],

"Video Editing": [
{name:"Descript",url:"https://descript.com"},
{name:"VEED",url:"https://veed.io"},
{name:"Wisecut",url:"https://wisecut.video"}
],

"Audio Generation": [
{name:"Suno",url:"https://suno.com"},
{name:"Udio",url:"https://udio.com"},
{name:"ElevenLabs",url:"https://elevenlabs.io"},
{name:"Boomy",url:"https://boomy.com"},
{name:"Soundraw",url:"https://soundraw.io"}
],

"Speech To Text": [
{name:"Whisper",url:"https://openai.com"},
{name:"Otter AI",url:"https://otter.ai"},
{name:"AssemblyAI",url:"https://assemblyai.com"},
{name:"Deepgram",url:"https://deepgram.com"}
],

"Text To Speech": [
{name:"ElevenLabs",url:"https://elevenlabs.io"},
{name:"PlayHT",url:"https://play.ht"},
{name:"Murf AI",url:"https://murf.ai"},
{name:"Speechify",url:"https://speechify.com"},
{name:"LOVO AI",url:"https://lovo.ai"}
],

"Translation": [
{name:"DeepL",url:"https://deepl.com"},
{name:"Google Translate",url:"https://translate.google.com"},
{name:"Microsoft Translator",url:"https://translator.microsoft.com"},
{name:"Papago",url:"https://papago.naver.com"},
{name:"Reverso",url:"https://reverso.net"}
],

"Scheduling AI": [
{name:"Calendly",url:"https://calendly.com"},
{name:"Motion",url:"https://usemotion.com"},
{name:"Reclaim AI",url:"https://reclaim.ai"},
{name:"Clockwise",url:"https://getclockwise.com"}
],

"Virtual Assistants": [
{name:"ChatGPT",url:"https://chatgpt.com"},
{name:"Microsoft Copilot",url:"https://copilot.microsoft.com"},
{name:"Gemini",url:"https://gemini.google.com"},
{name:"Perplexity",url:"https://perplexity.ai"}
],

"Data Analysis": [
{name:"Power BI",url:"https://powerbi.microsoft.com"},
{name:"Tableau",url:"https://tableau.com"},
{name:"Google Looker",url:"https://cloud.google.com/looker"},
{name:"DataRobot",url:"https://datarobot.com"},
{name:"Alteryx",url:"https://alteryx.com"}
],

"Coding Assistants": [
{name:"GitHub Copilot",url:"https://github.com/features/copilot"},
{name:"Cursor",url:"https://cursor.com"},
{name:"Codeium",url:"https://codeium.com"},
{name:"Tabnine",url:"https://tabnine.com"},
{name:"Amazon CodeWhisperer",url:"https://aws.amazon.com/codewhisperer"}
],

"Chatbots": [
{name:"Dialogflow",url:"https://cloud.google.com/dialogflow"},
{name:"Botpress",url:"https://botpress.com"},
{name:"Tidio AI",url:"https://tidio.com"},
{name:"Landbot",url:"https://landbot.io"}
],

"Document Processing": [
{name:"DocAI",url:"https://cloud.google.com/document-ai"},
{name:"Azure Form Recognizer",url:"https://azure.microsoft.com"},
{name:"Rossum",url:"https://rossum.ai"},
{name:"Nanonets",url:"https://nanonets.com"}
],

"Recommendation Systems": [
{name:"Amazon AI",url:"https://aws.amazon.com/ai"},
{name:"Netflix AI",url:"https://netflix.com"},
{name:"Google Recommendations AI",url:"https://cloud.google.com"}
],

"Predictive Analytics": [
{name:"Google AutoML",url:"https://cloud.google.com/automl"},
{name:"H2O AI",url:"https://h2o.ai"},
{name:"RapidMiner",url:"https://rapidminer.com"},
{name:"DataRobot",url:"https://datarobot.com"}
],

"AI Search Engines": [
{name:"Perplexity AI",url:"https://perplexity.ai"},
{name:"You.com",url:"https://you.com"},
{name:"Phind",url:"https://phind.com"},
{name:"Andi",url:"https://andisearch.com"},
{name:"Wolfram Alpha",url:"https://wolframalpha.com"}
],

"Presentation AI": [
{name:"Gamma",url:"https://gamma.app"},
{name:"Tome",url:"https://tome.app"},
{name:"Beautiful.ai",url:"https://beautiful.ai"},
{name:"Canva Presentations",url:"https://canva.com"},
{name:"Pitch",url:"https://pitch.com"}
],

"Research Assistants": [
{name:"Elicit",url:"https://elicit.org"},
{name:"Consensus",url:"https://consensus.app"},
{name:"Scite AI",url:"https://scite.ai"},
{name:"Semantic Scholar",url:"https://semanticscholar.org"}
],

"Resume Builders": [
{name:"Rezi",url:"https://rezi.ai"},
{name:"Kickresume",url:"https://kickresume.com"},
{name:"Resume.io",url:"https://resume.io"},
{name:"Zety",url:"https://zety.com"},
{name:"Enhancv",url:"https://enhancv.com"}
],

"Productivity AI": [
{name:"Notion AI",url:"https://notion.so"},
{name:"Taskade",url:"https://taskade.com"},
{name:"Mem AI",url:"https://mem.ai"},
{name:"ClickUp AI",url:"https://clickup.com"},
{name:"Motion AI",url:"https://usemotion.com"}
],

"Marketing AI": [
{name:"Jasper AI",url:"https://jasper.ai"},
{name:"Copy.ai",url:"https://copy.ai"},
{name:"Anyword",url:"https://anyword.com"},
{name:"Writesonic",url:"https://writesonic.com"},
{name:"Surfer SEO",url:"https://surferseo.com"}
],

"Social Media AI": [
{name:"Predis AI",url:"https://predis.ai"},
{name:"Buffer AI",url:"https://buffer.com"},
{name:"Hootsuite AI",url:"https://hootsuite.com"},
{name:"Lately AI",url:"https://lately.ai"}
],

"UI UX Design AI": [
{name:"Uizard",url:"https://uizard.io"},
{name:"Galileo AI",url:"https://galileo.ai"},
{name:"Figma AI",url:"https://figma.com"},
{name:"Framer AI",url:"https://framer.com"}
],

"Education AI": [
{name:"Khanmigo",url:"https://khanacademy.org"},
{name:"Quizlet AI",url:"https://quizlet.com"},
{name:"Socratic",url:"https://socratic.org"},
{name:"Duolingo AI",url:"https://duolingo.com"}
],

"3D & Game AI": [
{name:"Luma AI",url:"https://lumalabs.ai"},
{name:"Meshy AI",url:"https://meshy.ai"},
{name:"Scenario AI",url:"https://scenario.com"},
{name:"Runway 3D Tools",url:"https://runwayml.com"}
],

"Finance AI": [
{name:"Kavout AI",url:"https://kavout.com"},
{name:"Upstox AI",url:"https://upstox.com"},
{name:"TradingView AI",url:"https://tradingview.com"},
{name:"Zerodha AI Tools",url:"https://zerodha.com"}
],

"Healthcare AI": [
{name:"IBM Watson Health",url:"https://ibm.com/watson-health"},
{name:"PathAI",url:"https://pathai.com"},
{name:"Infermedica",url:"https://infermedica.com"},
{name:"Ada Health",url:"https://ada.com"}
]
};

// -------------------------------
// TOOL POPUP
// -------------------------------

function showTools(category) {

    const modal = document.getElementById("toolModal");
    const title = document.getElementById("modalTitle");
    const toolList = document.getElementById("toolList");

    title.textContent = category;

    toolList.innerHTML = "";

    aiTools[category].forEach(tool => {

        toolList.innerHTML += `
            <div class="tool-link">
                <span>${tool.name}</span>
                <a href="${tool.url}"
                   target="_blank">
                   Open
                </a>
            </div>
        `;
    });

    modal.style.display = "flex";
}

function closeToolModal() {
    document.getElementById("toolModal").style.display = "none";
}

// -------------------------------
// LOGIN MODAL
// -------------------------------

function openLoginModal() {
    document.getElementById("loginModal").style.display = "flex";
}

function closeLoginModal() {
    document.getElementById("loginModal").style.display = "none";
}

// -------------------------------
// SIGNUP MODAL
// -------------------------------

function openSignupModal() {
    document.getElementById("signupModal").style.display = "flex";
}

function closeSignupModal() {
    document.getElementById("signupModal").style.display = "none";
}

// -------------------------------
// CLOSE MODAL ON OUTSIDE CLICK
// -------------------------------

window.onclick = function(event) {

    const loginModal =
        document.getElementById("loginModal");

    const signupModal =
        document.getElementById("signupModal");

    const toolModal =
        document.getElementById("toolModal");

    if(event.target === loginModal){
        loginModal.style.display = "none";
    }

    if(event.target === signupModal){
        signupModal.style.display = "none";
    }

    if(event.target === toolModal){
        toolModal.style.display = "none";
    }
};

// -------------------------------
// SEARCH CATEGORY
// -------------------------------

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {

    const query = this.value.toLowerCase().trim();

    const cards = document.querySelectorAll(".tool-card");

    if (query === "") {
        cards.forEach(card => {
            card.style.display = "block";
        });
        return;
    }

    cards.forEach(card => {

        const categoryText = card.innerText.toLowerCase();

        let match = false;

        // 1. Check category name
        if (categoryText.includes(query)) {
            match = true;
        }

        // 2. Check tools inside this category
        const category = card.getAttribute("onclick")
            ?.match(/'(.+?)'/)?.[1];

        if (category && aiTools[category]) {
            aiTools[category].forEach(tool => {
                if (tool.name.toLowerCase().includes(query)) {
                    match = true;
                }
            });
        }

        card.style.display = match ? "block" : "none";
    });
});

// -------------------------------
// EMAIL LOGIN (DEMO)
// -------------------------------

function loginUser(){

    const email =
    document.getElementById("loginEmail").value;

    const password =
    document.getElementById("loginPassword").value;

    if(email === "" || password === ""){

        alert(
            "Please enter email and password."
        );

        return;
    }

    alert(
        "Firebase login will work after you connect Firebase Authentication."
    );
}

// -------------------------------
// EMAIL SIGNUP (DEMO)
// -------------------------------

function signupUser(){

    const name =
    document.getElementById("signupName").value;

    const email =
    document.getElementById("signupEmail").value;

    const password =
    document.getElementById("signupPassword").value;

    if(
        name === "" ||
        email === "" ||
        password === ""
    ){

        alert(
            "Please fill all fields."
        );

        return;
    }

    alert(
        "Firebase signup will work after connecting Firebase Authentication."
    );
}

// -------------------------------
// GOOGLE LOGIN (DEMO)
// -------------------------------

function googleLogin(){

    alert(
        "Connect Firebase Google Authentication to enable Google Login."
    );
}

// -------------------------------
// CONSOLE MESSAGE
// -------------------------------

console.log(
    "VV AI HUB Loaded Successfully 🚀"
);
