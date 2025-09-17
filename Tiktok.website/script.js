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
    {
        title: "3 Universities that give 100% scholarships to international students",
        description: "If you're thinking of studying in America as an international student but cannot afford it watch this",
        url: "https://vt.tiktok.com/ZSAts9sCF/",
        cover: "WhatsApp Image 2025-09-04 at 6.47.22 PM (1).jpeg",
        emoji: "💰"
    },

    {
        title: "3 Universities that give 100% scholarships to international students",
        description: "If you're thinking of studying in America as an international student but cannot afford it watch this",
        url: "https://vt.tiktok.com/ZSAtpVnYa/",
        cover: "WhatsApp Image 2025-09-04 at 6.47.22 PM (2).jpeg",
        emoji: "💰"
    },

    {
        title: "10 Universities that give 100% scholarships to international students",
        description: "If you're thinking of studying in America as an international student but cannot afford it watch this",
        url: "https://vt.tiktok.com/ZSAtsejMx/",
        cover: "WhatsApp Image 2025-09-04 at 6.47.23 PM.jpeg",
        emoji: "💎"
    },


    {
        title: "3 Universities that give 100% scholarships to international students",
        description: "If you're thinking of studying in America as an international student but cannot afford it watch this",
        url: "https://vt.tiktok.com/ZSAtGMVt8/",
        cover: "WhatsApp Image 2025-09-04 at 6.47.23 PM (1).jpeg",
        emoji: "💰"
    },

    {
        title: "Do this if you want a full scholarship to study in America",
        description: "If you're thinking of studying in America as an international student but cannot afford it watch this",
        url: "https://vt.tiktok.com/ZSAtGCp6v/",
        cover: "WhatsApp Image 2025-09-04 at 6.47.23 PM (2).jpeg",
        emoji: "🚀"
    },

    {
        title: "100% scholarship to study in California USA as an international student",
        description: "If you're thinking of studying in America as an international student but cannot afford it watch this",
        url: "https://vt.tiktok.com/ZSAtnTuEw/",
        cover: "WhatsApp Image 2025-09-04 at 6.47.23 PM (3).jpeg",
        emoji: "☀️"
    },

{
    title: "3 steps to get 100% scholarship to study in America",
    description: "If you're thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAtnsoNU/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.23 PM (4).jpeg",
    emoji: "✅"
},

    {
        title: "This is how you can study for FREE in America as an international student",
        description: "If you're thinking of studying in America as an international student but cannot afford it watch this",
        url: "https://vt.tiktok.com/ZSAtWfhrM/",
        cover: "WhatsApp Image 2025-09-04 at 6.47.23 PM (5).jpeg",
        emoji: "🎉"
    },

  {
    title: "This college gives international students 100% scholarships to study in USA",
    description: "If you're thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAtWEFgA/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.24 PM.jpeg",
    emoji: "💯"
}, 

  {
    title: "Full scholarship to study in America",
    description: "If you're thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAt78Atm/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.24 PM (1).jpeg",
    emoji: "🎓"
},

{  
 title: "This university gives international students 100% scholarships",
    description: "If you're thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAt7DpVw/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.24 PM (2).jpeg",
    emoji: "🏛️"
    },
{
title: "5 schools that are tuition free for international students",
    description: "If you're thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAt7Ww7S/",
    cover: "WhatsApp Image 2025-09-05 at 2.50.51 AM (1).jpeg",
    emoji: "🏫"
},

{
title: "10 schools that give 100% scholarships to international students",
    description: "If you're thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAt7aM2x/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.24 PM (3).jpeg",
    emoji: "💎"
},

{
title: "Big scholarships in america for international students",
    description: "If you're thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAt7uSdp/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.24 PM (4).jpeg",
    emoji: "💰"
},

{
title: "This university will give you a scholarship to study in the Usa if you dont have the money",
    description: "If you're thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAt7xwKW/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.24 PM (5).jpeg",
    emoji: "🎓"
},

{
title: "This U.S university is FREE if your parents make under 100k$",
    description: "If you're thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAt7XCbc/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.25 PM.jpeg",
    emoji: "🆓"
},

{
title: "Masters in Nursing scholarships for international students",
    description: "If you're thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAtvh8Gs/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.25 PM (1).jpeg",
    emoji: "🏥"
},

