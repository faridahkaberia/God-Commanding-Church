// Sample Sermon Data (Replace with your actual data or API)
const sermonsData = [
    {
        id: 1,
        title: "Walking in Faith",
        speaker: "Rev. Peter Thiong'o",
        date: "2025-01-05",
        image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=400&h=250&fit=crop",
        videoId: "dQw4w9WgXcQ" // YouTube video ID
    },
    {
        id: 2,
        title: "The Power of Prayer",
        speaker: "Pastor Florence Thiong'o",
        date: "2024-12-29",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
        videoId: "dQw4w9WgXcQ"
    },
    {
        id: 3,
        title: "God's Unfailing Love",
        speaker: "Pastor Kamau",
        date: "2024-12-22",
        image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=400&h=250&fit=crop",
        videoId: "dQw4w9WgXcQ"
    },
    {
        id: 4,
        title: "Living a Holy Life",
        speaker: "Rev. Peter Thiong'o",
        date: "2024-12-15",
        image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=400&h=250&fit=crop",
        videoId: "dQw4w9WgXcQ"
    },
    {
        id: 5,
        title: "The Grace of God",
        speaker: "Pastor Dominic",
        date: "2024-12-08",
        image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=250&fit=crop",
        videoId: "dQw4w9WgXcQ"
    },
    {
        id: 6,
        title: "Building Strong Families",
        speaker: "Pastor Florence Thiong'o",
        date: "2024-12-01",
        image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=250&fit=crop",
        videoId: "dQw4w9WgXcQ"
    },
    {
        id: 7,
        title: "Trusting God in Trials",
        speaker: "Rev. Peter Thiong'o",
        date: "2024-11-24",
        image: "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=400&h=250&fit=crop",
        videoId: "dQw4w9WgXcQ"
    },
    {
        id: 8,
        title: "The Fruit of the Spirit",
        speaker: "Pastor Kamau",
        date: "2024-11-17",
        image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=400&h=250&fit=crop",
        videoId: "dQw4w9WgXcQ"
    },
    {
        id: 9,
        title: "Forgiveness and Mercy",
        speaker: "Pastor Dominic",
        date: "2024-11-10",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
        videoId: "dQw4w9WgXcQ"
    },
    {
        id: 10,
        title: "The Great Commission",
        speaker: "Rev. Peter Thiong'o",
        date: "2024-11-03",
        image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=400&h=250&fit=crop",
        videoId: "dQw4w9WgXcQ"
    },
    {
        id: 11,
        title: "Living in the Spirit",
        speaker: "Pastor Florence Thiong'o",
        date: "2024-10-27",
        image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=400&h=250&fit=crop",
        videoId: "dQw4w9WgXcQ"
    },
    {
        id: 12,
        title: "Hope in Christ",
        speaker: "Pastor Kamau",
        date: "2024-10-20",
        image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=250&fit=crop",
        videoId: "dQw4w9WgXcQ"
    },
    {
        id: 13,
        title: "The Word of God",
        speaker: "Rev. Peter Thiong'o",
        date: "2024-10-13",
        image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=250&fit=crop",
        videoId: "dQw4w9WgXcQ"
    },
    {
        id: 14,
        title: "Faith in Action",
        speaker: "Pastor Dominic",
        date: "2024-10-06",
        image: "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=400&h=250&fit=crop",
        videoId: "dQw4w9WgXcQ"
    },
    {
        id: 15,
        title: "The Joy of Salvation",
        speaker: "Pastor Florence Thiong'o",
        date: "2024-09-29",
        image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=400&h=250&fit=crop",
        videoId: "dQw4w9WgXcQ"
    },
    {
        id: 16,
        title: "Walking in Victory",
        speaker: "Rev. Peter Thiong'o",
        date: "2024-09-22",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
        videoId: "dQw4w9WgXcQ"
    },
    {
        id: 17,
        title: "The Love of Christ",
        speaker: "Pastor Kamau",
        date: "2024-09-15",
        image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=400&h=250&fit=crop",
        videoId: "dQw4w9WgXcQ"
    },
    {
        id: 18,
        title: "Standing Firm in Faith",
        speaker: "Pastor Dominic",
        date: "2024-09-08",
        image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=400&h=250&fit=crop",
        videoId: "dQw4w9WgXcQ"
    }
];

// Pagination variables
let currentPage = 1;
const sermonsPerPage = 6;
let filteredSermons = [...sermonsData];

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    displaySermons();
    setupPagination();
    setupFilters();
    setupVideoModal();
});

// Display sermons for current page
function displaySermons() {
    const sermonsGrid = document.getElementById('sermonsGrid');
    sermonsGrid.innerHTML = '';

    const startIndex = (currentPage - 1) * sermonsPerPage;
    const endIndex = startIndex + sermonsPerPage;
    const sermonsToShow = filteredSermons.slice(startIndex, endIndex);

    sermonsToShow.forEach(sermon => {
        const sermonCard = createSermonCard(sermon);
        sermonsGrid.appendChild(sermonCard);
    });

    // Update pagination
    setupPagination();
}

