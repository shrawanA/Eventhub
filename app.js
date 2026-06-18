// ============================================
// EVENTHUB PROFESSIONAL APP
// Modern Event Management Platform
// ============================================

const STORAGE_KEY = 'eventHub_events';
const REGISTRATIONS_KEY = 'eventHub_registrations';
const DATA_VERSION_KEY = 'eventHub_data_version';
const CURRENT_DATA_VERSION = '2.0';

// 24 Sample Events - 3 per category
const sampleEvents = [
    // ===== MUSIC & CONCERTS =====
    {
        id: '1',
        title: 'Summer Music Festival 2026',
        category: 'music',
        description: 'Join us for an unforgettable day of live music featuring top artists from around the world. Food trucks, art installations, and amazing vibes! Three stages, 20+ artists, and an incredible atmosphere you won't forget.',
        date: '2026-07-15',
        time: '14:00',
        duration: 'all-day',
        location: 'Central Park Amphitheater',
        address: '123 Park Avenue, New York, NY 10001',
        eventType: 'in-person',
        price: 3500,
        capacity: 5000,
        attendees: 2340,
        image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800',
        themeColor: '#6366f1',
        createdAt: '2026-06-01'
    },
    {
        id: '2',
        title: 'Jazz & Blues Evening',
        category: 'music',
        description: 'An intimate evening of smooth jazz and soulful blues. Featuring local artists and special guest performers. Cocktails and appetizers included with ticket. Perfect for music lovers seeking a relaxing night out.',
        date: '2026-07-30',
        time: '20:00',
        duration: '3',
        location: 'Blue Note Lounge',
        address: '444 Melody Avenue, New Orleans, LA 70112',
        eventType: 'in-person',
        price: 4500,
        capacity: 120,
        attendees: 95,
        image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800',
        themeColor: '#8b5cf6',
        createdAt: '2026-06-09'
    },
    {
        id: '3',
        title: 'Bollywood Night - DJ Party',
        category: 'music',
        description: 'The biggest Bollywood dance party of the year! Top DJs spinning the latest hits, dazzling light show, and unlimited energy. Dress to impress and dance the night away with friends.',
        date: '2026-08-20',
        time: '21:00',
        duration: '4',
        location: 'Club Mirage',
        address: '789 Bollywood Street, Mumbai, India',
        eventType: 'in-person',
        price: 1500,
        capacity: 800,
        attendees: 650,
        image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800',
        themeColor: '#ec4899',
        createdAt: '2026-06-10'
    },

    // ===== SPORTS & FITNESS =====
    {
        id: '4',
        title: 'Marathon Training Group',
        category: 'sports',
        description: 'Weekly group runs for all levels. Training for the upcoming city marathon. Coaches and nutritionists available. Meet at the main fountain every Saturday morning. All fitness levels welcome!',
        date: '2026-06-18',
        time: '07:00',
        duration: '2',
        location: 'Riverside Park',
        address: '321 River Road, Chicago, IL 60601',
        eventType: 'in-person',
        price: 0,
        capacity: 50,
        attendees: 34,
        image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800',
        themeColor: '#ef4444',
        createdAt: '2026-06-08'
    },
    {
        id: '5',
        title: 'Yoga & Wellness Retreat',
        category: 'sports',
        description: 'A full day of yoga, meditation, and wellness workshops. Includes healthy meals, nature walks, and mindfulness sessions. Suitable for all experience levels. Bring your own mat and water bottle.',
        date: '2026-07-22',
        time: '08:00',
        duration: 'all-day',
        location: 'Serenity Mountain Resort',
        address: '111 Peaceful Valley Road, Denver, CO 80201',
        eventType: 'in-person',
        price: 10000,
        capacity: 40,
        attendees: 35,
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800',
        themeColor: '#14b8a6',
        createdAt: '2026-06-13'
    },
    {
        id: '6',
        title: 'Cricket Championship Finals',
        category: 'sports',
        description: 'Watch the ultimate cricket showdown! Two top teams battling for the championship trophy. Live commentary, food stalls, and fan zones. Family-friendly atmosphere with activities for kids.',
        date: '2026-09-10',
        time: '14:00',
        duration: '6',
        location: 'Wankhede Stadium',
        address: 'D Road, Churchgate, Mumbai, India',
        eventType: 'in-person',
        price: 2500,
        capacity: 33000,
        attendees: 28500,
        image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800',
        themeColor: '#f59e0b',
        createdAt: '2026-06-15'
    },

    // ===== BUSINESS & NETWORKING =====
    {
        id: '7',
        title: 'Tech Startup Networking Night',
        category: 'business',
        description: 'Connect with fellow entrepreneurs, investors, and tech enthusiasts. Perfect for finding co-founders, investors, or your next career move. Includes pitch sessions and mentorship rounds.',
        date: '2026-06-25',
        time: '18:30',
        duration: '3',
        location: 'WeWork Downtown',
        address: '456 Innovation Street, San Francisco, CA 94105',
        eventType: 'in-person',
        price: 0,
        capacity: 150,
        attendees: 89,
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
        themeColor: '#10b981',
        createdAt: '2026-06-05'
    },
    {
        id: '8',
        title: 'Business Leadership Conference',
        category: 'business',
        description: 'Learn from Fortune 500 CEOs and startup founders. Topics include scaling, team building, and innovation strategies. Includes exclusive networking dinner and one-on-one mentoring sessions.',
        date: '2026-08-05',
        time: '09:00',
        duration: 'all-day',
        location: 'Grand Hyatt Hotel',
        address: '222 Business District, Dallas, TX 75201',
        eventType: 'in-person',
        price: 29000,
        capacity: 300,
        attendees: 180,
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800',
        themeColor: '#3b82f6',
        createdAt: '2026-06-11'
    },
    {
        id: '9',
        title: 'Women Entrepreneurs Summit',
        category: 'business',
        description: 'Empowering women in business through workshops, panel discussions, and networking. Featured speakers include successful female founders and industry leaders. Scholarships available for students.',
        date: '2026-10-12',
        time: '10:00',
        duration: 'all-day',
        location: 'Convention Center Hall B',
        address: '555 Empowerment Ave, Bangalore, India',
        eventType: 'hybrid',
        price: 5000,
        capacity: 500,
        attendees: 420,
        image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800',
        themeColor: '#ec4899',
        createdAt: '2026-06-18'
    },

    // ===== FOOD & DRINK =====
    {
        id: '10',
        title: 'Gourmet Food & Wine Festival',
        category: 'food',
        description: 'Taste dishes from 50+ top chefs and wineries. Live cooking demonstrations, wine pairing sessions, and exclusive tasting menus. A culinary journey you won't forget with celebrity chef appearances.',
        date: '2026-08-10',
        time: '12:00',
        duration: 'all-day',
        location: 'Harbor Convention Center',
        address: '555 Waterfront Drive, Seattle, WA 98101',
        eventType: 'in-person',
        price: 6000,
        capacity: 2000,
        attendees: 1200,
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
        themeColor: '#f97316',
        createdAt: '2026-06-15'
    },
    {
        id: '11',
        title: 'Cooking Class: Italian Cuisine',
        category: 'food',
        description: 'Learn to make authentic pasta, risotto, and tiramisu from a Michelin-starred chef. All ingredients and equipment provided. Take home recipes and enjoy a full meal at the end of class!',
        date: '2026-07-12',
        time: '17:00',
        duration: '3',
        location: 'Culinary Institute Kitchen',
        address: '666 Chef Avenue, Miami, FL 33101',
        eventType: 'in-person',
        price: 7500,
        capacity: 16,
        attendees: 14,
        image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800',
        themeColor: '#f97316',
        createdAt: '2026-06-07'
    },
    {
        id: '12',
        title: 'Street Food Festival',
        category: 'food',
        description: 'Explore flavors from around the world! 100+ street food vendors, live cooking competitions, and cultural performances. Vegetarian and vegan options available. Bring your appetite!',
        date: '2026-09-25',
        time: '16:00',
        duration: '6',
        location: 'City Food Street',
        address: '123 Flavor Lane, Delhi, India',
        eventType: 'in-person',
        price: 500,
        capacity: 10000,
        attendees: 8500,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800',
        themeColor: '#f59e0b',
        createdAt: '2026-06-20'
    },

    // ===== ARTS & CULTURE =====
    {
        id: '13',
        title: 'Wine & Paint Night',
        category: 'arts',
        description: 'Unleash your creativity while sipping on fine wine. No experience needed - our instructor will guide you step by step! All supplies included. Perfect for date night or friends outing.',
        date: '2026-06-20',
        time: '19:00',
        duration: '2',
        location: 'Art Studio 42',
        address: '789 Creative Lane, Austin, TX 78701',
        eventType: 'in-person',
        price: 2800,
        capacity: 30,
        attendees: 28,
        image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800',
        themeColor: '#ec4899',
        createdAt: '2026-06-10'
    },
    {
        id: '14',
        title: 'Photography Masterclass',
        category: 'arts',
        description: 'Professional photography workshop covering composition, lighting, and post-processing. Bring your DSLR or mirrorless camera. Outdoor shooting session included in nearby botanical gardens.',
        date: '2026-07-08',
        time: '10:00',
        duration: '6',
        location: 'Creative Arts Center',
        address: '333 Shutter Street, Portland, OR 97201',
        eventType: 'in-person',
        price: 7000,
        capacity: 20,
        attendees: 18,
        image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800',
        themeColor: '#d946ef',
        createdAt: '2026-06-16'
    },
    {
        id: '15',
        title: 'Traditional Dance Festival',
        category: 'arts',
        description: 'Celebrate cultural heritage through dance! Performances from classical Bharatanatyam to contemporary fusion. Workshops available for beginners. A colorful celebration of artistic expression.',
        date: '2026-11-05',
        time: '18:00',
        duration: '4',
        location: 'Cultural Heritage Center',
        address: '88 Dance Road, Chennai, India',
        eventType: 'in-person',
        price: 1200,
        capacity: 600,
        attendees: 450,
        image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800',
        themeColor: '#8b5cf6',
        createdAt: '2026-06-22'
    },

    // ===== TECHNOLOGY =====
    {
        id: '16',
        title: 'Web Development Workshop',
        category: 'tech',
        description: 'Learn to build modern websites from scratch. HTML, CSS, and JavaScript fundamentals for beginners. By the end, you'll have built your first portfolio site! Laptop required.',
        date: '2026-07-05',
        time: '10:00',
        duration: '4',
        location: 'Online (Zoom)',
        address: '',
        eventType: 'online',
        price: 2000,
        capacity: 100,
        attendees: 67,
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
        themeColor: '#f59e0b',
        createdAt: '2026-06-12'
    },
    {
        id: '17',
        title: 'AI & Machine Learning Summit',
        category: 'tech',
        description: 'Deep dive into the latest AI advancements. Keynotes from industry leaders, hands-on workshops, and networking with AI professionals. Certificate of attendance provided to all participants.',
        date: '2026-09-15',
        time: '09:00',
        duration: 'all-day',
        location: 'Tech Convention Center',
        address: '888 AI Boulevard, Boston, MA 02101',
        eventType: 'hybrid',
        price: 16500,
        capacity: 500,
        attendees: 320,
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800',
        themeColor: '#8b5cf6',
        createdAt: '2026-06-14'
    },
    {
        id: '18',
        title: 'Blockchain & Crypto Workshop',
        category: 'tech',
        description: 'Understand blockchain technology, smart contracts, and DeFi. Hands-on coding session to build your first smart contract. Basic programming knowledge recommended but not required.',
        date: '2026-08-20',
        time: '14:00',
        duration: '3',
        location: 'Online (Discord + Zoom)',
        address: '',
        eventType: 'online',
        price: 0,
        capacity: 200,
        attendees: 145,
        image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800',
        themeColor: '#6366f1',
        createdAt: '2026-06-17'
    },

    // ===== EDUCATION =====
    {
        id: '19',
        title: 'Data Science Bootcamp',
        category: 'education',
        description: 'Intensive 2-day bootcamp covering Python, pandas, visualization, and machine learning basics. Perfect for career switchers and students. Certificate provided upon completion.',
        date: '2026-09-01',
        time: '09:00',
        duration: 'multiple',
        location: 'Code Academy Campus',
        address: '777 Data Drive, San Jose, CA 95101',
        eventType: 'in-person',
        price: 24800,
        capacity: 60,
        attendees: 45,
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800',
        themeColor: '#0ea5e9',
        createdAt: '2026-06-06'
    },
    {
        id: '20',
        title: 'Public Speaking Masterclass',
        category: 'education',
        description: 'Overcome stage fright and become a confident speaker. Learn techniques used by TED speakers and corporate trainers. Includes practice sessions with personalized feedback.',
        date: '2026-08-15',
        time: '10:00',
        duration: '5',
        location: 'Speaker Studio',
        address: '999 Voice Avenue, London, UK',
        eventType: 'in-person',
        price: 8500,
        capacity: 25,
        attendees: 22,
        image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800',
        themeColor: '#10b981',
        createdAt: '2026-06-19'
    },
    {
        id: '21',
        title: 'Financial Literacy Workshop',
        category: 'education',
        description: 'Learn personal finance, investing basics, and wealth building strategies. Topics include budgeting, stock market basics, and retirement planning. Free materials provided.',
        date: '2026-10-20',
        time: '11:00',
        duration: '3',
        location: 'Community Learning Center',
        address: '321 Knowledge Street, Pune, India',
        eventType: 'in-person',
        price: 0,
        capacity: 80,
        attendees: 75,
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
        themeColor: '#3b82f6',
        createdAt: '2026-06-21'
    },

    // ===== OTHER =====
    {
        id: '22',
        title: 'Charity Gala: Night of Hope',
        category: 'other',
        description: 'An elegant evening supporting children's education. Silent auction, live performances, and gourmet dinner. All proceeds go to local schools. Black tie optional, red carpet welcome.',
        date: '2026-10-15',
        time: '19:00',
        duration: '4',
        location: 'Crystal Ballroom',
        address: '999 Grand Avenue, Los Angeles, CA 90015',
        eventType: 'in-person',
        price: 12500,
        capacity: 400,
        attendees: 280,
        image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800',
        themeColor: '#ef4444',
        createdAt: '2026-06-04'
    },
    {
        id: '23',
        title: 'Wedding Expo 2026',
        category: 'other',
        description: 'Everything you need for your dream wedding! Meet top vendors, see fashion shows, taste catering samples, and get exclusive discounts. Free gift bags for first 200 visitors.',
        date: '2026-11-20',
        time: '10:00',
        duration: 'all-day',
        location: 'Grand Convention Hall',
        address: '777 Wedding Lane, Jaipur, India',
        eventType: 'in-person',
        price: 300,
        capacity: 2000,
        attendees: 1800,
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
        themeColor: '#ec4899',
        createdAt: '2026-06-23'
    },
    {
        id: '24',
        title: 'Comedy Night - Stand Up Special',
        category: 'other',
        description: 'Laugh until your sides hurt! Featuring top comedians from across the country. Two-hour show with opening acts and a headliner. Strictly 18+ event. Dinner packages available.',
        date: '2026-09-30',
        time: '20:00',
        duration: '2',
        location: 'Laugh Factory Comedy Club',
        address: '444 Joke Street, Bangalore, India',
        eventType: 'in-person',
        price: 1800,
        capacity: 250,
        attendees: 230,
        image: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=800',
        themeColor: '#f59e0b',
        createdAt: '2026-06-24'
    }
];