{
title: "These 3 universities give Nursing scholarships to international students",
    description: "If you're thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAtvJuq6/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.25 PM (2).jpeg",
    emoji: "🏥"
},

{
title: "Funding to study in America as an international student",
    description: "If you're thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAtvk6fN/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.25 PM (3).jpeg",
    emoji: "💰"
},

{
title: "This university gave me a full scholarship as an international student",
    description: "If you're thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAtvMEXS/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.21 PM (1).jpeg",
    emoji: "🎓"
},

{
title: "This college gives big scholarships to international students",
    description: "If you're thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAtvph7K/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.25 PM (4).jpeg",
    emoji: "🏫"
},

{
title: "This is a full scholarship for international students",
    description: "If you're thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAtv9M7C/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.25 PM (5).jpeg",
    emoji: "🎓"
},

{
title: "Full scholarship to study in America",
    description: "If you're thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAtvpasd/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.21 PM.jpeg",
    emoji: "🇺🇸"
},

{
title: "This university gives scholarships to international students",
    description: "If you're thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAtvfkaY/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.26 PM.jpeg",
    emoji: "🏛️"
},

{
title: "This American college gives international students full scholarships",
    description: "If you're thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAtvwu6k/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.26 PM (1).jpeg",
    emoji: "🏫"
},

{
title: "This college gives 80k$ scholarships per year to international students in America",
    description: "If you're thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAtce9P2/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.26 PM (2).jpeg",
    emoji: "💰"
},

{
title: "This US college gives scholarships to international students and doesnt require English Proficincy Exams",
    description: "If you're thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAtcM9oT/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.26 PM (3).jpeg",
    emoji: "🇺🇸"
},

{
title: "This school gives you 100% funding to study in America",
    description: "If you're thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAtcM9oT/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.26 PM (4).jpeg",
    emoji: "🎓"
},

{
title: "This is how you get a scholarship to study in America",
    description: "If you're thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAtcme6Y/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.26 PM (5).jpeg",
    emoji: "🎯"
},

{
title: "This American college gives full scholarships to international students",
    description: "If you're thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAtcADQW/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.27 PM.jpeg",
    emoji: "🏫"
},

{
title: "This university offers full scholarships to international students",
    description: "If you're thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAtchfDW/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.27 PM (1).jpeg",
    emoji: "🏛️"
},

{
title: "Study online for free at an American university",
    description: "If you're thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAtcXGuN/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.27 PM (2).jpeg",
    emoji: "💻"
},

{
title: "If you want to study in America then this university will give you a guaranteed scholarship",
    description: "If you're thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAtcGLkV/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.27 PM (3).jpeg",
    emoji: "🎓"
},

{
title: "Those 2 universities offer full tuition scholarships to international students",
    description: "If you're thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAtcs69g/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.19 PM.jpeg",
    emoji: "🏛️"
},

{
title: "Want to study in the USA but worried about money?",
    description: "If you're thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAtcscx9/",
    cover: "WhatsApp Image 2025-09-05 at 2.50.51 AM.jpeg",
    emoji: "💰"
},


{
title: "This U.S university lets anyone get a degree for FREE",
    description: "If you're thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAtcG6qc/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.27 PM (4).jpeg",
    emoji: "🆓"
},

{
title: "This is how you get funding for your masters degree in America as an international student",
    description: "If you're thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAtcTtvJ/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.28 PM.jpeg",
    emoji: "🎓"
},

{
title: "This is how you can get free tuition as an international student in America",
    description: "If you're thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAt3RPEh/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.28 PM (1).jpeg",
    emoji: "🆓"
},

{
title: "This is how you can study for free in America",
    description: "If you're thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAt3uCDy/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.28 PM (3).jpeg",
    emoji: "🇺🇸"
},

{
title: "I wish i knew this when i started college as an international student",
    description: "If you're thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAt3mfud/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.28 PM (2).jpeg",
    emoji: "💡"
},

    {
        title: "This is how you can study in America for free",
        description: "If you're thinking of studying in America as an international student but cannot afford it watch this",
        url: "https://vt.tiktok.com/ZSAt39UHg/",
        cover: "Screenshot (61).png",
        emoji: "🎓"
    },

{
title: "This will save you 50k$+ as an international student",
    description: "If you're thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAt3rdcF/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.28 PM (4).jpeg",
    emoji: "💰"
},

