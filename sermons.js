// Sermon Data
const sermonsData = [
    {
        id: 1,
        title: "Kukuwa Ndani ya Kristo",
        speaker: "Rev. Peter Thiong'o",
        date: "2025-10-12",
        image: "https://godwithy.wordpress.com/wp-content/uploads/2018/08/010-e4b8bbe880b6e7a8a3e5a48de6b4bbe698bee78eb0e59091e5bdbce5be97e997aee8af9d-e789b9e58699-zb-20180615.jpg",
        videoId: "UU7jNtS_x6M" // YouTube video ID
    },
    {
        id: 2,
        title: "Battle in Faith",
        speaker: "Rev. Peter Thiong'o",
        date: "2025-09-21",
        image: "images/battleinfaith.png",
        videoId: "xVSCCHUS6io"
    },
    {
        id: 3,
        title: "From Annointing to Destiny",
        speaker: "Pastor Andrew Mulei",
        date: "2025-09-20",
        image: "https://www.shutterstock.com/image-photo/david-bible-being-anointed-by-260nw-2600617963.jpg",
        videoId: "jBTLHzuicHM"
    },
    {
        id: 4,
        title: "Walking in the Will of God",
        speaker: "Pastor Godfrey Mwenda",
        date: "2025-08-25",
        image: "https://images.squarespace-cdn.com/content/v1/5bb3e0e234c4e2dd29db7437/1551402973734-80124WY2H349MD69JN4X/Walking-Gods-Will-Wide.jpg",
        videoId: "ifZnOmSWj2c"
    },
    {
       id: 5,
        title: "Seeking God in Helpless Times",
        speaker: "Pastor Andrew Mulei",
        date: "2025-08-24",
        image: "https://img.freepik.com/premium-photo/christian-woman-hand-holy-bible-are-pray-worship-thank-god-church-with-black-background-concept-faith-spirituality-religion_2379-2617.jpg",
        videoId: "5ko3mo9_gMg" 
    },
    {
        id: 6,
        title: "Kujiandaa kwa Sababu ya Kazi ya Mungu",
        speaker: "Rev. Peter Thiong'o",
        date: "2025-08-23",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAolGTfnuSGD12Oya6-7w6SvE5QiuvR6gssAmllTv0nISxCz5XocaBjT4eO6VZ0H7ECvs&usqp=CAU",
        videoId: "if0UlRq6OQI"
        
    },
    {
        id: 7,
        title: "The Love of God",
        speaker: "Pastor Godfrey Mwenda",
        date: "2025-08-22",
        image: "https://blogs.blueletterbible.org/blb/wp-content/uploads/sites/2/2015/08/20150821_love.jpg",
        videoId: "AXwyjTkUINg"
        
    },
    {
        id: 8,
        title: "Bwana Aliondoa Aibu Yetu",
        speaker: "Rev. Peter Thiong'o",
        date: "2025-08-21",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVzDgAhYVeAUIQ_i6tGXsFAcYX7Qb0fgy_Lw&s",
        videoId: "ktE_6U0vqOI"
        
    },
    {
        id: 9,
        title: "The Rich and God's Kingdom",
        speaker: "Rev. Peter Thiong'o",
        date: "2025-08-20",
        image: "https://i.ytimg.com/vi/jZFhi8NukfM/maxresdefault.jpg",
        videoId: "f_wwCrE0Eps"
        
    },
    {
        id: 10,
        title: "Kuishi Maisha ya Utajiri Kuna Kilio",
        speaker: "Rev. Peter Thiong'o",
        date: "2025-08-19",
        image: "https://media.istockphoto.com/id/513124660/photo/businessman-looking-at-the-city.jpg?s=612x612&w=0&k=20&c=-HfLBmpJkWwrWysamaSAgGKZwik-BDPUfe4Pn2T62oM=",
        videoId: "wRz1ux73MHo"
        
    },
    {
        id: 11,
        title: "Upumziko Katika Kumtii Mungu",
        speaker: "Rev. Peter Thiong'o",
        date: "2025-08-10",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz3rdV4VWqJb8FZbM49uSh3u3hT8VP7IGkTw&s",
        videoId: "re2MXPu2KDM"
        
    },
    {
        id: 12,
        title: "Part II: Roho ya Maangamizi",
        speaker: "Rev. Peter Thiong'o",
        date: "2025-07-05",
        image: "https://i.ytimg.com/vi/IdcgVVgG2uQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAoGhBLMLVf3NvqczekMNy-1JZGwgp",
        videoId: "QBTwob5LHjA"
        
    },
    {
        id: 13,
        title: "Part II: Kutunza Madhabahu",
        speaker: "Rev. Peter Thiong'o",
        date: "2025-07-02",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwwRX1yX2aZchf5xLwlF_M7Ac_UWLTcDULIwqY_N0vbxwZkg06tByTHitTq91OUH13qKc&usqp=CAU",
        videoId: "31rNi7-whx0"
    },
    {
        id: 14,
        title: "Part I: Roho ya Maangamizi",
        speaker: "Rev. Peter Thiong'o",
        date: "2025-06-26",
        image: "https://i.ytimg.com/vi/IdcgVVgG2uQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAoGhBLMLVf3NvqczekMNy-1JZGwg",
        videoId: "IdcgVVgG2uQ"
    },
    {
        id: 15,
        title: "Kazi ya Damu ya Yesu",
        speaker: "Rev. Peter Thiong'oa",
        date: "2025-06-23",
        image: "https://faithworks.life/wp-content/uploads/2023/01/the-precious-blood-of-christ-1280x720-1-1140x641-1.jpeg",
        videoId: "aB2dnKq-ick"
    },
    {
        id: 16,
        title: "Part I: Kutunza Madhabahu",
        speaker: "Rev. Peter Thiong'o",
        date: "2025-06-18",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwwRX1yX2aZchf5xLwlF_M7Ac_UWLTcDULIwqY_N0vbxwZkg06tByTHitTq91OUH13qKc&usqp=CAU",
        videoId: "X2aXUzWRoH8"
    },
    {
        id: 17,
        title: "The Power of Light",
        speaker: "Pastor Godfrey Mwenda",
        date: "2025-06-17",
        image: "https://watermarkwaves.com/cdn/shop/articles/0d9374257c81e8a3d6d1f98cbdbcbdf8.webp?v=1731873321&width=1792",
        videoId: "xhGWzEPjagI"
    },
    {
        id: 18,
        title: "Uwezo wa Mungu Unalipa",
        speaker: "Rev. Peter Thiong'o",
        date: "2025-06-14",
        image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=400&h=250&fit=crop",
        videoId: "BVD2_YkbsmMQ"
    },
    {
        id: 19,
        title: "Mtumaini Christo, Usikate Tamaa",
        speaker: "Rev. Peter Thiong'o",
        date: "2025-10-27",
        image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=400&h=250&fit=crop",
        videoId: "X8FMB5vwQAE"
    },
    {
        id: 20,
        title: "Finding Rest in a Restless World",
        speaker: "Rev. Peter Thiong'o",
        date: "2025-04-16",
        image: "https://cpmfiles1.com/gracecommunity.org/rest-2016.jpg",
        videoId: "Tmc2080rEEQ"
    },
    {
        id: 21,
        title: "Trust God and Have Faith in Him",
        speaker: "Pastor Florence Thiong'o",
        date: "2024-10-02",
        image: "https://jenschreiner.com/wp-content/uploads/2024/03/Woman-on-pier-with-arms-strecthed-out-having-faith-in-God.png",
        videoId: "J5TatwKd4iU"
    },
    {
        id: 22,
        title: "The Promise of the House of the Lord",
        speaker: "Rev. Peter Thiong'o",
        date: "2024-08-19",
        image: "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=400&h=250&fit=crop",
        videoId: "UfBSJQPDAoQ"
    },
    {
        id: 23,
        title: "Productive Work",
        speaker: "Rev. Peter Thiong'o",
        date: "2024-08-06",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFxK_xcqZW_4tfmZme8VOdp8JvxCtCUGNw9Ckaki4eM4vW8ui2GA9WcMmSzfswR-t_JVw&usqp=CAU",
        videoId: "it8a2BIjgP0"
    },
    {
        id: 24,
        title: "Overcoming Through Testimonies",
        speaker: "Rev. Peter Thiong'o",
        date: "2024-08-01",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn0LhB3q12SSDmzjtEmWnEdFoIsZ41HWDxh_Ik3Mp4si_6DVpMqKRY3K45hmvrmlK9yl4&usqp=CAU",
        videoId: "ZyYcw2q31Gc"
    },
    {
        id: 25,
        title: "The Parable of the Sower",
        speaker: "Rev. Peter Thiong'o",
        date: "2024-07-08",
        image: "https://media.freebibleimages.org/stories/FB_GNPI_049_Parable_Sower/source-jpeg/04_FB_GNPI_049_Parable_Sower_1024.jpg?1613321713",
        videoId: "z_bn2NQWJYA"
    },
    {
        id: 26,
        title: "Why is there such a great difference at the Lord’s table?",
        speaker: "Rev. Peter Thiong'o",
        date: "2023-02-06",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpy8vGkvtcu_Rw-49_kuZo5QYg5axy_iAJPfeCq9SXC5YD-g1NMF1UsBsOi_PHlkETIq8&usqp=CAU",
        videoId: "1emaLOnfl_I"
    },
    {
        id: 27,
        title: "Kuvunja Madhabahu za Kwenu",
        speaker: "Rev. Peter Thiong'o",
        date: "2022-12-05",
        image: "https://i.ytimg.com/vi/RAFhcHn_LYs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDt60kuC-JUAJT_l7f8WIi_LmMldw",
        videoId: "k28Ff5T9mjM"
    },
    {
        id: 28,
        title: "Living for God Today",
        speaker: "Pastor Andrew Mulei",
        date: "2022-11-17",
        image: "https://larrydelacruz.wordpress.com/wp-content/uploads/2012/05/living-for-god1.jpg",
        videoId: "ol0LOSC-68s"
    },
    {
        id: 29,
        title: "Israel Return to Christ",
        speaker: "Pastor Andrew Mulei",
        date: "2022-10-13",
        image: "https://christinprophecyblog.org/wp-content/uploads/2023/12/Lords-Second-Coming-730x414.jpg",
        videoId: "wr7QSL99FF8"
    },
    {
        id: 30,
        title: "Licence to New Jerusalem",
        speaker: "Pastor Andrew Mulei",
        date: "2022-09-10",
        image: "https://i.pinimg.com/736x/74/66/37/7466374825ce76efda97696cdc2b870e.jpg",
        videoId: "VyxdWNfXopw"
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
            'pastor-godfrey': 'Pastor Godfrey Mwenda',
            'pastor-andrew': 'Pastor Andrew Mulei'
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