/**
 * TikTok Video Showcase Website - JavaScript
 * This file handles the dynamic loading of video links and page functionality
 */

// ============================================================================
// VIDEO DATA - ADD YOUR TIKTOK VIDEOS HERE
// ============================================================================
// To add new videos, simply add new objects to this array
// Each video object should have: title, description, url, cover, and emoji
const videoData = [
    // NEW VIDEOS - Added at the top (12 new videos with new covers)
    {
        title: "Full Scholarships for International Students to Come Study in USA & High Acceptance Rate",
        description: "Double your chances of success! These universities not only offer complete financial support but also have HIGH acceptance rates for international students. Get your American education with maximum probability of admission!",
        url: "https://vt.tiktok.com/ZSD69nB8a/",
        cover: "WhatsApp Image 2025-09-14 at 5.45.14 PM.jpeg",
        emoji: "💰"
    },
    {
        title: "7 American Universities With 100% Scholarships And No English Proficiency Exams",
        description: "The perfect combination! These 7 universities eliminate BOTH financial and language barriers - complete funding AND no TOEFL/IELTS required. Your American education dreams made simple and accessible!",
        url: "https://vt.tiktok.com/ZSD69x1FH/",
        cover: "WhatsApp Image 2025-09-14 at 5.45.47 PM.jpeg",
        emoji: "💰"
    },
    {
        title: "100% Scholarships to International Students With High Acceptance Rates",
        description: "Win-win situation! These universities offer complete financial coverage AND have generous acceptance rates for international students. Maximize your chances of getting both admission AND full funding!",
        url: "https://vt.tiktok.com/ZSD69WVEX/",
        cover: "WhatsApp Image 2025-09-14 at 5.46.46 PM.jpeg",
        emoji: "💰"
    },
    {
        title: "These 2 universities offer full tuition scholarships to international students",
        description: "Hidden gems revealed! These 2 exceptional universities provide complete tuition coverage for international students. Discover these lesser-known opportunities that could change your educational journey forever!",
        url: "https://vt.tiktok.com/ZSD69ndXA/",
        cover: "WhatsApp Image 2025-09-14 at 5.47.16 PM.jpeg",
        emoji: "💰"
    },
    {
        title: "10 universities that give international students 100% scholarships to study in America",
        description: "The complete guide to debt-free education! Explore 10 amazing universities that cover every expense for international students. From coast to coast, your American education adventure awaits with zero financial burden!",
        url: "https://vt.tiktok.com/ZSD69GfeQ/",
        cover: "WhatsApp Image 2025-09-14 at 5.47.45 PM.jpeg",
        emoji: "💰"
    },
    {
        title: "These 2 American Universities Have 100% Scholarships for International Students",
        description: "Exclusive insider information! These 2 prestigious American universities offer complete financial packages for international students. Don't miss these incredible opportunities that could transform your academic future!",
        url: "https://vt.tiktok.com/ZSD69CQVV/",
        cover: "WhatsApp Image 2025-09-14 at 5.48.34 PM.jpeg",
        emoji: "💰"
    },
    {
        title: "100% Scholarship for International Students & High Acceptance Rate",
        description: "The best of both worlds! Get complete financial coverage AND enjoy high acceptance rates at these universities. Your path to American education just became significantly easier and more affordable!",
        url: "https://vt.tiktok.com/ZSD69HLPV/",
        cover: "WhatsApp Image 2025-09-14 at 5.49.05 PM.jpeg",
        emoji: "💰"
    },
    {
        title: "3 universities that give international students 100% scholarships to study in USA",
        description: "Triple your opportunities! These 3 outstanding universities provide complete financial support for international students. Focus on your studies, not your finances - these institutions have got you covered!",
        url: "https://vt.tiktok.com/ZSD69asGQ/",
        cover: "WhatsApp Image 2025-09-14 at 5.49.31 PM.jpeg",
        emoji: "💰"
    },
    {
        title: "Full Scholarships for International Students - No English Proficiency Exams Required",
        description: "Break down language barriers! These incredible universities offer complete financial support WITHOUT requiring TOEFL, IELTS, or any English tests - your dream American education is closer than ever!",
        url: "https://vt.tiktok.com/ZSD69ynq7/",
        cover: "WhatsApp Image 2025-09-14 at 5.43.25 PM.jpeg",
        emoji: "💰"
    },
    {
        title: "10 American Universities That Give International Students Full Scholarships",
        description: "The ultimate treasure map! Uncover the top 10 prestigious American universities that offer complete financial coverage - from tuition to living expenses. Your golden ticket to world-class education awaits!",
        url: "https://vt.tiktok.com/ZSD69jjUe/",
        cover: "WhatsApp Image 2025-09-14 at 5.43.54 PM.jpeg",
        emoji: "💰"
    },
    {
        title: "3 Universities That Give 100% Scholarships to International Students for Master's Degrees",
        description: "Advance your career without the debt! These 3 exceptional universities cover EVERYTHING for your Master's degree - tuition, housing, meals, and more. Transform your future with zero financial stress!",
        url: "https://vt.tiktok.com/ZSD69AAv1/",
        cover: "WhatsApp Image 2025-09-14 at 5.44.17 PM.jpeg",
        emoji: "💰"
    },
    {
        title: "Study for FREE in America as an International Student",
        description: "Yes, it's possible! Learn the insider secrets to studying in America completely FREE - no tuition, no hidden fees, no student loans. Your American dream education without the financial nightmare!",
        url: "https://vt.tiktok.com/ZSD69PpdV/",
        cover: "WhatsApp Image 2025-09-14 at 5.44.46 PM.jpeg",
        emoji: "💰"
    },

    // ORIGINAL VIDEOS - Starting here (keeping all original videos with their original covers)
    {
        title: "3 Universities that give 100% scholarships to international students",
        description: "Discover the top 3 American universities that offer complete financial coverage for international students - no tuition fees, no hidden costs!",
        url: "https://vt.tiktok.com/ZSAts9sCF/",
        cover: "WhatsApp Image 2025-09-04 at 6.47.22 PM (1).jpeg",
        emoji: "💰"
    },
    {
        title: "3 Universities that give 100% scholarships to international students",
        description: "Uncover the secret universities that provide full-ride scholarships to international students - your dream education is closer than you think!",
        url: "https://vt.tiktok.com/ZSAtpVnYa/",
        cover: "WhatsApp Image 2025-09-04 at 6.47.22 PM (2).jpeg",
        emoji: "💰"
    },
    {
        title: "10 Universities that give 100% scholarships to international students",
        description: "The ultimate list of 10 prestigious American universities offering complete financial aid packages - transform your educational dreams into reality!",
        url: "https://vt.tiktok.com/ZSAtsejMx/",
        cover: "WhatsApp Image 2025-09-04 at 6.47.23 PM.jpeg",
        emoji: "💎"
    },
    {
        title: "3 Universities that give 100% scholarships to international students",
        description: "Exclusive insider information on 3 hidden gem universities that offer full scholarships - don't miss this golden opportunity!",
        url: "https://vt.tiktok.com/ZSAtGMVt8/",
        cover: "WhatsApp Image 2025-09-04 at 6.47.23 PM (1).jpeg",
        emoji: "💰"
    },
    {
        title: "Do this if you want a full scholarship to study in America",
        description: "Step-by-step guide to securing a full scholarship in the USA - follow these proven strategies to make your American dream come true!",
        url: "https://vt.tiktok.com/ZSAtGCp6v/",
        cover: "WhatsApp Image 2025-09-04 at 6.47.23 PM (2).jpeg",
        emoji: "🚀"
    },
    {
        title: "100% scholarship to study in California USA as an international student",
        description: "Sunshine, beaches, and FREE education! Discover how to get a full scholarship to study in beautiful California - your golden state opportunity awaits!",
        url: "https://vt.tiktok.com/ZSAtnTuEw/",
        cover: "WhatsApp Image 2025-09-04 at 6.47.23 PM (3).jpeg",
        emoji: "☀️"
    },
{
    title: "3 steps to get 100% scholarship to study in America",
    description: "Master the 3 essential steps that guarantee your scholarship success in America - simple, actionable, and proven to work!",
    url: "https://vt.tiktok.com/ZSAtnsoNU/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.23 PM (4).jpeg",
    emoji: "✅"
},
    {
        title: "This is how you can study for FREE in America as an international student",
        description: "The complete blueprint for studying in America without paying a single dollar - learn the insider secrets that changed everything!",
        url: "https://vt.tiktok.com/ZSAtWfhrM/",
        cover: "WhatsApp Image 2025-09-04 at 6.47.23 PM (5).jpeg",
        emoji: "🎉"
    },
  {
    title: "This college gives international students 100% scholarships to study in USA",
    description: "Meet the generous American college that covers 100% of costs for international students - your ticket to a debt-free education!",
    url: "https://vt.tiktok.com/ZSAtWEFgA/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.24 PM.jpeg",
    emoji: "💯"
}, 
  {
    title: "Full scholarship to study in America",
        description: "Your complete guide to achieving a full scholarship in America - no tuition, no fees, no debt. Make your educational dreams a reality!",
    url: "https://vt.tiktok.com/ZSAt78Atm/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.24 PM (1).jpeg",
    emoji: "🎓"
},
{  
 title: "This university gives international students 100% scholarships",
        description: "Discover this amazing American university that offers complete financial coverage for international students - your pathway to world-class education!",
    url: "https://vt.tiktok.com/ZSAt7DpVw/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.24 PM (2).jpeg",
    emoji: "🏛️"
    },
{
title: "5 schools that are tuition free for international students",
        description: "Explore 5 incredible American schools that offer completely free education to international students - no tuition, no hidden costs!",
    url: "https://vt.tiktok.com/ZSAt7Ww7S/",
    cover: "WhatsApp Image 2025-09-05 at 2.50.51 AM (1).jpeg",
    emoji: "🏫"
},
{
title: "10 schools that give 100% scholarships to international students",
        description: "The comprehensive list of 10 American schools offering complete scholarship packages - your guide to debt-free education!",
    url: "https://vt.tiktok.com/ZSAt7aM2x/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.24 PM (3).jpeg",
    emoji: "💎"
},
{
title: "Big scholarships in america for international students",
        description: "Unlock the biggest scholarship opportunities in America for international students - massive funding awaits!",
    url: "https://vt.tiktok.com/ZSAt7uSdp/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.24 PM (4).jpeg",
    emoji: "💰"
},
{
title: "This university will give you a scholarship to study in the Usa if you dont have the money",
        description: "Financial barriers? No problem! This university provides scholarships specifically for students without financial means - your chance is here!",
    url: "https://vt.tiktok.com/ZSAt7xwKW/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.24 PM (5).jpeg",
    emoji: "🎓"
},
{
title: "This U.S university is FREE if your parents make under 100k$",
        description: "Income-based free education! This American university offers completely free tuition if your family income is under $100,000!",
    url: "https://vt.tiktok.com/ZSAt7XCbc/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.25 PM.jpeg",
    emoji: "🆓"
},
{
title: "Masters in Nursing scholarships for international students",
        description: "Specialized nursing scholarships! Discover how to get your Master's in Nursing fully funded as an international student!",
    url: "https://vt.tiktok.com/ZSAtvh8Gs/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.25 PM (1).jpeg",
    emoji: "🏥"
},
{
title: "These 3 universities give Nursing scholarships to international students",
        description: "Top 3 universities offering complete nursing scholarships for international students - your healthcare career starts here!",
    url: "https://vt.tiktok.com/ZSAtvJuq6/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.25 PM (2).jpeg",
    emoji: "🏥"
},
{
title: "Funding to study in America as an international student",
        description: "Your complete funding guide! Learn all the ways to secure financial support for your American education journey!",
    url: "https://vt.tiktok.com/ZSAtvk6fN/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.25 PM (3).jpeg",
    emoji: "💰"
},
{
title: "This university gave me a full scholarship as an international student",
        description: "Real success story! Learn how this university provided a complete scholarship package - your inspiration for success!",
    url: "https://vt.tiktok.com/ZSAtvMEXS/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.21 PM (1).jpeg",
    emoji: "🎓"
},
{
title: "This college gives big scholarships to international students",
        description: "Major scholarship opportunities! This college offers substantial financial aid packages for international students!",
    url: "https://vt.tiktok.com/ZSAtvph7K/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.25 PM (4).jpeg",
    emoji: "🏫"
},
{
title: "This is a full scholarship for international students",
        description: "Complete scholarship coverage! Discover this amazing opportunity for full financial support as an international student!",
    url: "https://vt.tiktok.com/ZSAtv9M7C/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.25 PM (5).jpeg",
    emoji: "🎓"
},
{
title: "Full scholarship to study in America",
        description: "Your ultimate scholarship guide! Learn how to secure complete financial coverage for your American education!",
    url: "https://vt.tiktok.com/ZSAtvpasd/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.21 PM.jpeg",
    emoji: "🇺🇸"
},
{
title: "This university gives scholarships to international students",
        description: "Generous scholarship programs! This university offers various scholarship opportunities for international students!",
    url: "https://vt.tiktok.com/ZSAtvfkaY/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.26 PM.jpeg",
    emoji: "🏛️"
},
{
title: "This American college gives international students full scholarships",
        description: "Complete financial support! This American college provides full scholarship packages for international students!",
    url: "https://vt.tiktok.com/ZSAtvwu6k/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.26 PM (1).jpeg",
    emoji: "🏫"
},
{
title: "This college gives 80k$ scholarships per year to international students in America",
        description: "Massive $80,000 annual scholarships! This college offers incredible financial support for international students!",
    url: "https://vt.tiktok.com/ZSAtce9P2/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.26 PM (2).jpeg",
    emoji: "💰"
},
{
title: "This US college gives scholarships to international students and doesnt require English Proficincy Exams",
        description: "No English test required! This US college offers scholarships without TOEFL/IELTS requirements - making education accessible!",
    url: "https://vt.tiktok.com/ZSAtcM9oT/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.26 PM (3).jpeg",
    emoji: "🇺🇸"
},
{
title: "This school gives you 100% funding to study in America",
        description: "Complete funding opportunity! This school provides 100% financial coverage for your American education!",
        url: "https://vt.tiktok.com/ZSAtcme6Y/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.26 PM (4).jpeg",
    emoji: "🎓"
},
{
title: "This is how you get a scholarship to study in America",
        description: "Step-by-step scholarship guide! Learn the exact process to secure funding for your American education!",
    url: "https://vt.tiktok.com/ZSAtcme6Y/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.26 PM (5).jpeg",
    emoji: "🎯"
},
{
title: "This American college gives full scholarships to international students",
        description: "Generous American college! Discover this institution that offers complete scholarship packages for international students!",
        url: "https://vt.tiktok.com/ZSAtcme6Y/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.27 PM.jpeg",
    emoji: "🏫"
},
{
title: "This university offers full scholarships to international students",
        description: "Complete scholarship programs! This university provides full financial support for international students!",
        url: "https://vt.tiktok.com/ZSAtcme6Y/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.27 PM (1).jpeg",
    emoji: "🏛️"
},
{
title: "Study online for free at an American university",
        description: "Online education opportunity! Study at an American university completely free through their online programs!",
        url: "https://vt.tiktok.com/ZSAtcme6Y/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.27 PM (2).jpeg",
    emoji: "💻"
},
{
title: "If you want to study in America then this university will give you a guaranteed scholarship",
        description: "Guaranteed scholarship opportunity! This university promises scholarship support for international students!",
        url: "https://vt.tiktok.com/ZSAtcme6Y/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.27 PM (3).jpeg",
    emoji: "🎓"
},
{
title: "Those 2 universities offer full tuition scholarships to international students",
        description: "Two amazing universities! Both institutions offer complete tuition coverage for international students!",
        url: "https://vt.tiktok.com/ZSAtcme6Y/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.19 PM.jpeg",
    emoji: "🏛️"
},
{
title: "Want to study in the USA but worried about money?",
        description: "Financial concerns? No problem! Discover how to study in the USA without financial stress through these opportunities!",
        url: "https://vt.tiktok.com/ZSAtcme6Y/",
    cover: "WhatsApp Image 2025-09-05 at 2.50.51 AM.jpeg",
    emoji: "💰"
},
{
title: "This U.S university lets anyone get a degree for FREE",
        description: "Free degree opportunity! This US university offers completely free education to everyone, including international students!",
        url: "https://vt.tiktok.com/ZSAtcme6Y/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.27 PM (4).jpeg",
    emoji: "🆓"
},
{
title: "This is how you get funding for your masters degree in America as an international student",
        description: "Master's degree funding! Learn the complete process to secure financial support for your graduate studies in America!",
        url: "https://vt.tiktok.com/ZSAtcme6Y/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.28 PM.jpeg",
    emoji: "🎓"
},
{
title: "This is how you can get free tuition as an international student in America",
        description: "Free tuition strategies! Discover proven methods to achieve completely free education as an international student!",
        url: "https://vt.tiktok.com/ZSAtcme6Y/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.28 PM (1).jpeg",
    emoji: "🆓"
},
{
title: "This is how you can study for free in America",
        description: "Free education guide! Learn the insider secrets to studying in America without paying tuition fees!",
        url: "https://vt.tiktok.com/ZSAtcme6Y/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.28 PM (3).jpeg",
    emoji: "🇺🇸"
},
{
title: "I wish i knew this when i started college as an international student",
        description: "Valuable advice! Essential information every international student should know before starting college in America!",
        url: "https://vt.tiktok.com/ZSAtcme6Y/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.28 PM (2).jpeg",
    emoji: "💡"
},
    {
        title: "This is how you can study in America for free",
        description: "Complete free education guide! Learn all the strategies to study in America without financial burden!",
        url: "https://vt.tiktok.com/ZSAtcme6Y/",
        cover: "WhatsApp Image 2025-09-05 at 2.51.00 AM.jpeg",
        emoji: "🎓"
    },
{
title: "This will save you 50k$+ as an international student",
        description: "Massive savings opportunity! Learn this strategy that can save you over $50,000 as an international student!",
        url: "https://vt.tiktok.com/ZSAtcme6Y/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.28 PM (4).jpeg",
    emoji: "💰"
},
{
title: "If you're thinking of studying in America listen to this...",
        description: "Essential advice! Critical information every prospective international student needs to hear about studying in America!",
        url: "https://vt.tiktok.com/ZSAtcme6Y/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.28 PM (5).jpeg",
    emoji: "🎧"
},
{
title: "This is one of the best things you can do as an international student",
        description: "Best practice advice! Discover one of the most valuable actions you can take as an international student!",
        url: "https://vt.tiktok.com/ZSAtcme6Y/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.29 PM.jpeg",
    emoji: "⭐"
},
{
title: "If youre an international student you need to hear this",
        description: "Must-hear information! Critical advice that every international student should know for success!",
        url: "https://vt.tiktok.com/ZSAtcme6Y/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.29 PM (1).jpeg",
    emoji: "🎧"
},
{
title: "the truth about visa sponsorship",
        description: "Visa sponsorship reality! Learn the honest truth about visa sponsorship for international students!",
        url: "https://vt.tiktok.com/ZSAtcme6Y/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.29 PM (2).jpeg",
    emoji: "📋"
},
{
title: "If youre an international student,heres the truth",
        description: "Hard truths revealed! Important realities every international student should understand about studying abroad!",
        url: "https://vt.tiktok.com/ZSAtcme6Y/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.29 PM (3).jpeg",
    emoji: "💡"
},
{
title: "Listen to this if youre an international student...",
        description: "Important message! Essential information every international student should listen to for their success!",
        url: "https://vt.tiktok.com/ZSAtcme6Y/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.29 PM (4).jpeg",
    emoji: "🎧"
},
{
title: "If youre thinking of studying in America listen to this...",
        description: "Critical advice! Must-hear information for anyone considering studying in America as an international student!",
        url: "https://vt.tiktok.com/ZSAtcme6Y/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.29 PM (5).jpeg",
    emoji: "🎧"
},
    {
        title: "For international students",
        description: "Essential guide for international students! Comprehensive information to help you succeed in your American education journey!",
        url: "https://vt.tiktok.com/ZSAtcme6Y/",
        cover: "WhatsApp Image 2025-09-04 at 6.47.19 PM.jpeg",
        emoji: "🌍"
    },
    {
        title: "3 Universities that give 100% scholarships to international students",
        description: "Exclusive insider information on 3 hidden gem universities that offer full scholarships - don't miss this golden opportunity!",
        url: "https://vt.tiktok.com/ZSAtGMVt8/",
        cover: "WhatsApp Image 2025-09-04 at 6.47.23 PM (1).jpeg",
        emoji: "💰"
    }
];