{
title: "If you're thinking of studying in America listen to this...",
    description: "If you're thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAt3Hdo2/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.28 PM (5).jpeg",
    emoji: "🎧"
},

{
title: "This is one of the best things you can do as an international student",
    description: "If you're thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAt3DqVY/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.29 PM.jpeg",
    emoji: "⭐"
},

{
title: "If youre an international student you need to hear this",
    description: "If you're thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAt3sMYn/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.29 PM (1).jpeg",
    emoji: "🎧"
},

{
title: "the truth about visa sponsorship",
    description: "If you're thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAt3K12C/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.29 PM (2).jpeg",
    emoji: "📋"
},

{
title: "If youre an international student,heres the truth",
    description: "If you're thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAt37qN5/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.29 PM (3).jpeg",
    emoji: "💡"
},

{
title: "Listen to this if youre an international student...",
    description: "If you're thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAt37qN5/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.29 PM (4).jpeg",
    emoji: "🎧"
},

{
title: "If youre thinking of studying in America listen to this...",
    description: "If you're thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAt3thwh/",
    cover: "WhatsApp Image 2025-09-04 at 6.47.29 PM (5).jpeg",
    emoji: "🎧"
},

    {
        title: "For international students",
        description: "If you're thinking of studying in America as an international student but cannot afford it watch this",
        url: "https://vt.tiktok.com/ZSAtT19rd/",
        cover: "WhatsApp Image 2025-09-05 at 2.51.00 AM.jpeg",
        emoji: "🌍"
    },

];

// ============================================================================
// PAGINATION CONFIGURATION
// ============================================================================
const VIDEOS_PER_PAGE = 6; // Number of videos to show per page
let currentPage = 1;
let totalPages = 1;

// ============================================================================
// SEARCH AND FILTER CONFIGURATION
// ============================================================================
let filteredVideos = [...videoData]; // Copy of all videos for filtering
let searchTerm = '';
let categoryFilter = '';
let sortOrder = 'default';

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Formats a date string to a more readable format
 * @param {string} dateString - Date in YYYY-MM-DD format
 * @returns {string} Formatted date string
 */
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
}

/**
 * Creates a video card element with all necessary content
 * @param {Object} video - Video object containing title, description, url, cover, emoji
 * @returns {HTMLElement} Complete video card element
 */
function createVideoCard(video) {
    // Create the main card container
    const card = document.createElement('div');
    card.className = 'video-card';
    
    // Create video cover/thumbnail
    const cover = document.createElement('div');
    cover.className = 'video-cover';
    
    // Check if cover is an image path or emoji
    if (video.cover && (video.cover.includes('.jpg') || video.cover.includes('.jpeg') || video.cover.includes('.png') || video.cover.includes('.gif'))) {
        // It's an image path - create simple img element
        const img = document.createElement('img');
        img.src = `${video.cover}`;
        img.alt = video.title;
        img.style.cssText = `
            width: 100% !important;
            height: 100% !important;
            object-fit: contain !important;
            object-position: center !important;
            border-radius: var(--radius-lg);
            display: block;
            background: var(--card);
        `;
        
        img.onload = function() {
            console.log('Image loaded successfully:', video.cover);
        };
        
        img.onerror = function() {
            console.log('Image failed to load:', video.cover);
            cover.innerHTML = `<div class="cover-emoji">${video.emoji || '🎬'}</div>`;
        };
        
        cover.appendChild(img);
    } else {
        // It's an emoji - show emoji fallback
        cover.innerHTML = `<div class="cover-emoji">${video.cover || video.emoji || '🎬'}</div>`;
    }
    
    // Create the link wrapper
    const link = document.createElement('a');
    link.href = video.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.className = 'video-link';
    
    // Create video title with emoji
    const title = document.createElement('h3');
    title.className = 'video-title';
    // Simple approach - just use the title as is
    title.innerHTML = `${video.emoji || '🎥'} ${video.title}`;
    
    // Create video description
    const description = document.createElement('p');
    description.className = 'video-description';
    description.textContent = video.description;
    
    // Create TikTok link button
    const tiktokButton = document.createElement('a');
    tiktokButton.href = video.url;
    tiktokButton.target = '_blank';
    tiktokButton.rel = 'noopener noreferrer';
    tiktokButton.className = 'tiktok-link';
    tiktokButton.innerHTML = 'Watch on TikTok';
    
    // Assemble the card structure
    card.appendChild(cover);
    link.appendChild(title);
    link.appendChild(description);
    
    card.appendChild(link);
    card.appendChild(tiktokButton);
    
    return card;
}

