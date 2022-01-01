let allFaqTitle = document.querySelectorAll(".head");
let allTexts = document.querySelectorAll(".text");

allFaqTitle.forEach((faqTitle) => {
    faqTitle.addEventListener("click", (e) => {
        allFaqTitle.forEach((faqTitle) => {
            faqTitle.classList.remove("active");
        })
        e.currentTarget.classList.add("active");
        allTexts.forEach((text) => {
            let faqAtt = faqTitle.getAttribute("data-faq");
            if (faqAtt == text.classList[1]) {
                text.classList.toggle("open");
            } else {
                text.classList.remove("open");
            };
        });
    });
});