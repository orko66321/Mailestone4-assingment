let interviewList = [];
let rejectedList = [];
let currentFilter = "all";

const totalDisplay = document.getElementById("total");
const interviewDisplay = document.getElementById("interview-count");
const rejectedDisplay = document.getElementById("rejected-count");

const allCardSections = document.getElementById("all-cards");
const filteredCardsSection = document.getElementById("filtered-cards");

const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");


function calculateCounts() {
    totalDisplay.innerText = allCardSections.querySelectorAll(".card").length;
    interviewDisplay.innerText = interviewList.length;
    rejectedDisplay.innerText = rejectedList.length;
}
calculateCounts();

function togglestyle(id) {
  
    const filterButtons = [allFilterBtn, interviewFilterBtn, rejectedFilterBtn];

    for (const btn of filterButtons) {
        btn.classList.remove("bg-black", "text-white");
        btn.classList.add("bg-gray-300");
    }

    const selectedBtn = document.getElementById(id);
    currentFilter = id;

    selectedBtn.classList.remove("bg-gray-300");
    selectedBtn.classList.add("bg-black", "text-white");

    if (id === 'all-filter-btn') {
        allCardSections.classList.remove('hidden');
        filteredCardsSection.classList.add('hidden');
    } else if (id === 'interview-filter-btn') {
        allCardSections.classList.add('hidden');
        filteredCardsSection.classList.remove('hidden');
        renderFilteredCards(interviewList, "Interview");
    } else if (id === 'rejected-filter-btn') {
        allCardSections.classList.add('hidden');
        filteredCardsSection.classList.remove('hidden');
        renderFilteredCards(rejectedList, "Rejected");
    }
}

document.getElementById("main-tag").addEventListener("click", function(event) {
    const target = event.target;
    if (target.closest(".btn-delete")) {
        target.closest(".card").remove();
        calculateCounts();
        return;
    }
    if (target.classList.contains("interview-btn") || target.classList.contains("rejected-btn")) {
        const card = target.closest(".card");
        const companyName = card.querySelector(".companyName").innerText;
        const position = card.querySelector(".position").innerText;
        const description = card.querySelector(".description").innerText;
        const statusText = card.querySelector(".statu").innerText;
        const location = card.querySelector(".location") ? card.querySelector(".location").innerText : ""; 
        const salary = card.querySelector(".salary") ? card.querySelector(".salary").innerText : "";
        const isInterview = target.classList.contains("interview-btn");
        const cardInfo = { 
            companyName,
             position,
            description,
            statusText: isInterview ? "Interview" : "Rejected",
            location,
            salary 
         };
        if (isInterview) {
            
            if (!interviewList.filter(item => item.companyName === companyName).length) {
                interviewList.push(cardInfo);
                
                rejectedList = rejectedList.filter(item => item.companyName !== companyName);
            }
        } else {
            
            if (!rejectedList.filter(item => item.companyName === companyName).length) {
                rejectedList.push(cardInfo);
                
                interviewList = interviewList.filter(item => item.companyName !== companyName);
            }
        }
        card.querySelector(".statu").innerText = isInterview ? "Interview" : "Rejected";
        calculateCounts();

       
        if (currentFilter !== 'all-filter-btn') {
            togglestyle(currentFilter);
        }
    }
});
function renderFilteredCards(list, statusLabel) {
    filteredCardsSection.innerHTML = "";
    
    if (list.length === 0) {
        filteredCardsSection.innerHTML = `
        <div class="text-center mt-10 text-gray-500 flex flex-col items-center justify-center  rounded-lg p-10">
            <p class="text-8xl text-center"><i class="fa-solid fa-file-lines"></i></p>
            <p class="mt-4 text-center">No jobs available</p>
            <p class="text-gray-500 text-center text-[14px]">Check back soon for new job opportunities</p>
        </div>`;
        return;
    }

for (const item of list) {
    const div = document.createElement("div");

    div.className = "card flex justify-between flex-row bg-gray-100 rounded-lg p-9 mt-4";
    

    div.innerHTML = `
        <div class="card-left space-y-5">
            <div>
                <p class="companyName text-3xl font-bold">${item.companyName}</p>
                <p class="position text-gray-400">${item.position}</p>
            </div>
            <div class="flex gap-4">
                <p class="location">${item.location}</p>
                <p class="type">Full-time</p>
                <p class="salary">${item.salary}</p>
            </div>
            <p class="statu btn btn-primary">${item.statusText}</p>
           
            <p class="description">${item.description}</p>
            <div class="flex gap-4">
                <button class="interview-btn btn bg-green-500 text-white rounded-md">Interview</button>
                <button class="rejected-btn btn bg-red-500 text-white rounded-md">Rejected</button>
            </div>
        </div>
        <div class="card-right">
            <button class="btn-delete btn"><i class="fa-regular fa-trash-can"></i></button>
        </div>`;
    
   
    filteredCardsSection.appendChild(div);
}
}