/**
 * Displays a loading message while videos are being loaded
 * @param {HTMLElement} container - Container element to show loading in
 */
function showLoading(container) {
    container.innerHTML = '<div class="loading">Loading videos...</div>';
}

/**
 * Displays an error message if something goes wrong
 * @param {HTMLElement} container - Container element to show error in
 * @param {string} message - Error message to display
 */
function showError(container, message) {
    container.innerHTML = `
        <div style="text-align: center; padding: 2rem; color: var(--destructive);">
            <h3>Oops! Something went wrong</h3>
            <p>${message}</p>
            <button onclick="location.reload()" style="
                background: var(--accent);
                color: white;
                border: none;
                padding: 0.5rem 1rem;
                border-radius: 0.5rem;
                cursor: pointer;
                margin-top: 1rem;
            ">Try Again</button>
        </div>
    `;
}

/**
 * Displays a message when no videos are found
 * @param {HTMLElement} container - Container element to show message in
 */
function showNoVideos(container) {
    container.innerHTML = `
        <div style="text-align: center; padding: 2rem; color: var(--muted-foreground);">
            <h3>No videos found</h3>
            <p>Check back later for new content!</p>
        </div>
    `;
}

/**
 * Calculates total pages based on filtered video data
 */
function calculateTotalPages() {
    totalPages = Math.ceil(filteredVideos.length / VIDEOS_PER_PAGE);
}

/**
 * Filters videos based on search term and category
 */
function filterVideos() {
    filteredVideos = videoData.filter(video => {
        const searchLower = (window.searchTerm || '').toLowerCase();
        const titleLower = video.title.toLowerCase();
        const descLower = video.description.toLowerCase();
        
        // More accurate search based on title content
        const matchesSearch = !window.searchTerm || 
            titleLower.includes(searchLower) ||
            descLower.includes(searchLower) ||
            // Specific keyword matching for better accuracy
            (searchLower.includes('tip') && (titleLower.includes('tip') || titleLower.includes('advice') || titleLower.includes('how'))) ||
            (searchLower.includes('advice') && (titleLower.includes('advice') || titleLower.includes('tip') || titleLower.includes('listen'))) ||
            (searchLower.includes('scholarship') && (titleLower.includes('scholarship') || titleLower.includes('funding') || titleLower.includes('free'))) ||
            (searchLower.includes('university') && (titleLower.includes('university') || titleLower.includes('universities'))) ||
            (searchLower.includes('college') && (titleLower.includes('college') || titleLower.includes('colleges'))) ||
            (searchLower.includes('school') && (titleLower.includes('school') || titleLower.includes('schools'))) ||
            (searchLower.includes('nursing') && titleLower.includes('nursing')) ||
            (searchLower.includes('masters') && titleLower.includes('masters')) ||
            (searchLower.includes('online') && titleLower.includes('online')) ||
            (searchLower.includes('visa') && titleLower.includes('visa')) ||
            (searchLower.includes('sponsorship') && titleLower.includes('sponsorship'));
        
        // More accurate category filtering based on title content
        let matchesCategory = true;
        if (window.categoryFilter) {
            switch(window.categoryFilter) {
                case '💰': // Scholarships
                    matchesCategory = titleLower.includes('scholarship') || titleLower.includes('funding') || titleLower.includes('free') || titleLower.includes('tuition');
                    break;
                case '🎓': // Universities
                    matchesCategory = titleLower.includes('university') || titleLower.includes('universities') || titleLower.includes('degree');
                    break;
                case '🏫': // Schools
                    matchesCategory = titleLower.includes('school') || titleLower.includes('schools') || titleLower.includes('college') || titleLower.includes('colleges');
                    break;
                case '🏛️': // Colleges
                    matchesCategory = titleLower.includes('college') || titleLower.includes('colleges') || titleLower.includes('institution');
                    break;
                case '💡': // Tips
                    matchesCategory = titleLower.includes('tip') || titleLower.includes('how') || titleLower.includes('step') || titleLower.includes('way');
                    break;
                case '🎧': // Advice
                    matchesCategory = titleLower.includes('advice') || titleLower.includes('listen') || titleLower.includes('truth') || titleLower.includes('need to hear');
                    break;
                default:
                    matchesCategory = true;
            }
        }
        
        return matchesSearch && matchesCategory;
    });
    
    // Sort videos
    if (sortOrder === 'alphabetical') {
        filteredVideos.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === 'reverse') {
        filteredVideos.sort((a, b) => b.title.localeCompare(a.title));
    }
    
    // Reset to first page when filtering
    currentPage = 1;
    calculateTotalPages();
}