// ============================================
// UTILITY FUNCTIONS
// ============================================

function getEvents() {
    // Always try to load from localStorage first
    const stored = localStorage.getItem(STORAGE_KEY);
    const storedVersion = localStorage.getItem(DATA_VERSION_KEY);

    if (stored && storedVersion === CURRENT_DATA_VERSION) {
        try {
            const events = JSON.parse(stored);
            if (Array.isArray(events) && events.length > 0) {
                return events;
            }
        } catch (e) {
            console.log('Corrupted data, resetting...');
        }
    }

    // If no valid data found, load sample events
    console.log('Loading sample events...');
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sampleEvents));
    localStorage.setItem(DATA_VERSION_KEY, CURRENT_DATA_VERSION);
    return sampleEvents;
}

function saveEvents(events) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
}

function getRegistrations() {
    const stored = localStorage.getItem(REGISTRATIONS_KEY);
    return stored ? JSON.parse(stored) : [];
}

function saveRegistrations(registrations) {
    localStorage.setItem(REGISTRATIONS_KEY, JSON.stringify(registrations));
}

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function formatDate(dateString) {
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

function formatTime(timeString) {
    const [hours, minutes] = timeString.split(':');
    const date = new Date();
    date.setHours(hours, minutes);
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
}

function getCategoryName(category) {
    const names = {
        music: 'Music & Concerts',
        sports: 'Sports & Fitness',
        business: 'Business & Networking',
        food: 'Food & Drink',
        arts: 'Arts & Culture',
        tech: 'Technology',
        education: 'Education',
        other: 'Other'
    };
    return names[category] || category;
}

function getEventStatus(dateString) {
    const eventDate = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (eventDate < today) return 'past';
    if (eventDate.getTime() === today.getTime()) return 'ongoing';
    return 'upcoming';
}

function getDefaultImage(category) {
    const images = {
        music: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800',
        sports: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800',
        business: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800',
        food: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
        arts: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800',
        tech: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800',
        education: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800',
        other: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800'
    };
    return images[category] || images.other;
}

function formatPrice(price) {
    if (price === 0 || !price) return 'Free';
    return '₹' + price.toLocaleString('en-IN');
}

// ============================================
// NAVIGATION
// ============================================

function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 10) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// ============================================
// EVENT CARD
// ============================================

