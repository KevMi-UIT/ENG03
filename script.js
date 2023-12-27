const files = [
    "Listening/PART 3 - Short Conversations/Detail Questions/Commuting/Commuting.htm",
    "Listening/PART 3 - Short Conversations/Detail Questions/In a business/In a business.htm",
    "Listening/PART 3 - Short Conversations/Detail Questions/In a office 1/In a office 1.htm",
    "Listening/PART 3 - Short Conversations/Detail Questions/In a office 2/In a office 2.htm",
    "Listening/PART 3 - Short Conversations/Overview Questions/Careers/Careers.htm",
    "Listening/PART 3 - Short Conversations/Overview Questions/In office/In office.htm",
    "Listening/PART 3 - Short Conversations/Overview Questions/News & Exhibtion/News & Exhibition.htm",
    "Listening/PART 3 - Short Conversations/Overview Questions/Sales & Services/Sales & Services.htm",
    "Listening/PART 3 - Short Conversations/Overview Questions/Travelling/Travelling.htm",
    "Listening/PART 4 - Short Talks/Test 1_Public Announcement/Test 1_Public Announcement.htm",
    "Listening/PART 4 - Short Talks/Test 2_Business and Tourism Talk/Test 2_Business and Tourism Talk.htm",
    "Listening/PART 4 - Short Talks/Test 3_Weather and News Report/Test 3_Weather and News Report.htm",
    "Listening/PART 4 - Short Talks/Test 6_Advertisement/Test 6_Advertisement.htm",
    "Listening/PART 4 - Short Talks/Test 7_Airport and train stations announcement/Test 7_Airport and train stations announcement.htm",
    "Reading/I. Letter.htm",
    "Reading/II. Article.htm",
    "Reading/III. Memorandum, Message and Announcement.htm",
    "Reading/IV. Fax & Email.htm",
    "Reading/V. Advertisement.htm",
];

const fileList = document.getElementById("file-list");

files.forEach((file) => {
    const link = document.createElement("a");
    link.href = file;
    link.textContent = file;
    link.className = "file-link";
    link.target = "_self"; // Add this line
    fileList.appendChild(link);
});