// ============================================================================
// WEBSITE FUNCTIONALITY
// ============================================================================

let currentPage = 1;
const videosPerPage = 12;
let filteredVideos = [...videoData];

// Function to initialize the website
function initializeWebsite() {
    console.log('Initializing TikTok Video Showcase Website...');
    console.log(`Total videos loaded: ${videoData.length}`);
    
    // Load initial videos
    loadVideos();
    
    // Setup search functionality
    setupSearch();
    
    // Setup filters
    setupFilters();
    
    // Setup pagination
    setupPagination();
    
    // Setup theme toggle
    setupThemeToggle();
    
    console.log('Website initialized successfully!');
}

// Function to load videos with pagination
function loadVideos() {
    const container = document.getElementById('videos-container');
    const startIndex = (currentPage - 1) * videosPerPage;
    const endIndex = startIndex + videosPerPage;
    const videosToShow = filteredVideos.slice(startIndex, endIndex);
    
    container.innerHTML = '';
    
    videosToShow.forEach(video => {
        const videoElement = createVideoElement(video);
        container.appendChild(videoElement);
    });
    
    updatePagination();
}

// Function to create a video element
function createVideoElement(video) {
    const videoDiv = document.createElement('div');
    videoDiv.className = 'video-item';
    
    // Create cover image element
    const coverImg = document.createElement('img');
    coverImg.src = video.cover;
    coverImg.alt = video.title;
    coverImg.className = 'video-cover';
    
    // Create title element
    const titleDiv = document.createElement('div');
    titleDiv.className = 'video-title';
    titleDiv.textContent = `${video.emoji} ${video.title}`;
    
    // Create description element
    const descDiv = document.createElement('div');
    descDiv.className = 'video-description';
    descDiv.textContent = video.description;
    
    // Create watch button
    const watchButton = document.createElement('a');
    watchButton.href = video.url;
    watchButton.target = '_blank';
    watchButton.rel = 'noopener noreferrer';
    watchButton.className = 'tiktok-link';
    watchButton.textContent = 'Watch on TikTok';
    
    // Create content wrapper
    const contentDiv = document.createElement('div');
    contentDiv.className = 'video-content';
    contentDiv.appendChild(titleDiv);
    contentDiv.appendChild(descDiv);
    contentDiv.appendChild(watchButton);
    
    // Create link wrapper for cover image
    const linkElement = document.createElement('a');
    linkElement.href = video.url;
    linkElement.target = '_blank';
    linkElement.rel = 'noopener noreferrer';
    linkElement.appendChild(coverImg);
    
    // Assemble the video element
    videoDiv.appendChild(linkElement);
    videoDiv.appendChild(contentDiv);
    
    return videoDiv;
}

