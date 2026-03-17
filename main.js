const specialties = [
  {
    title: "General Physician / Internal Medicine",
    subtitle: "Non-surgical medical care for adults",
    icon: "https://img.icons8.com/ios-filled/64/000000/stethoscope.png",
    href: "https://www.apollo247.com/specialties/general-physician-internal-medicine",
  },
  {
    title: "Dermatology",
    subtitle: "Skin, hair, and nail care",
    icon: "https://img.icons8.com/ios-filled/64/000000/dermatology.png",
    href: "https://www.apollo247.com/specialties/dermatology",
  },
  {
    title: "Obstetrics & Gynaecology",
    subtitle: "Women's reproductive health",
    icon: "https://img.icons8.com/ios-filled/64/000000/pregnant.png",
    href: "https://www.apollo247.com/specialties/obstetrics-and-gynaecology",
  },
  {
    title: "Orthopaedics",
    subtitle: "Bones, joints, and mobility",
    icon: "https://img.icons8.com/ios-filled/64/000000/crutches.png",
    href: "https://www.apollo247.com/specialties/orthopaedics",
  },
  {
    title: "ENT",
    subtitle: "Ear, nose, and throat care",
    icon: "https://img.icons8.com/ios-filled/64/000000/nose.png",
    href: "https://www.apollo247.com/specialties/ent",
  },
  {
    title: "Neurology",
    subtitle: "Nervous system disorders",
    icon: "https://img.icons8.com/ios-filled/64/000000/brain.png",
    href: "https://www.apollo247.com/specialties/neurology",
  },
  {
    title: "Cardiology",
    subtitle: "Heart and circulatory health",
    icon: "https://img.icons8.com/ios-filled/64/000000/heart-with-pulse.png",
    href: "https://www.apollo247.com/specialties/cardiology",
  },
  {
    title: "Urology",
    subtitle: "Kidney, bladder, and urinary care",
    icon: "https://img.icons8.com/ios-filled/64/000000/kidney.png",
    href: "https://www.apollo247.com/specialties/urology",
  },
  {
    title: "Gastroenterology / GI Medicine",
    subtitle: "Digestive system health",
    icon: "https://img.icons8.com/ios-filled/64/000000/stomach.png",
    href: "https://www.apollo247.com/specialties/gastroenterology-gi-medicine",
  },
  {
    title: "Psychiatry",
    subtitle: "Mental health and wellbeing",
    icon: "https://img.icons8.com/ios-filled/64/000000/mental-health.png",
    href: "https://www.apollo247.com/specialties/psychiatry",
  },
];

const healthArticles = [
  {
    title: "How to increase WBC count: Causes & solutions",
    summary: "Learn why low WBC count happens and what lifestyle changes can help.",
    href: "https://www.apollo247.com/blog/article/how-to-increase-wbc-count-understanding-the-causes-of-low-wbc-and-how-to-address-it",
  },
  {
    title: "Mounjaro: Uses and side effects",
    summary: "Understand how Mounjaro works for type 2 diabetes and what to expect.",
    href: "https://www.apollo247.com/blog/article/mounjaro-type-2-diabetes-blood-sugar-control",
  },
  {
    title: "Side effects of Mounjaro",
    summary: "What to look out for when taking Mounjaro for blood sugar control.",
    href: "https://www.apollo247.com/blog/article/side-effects-of-mounjaro",
  },
  {
    title: "Mounjaro dosage guide",
    summary: "Dosage tips to stay safe while using Mounjaro.",
    href: "https://www.apollo247.com/blog/article/mounjaro-dosage-guide",
  },
];

const defaultSpecialtyIcon = "https://images.apollo247.in/images/consult_home/icons/defaultSpeciality.svg";

function renderSpecialtyCards() {
  const grid = document.getElementById("specialtiesGrid");
  if (!grid) return;

  specialties.forEach((spec) => {
    const card = document.createElement("article");
    card.className = "card";

    const iconUrl = spec.icon ?? defaultSpecialtyIcon;

    card.innerHTML = `
      <img class="card__icon" src="${iconUrl}" alt="${spec.title} icon" onerror="this.onerror=null;this.src='${defaultSpecialtyIcon}'" />
      <h3 class="card__title">${spec.title}</h3>
      <p class="card__subtitle">${spec.subtitle}</p>
      <a class="card__link" href="${spec.href}" target="_blank" rel="noreferrer">Consult ${spec.title.split(" ")[0]}</a>
    `;

    grid.appendChild(card);
  });
}

function renderHealthArticles() {
  const grid = document.getElementById("articlesGrid");
  if (!grid) return;

  healthArticles.forEach((article) => {
    const card = document.createElement("article");
    card.className = "article-card";

    card.innerHTML = `
      <h4>${article.title}</h4>
      <p>${article.summary}</p>
      <a href="${article.href}" target="_blank" rel="noreferrer">Read more</a>
    `;

    grid.appendChild(card);
  });
}

function initForm() {
  const form = document.getElementById("finderForm");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const speciality = document.getElementById("speciality").value;
    const date = document.getElementById("date").value;
    const pincode = document.getElementById("pincode").value.trim();

    if (!speciality) {
      alert("Please select a speciality.");
      return;
    }

    const query = new URLSearchParams();
    query.set("speciality", speciality);
    if (date) query.set("date", date);
    if (pincode) query.set("pincode", pincode);

    const targetUrl = "https://www.apollo247.com/specialties/" + speciality + "?" + query.toString();

    window.open(targetUrl, "_blank");
  });
}

function init() {
  renderSpecialtyCards();
  renderHealthArticles();
  initForm();
}

window.addEventListener("DOMContentLoaded", init);