function createEventCard(event) {
    const image = event.image || getDefaultImage(event.category);
    const priceDisplay = formatPrice(event.price);
    const isFree = event.price === 0 || !event.price;
    const spotsLeft = event.capacity ? event.capacity - (event.attendees || 0) : null;
    const isAlmostFull = spotsLeft !== null && spotsLeft <= 5 && spotsLeft > 0;
    const isFull = spotsLeft !== null && spotsLeft <= 0;

    let priceBadgeClass = 'event-price-tag';
    if (isFree) priceBadgeClass += ' free';

    let statusBadge = '';
    if (isFull) {
        statusBadge = '<span class="badge badge-danger" style="position: absolute; top: 16px; left: 16px;">Sold Out</span>';
    } else if (isAlmostFull) {
        statusBadge = `<span class="badge badge-warning" style="position: absolute; top: 16px; left: 16px;">Only ${spotsLeft} left!</span>`;
    }

    return `
        <div class="event-card" onclick="viewEvent('${event.id}')" role="button" tabindex="0">
            <div class="event-image-wrapper">
                <img src="${image}" alt="${event.title}" class="event-image" onerror="this.src='${getDefaultImage(event.category)}'" loading="lazy">
                <div class="event-image-overlay"></div>
                ${statusBadge}
                <span class="${priceBadgeClass}">${priceDisplay}</span>
                <span class="badge badge-primary event-category-tag">${getCategoryName(event.category)}</span>
            </div>
            <div class="event-content">
                <h3 class="event-title">${event.title}</h3>
                <div class="event-meta">
                    <div class="event-meta-item">
                        <i class="fas fa-calendar"></i>
                        <span>${formatDate(event.date)}</span>
                    </div>
                    <div class="event-meta-item">
                        <i class="fas fa-clock"></i>
                        <span>${formatTime(event.time)}</span>
                    </div>
                    <div class="event-meta-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${event.location}</span>
                    </div>
                </div>
                <div class="event-footer">
                    <span class="event-attendees">
                        <i class="fas fa-users"></i>
                        ${event.attendees || 0} going
                    </span>
                    <span class="event-status">
                        <span class="status-dot"></span>
                        ${isFull ? 'Full' : 'Open'}
                    </span>
                </div>
            </div>
        </div>
    `;
}