/**
 * Gets videos for the current page from filtered results
 * @returns {Array} Array of videos for current page
 */
function getCurrentPageVideos() {
    const startIndex = (currentPage - 1) * VIDEOS_PER_PAGE;
    const endIndex = startIndex + VIDEOS_PER_PAGE;
    return filteredVideos.slice(startIndex, endIndex);
}

/**
 * Creates pagination controls
 */
function createPaginationControls() {
    const pageNumbersContainer = document.getElementById('page-numbers');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const paginationInfo = document.getElementById('pagination-info');
    
    if (!pageNumbersContainer || !prevBtn || !nextBtn || !paginationInfo) {
        console.error('Pagination elements not found!');
        return;
    }
    
    // Clear existing page numbers
    pageNumbersContainer.innerHTML = '';
    
    // Calculate which page numbers to show
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    // Adjust start page if we're near the end
    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    // Create page number buttons
    for (let i = startPage; i <= endPage; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = `page-number ${i === currentPage ? 'active' : ''}`;
        pageBtn.textContent = i;
        pageBtn.onclick = () => goToPage(i);
        pageNumbersContainer.appendChild(pageBtn);
    }
    
    // Update button states
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
    
    // Update pagination info
    paginationInfo.textContent = `Page ${currentPage} of ${totalPages}`;
}

/**
 * Goes to a specific page
 * @param {number} page - Page number to go to
 */
function goToPage(page) {
    if (page < 1 || page > totalPages || page === currentPage) {
        return;
    }
    
    currentPage = page;
    loadVideos();
    createPaginationControls();
    
    // Scroll to top of videos section
    const videosSection = document.querySelector('.videos-section');
    if (videosSection) {
        videosSection.scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * Goes to the next page
 */
function nextPage() {
    if (currentPage < totalPages) {
        goToPage(currentPage + 1);
    }
}

/**
 * Goes to the previous page
 */
function prevPage() {
    if (currentPage > 1) {
        goToPage(currentPage - 1);
    }
}

// ============================================================================
// MAIN FUNCTIONALITY
// ============================================================================

/**
 * Loads and displays videos for the current page
 * This is the main function that populates the page with video cards
 */
function loadVideos() {
    // Get the container where videos will be displayed
    const videosContainer = document.getElementById('videos-container');
    
    // Check if container exists
    if (!videosContainer) {
        console.error('Videos container not found!');
        return;
    }
    
    // Calculate total pages
    calculateTotalPages();
    
    // Show loading state
    showLoading(videosContainer);
    
    // Simulate loading delay for better UX (remove this in production)
    setTimeout(() => {
        try {
            // Check if we have video data
            if (!videoData || videoData.length === 0) {
                showNoVideos(videosContainer);
                return;
            }
            
            // Get videos for current page
            const currentPageVideos = getCurrentPageVideos();
            
            // Clear the container
            videosContainer.innerHTML = '';
            
            // Create and append video cards
            currentPageVideos.forEach((video, index) => {
                // Add a small delay between cards for animation effect
                setTimeout(() => {
                    const card = createVideoCard(video);
                    videosContainer.appendChild(card);
                }, index * 100);
            });
            
            // Log success
            console.log(`Successfully loaded ${currentPageVideos.length} videos for page ${currentPage} of ${totalPages}`);
            
        } catch (error) {
            console.error('Error loading videos:', error);
            showError(videosContainer, 'Failed to load videos. Please try refreshing the page.');
        }
    }, 500);
}

/**
 * Updates the username in the header
 * Call this function if you want to change the username dynamically
 * @param {string} newUsername - New username to display
 */
function updateUsername(newUsername) {
    const usernameElement = document.querySelector('.username');
    if (usernameElement) {
        usernameElement.textContent = newUsername;
    }
}

/**
 * Updates the bio text in the header
 * @param {string} newBio - New bio text to display
 */
function updateBio(newBio) {
    const bioElement = document.querySelector('.bio');
    if (bioElement) {
        bioElement.textContent = newBio;
    }
}

// ============================================================================
// EVENT LISTENERS AND INITIALIZATION
// ============================================================================

/**
 * Initialize the website when the DOM is fully loaded
 */
function initializeWebsite() {
    console.log('Initializing TikTok Video Showcase...');
    
    // Load videos
    loadVideos();
    
    // Set up pagination event listeners
    setupPaginationEventListeners();
    
    // Set up search and filter event listeners
    setupSearchAndFilterListeners();
    
    // Set up theme toggle
    setupThemeToggle();
    
    // Create initial pagination controls
    createPaginationControls();
    
    // Add any additional initialization code here
    console.log('Website initialized successfully!');
}

/**
 * Sets up event listeners for pagination controls
 */
function setupPaginationEventListeners() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', prevPage);
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', nextPage);
    }
}

