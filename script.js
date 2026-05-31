// DOM FAQ
const faqs = [
  {
    q: "What are the opening hours?",
    a: "Oceavora is open every day from 09:00 AM to 08:00 PM, including weekends and public holidays. Last admission is at 07:00 PM.",
  },
  {
    q: "How much is the ticket?",
    a: "Ticket prices start from $25 per person for Regular Admission. We also offer Family, Student, and VIP packages with additional benefits.",
  },
  {
    q: "Is there a place to eat inside?",
    a: "Yes, Oceavora features a food court and ocean-view café where visitors can enjoy a variety of meals, snacks, and beverages during their visit.",
  },
  {
    q: "Can I bring my camera?",
    a: "Absolutely! Visitors are welcome to bring cameras and smartphones for personal photography. Flash photography may be restricted in certain exhibits to protect marine life.",
  },
  {
    q: "Is the underwater tunnel safe?",
    a: "Yes, our underwater tunnel is built with high-strength acrylic panels and undergoes regular safety inspections to ensure a secure and enjoyable experience for all visitors.",
  },
];

const faqList = document.getElementById("faqList");
faqs.forEach((f, i) => {
  const item = document.createElement("div");
  item.className = "faq-item";
  item.innerHTML = `<div class="faq-q"><span class="faq-q-text">${f.q}</span><i class="faq-icon fa-solid fa-angle-down"></i></div><div class="faq-a">${f.a}</div>`;
  item.querySelector(".faq-q").addEventListener("click", () => {
    item.classList.toggle("open");
  });
  faqList.appendChild(item);
});

//  DOM Tickets 
const modalElement = document.getElementById("successModal");

const successModal = new bootstrap.Modal(modalElement);

document.querySelectorAll(".ticket-btn").forEach((button) => {
  button.addEventListener("click", () => {
    console.log("button diklik");
    successModal.show();
  });
});