// ============================================
// PAGE: HOME
// ============================================

function loadFeaturedEvents() {
    const container = document.getElementById('featuredEvents');
    if (!container) return;

    const events = getEvents();
    const featured = events.slice(0, 6);

    container.innerHTML = featured.map(event => createEventCard(event)).join('');

    const totalEvents = events.length;
    const totalAttendees = events.reduce((sum, e) => sum + (e.attendees || 0), 0);

    const heroTotalEvents = document.getElementById('heroTotalEvents');
    const heroTotalAttendees = document.getElementById('heroTotalAttendees');

    if (heroTotalEvents) heroTotalEvents.textContent = totalEvents + '+';
    if (heroTotalAttendees) heroTotalAttendees.textContent = (totalAttendees / 1000).toFixed(1) + 'K+';
}

// ============================================
// PAGE: EVENTS LIST
// ============================================

function loadEventsList() {
    const container = document.getElementById('eventsGrid');
    const noResults = document.getElementById('noResults');
    if (!container) return;

    let events = getEvents();

    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
    const categoryFilter = document.getElementById('categoryFilter')?.value || '';
    const dateFilter = document.getElementById('dateFilter')?.value || '';
    const priceFilter = document.getElementById('priceFilter')?.value || '';

    if (searchTerm) {
        events = events.filter(e => 
            e.title.toLowerCase().includes(searchTerm) || 
            e.description.toLowerCase().includes(searchTerm) ||
            e.location.toLowerCase().includes(searchTerm)
        );
    }

    if (categoryFilter) {
        events = events.filter(e => e.category === categoryFilter);
    }

    if (dateFilter) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        events = events.filter(e => {
            const eventDate = new Date(e.date);
            switch(dateFilter) {
                case 'today':
                    return eventDate.getTime() === today.getTime();
                case 'week':
                    const weekEnd = new Date(today);
                    weekEnd.setDate(weekEnd.getDate() + 7);
                    return eventDate >= today && eventDate <= weekEnd;
                case 'month':
                    return eventDate.getMonth() === today.getMonth() && 
                           eventDate.getFullYear() === today.getFullYear();
                case 'future':
                    return eventDate >= today;
                default:
                    return true;
            }
        });
    }

    if (priceFilter === 'free') {
        events = events.filter(e => e.price === 0 || !e.price);
    } else if (priceFilter === 'paid') {
        events = events.filter(e => e.price > 0);
    }

    if (events.length === 0) {
        container.innerHTML = '';
        if (noResults) noResults.style.display = 'block';
    } else {
        if (noResults) noResults.style.display = 'none';
        container.innerHTML = events.map(event => createEventCard(event)).join('');
    }
}

