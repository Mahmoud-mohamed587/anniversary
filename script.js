// ==========================================
// EDIT YOUR WEBSITE HERE
// ==========================================
// This is the only section you need to touch. Everything below it is
// the engine that turns this data into the website — you shouldn't
// need to change any code beneath "DO NOT EDIT BELOW THIS LINE".
//
// - Leave a memory's "src" pointing at a file that doesn't exist yet
//   (or leave it empty) and the website will show a tasteful "coming
//   soon" placeholder instead of a broken photo/video.
// - Add as many memories as you like inside each month's "memories"
//   array, in any mix of photos and videos.
// - Add as many months as you like, in the order you want them to
//   appear. They don't have to be named "Month Year" — any label works.

const websiteContent = {

  // Your name and hers, shown on the very first screen.
  myName: "Mahmoud",
  herName: "Lojain",

  // A short line under your names on the first screen.
  openingMessage: "One year with the most precious person in my life.",
  openingMessage: "A year full of beautiful moments, unforgettable memories, and so much love.",
  openingMessage: "And at the end of the year, we ll look back at all the memories we made together",

  // The date of your anniversary. Keep this exact format:
  // "YYYY-MM-DDTHH:MM:SS"
  anniversaryDate: "2026-10-03T00:00:00",

  // Your personal letter to her. Everything inside the backticks
  // (` `) is shown exactly as written, including line breaks.
  letter: `
اول حاجه حبيب اشكرك علي كل لحظه عشتها معاكي و انا مبسوط و انا ضعيف و انتي مسبتنيش و كنتي جويا زي خيالي مش سيباني ابدا انتي عمري اللي بدا لما جيتي حياتي و نورتيها و ادتيها الوان بوجودك و بهجتك و حماسك اللي ديما موجود اللي بيديني انا طاقه للحياه و 12 شهر الي فاته علمونا حاجات كتير و قدينا مع بعض مواقف كتير و فعلا انا كنت بختارك انتي اول حاجة لاني بحبك و انتي اميرتي و في ايام كنا مش طيقين بعض فيه بس اختارنا بعض انا الراحه مقردش اقعد من غير لوجي لو حد جيه سالني هقوله انا روحي لوجي لو هي مش موجوده انا يومي يبقي وحش علشان هي الي محلياه و ديما مخلص ليكي و حنين علشان انتي تستهلي ان الواحد يتعامل معاكي برقه و حنيه انتي شخصيه كده عايزك تعرفي اني ديما بحبك لحد ما اموت انا ديما روحي فيكي و مهما الزعل كبر قدام افتكري اني ديما بقولك اني روحي فيكي و مش هعرف اعيش دقيقه في يومي من غيرك انا بحبك
  `,

  // Optional background music. Leave the filename as-is if you don't
  // have one yet — the music button will simply stay hidden until a
  // real file exists at this path.
  music: "assets/music/Kol Hayaty.mp3",

  // Your story, in order. Each entry is one "chapter".
  months: [
    {
      name: "September 2025",
      description: "The first month, we made a lot of memories and got attached to each other.",
      memories: [
        {
          type: "photo",
          src: "assets/photos/18 sep.jpeg",
          date: " 18 September 2025",
          caption: "first meet after 1 and half year "
        },
        {
          type: "video",
          src: "assets/videos/18 sep.mp4",
          date: "September 2025",
          caption: "we make unforgettable memories"
        },
        {
          type: "photo",
          src: "assets/photos/20 sep.jpeg",
          date: " 18 September 2025",
          caption: "Second meet  and first car ride together"
        },
        {
          type: "photo",
          src: "assets/photos/26 sep.jpeg",
          date: " 18 September 2025",
          caption: "third and my feelings start to caught with you"
        },
        {
          type: "video",
          src: "assets/videos/26 sep.mp4",
          date: "September 2025",
          caption: "and first day i was jealousy of you"
        },
      ]
    },
    {
      name: "October 2025",
      description: "This month my life has started",
      memories: [
        {
          type: "photo",
          src: "assets/photos/4 oct.jpg",
          date: "October 2025",
          caption: "first day as a couple"
        },
        {
          type: "video",
          src: "assets/videos/4 oct.mp4",
          date: "October 2025",
          caption: "i can't forget this day"
        },
        {
          type: "photo",
          src: "assets/photos/9 oct.jpg",
          date: "October 2025",
          caption: "The first day you told me you love me "
        },
        {
          type: "photo",
          src: "assets/photos/21 oct.jpg",
          date: "October 2025",
          caption: ""
        },
        {
          type: "video",
          src: "assets/videos/25 oct.mp4",
          date: "October 2025",
          caption: "my first birthday with my whole world"
        },
        {
          type: "photo",
          src: "assets/photos/30 oct.jpg",
          date: "October 2025",
          caption: "The first day hold our hands "
        },
        
    
      ]
    },
    {
      name: "November 2025",
      description: " first month with The most beautiful girl ",
      memories: [
        {
          type: "photo",
          src: "assets/photos/7 nov.jpg",
          date: "November 2025",
          caption: ""
        },
        {
          type: "video",
          src: "assets/videos/7 nov.mp4",
          date: "October 2025",
          caption: "two moon there in this picture"
        },
         {
          type: "photo",
          src: "assets/photos/11 nov.jpg",
          date: "November 2025",
          caption: "Every place stayed in our memory"
        },
         {
          type: "photo",
          src: "assets/photos/24 nov.jpg",
          date: "November 2025",
          caption: " in metro station we have memories"
        },
        {
          type: "photo",
          src: "assets/photos/25 nov (2).jpg",
          date: "November 2025",
          caption: "Nile and deep talk your wish"
        },
        {
          type: "photo",
          src: "assets/photos/28 nov.jpg",
          date: "November 2025",
          caption: "When you were hanging out with your friends and we made memories"
        }

      ]
    },
    {
      name: "December 2025",
      description: "2 month with lolo",
      memories: [
        {
          type: "photo",
          src: "assets/photos/5 dec.jpg",
          date: "December 2025",
          caption: "You really needed desert"
        },
        {
          type: "video",
          src: "assets/videos/8 dec.mp4",
          date: "December 2025",
          caption: "in club togther first time"
        },

        {
            type: "photo",
          src: "assets/photos/12 dec.jpg",
          date: "December 2025",
          caption: "first shopping with my women"
        },
        {
          type: "video",
          src: "assets/videos/15 dec.mp4",
          date: "December 2025",
          caption: ""
        },
        {
            type: "photo",
          src: "assets/photos/21 dec.jpg",
          date: "December 2025",
          caption: "first party dancing togther and come late to our home"
        },
      ]
    },
    {
      name: "January 2026",
      description: "3 month",
      memories: [
        {
          type: "photo",
          src: "assets/photos/5 jan.jpg",
          date: "January 2026",
          caption: "my princess birthday"
        },
        {
          type: "video",
          src: "assets/videos/5 jan1.mp4",
          date: "January 2026",
          caption: "i will do every thing in this life to see this smile"
        },
        {
          type: "video",
          src: "assets/videos/12 jan.mp4",
          date: "January 2026",
          caption: "my princess after her exam"
        },
         {
          type: "photo",
          src: "assets/photos/20 jan.jpg",
          date: "January 2026",
          caption: "our kids side of us"
        },
         {
          type: "photo",
          src: "assets/photos/28 jan.jpg",
          date: "January 2026",
          caption: "our matchy matchy day "
        },
      ]
    },
    {
      name: "February 2026",
      description: "4 month",
      memories: [
        {
          type: "photo",
          src: "assets/photos/12 feb.jpg",
          date: "February 2026",
          caption: "We went to play after your college"
        },
           {
          type: "photo",
          src: "assets/photos/18 feb.jpg",
          date: "February 2026",
          caption: "first Valentine together not the last one"
        },
        {
          type: "video",
          src: "assets/videos/26 feb.mp4",
          date: "February 2026",
          caption: "Walking together at night in the dead of winter,"
        },
      ]
    },
    {
      name: "March 2026",
      description: "5 month",
      memories: [
        {
          type: "photo",
          src: "assets/photos/12 mar.jpg",
          date: "March 2026",
          caption: ""
        },  
          {
          type: "video",
          src: "assets/videos/24 mar.mp4",
          date: "March 2026",
          caption: "first time meet your family "
        },
          {
          type: "photo",
          src: "assets/photos/26 mar.jpg",
          date: "March 2026",
          caption: "first time cinema together "
        },
    
      ]
    },
    {
      name: "April 2026",
      description: "6 month",
      memories: [
        {
          type: "video",
          src: "assets/videos/6 apr.mp4",
          date: "April 2026",
          caption: "normal day after college"
        },
        {
          type: "photo",
          src: "assets/photos/9 apr.jpg",
          date: "April 2026",
          caption: ""
        },
        {
          type: "video",
          src: "assets/videos/12 apr.mp4",
          date: "April 2026",
          caption: "study together before exams"
        },
        {
          type: "video",
          src: "assets/videos/20 apr.mp4",
          date: "April 2026",
          caption: "your first time ride the bus"
        },
          
        {
          type: "photo",
          src: "assets/photos/29 apr.jpg",
          date: "April 2026",
          caption: "nile and deep talk again"
        },
      ]
    },
    {
      name: "May 2026",
      description: "7 month",
      memories: [
        {
          type: "photo",
          src: "assets/photos/11 may .jpg",
          date: "May 2026",
          caption: "shopping with princess"
        },
         {
          type: "photo",
          src: "assets/photos/24 may .jpg",
          date: "May 2026",
          caption: "gravity code"
        },
         {
          type: "video",
          src: "assets/videos/14 may.mp4",
          date: "May 2026",
          caption: "You were tired, and I came to take you to the exam"
        },
          {
          type: "video",
          src: "assets/videos/27 may.mp4",
          date: "May 2026",
          caption: "wafaa day together"
        },
      ]
    },
    {
      name: "June 2026",
      description: "8 month",
      memories: [
        {
          type: "photo",
          src: "assets/photos/3 jun.jpg",
          date: "June 2026",
          caption: "my shopping but i can't go without my whole world"
        },
     
        {
          type: "photo",
          src: "assets/photos/22 jun.jpg",
          date: "June 2026",
          caption: "That day we went out to break up."
        },
        {
          type: "video",
          src: "assets/videos/21 jun.mp4",
          date: "June 2026",
          caption: "This video is the biggest proof that we can't leave each other"
        },
        {
          type: "video",
          src: "assets/videos/28 jun.mp4",
          date: "June 2026",
          caption: "our wish ride floka together"
        },
        
      ]
    },
    {
      name: "July 2026",
      description: "9 month",
      memories: [
        {
          type: "photo",
          src: "assets/photos/17 jul.jpg",
          date: "July 2026",
          caption: "your eyes so Beautiful"
        },
        {
          type: "video",
          src: "assets/videos/17 jul.mp4",
          date: "July 2026",
          caption: "tiktok"
        },
      ]
    },
    {
      name: "August 2026",
      description: "10 month",
      memories: [
        {
          type: "photo",
          src: "assets/photos/8 aug.jpg",
          date: "August 2026",
          caption: "hang out after sea"
        },
        {
          type: "video",
          src: "assets/videos/8 aug.mp4",
          date: "August 2026",
          caption: "go to the sea together the most beautifull day "
        },
        {
          type: "photo",
          src: "assets/photos/15 aug.jpg",
          date: "August 2026",
          caption: "after you come back to cairo and go to play "
        }
      ]
    },
    {
      name: "September 2026",
      description: "11 month",
      memories: [
        {
          type: "video",
          src: "assets/videos/6 sept.mp4",
          date: "September 2026",
          caption: "last hang out but not the last one"
        }
      ]
    }
  ]
};

