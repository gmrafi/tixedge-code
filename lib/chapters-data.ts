// ============================================================
// TixEdge Code Curriculum Engine: Foundation HTML Missions
// Author: Md Golam Mubasshir Rafi
// Platform: Centre for Fintech & Strategic Business Research (CFSBR)
// ============================================================

export interface MissionStep {
  id: string;
  text: string; // Bengali instruction
  hint?: string;
}

export interface BugTrap {
  title: string; // e.g. "বন্ধ ট্যাগ ভুলে গেছ?"
  description: string;
  example?: string;
}

export interface Mission {
  id: string;
  chapterNumber: number;
  slug: string;
  titleBangla: string;
  titleEnglish: string;
  description: string; // Short Bengali description shown in UI
  initialCode: string;
  solutionCode: string;
  steps: MissionStep[];
  bugTraps: BugTrap[];
  tags: string[]; // HTML tags introduced in this mission
}

export const MISSIONS: Mission[] = [
  // ── Chapter 1 ──────────────────────────────────────────────
  {
    id: "ch1-intro",
    chapterNumber: 1,
    slug: "computer-kivabe-kotha-shone",
    titleBangla: "কম্পিউটার কীভাবে কথা শোনে?",
    titleEnglish: "How Does a Computer Listen?",
    description:
      "কম্পিউটার আসলে শুধু নির্দেশ বোঝে। এই মিশনে আমরা শিখব HTML কীভাবে সেই নির্দেশ দেয়।",
    initialCode: `<!-- এটা তোমার প্রথম কোড প্রজেক্ট! -->
<!-- নিচের লেখা পরিবর্তন করে নিজের নাম লেখো -->
<h1>আমার নাম রাফি</h1>
<p>আমি কম্পিউটারকে নির্দেশ দিচ্ছি!</p>`,
    solutionCode: `<!-- এটা তোমার প্রথম কোড প্রজেক্ট! -->
<h1>আমার নাম [তোমার নাম]</h1>
<p>আমি কম্পিউটারকে নির্দেশ দিচ্ছি!</p>
<p>HTML হলো কম্পিউটারের ভাষা।</p>`,
    steps: [
      {
        id: "s1",
        text: "কোডটা মনোযোগ দিয়ে পড়ো।",
        hint: "<!-- --> দিয়ে লেখা অংশগুলো কম্পিউটার দেখতে পায় না, এগুলো শুধু তোমার জন্য নোট।",
      },
      {
        id: "s2",
        text: "'রাফি'-র জায়গায় তোমার নিজের নাম লেখো।",
      },
      {
        id: "s3",
        text: "তৃতীয় লাইনে HTML সম্পর্কে একটি বাক্য যোগ করো।",
      },
    ],
    bugTraps: [
      {
        title: "<!-- --> কমেন্ট ট্যাগ কী?",
        description:
          "<!-- --> দিয়ে ঘেরা লেখা কম্পিউটার দেখায় না। এটা শুধু তোমার নিজের নোটের জন্য।",
        example: "<!-- এটা দেখা যাবে না -->",
      },
    ],
    tags: ["<!--", "h1", "p"],
  },

  // ── Chapter 2 ──────────────────────────────────────────────
  {
    id: "ch2-hello-ghor",
    chapterNumber: 2,
    slug: "toolbox-first-brick",
    titleBangla: "যন্ত্রপাতির বাক্স ও প্রথম ইট",
    titleEnglish: "The Toolbox & First Brick",
    description:
      "HTML ট্যাগ হলো বাড়ির ইট। প্রতিটি ট্যাগ খোলা ও বন্ধ করতে হয়, ঠিক দরজার মতো!",
    initialCode: `<h1>Hello! আমি রাফি</h1>
<p>এটা আমার প্রথম ওয়েবসাইট।</p>`,
    solutionCode: `<h1>Hello! আমি [তোমার নাম]</h1>
<p>এটা আমার প্রথম ওয়েবসাইট।</p>
<p>আমার পেজে তোমাকে স্বাগতম!</p>`,
    steps: [
      { id: "s1", text: "নামের জায়গায় তোমার নিজের নাম লেখো।" },
      {
        id: "s2",
        text: "দ্বিতীয় <p> ট্যাগে তোমার পছন্দের একটি বাক্য যোগ করো।",
      },
      {
        id: "s3",
        text: "Preview-এ দেখো: h1 আর p-র মধ্যে পার্থক্য কী?",
        hint: "h1 হলো বড় সাইনবোর্ড বা শিরোনাম, p হলো সাধারণ অনুচ্ছেদ।",
      },
    ],
    bugTraps: [
      {
        title: "বন্ধ ট্যাগ ভুলে গেছ?",
        description:
          "প্রতিটি ট্যাগ খুললে বন্ধ করতে হয়। <p> খুললে </p> দিয়ে বন্ধ করো। না হলে পেজের ডিজাইন ঠিক থাকবে না!",
        example: "<p>এটা সঠিক।</p>\n<p>এটা ভুল। ← এখানে </p> নেই!",
      },
    ],
    tags: ["h1", "p"],
  },

  // ── Chapter 3 ──────────────────────────────────────────────
  {
    id: "ch3-tags",
    chapterNumber: 3,
    slug: "block-porichoy-tags",
    titleBangla: "ব্লকের পরিচয়: ট্যাগ",
    titleEnglish: "Meet the Blocks: Tags",
    description:
      "HTML ট্যাগ হলো বিভিন্ন ধরনের ব্লক। প্রতিটির নিজস্ব কাজ আছে।",
    initialCode: `<h1>আমার প্রথম ওয়েবসাইট</h1>
<p>এই পেজে আছে:</p>
<ul>
  <li>একটি বড় সাইনবোর্ড</li>
  <li>একটি প্যারাগ্রাফ</li>
</ul>`,
    solutionCode: `<h1>আমার প্রথম ওয়েবসাইট</h1>
<p>এই পেজে আছে:</p>
<ul>
  <li>একটি বড় সাইনবোর্ড</li>
  <li>একটি প্যারাগ্রাফ</li>
  <li>একটি তালিকা</li>
  <li>আরও অনেক কিছু!</li>
</ul>`,
    steps: [
      { id: "s1", text: "ul এবং li ট্যাগ কীভাবে কাজ করে তা দেখো।" },
      { id: "s2", text: "তালিকায় আরও দুটি আইটেম যোগ করো।" },
      {
        id: "s3",
        text: "ul-কে ol-এ পরিবর্তন করে দেখো: কী পার্থক্য হয়?",
        hint: "ol মানে ordered list: ক্রমিক নম্বরসহ তালিকা।",
      },
    ],
    bugTraps: [
      {
        title: "<li> শুধু <ul> বা <ol>-এর ভেতরে যায়",
        description:
          "<li> একা ব্যবহার করা যায় না। সবসময় <ul> বা <ol>-এর ভেতরে রাখতে হবে।",
        example: "<ul>\n  <li>এটা সঠিক</li>\n</ul>",
      },
    ],
    tags: ["ul", "ol", "li"],
  },

  // ── Chapter 4 ──────────────────────────────────────────────
  {
    id: "ch4-house-design",
    chapterNumber: 4,
    slug: "barir-noksha-html-head-body",
    titleBangla: "বাড়ির নকশা: HTML, HEAD, BODY",
    titleEnglish: "The House Blueprint",
    description:
      "প্রতিটি ওয়েব-বাড়ির একটি নকশা আছে: <html> হলো জমি, <head> হলো কন্ট্রোল রুম, <body> হলো বসার ঘর।",
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>আমার ওয়েব-বাড়ি</title>
  </head>
  <body>
    <h1>স্বাগতম!</h1>
    <p>এটা বাড়ির বসার ঘর।</p>
  </body>
</html>`,
    solutionCode: `<!DOCTYPE html>
<html lang="bn">
  <head>
    <title>রাফির ওয়েব-বাড়ি</title>
    <meta charset="UTF-8">
  </head>
  <body>
    <h1>রাফির বাড়িতে স্বাগতম!</h1>
    <p>এটা বাড়ির বসার ঘর।</p>
    <p>এখানে সব অতিথিরা বসে।</p>
  </body>
</html>`,
    steps: [
      {
        id: "s1",
        text: "<title>-এর ভেতরে তোমার নামের সাইট লেখো।",
        hint: "Title ব্রাউজারের ট্যাবে দেখায়।",
      },
      { id: "s2", text: "<h1>-এ নিজের নাম লেখো।" },
      { id: "s3", text: "<body>-তে আরেকটি <p> যোগ করো।" },
    ],
    bugTraps: [
      {
        title: "<!DOCTYPE html> কোথায় যায়?",
        description:
          "<!DOCTYPE html> সবার আগে, একদম প্রথম লাইনে লিখতে হয়। এটা ব্রাউজারকে বলে: এটা আধুনিক HTML।",
      },
      {
        title: "<body>-র বাইরে লেখা দেখা যাবে না",
        description: "যা দেখাতে চাও, সব <body>...</body>-র ভেতরে লিখতে হবে।",
      },
    ],
    tags: ["html", "head", "body", "title", "meta", "DOCTYPE"],
  },

  // ── Chapter 5 ──────────────────────────────────────────────
  {
    id: "ch5-signboards",
    chapterNumber: 5,
    slug: "sainboard-boshano-headings",
    titleBangla: "সাইনবোর্ড বসানো: Headings",
    titleEnglish: "Erecting the Signboards",
    description:
      "<h1> থেকে <h6> পর্যন্ত ছয় মাপের সাইনবোর্ড। বড় সাইনবোর্ড সবচেয়ে গুরুত্বপূর্ণ!",
    initialCode: `<h1>সবচেয়ে বড় সাইনবোর্ড</h1>
<h2>মাঝারি সাইনবোর্ড</h2>
<h3>ছোট সাইনবোর্ড</h3>
<p>এটা সাধারণ লেখা।</p>`,
    solutionCode: `<h1>আমার প্রিয় কার্টুন</h1>
<h2>ডোরেমন</h2>
<h3>নোবিতার বন্ধুরা</h3>
<h4>সুনিও</h4>
<h5>জায়েন</h5>
<p>ডোরেমন আমার সবচেয়ে প্রিয় কার্টুন।</p>`,
    steps: [
      {
        id: "s1",
        text: "h1 থেকে h6 পর্যন্ত সব মাপ চেষ্টা করে দেখো।",
        hint: "h1 সবচেয়ে বড়, h6 সবচেয়ে ছোট।",
      },
      {
        id: "s2",
        text: "সবচেয়ে বড় সাইনবোর্ডে তোমার প্রিয় কার্টুনের নাম লেখো।",
      },
      { id: "s3", text: "<p>-তে সেই কার্টুন সম্পর্কে একটি বাক্য লেখো।" },
    ],
    bugTraps: [
      {
        title: "h1 সবার আগে একটাই থাকে",
        description:
          "একটি পেজে <h1> একবারই ব্যবহার করা উচিত। এটা বাড়ির প্রধান সাইনবোর্ড।",
      },
      {
        title: "ক্রম মেনে চলো",
        description:
          "h1-এর পর সরাসরি h4 ব্যবহার না করে ধাপে ধাপে: h1 → h2 → h3 করো।",
      },
    ],
    tags: ["h1", "h2", "h3", "h4", "h5", "h6"],
  },

  // ── Chapter 6 ──────────────────────────────────────────────
  {
    id: "ch6-photo-frames",
    chapterNumber: 6,
    slug: "photo-frame-img",
    titleBangla: "ফটো ফ্রেম: ছবি যোগ করো",
    titleEnglish: "Photo Frames: Adding Images",
    description:
      "<img> ট্যাগ হলো বাড়ির ফটো ফ্রেম। URL দিয়ে যেকোনো ছবি দেখানো যায়!",
    initialCode: `<h1>আমার ফটো গ্যালারি</h1>
<img src="https://picsum.photos/300/200" alt="সুন্দর ছবি">
<p>এটা আমার প্রথম ছবি!</p>`,
    solutionCode: `<h1>আমার ফটো গ্যালারি</h1>
<img src="https://picsum.photos/300/200?random=1" alt="প্রকৃতির ছবি" width="300">
<p>প্রকৃতির এই ছবিটা আমার পছন্দ।</p>
<img src="https://picsum.photos/300/200?random=2" alt="আরেকটি ছবি" width="300">
<p>এটা আমার দ্বিতীয় ছবি।</p>`,
    steps: [
      { id: "s1", text: "img ট্যাগের src এবং alt অংশ দেখো।" },
      {
        id: "s2",
        text: "alt-এর লেখা বাংলায় পরিবর্তন করো।",
        hint: "alt হলো ছবির বর্ণনা, দেখতে না পেলে এই লেখা দেখায়।",
      },
      { id: "s3", text: "আরেকটি <img> ট্যাগ যোগ করো ভিন্ন URL দিয়ে।" },
    ],
    bugTraps: [
      {
        title: "<img> ট্যাগ বন্ধ করতে হয় না",
        description:
          "<img> একটি self-closing ট্যাগ। </img> লেখার দরকার নেই। শুধু <img src='...' alt='...'> লিখলেই হয়।",
        example: "<img src='cat.jpg' alt='বিড়াল'>",
      },
      {
        title: "alt সবসময় লেখো",
        description:
          "alt না লিখলে ছবি লোড না হলে কিছুই দেখাবে না। সবসময় alt দিয়ে ছবির বর্ণনা দাও।",
      },
    ],
    tags: ["img", "src", "alt", "width"],
  },

  // ── Chapter 7 ──────────────────────────────────────────────
  {
    id: "ch7-magic-doors",
    chapterNumber: 7,
    slug: "jadu-dor-links",
    titleBangla: "জাদুর দরজা: লিংক",
    titleEnglish: "Magical Doors: Links",
    description:
      "<a> ট্যাগ হলো ওয়েবের জাদুর দরজা। এক বাড়ি থেকে আরেক বাড়িতে নিয়ে যায়!",
    initialCode: `<h1>জাদুর দরজা</h1>
<p>এই দরজা দিয়ে গুগলে যাও:</p>
<a href="https://google.com">গুগলে যাও</a>`,
    solutionCode: `<h1>আমার প্রিয় ওয়েবসাইট</h1>
<p>নিচে আমার পছন্দের ওয়েবসাইটের দরজা:</p>
<ul>
  <li><a href="https://google.com" target="_blank">গুগল</a></li>
  <li><a href="https://wikipedia.org" target="_blank">উইকিপিডিয়া</a></li>
  <li><a href="https://youtube.com" target="_blank">ইউটিউব</a></li>
</ul>`,
    steps: [
      {
        id: "s1",
        text: "লিংকে ক্লিক করলে কী হয় দেখো।",
        hint: "href হলো দরজার গন্তব্য।",
      },
      {
        id: "s2",
        text: "লিংকের টেক্সট বাংলায় পরিবর্তন করো।",
      },
      {
        id: "s3",
        text: "তোমার পছন্দের আরও দুটো ওয়েবসাইটের লিংক যোগ করো।",
      },
    ],
    bugTraps: [
      {
        title: "href-এ সম্পূর্ণ URL লেখো",
        description:
          "https:// ছাড়া লিংক কাজ করবে না। সবসময় https:// দিয়ে শুরু করো।",
        example:
          "সঠিক: href='https://google.com'\nভুল: href='google.com'",
      },
    ],
    tags: ["a", "href", "target"],
  },

  // ── Chapter 8 ──────────────────────────────────────────────
  {
    id: "ch8-wall-paint",
    chapterNumber: 8,
    slug: "deyal-rang-css",
    titleBangla: "দেয়ালের রঙ: CSS দিয়ে সাজাও",
    titleEnglish: "Wall Paint: Styling with CSS",
    description:
      "CSS হলো বাড়ির রঙ ও সাজসজ্জা। style অ্যাট্রিবিউট দিয়ে সরাসরি রঙ পরিবর্তন করা যায়!",
    initialCode: `<h1 style="color: blue;">নীল সাইনবোর্ড</h1>
<p style="color: green;">সবুজ লেখা</p>
<p style="background-color: yellow;">হলুদ পটভূমি</p>`,
    solutionCode: `<h1 style="color: #6366f1; font-family: Arial;">আমার রঙিন বাড়ি</h1>
<p style="color: #10b981; font-size: 18px;">আমি CSS দিয়ে রঙ দিচ্ছি!</p>
<p style="background-color: #fef3c7; padding: 10px; border-radius: 8px;">
  এটা একটি হলুদ বাক্স।
</p>`,
    steps: [
      {
        id: "s1",
        text: "রঙের নাম পরিবর্তন করো: red, blue, green চেষ্টা করো।",
        hint: "HTML-এ 140+ রঙের নাম সরাসরি ব্যবহার করা যায়।",
      },
      {
        id: "s2",
        text: "font-size যোগ করো, যেমন: font-size: 24px",
      },
      {
        id: "s3",
        text: "background-color দিয়ে একটি রঙিন বাক্স তৈরি করো।",
      },
    ],
    bugTraps: [
      {
        title: "সেমিকোলন (;) ভুলবে না",
        description:
          "CSS-এ প্রতিটি নির্দেশের পর ; দিতে হয়। না হলে পরের নির্দেশ কাজ করবে না।",
        example:
          "সঠিক: style='color: red; font-size: 16px;'\nভুল: style='color: red font-size: 16px'",
      },
    ],
    tags: ["style", "color", "background-color", "font-size"],
  },

  // ── Capstone ──────────────────────────────────────────────
  {
    id: "capstone-my-project",
    chapterNumber: 9,
    slug: "amar-prokolpo-final",
    titleBangla: "আমার সম্পূর্ণ প্রজেক্ট ও পোর্টফোলিও",
    titleEnglish: "My Complete Portfolio Project (Capstone)",
    description:
      "এতদিনে যা শিখেছ সব একসাথে ব্যবহার করো। তোমার প্রথম নিজস্ব ডিজিটাল প্রজেক্ট তৈরি করো!",
    initialCode: `<!DOCTYPE html>
<html lang="bn">
<head>
  <title>আমার পোর্টফোলিও</title>
</head>
<body>

  <!-- তোমার প্রধান শিরোনাম -->
  <h1 style="color: #ea580c;">আমার নাম এখানে লেখো</h1>
  
  <!-- তোমার পরিচয় -->
  <p>আমি _____ শ্রেণিতে পড়ি। কোডিং শিখে নিজের প্রথম সফটওয়্যার প্রজেক্ট বানিয়েছি।</p>
  
  <!-- তোমার প্রিয় জিনিস -->
  <h2>আমার পছন্দের জিনিস</h2>
  <ul>
    <li>প্রিয় খাবার: </li>
    <li>প্রিয় রঙ: </li>
    <li>প্রিয় শখ: </li>
  </ul>
  
  <!-- একটি ছবি -->
  <img src="https://picsum.photos/300/200" alt="আমার ছবি">
  
  <!-- একটি লিংক -->
  <p>আমার প্রিয় ওয়েবসাইট: <a href="https://google.com">গুগল</a></p>

</body>
</html>`,
    solutionCode: `<!DOCTYPE html>
<html lang="bn">
<head>
  <title>রাফির ডিজিটাল পোর্টফোলিও</title>
</head>
<body style="font-family: Arial; max-width: 600px; margin: auto; padding: 20px;">
  <h1 style="color: #ea580c; border-bottom: 3px solid #ea580c; padding-bottom: 10px;">
    রাফির ডিজিটাল পোর্টফোলিও
  </h1>
  <p style="font-size: 18px;">আমি ৬ষ্ঠ শ্রেণিতে পড়ি। কোডিং শিখে নিজের প্রথম প্রজেক্ট বানিয়েছি!</p>
  <h2 style="color: #0284c7;">আমার পছন্দের জিনিস</h2>
  <ul>
    <li>প্রিয় খাবার: বিরিয়ানি</li>
    <li>প্রিয় রঙ: নীল</li>
    <li>প্রিয় শখ: রোবটিক্স ও বিজ্ঞান</li>
  </ul>
  <img src="https://picsum.photos/300/200?random=5" alt="আমার পছন্দের ছবি" 
       style="border-radius: 10px; margin: 10px 0;">
  <p>আমার প্রিয় ওয়েবসাইট: <a href="https://google.com" style="color: #10b981;">গুগল</a></p>
  <p style="background-color: #f0fdf4; padding: 15px; border-radius: 8px; margin-top: 20px;">
    আমি HTML আর্কিটেকচার সম্পন্ন করেছি!
  </p>
</body>
</html>`,
    steps: [
      { id: "s1", text: "<title>-এ তোমার নিজের নাম লেখো।" },
      { id: "s2", text: "<h1>-এ তোমার নাম ও প্রধান শিরোনাম লেখো।" },
      { id: "s3", text: "তালিকায় তোমার প্রকৃত পছন্দের জিনিস লেখো।" },
      { id: "s4", text: "একটি ছবি যোগ করো।" },
      {
        id: "s5",
        text: "CSS দিয়ে রঙ ও সাজসজ্জা যোগ করো।",
        hint: "style অ্যাট্রিবিউট ব্যবহার করো।",
      },
      {
        id: "s6",
        text: "Publish বোতামে ক্লিক করে প্রজেক্ট সেভ করো।",
      },
    ],
    bugTraps: [
      {
        title: "সব ট্যাগ বন্ধ হয়েছে?",
        description:
          "Publish করার আগে চেক করো: প্রতিটি খোলা ট্যাগ বন্ধ হয়েছে কিনা।",
      },
      {
        title: "<body> এবং </html> শেষে আছে?",
        description:
          "সম্পূর্ণ HTML-এর কাঠামো: <!DOCTYPE html> → <html> → <head> → <body> → </body> → </html>",
      },
    ],
    tags: ["html", "head", "body", "h1", "h2", "p", "ul", "li", "img", "a", "style"],
  },
];

// Helper: Get mission by slug
export function getMissionBySlug(slug: string): Mission | undefined {
  return MISSIONS.find((m) => m.slug === slug);
}

// Helper: Get mission by chapter number
export function getMissionsByChapter(chapterNum: number): Mission[] {
  return MISSIONS.filter((m) => m.chapterNumber === chapterNum);
}

// Helper: Get the first mission for a chapter
export function getFirstMissionForChapter(chapterNum: number): Mission | undefined {
  return MISSIONS.find((m) => m.chapterNumber === chapterNum);
}

// Default starting mission
export const DEFAULT_MISSION = MISSIONS[1]; // Chapter 2 - Hello Ghor