// Create sermon card element
function createSermonCard(sermon) {
    const card = document.createElement('div');
    card.className = 'sermon-card';
    card.onclick = () => openVideo(sermon.videoId);

    const formattedDate = new Date(sermon.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    card.innerHTML = `
        <div class="sermon-image-container">
            <img src="${sermon.image}" alt="${sermon.title}" class="sermon-image">
            <div class="play-overlay">
                <div class="play-button">
                    <div class="play-icon"></div>
                </div>
            </div>
        </div>
        <div class="sermon-info">
            <h3 class="sermon-title">${sermon.title}</h3>
            <p class="sermon-speaker">Sermon by: ${sermon.speaker}</p>
            <p class="sermon-date">${formattedDate}</p>
        </div>
    `;

    return card;
}

// Setup pagination buttons
function setupPagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    const totalPages = Math.ceil(filteredSermons.length / sermonsPerPage);

    // Previous button
    if (currentPage > 1) {
        const prevBtn = createPageButton('Prev', currentPage - 1);
        pagination.appendChild(prevBtn);
    }

    // Page numbers
    const maxVisiblePages = 3;
    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    // Adjust start if we're near the end
    if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // First page
    if (startPage > 1) {
        pagination.appendChild(createPageButton('1', 1));
        if (startPage > 2) {
            const dots = document.createElement('span');
            dots.className = 'page-dots';
            dots.textContent = '...';
            pagination.appendChild(dots);
        }
    }

    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
        pagination.appendChild(createPageButton(i, i));
    }

    // Last page
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            const dots = document.createElement('span');
            dots.className = 'page-dots';
            dots.textContent = '...';
            pagination.appendChild(dots);
        }
        pagination.appendChild(createPageButton(totalPages, totalPages));
    }

    // Next button
    if (currentPage < totalPages) {
        const nextBtn = createPageButton('Next ›', currentPage + 1);
        pagination.appendChild(nextBtn);
    }

    // Last button (only show if not on last page)
    if (currentPage < totalPages) {
        const lastBtn = createPageButton('Last', totalPages);
        pagination.appendChild(lastBtn);
    }
}

// Create page button
function createPageButton(text, page) {
    const btn = document.createElement('button');
    btn.className = 'page-btn';
    btn.textContent = text;
    
    if (page === currentPage) {
        btn.classList.add('active');
    }

    btn.onclick = () => {
        currentPage = page;
        displaySermons();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return btn;
}

// Setup filters
function setupFilters() {
    const applyFiltersBtn = document.getElementById('applyFilters');
    const resetFiltersBtn = document.getElementById('resetFilters');

    applyFiltersBtn.addEventListener('click', applyFilters);
    resetFiltersBtn.addEventListener('click', resetFilters);
}

// Apply filters
function applyFilters() {
    const keyword = document.getElementById('keywordFilter').value.toLowerCase();
    const dateRange = document.getElementById('dateRangeFilter').value;
    const speaker = document.getElementById('speakerFilter').value;
    const sort = document.getElementById('sortFilter').value;

    // Filter by keyword
    filteredSermons = sermonsData.filter(sermon => {
        const matchesKeyword = keyword === '' || 
            sermon.title.toLowerCase().includes(keyword) ||
            sermon.speaker.toLowerCase().includes(keyword);

        return matchesKeyword;
    });

    // Filter by speaker
    if (speaker !== 'all') {
        const speakerMap = {
            'rev-peter': 'Rev. Peter Thiong\'o',
            'pastor-florence': 'Pastor Florence Thiong\'o',
            'pastor-kamau': 'Pastor Kamau',
            'pastor-dominic': 'Pastor Dominic'
        };
        filteredSermons = filteredSermons.filter(sermon => 
            sermon.speaker === speakerMap[speaker]
        );
    }

    // Filter by date range
    if (dateRange !== 'all') {
        const now = new Date();
        const cutoffDate = new Date();

        switch(dateRange) {
            case 'week':
                cutoffDate.setDate(now.getDate() - 7);
                break;
            case 'month':
                cutoffDate.setMonth(now.getMonth() - 1);
                break;
            case 'year':
                cutoffDate.setFullYear(now.getFullYear() - 1);
                break;
        }

        filteredSermons = filteredSermons.filter(sermon => 
            new Date(sermon.date) >= cutoffDate
        );
    }

    // Sort sermons
    if (sort === 'newest') {
        filteredSermons.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else {
        filteredSermons.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    // Reset to first page
    currentPage = 1;
    displaySermons();
}

// Reset filters
function resetFilters() {
    document.getElementById('keywordFilter').value = '';
    document.getElementById('dateRangeFilter').value = 'all';
    document.getElementById('speakerFilter').value = 'all';
    document.getElementById('sortFilter').value = 'newest';

    filteredSermons = [...sermonsData];
    currentPage = 1;
    displaySermons();
}

// Setup video modal
function setupVideoModal() {
    const modal = document.getElementById('videoModal');
    const closeBtn = document.getElementById('closeModal');

    closeBtn.addEventListener('click', closeVideo);

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeVideo();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeVideo();
        }
    });
}

// Open video modal
function openVideo(videoId) {
    const modal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('videoPlayer');

    // Set video source
    videoPlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close video modal
function closeVideo() {
    const modal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('videoPlayer');

    // Stop video
    videoPlayer.src = '';

    // Hide modal
    modal.classList.remove('active');
    document.body.style.overflow = '';
}