// Function to setup search functionality
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    const clearButton = document.getElementById('clear-search');
    
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase().trim();
            
            if (searchTerm === '') {
                filteredVideos = [...videoData];
            } else {
                filteredVideos = videoData.filter(video => 
                    video.title.toLowerCase().includes(searchTerm) ||
                    video.description.toLowerCase().includes(searchTerm)
                );
            }
            
            currentPage = 1; // Reset to first page when searching
            loadVideos();
        });
    }
    
    // Clear search button functionality
    if (clearButton) {
        clearButton.addEventListener('click', function() {
            searchInput.value = '';
            filteredVideos = [...videoData];
            currentPage = 1;
            loadVideos();
        });
    }
}

// Function to setup filters
function setupFilters() {
    const categoryFilter = document.getElementById('category-filter');
    const sortFilter = document.getElementById('sort-filter');
    
    // Category filter functionality
    if (categoryFilter) {
        categoryFilter.addEventListener('change', function(e) {
            const selectedCategory = e.target.value;
            
            if (selectedCategory === '') {
                filteredVideos = [...videoData];
            } else {
                filteredVideos = videoData.filter(video => 
                    video.emoji === selectedCategory
                );
            }
            
            currentPage = 1; // Reset to first page when filtering
            loadVideos();
        });
    }
    
    // Sort filter functionality
    if (sortFilter) {
        sortFilter.addEventListener('change', function(e) {
            const sortType = e.target.value;
            
            switch(sortType) {
                case 'alphabetical':
                    filteredVideos.sort((a, b) => a.title.localeCompare(b.title));
                    break;
                case 'reverse':
                    filteredVideos.sort((a, b) => b.title.localeCompare(a.title));
                    break;
                case 'default':
                default:
                    // Reset to original order
                    filteredVideos = [...videoData];
                    break;
            }
            
            currentPage = 1; // Reset to first page when sorting
            loadVideos();
        });
    }
}