// ==========================================
// DO NOT EDIT BELOW THIS LINE
// (unless you know what you're doing — the site's design and
// navigation are driven entirely by the data above)
// ==========================================

(function () {
  "use strict";

  const state = {
    screenIndex: 0,
    chapterIndex: 0,
    screens: ["landing", "letter", "story", "ending"]
  };

  const els = {};

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    cacheEls();
    populateStaticContent();
    buildChapterProgress();
    renderChapter(0);
    bindNav();
    bindMusic();
    startEmberField();
    startCountdown(els.landingCountdownRoot);
    startCountdown(els.endingCountdownRoot);
    showScreen(0, { animate: false });
  }

  function cacheEls() {
    els.app = document.getElementById("app");
    els.screens = Array.from(document.querySelectorAll("[data-screen]"));

    els.nameA = document.getElementById("nameA");
    els.nameB = document.getElementById("nameB");
    els.openingMessage = document.getElementById("openingMessage");
    els.landingCountdownRoot = document.getElementById("landingCountdown");

    els.letterBody = document.getElementById("letterBody");

    els.chapterProgress = document.getElementById("chapterProgress");
    els.chapterKicker = document.getElementById("chapterKicker");
    els.chapterTitle = document.getElementById("chapterTitle");
    els.chapterDescription = document.getElementById("chapterDescription");
    els.timeline = document.getElementById("timeline");
    els.storyNextBtn = document.getElementById("storyNextBtn");

    els.unfinishedLine = document.getElementById("unfinishedLine");
    els.anniversaryDateLabel = document.getElementById("anniversaryDateLabel");
    els.endingCountdownRoot = document.getElementById("endingCountdown");
    els.replayBtn = document.getElementById("replayBtn");

    els.emberField = document.getElementById("emberField");
    els.musicToggle = document.getElementById("musicToggle");
    els.bgMusic = document.getElementById("bgMusic");
  }

  function populateStaticContent() {
    document.title = `${websiteContent.myName} & ${websiteContent.herName}`;

    els.nameA.textContent = websiteContent.myName;
    els.nameB.textContent = websiteContent.herName;
    els.openingMessage.textContent = websiteContent.openingMessage;

    els.letterBody.textContent = websiteContent.letter.trim();

    const dateLabel = formatAnniversaryDate(websiteContent.anniversaryDate);
    els.anniversaryDateLabel.textContent = dateLabel;
  }

  function formatAnniversaryDate(isoString) {
    const d = new Date(isoString);
    if (isNaN(d.getTime())) return "";
    return d.toLocaleDateString(undefined, {
      month: "long",
      day: "numeric",
      year: "numeric"
    });
  }

  // ---------- Chapter progress dots ----------

  function buildChapterProgress() {
    els.chapterProgress.innerHTML = "";
    websiteContent.months.forEach((_, i) => {
      const dot = document.createElement("span");
      dot.className = "dot";
      dot.setAttribute("role", "listitem");
      els.chapterProgress.appendChild(dot);
    });
  }

  function updateChapterProgress() {
    const dots = els.chapterProgress.children;
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.toggle("is-current", i === state.chapterIndex);
      dots[i].classList.toggle("is-done", i < state.chapterIndex);
    }
  }

  // ---------- Rendering a chapter (month) ----------

  function renderChapter(index) {
    const month = websiteContent.months[index];
    if (!month) return;

    els.chapterKicker.textContent = `chapter ${index + 1} of ${websiteContent.months.length}`;
    els.chapterTitle.textContent = month.name;
    els.chapterDescription.textContent = month.description || "";

    els.timeline.innerHTML = "";
    (month.memories || []).forEach((memory) => {
      els.timeline.appendChild(buildMemoryCard(memory));
    });

    els.storyNextBtn.querySelector("span").textContent =
      index === websiteContent.months.length - 1 ? "Continue" : "Next";

    updateChapterProgress();
  }

  function buildMemoryCard(memory) {
    const wrap = document.createElement("article");
    wrap.className = "memory";

    const card = document.createElement("div");
    card.className = "memory-card";

    const media = document.createElement("div");
    media.className = "memory-media";
    media.appendChild(buildMedia(memory));
    card.appendChild(media);

    const body = document.createElement("div");
    body.className = "memory-body";

    if (memory.date) {
      const date = document.createElement("span");
      date.className = "memory-date";
      date.textContent = memory.date;
      body.appendChild(date);
    }

    if (memory.caption) {
      const caption = document.createElement("p");
      caption.className = "memory-caption";
      caption.textContent = memory.caption;
      body.appendChild(caption);
    }

    card.appendChild(body);
    wrap.appendChild(card);
    return wrap;
  }

  function buildMedia(memory) {
    if (!memory.src) {
      return buildPlaceholder(memory.type);
    }

    if (memory.type === "video") {
      const video = document.createElement("video");
      video.controls = true;
      video.playsInline = true;
      video.preload = "metadata";
      video.src = memory.src;

      video.addEventListener("error", () => {
        video.replaceWith(buildPlaceholder("video"));
      });

      return video;
    }

    // default: photo
    const img = document.createElement("img");
    img.loading = "lazy";
    img.alt = memory.caption || "A memory";
    img.src = memory.src;
    img.addEventListener("error", () => {
      img.replaceWith(buildPlaceholder("photo"));
    });
    return img;
  }

  function buildPlaceholder(type) {
    const box = document.createElement("div");
    box.className = "memory-placeholder";
    box.innerHTML = `
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.2"/>
        <circle cx="9" cy="10.5" r="1.6" stroke="currentColor" stroke-width="1.2"/>
        <path d="M3 16l5-4 4 3 3-2.5 6 5.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span>${type === "video" ? "Video coming soon" : "Photo coming soon"}</span>
    `;
    return box;
  }

  // ---------- Navigation ----------

  function bindNav() {
    document.querySelectorAll("[data-next]").forEach((btn) => {
      btn.addEventListener("click", handleNext);
    });
    els.replayBtn.addEventListener("click", () => {
      state.chapterIndex = 0;
      renderChapter(0);
      goToScreen("landing");
    });
  }

  function handleNext(e) {
    const currentScreen = state.screens[state.screenIndex];

    if (currentScreen === "story") {
      const isLastChapter = state.chapterIndex === websiteContent.months.length - 1;
      if (!isLastChapter) {
        state.chapterIndex += 1;
        renderChapter(state.chapterIndex);
        els.timeline.scrollIntoView({ block: "start", behavior: "smooth" });
        return;
      }
    }

    const nextIndex = Math.min(state.screenIndex + 1, state.screens.length - 1);
    showScreen(nextIndex);
  }

  function goToScreen(name) {
    const idx = state.screens.indexOf(name);
    if (idx > -1) showScreen(idx);
  }

  function showScreen(index, opts) {
    const animate = !opts || opts.animate !== false;
    const outgoing = els.screens[state.screenIndex];
    const incoming = document.getElementById(`screen-${state.screens[index]}`);

    if (!incoming) return;

    if (outgoing && outgoing !== incoming && animate) {
      outgoing.classList.add("is-leaving");
      window.setTimeout(() => {
        outgoing.hidden = true;
        outgoing.classList.remove("is-leaving");
        revealScreen(incoming, animate);
      }, 420);
    } else {
      if (outgoing && outgoing !== incoming) outgoing.hidden = true;
      revealScreen(incoming, animate);
    }

    state.screenIndex = index;
  }

  function revealScreen(el, animate) {
    el.hidden = false;
    if (animate) {
      el.classList.add("is-entering");
      window.setTimeout(() => el.classList.remove("is-entering"), 650);
    }
    window.scrollTo({ top: 0, behavior: animate ? "smooth" : "auto" });
  }

  // ---------- Countdown ----------

  function startCountdown(root) {
    if (!root) return;
    const target = new Date(websiteContent.anniversaryDate).getTime();
    const nums = {
      days: root.querySelector('[data-unit="days"]'),
      hours: root.querySelector('[data-unit="hours"]'),
      minutes: root.querySelector('[data-unit="minutes"]'),
      seconds: root.querySelector('[data-unit="seconds"]')
    };

    function tick() {
      const now = Date.now();
      let diff = target - now;

      if (isNaN(target)) return;

      if (diff <= 0) {
        nums.days.textContent = "00";
        nums.hours.textContent = "00";
        nums.minutes.textContent = "00";
        nums.seconds.textContent = "00";
        return;
      }

      const day = Math.floor(diff / 86400000);
      diff -= day * 86400000;
      const hour = Math.floor(diff / 3600000);
      diff -= hour * 3600000;
      const min = Math.floor(diff / 60000);
      diff -= min * 60000;
      const sec = Math.floor(diff / 1000);

      nums.days.textContent = String(day).padStart(2, "0");
      nums.hours.textContent = String(hour).padStart(2, "0");
      nums.minutes.textContent = String(min).padStart(2, "0");
      nums.seconds.textContent = String(sec).padStart(2, "0");
    }

    tick();
    window.setInterval(tick, 1000);
  }

  // ---------- Music ----------

  function bindMusic() {
    if (!websiteContent.music) return;

    els.bgMusic.src = websiteContent.music;

    // Only reveal the button once we've confirmed the file actually
    // loads — if it's still a placeholder path, stay hidden.
    els.bgMusic.addEventListener(
      "loadedmetadata",
      () => {
        els.musicToggle.hidden = false;
      },
      { once: true }
    );
    els.bgMusic.addEventListener("error", () => {
      els.musicToggle.hidden = true;
    });

    els.musicToggle.addEventListener("click", () => {
      if (els.bgMusic.paused) {
        els.bgMusic
          .play()
          .then(() => {
            els.musicToggle.classList.add("is-playing");
            els.musicToggle.setAttribute("aria-label", "Pause music");
          })
          .catch(() => {});
      } else {
        els.bgMusic.pause();
        els.musicToggle.classList.remove("is-playing");
        els.musicToggle.setAttribute("aria-label", "Play music");
      }
    });
  }

  // ---------- Ambient ember field ----------

  function startEmberField() {
    const count = window.innerWidth < 640 ? 10 : 16;
    for (let i = 0; i < count; i++) {
      const ember = document.createElement("span");
      const size = (Math.random() * 2 + 1.5).toFixed(1);
      const duration = (Math.random() * 10 + 14).toFixed(1);
      const delay = (Math.random() * -20).toFixed(1);
      const x = (Math.random() * 100).toFixed(1);
      const drift = (Math.random() * 60 - 30).toFixed(0);

      ember.style.setProperty("--s", `${size}px`);
      ember.style.setProperty("--dur", `${duration}s`);
      ember.style.setProperty("--delay", `${delay}s`);
      ember.style.setProperty("--x", `${x}%`);
      ember.style.setProperty("--drift", `${drift}px`);

      els.emberField.appendChild(ember);
    }
  }
})();