/**
 * Sets up event listeners for search and filter controls
 */
function setupSearchAndFilterListeners() {
    const searchInput = document.getElementById('search-input');
    const clearBtn = document.getElementById('clear-search');
    const categoryFilter = document.getElementById('category-filter');
    const sortFilter = document.getElementById('sort-filter');
    
    // Search input
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            window.searchTerm = e.target.value;
            filterVideos();
            loadVideos();
            createPaginationControls();
        });
    }
    
    // Clear search button
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            searchInput.value = '';
            window.searchTerm = '';
            filterVideos();
            loadVideos();
            createPaginationControls();
        });
    }
    
    // Category filter
    if (categoryFilter) {
        categoryFilter.addEventListener('change', (e) => {
            window.categoryFilter = e.target.value;
            filterVideos();
            loadVideos();
            createPaginationControls();
        });
    }
    
    // Sort filter
    if (sortFilter) {
        sortFilter.addEventListener('change', (e) => {
            sortOrder = e.target.value;
            filterVideos();
            loadVideos();
            createPaginationControls();
        });
    }
}

/**
 * Sets up theme toggle functionality
 */
function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.querySelector('.theme-icon');
    
    // Get saved theme or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }
}

/**
 * Updates the theme icon based on current theme
 */
function updateThemeIcon(theme) {
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
    }
}

// ============================================================================
// UTILITY FUNCTIONS FOR EASY UPDATES
// ============================================================================

/**
 * Add a new video to the collection
 * Call this function to add videos dynamically (useful for future enhancements)
 * @param {Object} newVideo - Video object with title, description, url, date, views
 */
function addVideo(newVideo) {
    // Validate the video object
    const requiredFields = ['title', 'description', 'url', 'date', 'views'];
    const hasAllFields = requiredFields.every(field => newVideo.hasOwnProperty(field));
    
    if (!hasAllFields) {
        console.error('Video object must have all required fields:', requiredFields);
        return false;
    }
    
    // Add to the beginning of the array (newest first)
    videoData.unshift(newVideo);
    
    // Reload the videos to show the new one
    loadVideos();
    
    return true;
}

/**
 * Remove a video from the collection by URL
 * @param {string} videoUrl - URL of the video to remove
 */
function removeVideo(videoUrl) {
    const index = videoData.findIndex(video => video.url === videoUrl);
    if (index !== -1) {
        videoData.splice(index, 1);
        loadVideos();
        return true;
    }
    return false;
}

// ============================================================================
// START THE APPLICATION
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
       date: "2025-01-20", // Use YYYY-MM-DD format
       views: "1.5K" // Use K for thousands, M for millions
   }

4. Save the file and refresh your website

EXAMPLE:
{
    title: "My Latest Dance Video",
    description: "Trying out the newest viral dance trend!",
    url: "https://www.tiktok.com/@yourusername/video/1234567890123456795",
    date: "2025-01-20",
    views: "2.3K"
}

TIPS:
- Always use the full TikTok URL
- Keep descriptions concise but engaging
- Use consistent date format (YYYY-MM-DD)
- Views can be formatted as "1.2K", "5.6M", etc.
- Videos will appear in the order they're listed in the array
*/