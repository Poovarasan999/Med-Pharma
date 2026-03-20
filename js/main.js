const specialties = [
  {
    title: "General Physician / Internal Medicine",
    subtitle: "Non-surgical medical care for adults",
    icon: "https://img.icons8.com/ios-filled/64/000000/stethoscope.png",
   
  },
  {
    title: "Dermatology",
    subtitle: "Skin, hair, and nail care",
    icon: "https://img.icons8.com/ios-filled/64/000000/dermatology.png",
   
  },
  {
    title: "Obstetrics & Gynaecology",
    subtitle: "Women's reproductive health",
    icon: "https://img.icons8.com/ios-filled/64/000000/pregnant.png",
   
  },
  {
    title: "Orthopaedics",
    subtitle: "Bones, joints, and mobility",
    icon: "https://img.icons8.com/ios-filled/64/000000/crutches.png",
   
  },
  {
    title: "ENT",
    subtitle: "Ear, nose, and throat care",
    icon: "https://img.icons8.com/ios-filled/64/000000/nose.png",
   
  },
  {
    title: "Neurology",
    subtitle: "Nervous system disorders",
    icon: "https://img.icons8.com/ios-filled/64/000000/brain.png",
   
  },
  {
    title: "Cardiology",
    subtitle: "Heart and circulatory health",
    icon: "https://img.icons8.com/ios-filled/64/000000/heart-with-pulse.png",
   
  },
  {
    title: "Urology",
    subtitle: "Kidney, bladder, and urinary care",
    icon: "https://img.icons8.com/ios-filled/64/000000/kidney.png",
    
  },
  {
    title: "Gastroenterology / GI Medicine",
    subtitle: "Digestive system health",
    icon: "https://img.icons8.com/ios-filled/64/000000/stomach.png",
   
  },
  {
    title: "Psychiatry",
    subtitle: "Mental health and wellbeing",
    icon: "https://img.icons8.com/ios-filled/64/000000/mental-health.png",
    
  },
];

const healthArticles = [
  {
    title: "How to increase WBC count: Causes & solutions",
    summary: "Learn why low WBC count happens and what lifestyle changes can help.",
   
  },
  {
    title: "Mounjaro: Uses and side effects",
    summary: "Understand how Mounjaro works for type 2 diabetes and what to expect.",
   
  },
  {
    title: "Side effects of Mounjaro",
    summary: "What to look out for when taking Mounjaro for blood sugar control.",
    
  },
  {
    title: "Mounjaro dosage guide",
    summary: "Dosage tips to stay safe while using Mounjaro.",
    
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
  });
}

function init() {
  renderSpecialtyCards();
  renderHealthArticles();
  initForm();
}

window.addEventListener("DOMContentLoaded", init);