// ============================================
// PAGE: EVENT DETAILS
// ============================================

function loadEventDetails() {
    const container = document.getElementById('eventDetails');
    if (!container) return;

    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('id');

    if (!eventId) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon"><i class="fas fa-exclamation-circle"></i></div>
                <h3>Event not found</h3>
                <p>The event you're looking for doesn't exist or has been removed.</p>
                <a href="events.html" class="btn btn-primary">Browse Events</a>
            </div>
        `;
        return;
    }

    const events = getEvents();
    const event = events.find(e => e.id === eventId);

    if (!event) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon"><i class="fas fa-exclamation-circle"></i></div>
                <h3>Event not found</h3>
                <p>The event you're looking for doesn't exist or has been removed.</p>
                <a href="events.html" class="btn btn-primary">Browse Events</a>
            </div>
        `;
        return;
    }

    const image = event.image || getDefaultImage(event.category);
    const priceDisplay = formatPrice(event.price);
    const status = getEventStatus(event.date);
    const spotsLeft = event.capacity ? event.capacity - (event.attendees || 0) : null;
    const isFull = spotsLeft !== null && spotsLeft <= 0;

    let statusBadge = '';
    if (status === 'upcoming') {
        statusBadge = '<span class="badge badge-success">Upcoming</span>';
    } else if (status === 'ongoing') {
        statusBadge = '<span class="badge badge-warning">Happening Today</span>';
    } else {
        statusBadge = '<span class="badge badge-danger">Past Event</span>';
    }

    container.innerHTML = `
        <div class="event-hero">
            <img src="${image}" alt="${event.title}" class="event-hero-image" onerror="this.src='${getDefaultImage(event.category)}'" loading="eager">
            <div class="event-hero-content">
                <div class="event-tags">
                    <span class="event-tag category">${getCategoryName(event.category)}</span>
                    <span class="event-tag type">${event.eventType}</span>
                    ${statusBadge}
                </div>
                <h1>${event.title}</h1>
                <p class="event-description">${event.description}</p>

                <div class="event-info-grid">
                    <div class="event-info-item">
                        <i class="fas fa-calendar"></i>
                        <div>
                            <h4>Date</h4>
                            <p>${formatDate(event.date)}</p>
                        </div>
                    </div>
                    <div class="event-info-item">
                        <i class="fas fa-clock"></i>
                        <div>
                            <h4>Time</h4>
                            <p>${formatTime(event.time)}</p>
                        </div>
                    </div>
                    <div class="event-info-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <div>
                            <h4>Location</h4>
                            <p>${event.location}</p>
                            ${event.address ? `<small>${event.address}</small>` : ''}
                        </div>
                    </div>
                    <div class="event-info-item">
                        <i class="fas fa-ticket-alt"></i>
                        <div>
                            <h4>Price</h4>
                            <p>${priceDisplay}</p>
                        </div>
                    </div>
                    <div class="event-info-item">
                        <i class="fas fa-users"></i>
                        <div>
                            <h4>Capacity</h4>
                            <p>${event.capacity || 'Unlimited'} spots</p>
                        </div>
                    </div>
                    <div class="event-info-item">
                        <i class="fas fa-user-check"></i>
                        <div>
                            <h4>Spots Left</h4>
                            <p>${spotsLeft !== null ? spotsLeft + ' spots remaining' : 'Unlimited'}</p>
                        </div>
                    </div>
                </div>

                <div class="event-actions">
                    ${!isFull ? `
                        <button class="btn btn-primary btn-lg" onclick="goToRegistration('${event.id}')">
                            <i class="fas fa-check-circle"></i> Register Now
                        </button>
                    ` : `
                        <button class="btn btn-ghost btn-lg" disabled style="opacity: 0.6;">
                            <i class="fas fa-times-circle"></i> Sold Out
                        </button>
                    `}
                    <button class="btn btn-secondary" onclick="shareEvent('${event.id}')">
                        <i class="fas fa-share-alt"></i> Share
                    </button>
                    <button class="btn btn-ghost" onclick="editEvent('${event.id}')">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                </div>
            </div>
        </div>
    `;
}

function viewEvent(id) {
    window.location.href = `event-details.html?id=${id}`;
}

function goToRegistration(id) {
    window.location.href = `register.html?eventId=${id}`;
}

function shareEvent(id) {
    const url = `${window.location.origin}/event-details.html?id=${id}`;
    if (navigator.share) {
        navigator.share({ title: 'Check out this event!', url: url });
    } else {
        navigator.clipboard.writeText(url);
        showToast('Event link copied to clipboard!', 'success');
    }
}

function editEvent(id) {
    showToast('Edit feature coming soon!', 'warning');
}

// ============================================
// TOAST NOTIFICATIONS
// ============================================

