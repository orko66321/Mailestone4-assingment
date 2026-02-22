1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElementById: এটা  শুধু কোনো নির্দিষ্ট একটা  ID ধরে খোঁজে। যেহেতু একটি পেজে একটি ID একবারই থাকে, তাই এটি সবসময় একটি মাত্র এলিমেন্ট দেয়। এটি খুব দ্রুত কাজ করে।

getElementsByClassName: এটা  নির্দিষ্ট Class ধরে সব এলিমেন্টকে খুঁজে আনে। এটি একটি "HTMLCollection" বা লিস্ট দেয়। এর ওপর সরাসরি লুপ চালানো কিছুটা ঝামেলার।

querySelector: এটা  সবথেকে আধুনিক। এখানে CSS-এর মতো করে আইডি (#), ক্লাস (.) বা ট্যাগ—সবকিছু দিয়ে খুঁজে পাওয়া যায় । তবে এটি শুধু খুঁজে পাওয়া প্রথম এলিমেন্টটি দেয়। 

querySelectorAll: এটিও CSS স্টাইলে খোঁজে, কিন্তু যতগুলো এলিমেন্ট পায় সবগুলোকে একটি "NodeList" হিসেবে দেয়। এর ওপর সহজেই forEach লুপ চালানো যায়।getElementByClassName এর মত কিন্তু getElementByClassName এটা HTML collection  আউট পুট হিসাবে দেয় আর querySelectorAll  দেয় node list

2. How do you create and insert a new element into the DOM?
প্রথমে  document.createElement() দিয়ে এলিমেন্ট তৈরি করতে হয়। 
তার পর যে element creat করা হয়েছে সেটার value অথবা ইনের টেক্সট অথবা innerHTML সেট করা তার পর appendChild() বা append() দিয়ে মেইন পেজে বসানো।

3. What is Event Bubbling? And how does it work?
Event Bubbling হলো এমন একটি জিনিস , যেখানে কোনো চাইল্ড এলিমেন্টে  ক্লিক করলে সেই ক্লিক ইভেন্টটি বুদবুদের মতো নিচ থেকে উপরের দিকে মানে প্যারেন্ট এলিমেন্টের দিকে ছড়াতে থাকে।


 4. What is Event Delegation in JavaScript? Why is it useful?
Event Delegation মানে হল আমার যদি কোণ একটা div এর মধ্যে অনেক গুলো addEventlistener  দরকার কিন্তু প্রতিটা element  কে একে একে ধরা খুব koster তাই আমরা সব গুলো element  কে না ধরে তাদের প্যারেন্ট কে ধরতে পারি আর এটাই মূলত Event Delegation 


5. What is the difference between preventDefault() and stopPropagation() methods?
preventDefault(): এটি ব্রাউজারের কোনো এলিমেন্টের জন্মগত স্বভাব বা ডিফল্ট কাজ বন্ধ করে দেয়।যদি  একটি লিঙ্কে ক্লিক করলে পেজ রিলোড হয় বা অন্য পেজে যায়।আমরা  যদি এটি বন্ধ করতে চাই , তবে event.preventDefault() ব্যবহার করতে হবে ।

stopPropagation(): এটি ইভেন্ট বাবলিং বন্ধ করে দেয়। যদি আমি কোণ  বাটনে ক্লিক করি  এবং আমি চাচ্ছি  এই ক্লিকের খবর যেন তার প্যারেন্ট জানতে না পারে, তখন আমরা  event.stopPropagation() ব্যবহার করি । এর ফলে ইভেন্টটি আর উপরের দিকে ছড়াবে না।