// Function to setup pagination
function setupPagination() {
    const prevButton = document.getElementById('prev-btn');
    const nextButton = document.getElementById('next-btn');
    const pageInfo = document.getElementById('pagination-info');
    
    
    if (prevButton) {
        prevButton.addEventListener('click', function() {
            if (currentPage > 1) {
                currentPage--;
    loadVideos();
            }
        });
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', function() {
            const totalPages = Math.ceil(filteredVideos.length / videosPerPage);
            if (currentPage < totalPages) {
                currentPage++;
                loadVideos();
            }
        });
    }
}

// Function to update pagination display
function updatePagination() {
    const totalPages = Math.ceil(filteredVideos.length / videosPerPage);
    const pageInfo = document.getElementById('pagination-info');
    const prevButton = document.getElementById('prev-btn');
    const nextButton = document.getElementById('next-btn');
    const pageNumbers = document.getElementById('page-numbers');
    
    // Update page info
    if (pageInfo) {
        pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
    }
    
    // Generate page number buttons
    if (pageNumbers) {
        let pageButtonsHTML = '';
        
        // Calculate which page numbers to show
        let startPage = Math.max(1, currentPage - 2);
        let endPage = Math.min(totalPages, currentPage + 2);
        
        // Adjust if we're near the beginning or end
        if (currentPage <= 3) {
            endPage = Math.min(5, totalPages);
        }
        if (currentPage >= totalPages - 2) {
            startPage = Math.max(1, totalPages - 4);
        }
        
        // Generate page buttons
        for (let i = startPage; i <= endPage; i++) {
            const isActive = i === currentPage ? 'active' : '';
            pageButtonsHTML += `<button class="page-btn ${isActive}" data-page="${i}">${i}</button>`;
        }
        
        pageNumbers.innerHTML = pageButtonsHTML;
        
        // Add click listeners to page buttons
        const pageButtons = pageNumbers.querySelectorAll('.page-btn');
        pageButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const targetPage = parseInt(this.dataset.page);
                if (targetPage !== currentPage) {
                    currentPage = targetPage;
                    loadVideos();
                }
            });
        });
    }
    
    // Update previous/next button states
    if (prevButton) {
        prevButton.disabled = currentPage === 1;
    }
    
    if (nextButton) {
        nextButton.disabled = currentPage === totalPages;
    }
}

