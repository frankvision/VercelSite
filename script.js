const contentArray = {
  about: {
    title: "Deliver what you need",
    para: "The dream of everyone riding their bike everyday: no more worries about flat-tires, broken transmission chains or gripless brakes.",
    type: "img",
    media: "https://images.unsplash.com/photo-1706281531150-c7644eeb2fa8?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  mission: {
    title: "we <3 the world",
    para: "all around the globe we enable people to ride their bikes into the sunset",
    type: "img",
    media: "https://images.unsplash.com/photo-1761168434320-939685b02bbd?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  projects: {
    title: "Build - Ride - Live",
    para: "Living Life is just better on two wheels! We love to Ride.",
    type: "img",
    media: "https://images.unsplash.com/photo-1753769914520-394cf8b645f8?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  system: {
    title: "Use what's best, reuse what's good",
    para: "Cycling is Recycling.",
    type: "img",
    media: "https://images.unsplash.com/photo-1667032385354-7055dcc79066?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  company: {
    title: "We were not born yesterday.",
    para: "We were born today!",
    type: "img",
    media: "https://images.unsplash.com/photo-1591393102018-7b978021351c?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  visit: {
    title: "Come by and have a chat!",
    para: "Bikes? sure. Coffee? Always!",
    type: "map",
    media: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3022.012580407797!2d-73.9619192905715!3d40.76174803445268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDQ1JzQyLjMiTiA3M8KwNTcnMzMuNiJX!5e0!3m2!1sde!2sde!4v1774697213603!5m2!1sde!2sde"
  }
};

const nav = document.querySelector(".nav");
const content = document.querySelector(".content");
const conttitle = document.querySelector(".conttitle");
const para = document.querySelector(".para");
const mediabox = document.querySelector(".media");

[...nav.children].forEach((x) => {
  const key = x.dataset.key;

  x.addEventListener("click", (e) => {
    e.preventDefault();

    changeMan(key);

    [...nav.children].forEach((tt) => {
      tt.classList.remove("actiman");
    });

    x.classList.add("actiman");
  });
});

function changeMan(yyy) {
  const item = contentArray[yyy];

  conttitle.textContent = item.title;
  para.textContent = item.para;

  if (item.type === "map") {
    content.classList.add("content--map");
    mediabox.innerHTML = `
      <iframe
        src="${item.media}"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        allowfullscreen>
      </iframe>
    `;
  } else {
    content.classList.remove("content--map");
    mediabox.innerHTML = `<img class="contimg" src="${item.media}" alt="">`;
  }
}