function showToast(message, type = 'info') {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    const icons = {
        success: 'fa-check-circle',
        error: 'fa-times-circle',
        warning: 'fa-exclamation-triangle',
        info: 'fa-info-circle'
    };

    toast.innerHTML = `
        <i class="fas ${icons[type] || icons.info}"></i>
        <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ============================================
// PAGE: REGISTRATION
// ============================================

function loadRegistrationPage() {
    const container = document.getElementById('registrationFormContainer');
    if (!container) return;

    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('eventId');

    if (!eventId) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon"><i class="fas fa-calendar-times"></i></div>
                <h3>No event selected</h3>
                <p>Please select an event to register for.</p>
                <a href="events.html" class="btn btn-primary btn-lg">Browse Events</a>
            </div>
        `;
        return;
    }

    const events = getEvents();
    const event = events.find(e => e.id === eventId);

    if (!event) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon"><i class="fas fa-exclamation-circle"></i></div>
                <h3>Event not found</h3>
                <p>The event you're looking for doesn't exist.</p>
                <a href="events.html" class="btn btn-primary btn-lg">Browse Events</a>
            </div>
        `;
        return;
    }

    const priceDisplay = formatPrice(event.price);
    const spotsLeft = event.capacity ? event.capacity - (event.attendees || 0) : null;

    if (event.capacity && (event.attendees || 0) >= event.capacity) {
        container.innerHTML = `
            <div class="registration-event-card" style="text-align: center; max-width: 500px; margin: 0 auto;">
                <div class="empty-state-icon" style="margin: 0 auto 24px;"><i class="fas fa-times-circle"></i></div>
                <h2 style="margin-bottom: 16px;">${event.title}</h2>
                <div class="sold-out-badge" style="margin: 16px auto;"><i class="fas fa-times-circle"></i> Sold Out</div>
                <p style="color: var(--gray-600); margin-bottom: 24px;">Sorry, this event is completely sold out. No more spots available.</p>
                <a href="events.html" class="btn btn-primary btn-lg">Browse Other Events</a>
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <div class="registration-layout">
            <div class="registration-event-card">
                <h2>${event.title}</h2>
                <div class="event-summary">
                    <div class="event-summary-item">
                        <i class="fas fa-calendar"></i>
                        <span>${formatDate(event.date)}</span>
                    </div>
                    <div class="event-summary-item">
                        <i class="fas fa-clock"></i>
                        <span>${formatTime(event.time)}</span>
                    </div>
                    <div class="event-summary-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${event.location}</span>
                    </div>
                    <div class="event-summary-item">
                        <i class="fas fa-ticket-alt"></i>
                        <strong>${priceDisplay}</strong>
                    </div>
                    <div class="event-summary-item">
                        <i class="fas fa-users"></i>
                        <span>${spotsLeft !== null ? spotsLeft + ' spots remaining' : 'Unlimited spots'}</span>
                    </div>
                </div>
            </div>

            <form id="registrationForm" class="registration-form">
                <input type="hidden" id="regEventId" value="${event.id}">

                <h3><i class="fas fa-user"></i> Personal Information</h3>

                <div class="form-row">
                    <div class="form-group">
                        <label for="regFirstName">First Name <span class="required">*</span></label>
                        <input type="text" id="regFirstName" name="firstName" required placeholder="John">
                    </div>
                    <div class="form-group">
                        <label for="regLastName">Last Name <span class="required">*</span></label>
                        <input type="text" id="regLastName" name="lastName" required placeholder="Doe">
                    </div>
                </div>

                <div class="form-group">
                    <label for="regEmail">Email Address <span class="required">*</span></label>
                    <input type="email" id="regEmail" name="email" required placeholder="john.doe@example.com">
                </div>

                <div class="form-group">
                    <label for="regPhone">Phone Number <span class="required">*</span></label>
                    <input type="tel" id="regPhone" name="phone" required placeholder="+91 98765 43210">
                </div>

                <h3><i class="fas fa-info-circle"></i> Additional Details</h3>

                <div class="form-group">
                    <label for="regTickets">Number of Tickets <span class="required">*</span></label>
                    <select id="regTickets" name="tickets" required>
                        <option value="1">1 Ticket</option>
                        <option value="2">2 Tickets</option>
                        <option value="3">3 Tickets</option>
                        <option value="4">4 Tickets</option>
                        <option value="5">5 Tickets</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="regDietary">Dietary Requirements (if any)</label>
                    <input type="text" id="regDietary" name="dietary" placeholder="Vegetarian, Vegan, Gluten-free, etc.">
                </div>

                <div class="form-group">
                    <label>How did you hear about this event?</label>
                    <div class="radio-group">
                        <label class="radio-label">
                            <input type="radio" name="referral" value="social" checked>
                            <span>Social Media</span>
                        </label>
                        <label class="radio-label">
                            <input type="radio" name="referral" value="friend">
                            <span>Friend/Family</span>
                        </label>
                        <label class="radio-label">
                            <input type="radio" name="referral" value="email">
                            <span>Email</span>
                        </label>
                        <label class="radio-label">
                            <input type="radio" name="referral" value="search">
                            <span>Search Engine</span>
                        </label>
                        <label class="radio-label">
                            <input type="radio" name="referral" value="other">
                            <span>Other</span>
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <label class="checkbox-label">
                        <input type="checkbox" id="regTerms" name="terms" required>
                        <span>I agree to the event terms and conditions <span class="required">*</span></span>
                    </label>
                </div>

                <div class="form-group">
                    <label class="checkbox-label">
                        <input type="checkbox" id="regNewsletter" name="newsletter">
                        <span>Subscribe to our newsletter for future events</span>
                    </label>
                </div>

                <div class="registration-summary">
                    <div class="summary-row">
                        <span>Ticket Price:</span>
                        <span>${priceDisplay}</span>
                    </div>
                    <div class="summary-row total">
                        <span>Total:</span>
                        <span id="totalPrice">${priceDisplay}</span>
                    </div>
                </div>

                <div class="form-actions">
                    <button type="submit" class="btn btn-primary btn-lg">
                        <i class="fas fa-check-circle"></i> Complete Registration
                    </button>
                    <a href="event-details.html?id=${event.id}" class="btn btn-ghost btn-lg">Cancel</a>
                </div>
            </form>
        </div>
    `;

    const ticketsSelect = document.getElementById('regTickets');
    if (ticketsSelect && event.price > 0) {
        ticketsSelect.addEventListener('change', function() {
            const total = event.price * parseInt(this.value);
            document.getElementById('totalPrice').textContent = '₹' + total.toLocaleString('en-IN');
        });
    }

    const regForm = document.getElementById('registrationForm');
    if (regForm) {
        regForm.addEventListener('submit', handleRegistration);
    }
}

function handleRegistration(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const eventId = document.getElementById('regEventId').value;

    const events = getEvents();
    const event = events.find(e => e.id === eventId);

    if (!event) {
        showToast('Event not found!', 'error');
        return;
    }

    const tickets = parseInt(formData.get('tickets')) || 1;

    if (event.capacity && (event.attendees || 0) + tickets > event.capacity) {
        showToast('Sorry, not enough spots available for this many tickets.', 'error');
        return;
    }

    const registration = {
        id: generateId(),
        eventId: eventId,
        eventTitle: event.title,
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        tickets: tickets,
        dietary: formData.get('dietary') || '',
        referral: formData.get('referral'),
        newsletter: formData.get('newsletter') === 'on',
        totalPrice: (event.price || 0) * tickets,
        registeredAt: new Date().toISOString()
    };

    const registrations = getRegistrations();
    registrations.push(registration);
    saveRegistrations(registrations);

    event.attendees = (event.attendees || 0) + tickets;
    saveEvents(events);

    showToast('Registration successful!', 'success');
    window.location.href = `registration-success.html?regId=${registration.id}`;
}

// ============================================
// PAGE: REGISTRATION SUCCESS
// ============================================

function loadRegistrationSuccess() {
    const container = document.getElementById('successContainer');
    if (!container) return;

    const urlParams = new URLSearchParams(window.location.search);
    const regId = urlParams.get('regId');

    if (!regId) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon"><i class="fas fa-exclamation-circle"></i></div>
                <h3>No registration found</h3>
                <p>We couldn't find your registration details.</p>
                <a href="events.html" class="btn btn-primary">Browse Events</a>
            </div>
        `;
        return;
    }

    const registrations = getRegistrations();
    const registration = registrations.find(r => r.id === regId);

    if (!registration) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon"><i class="fas fa-exclamation-circle"></i></div>
                <h3>Registration not found</h3>
                <p>We couldn't find your registration details.</p>
                <a href="events.html" class="btn btn-primary">Browse Events</a>
            </div>
        `;
        return;
    }

    const events = getEvents();
    const event = events.find(e => e.id === registration.eventId);

    container.innerHTML = `
        <div class="success-card">
            <div class="success-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <h1>Registration Confirmed!</h1>
            <p class="success-message">You have successfully registered for <strong>${registration.eventTitle}</strong>.</p>

            <div class="ticket-card">
                <div class="ticket-header">
                    <span class="ticket-label">EVENT TICKET</span>
                    <span class="ticket-id">#${registration.id.slice(-6).toUpperCase()}</span>
                </div>
                <div class="ticket-body">
                    <h3>${registration.eventTitle}</h3>
                    <div class="ticket-detail">
                        <i class="fas fa-user"></i>
                        <span>${registration.firstName} ${registration.lastName}</span>
                    </div>
                    <div class="ticket-detail">
                        <i class="fas fa-envelope"></i>
                        <span>${registration.email}</span>
                    </div>
                    <div class="ticket-detail">
                        <i class="fas fa-ticket-alt"></i>
                        <span>${registration.tickets} Ticket(s)</span>
                    </div>
                    ${event ? `
                        <div class="ticket-detail">
                            <i class="fas fa-calendar"></i>
                            <span>${formatDate(event.date)} | ${formatTime(event.time)}</span>
                        </div>
                        <div class="ticket-detail">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>${event.location}</span>
                        </div>
                    ` : ''}
                </div>
                <div class="ticket-footer">
                    <span>Registered: ${new Date(registration.registeredAt).toLocaleDateString()}</span>
                    <span class="ticket-price">${registration.totalPrice > 0 ? '₹' + registration.totalPrice.toLocaleString('en-IN') : 'Free'}</span>
                </div>
            </div>

            <div class="success-actions">
                <a href="event-details.html?id=${registration.eventId}" class="btn btn-primary">
                    <i class="fas fa-arrow-left"></i> Back to Event
                </a>
                <a href="events.html" class="btn btn-secondary">
                    <i class="fas fa-calendar"></i> Browse More Events
                </a>
                <button class="btn btn-ghost" onclick="window.print()">
                    <i class="fas fa-print"></i> Print Ticket
                </button>
            </div>
        </div>
    `;
}

// ============================================
// PAGE: CREATE EVENT
// ============================================

function handleCreateEvent(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const newEvent = {
        id: generateId(),
        title: formData.get('title'),
        category: formData.get('category'),
        description: formData.get('description'),
        date: formData.get('date'),
        time: formData.get('time'),
        duration: formData.get('duration'),
        location: formData.get('location'),
        address: formData.get('address'),
        eventType: formData.get('eventType'),
        price: parseFloat(formData.get('price')) || 0,
        capacity: parseInt(formData.get('capacity')) || null,
        themeColor: formData.get('themeColor') || '#6366f1',
        attendees: 0,
        createdAt: new Date().toISOString()
    };

    if (!newEvent.title || !newEvent.category || !newEvent.date || !newEvent.location) {
        showToast('Please fill in all required fields.', 'error');
        return;
    }

    const events = getEvents();
    events.unshift(newEvent);
    saveEvents(events);

    showToast('Event created successfully!', 'success');
    window.location.href = 'dashboard.html';
}

// ============================================
// PAGE: DASHBOARD - FIXED TO SHOW ALL EVENTS
// ============================================

function loadDashboard() {
    const events = getEvents();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const totalEvents = events.length;
    const totalAttendees = events.reduce((sum, e) => sum + (e.attendees || 0), 0);
    const totalRevenue = events.reduce((sum, e) => sum + ((e.price || 0) * (e.attendees || 0)), 0);
    const upcomingEvents = events.filter(e => new Date(e.date) >= today).length;

    // Update stat cards
    const totalEventsEl = document.getElementById('totalEvents');
    const totalAttendeesEl = document.getElementById('totalAttendees');
    const totalRevenueEl = document.getElementById('totalRevenue');
    const upcomingEventsEl = document.getElementById('upcomingEvents');

    if (totalEventsEl) totalEventsEl.textContent = totalEvents;
    if (totalAttendeesEl) totalAttendeesEl.textContent = totalAttendees.toLocaleString('en-IN');
    if (totalRevenueEl) totalRevenueEl.textContent = '₹' + totalRevenue.toLocaleString('en-IN');
    if (upcomingEventsEl) upcomingEventsEl.textContent = upcomingEvents;

    // Load events table
    const tableBody = document.getElementById('eventsTableBody');
    const noEventsMessage = document.getElementById('noEventsMessage');
    const eventsTable = document.getElementById('eventsTable');

    if (!tableBody) return;

    if (events.length === 0) {
        if (eventsTable) eventsTable.style.display = 'none';
        if (noEventsMessage) noEventsMessage.style.display = 'block';
    } else {
        if (eventsTable) eventsTable.style.display = 'table';
        if (noEventsMessage) noEventsMessage.style.display = 'none';

        tableBody.innerHTML = events.map(event => {
            const status = getEventStatus(event.date);
            const image = event.image || getDefaultImage(event.category);
            const statusBadge = status === 'upcoming' ? 'badge-success' : status === 'ongoing' ? 'badge-warning' : 'badge-danger';
            const statusText = status === 'upcoming' ? 'Upcoming' : status === 'ongoing' ? 'Ongoing' : 'Past';

            return `
                <tr>
                    <td>
                        <div class="event-cell">
                            <img src="${image}" alt="${event.title}" onerror="this.src='${getDefaultImage(event.category)}'" loading="lazy">
                            <div class="event-cell-info">
                                <h4>${event.title}</h4>
                                <p>${event.location}</p>
                            </div>
                        </div>
                    </td>
                    <td>${formatDate(event.date)}</td>
                    <td><span class="badge badge-primary">${getCategoryName(event.category)}</span></td>
                    <td>${event.attendees || 0}</td>
                    <td><span class="badge ${statusBadge}">${statusText}</span></td>
                    <td>
                        <div class="table-actions">
                            <button onclick="viewEvent('${event.id}')" title="View" aria-label="View event">
                                <i class="fas fa-eye"></i>
                            </button>
                            <button onclick="editEvent('${event.id}')" title="Edit" aria-label="Edit event">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button class="delete" onclick="deleteEvent('${event.id}')" title="Delete" aria-label="Delete event">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </td>
                </tr>
            `;
        }).join('');
    }
}

function deleteEvent(id) {
    if (!confirm('Are you sure you want to delete this event? This action cannot be undone.')) return;

    let events = getEvents();
    events = events.filter(e => e.id !== id);
    saveEvents(events);

    showToast('Event deleted successfully.', 'success');
    loadDashboard();
}

// ============================================
// DEBOUNCE
// ============================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('EventHub Professional initialized');
    console.log('Data version:', CURRENT_DATA_VERSION);

    // Force load events - this ensures sample data is always available
    const events = getEvents();
    console.log('Loaded', events.length, 'events');

    // If no events loaded, force reset
    if (!events || events.length === 0) {
        console.log('No events found, forcing sample data reload...');
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(DATA_VERSION_KEY);
        const freshEvents = getEvents();
        console.log('Reloaded', freshEvents.length, 'events');
    }

    loadFeaturedEvents();
    loadEventsList();
    loadEventDetails();
    loadDashboard();
    loadRegistrationPage();
    loadRegistrationSuccess();

    const createForm = document.getElementById('createEventForm');
    if (createForm) {
        createForm.addEventListener('submit', handleCreateEvent);
    }

    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const dateFilter = document.getElementById('dateFilter');
    const priceFilter = document.getElementById('priceFilter');

    if (searchInput) {
        searchInput.addEventListener('input', debounce(loadEventsList, 300));
    }
    if (categoryFilter) categoryFilter.addEventListener('change', loadEventsList);
    if (dateFilter) dateFilter.addEventListener('change', loadEventsList);
    if (priceFilter) priceFilter.addEventListener('change', loadEventsList);
});