// Function to setup theme toggle
function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle?.querySelector('.theme-icon');
    
    // Get saved theme or default to dark
    let currentTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Update icon based on current theme
    if (themeIcon) {
        themeIcon.textContent = currentTheme === 'dark' ? '🌙' : '☀️';
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            // Toggle between dark and light themes
            currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            // Apply theme
            document.documentElement.setAttribute('data-theme', currentTheme);
            
            // Update icon
            if (themeIcon) {
                themeIcon.textContent = currentTheme === 'dark' ? '🌙' : '☀️';
            }
            
            // Save theme preference
            localStorage.setItem('theme', currentTheme);
        });
    }
}

// ============================================================================

// Wait for the DOM to be fully loaded before initializing
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeWebsite);
} else {
    // DOM is already loaded
    initializeWebsite();
}

// ============================================================================
// INSTRUCTIONS FOR ADDING NEW VIDEOS
// ============================================================================
/*
TO ADD NEW TIKTOK VIDEOS:

1. Open this file (script.js)
2. Find the 'videoData' array at the top of the file
3. Add a new object to the array with this format:
   {
       title: "Your Video Title",
       description: "Brief description of your video",
       url: "https://www.tiktok.com/@yourusername/video/YOUR_VIDEO_ID",
       cover: "your-cover-image.jpg",
       emoji: "🎓"
   }

4. Save the file and refresh your website

EXAMPLE:
{
    title: "My Latest Dance Video",
    description: "Trying out the newest viral dance trend!",
    url: "https://www.tiktok.com/@yourusername/video/1234567890123456795",
    cover: "dance-video-cover.jpg",
    emoji: "🎵"
}

TIPS:
- Always use the full TikTok URL
- Make sure the cover image file exists in your website folder
- Choose appropriate emojis that match your video content
- Keep descriptions engaging but concise
- Add new videos at the top of the array to show them first
*/
