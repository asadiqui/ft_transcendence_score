const modulesData = [
    {
        title: "IV.1 Web",
        modules: [
            { 
                type: "Major", 
                title: "Use a framework for both frontend and backend", 
                desc: "Use a frontend (React, Vue, etc.) and backend (Express, NestJS, etc.) framework.", 
                fullDesc: "Use a frontend framework (React, Vue, Angular, Svelte, etc.).\nUse a backend framework (Express, NestJS, Django, Flask, Ruby on Rails, etc.).\nFull-stack frameworks (Next.js, Nuxt.js, SvelteKit) count as both if you use both their frontend and backend capabilities." 
            },
            { 
                type: "Minor", 
                title: "Use a frontend framework", 
                desc: "React, Vue, Angular, Svelte, etc.", 
                fullDesc: "Use a frontend framework (React, Vue, Angular, Svelte, etc.)." 
            },
            { 
                type: "Minor", 
                title: "Use a backend framework", 
                desc: "Express, Fastify, NestJS, Django, etc.", 
                fullDesc: "Use a backend framework (Express, Fastify, NestJS, Django, etc.)." 
            },
            { 
                type: "Major", 
                title: "Implement real-time features", 
                desc: "WebSockets, real-time updates, efficient broadcasting.", 
                fullDesc: "Implement real-time features using WebSockets or similar technology.\nReal-time updates across clients.\nHandle connection/disconnection gracefully.\nEfficient message broadcasting." 
            },
            { 
                type: "Major", 
                title: "Allow users to interact with other users", 
                desc: "Chat, Profile, Friends system.", 
                fullDesc: "The minimum requirements are:\nA basic chat system (send/receive messages between users).\nA profile system (view user information).\nA friends system (add/remove friends, see friends list)." 
            },
            { 
                type: "Major", 
                title: "Public API", 
                desc: "Secured API key, rate limiting, documentation, at least 5 endpoints.", 
                fullDesc: "A public API to interact with the database with a secured API key, rate limiting, documentation, and at least 5 endpoints:\nGET /api/{something}\nPOST /api/{something}\nPUT /api/{something}\nDELETE /api/{something}" 
            },
            { 
                type: "Minor", 
                title: "Use an ORM", 
                desc: "Database Object-Relational Mapping.", 
                fullDesc: "Use an ORM for the database." 
            },
            { 
                type: "Minor", 
                title: "Notification system", 
                desc: "For creation, update, and deletion actions.", 
                fullDesc: "A complete notification system for all creation, update, and deletion actions." 
            },
            { 
                type: "Minor", 
                title: "Real-time collaborative features", 
                desc: "Shared workspaces, live editing, etc.", 
                fullDesc: "Real-time collaborative features (shared workspaces, live editing, collaborative drawing, etc.)." 
            },
            { 
                type: "Minor", 
                title: "Server-Side Rendering (SSR)", 
                desc: "Improved performance and SEO.", 
                fullDesc: "Server-Side Rendering (SSR) for improved performance and SEO." 
            },
            { 
                type: "Minor", 
                title: "Progressive Web App (PWA)", 
                desc: "Offline support and installability.", 
                fullDesc: "Progressive Web App (PWA) with offline support and installability." 
            },
            { 
                type: "Minor", 
                title: "Custom-made design system", 
                desc: "Reusable components, color palette, typography.", 
                fullDesc: "Custom-made design system with reusable components, including a proper color palette, typography, and icons (minimum: 10 reusable components)." 
            },
            { 
                type: "Minor", 
                title: "Advanced search functionality", 
                desc: "Filters, sorting, and pagination.", 
                fullDesc: "Implement advanced search functionality with filters, sorting, and pagination." 
            },
            { 
                type: "Minor", 
                title: "File upload and management", 
                desc: "Validation, secure storage, preview, delete.", 
                fullDesc: "Support multiple file types (images, documents, etc.).\nClient-side and server-side validation (type, size, format).\nSecure file storage with proper access control.\nFile preview functionality where applicable.\nProgress indicators for uploads.\nAbility to delete uploaded files." 
            }
        ]
    },
    {
        title: "IV.2 Accessibility and Internationalization",
        modules: [
            { 
                type: "Major", 
                title: "Complete accessibility compliance", 
                desc: "WCAG 2.1 AA, screen reader support, keyboard nav.", 
                fullDesc: "Complete accessibility compliance (WCAG 2.1 AA) with screen reader support, keyboard navigation, and assistive technologies." 
            },
            { 
                type: "Minor", 
                title: "Support for multiple languages", 
                desc: "Min 3 languages, i18n system.", 
                fullDesc: "Implement i18n (internationalization) system.\nAt least 3 complete language translations.\nLanguage switcher in the UI.\nAll user-facing text must be translatable." 
            },
            { 
                type: "Minor", 
                title: "Right-to-left (RTL) support", 
                desc: "Arabic, Hebrew, etc. with layout mirroring.", 
                fullDesc: "Support for at least one RTL language (Arabic, Hebrew, etc.).\nComplete layout mirroring (not just text direction).\nRTL-specific UI adjustments where needed.\nSeamless switching between LTR and RTL." 
            },
            { 
                type: "Minor", 
                title: "Support for additional browsers", 
                desc: "Min 2 additional browsers (Firefox, Safari, etc.).", 
                fullDesc: "Full compatibility with at least 2 additional browsers (Firefox, Safari, Edge, etc.).\nTest and fix all features in each browser.\nDocument any browser-specific limitations.\nConsistent UI/UX across all supported browsers." 
            }
        ]
    },
    {
        title: "IV.3 User Management",
        modules: [
            { 
                type: "Major", 
                title: "Standard user management", 
                desc: "Profile, Avatar, Friends, Status.", 
                fullDesc: "Users can update their profile information.\nUsers can upload an avatar (with a default avatar if none provided).\nUsers can add other users as friends and see their online status.\nUsers have a profile page displaying their information." 
            },
            { 
                type: "Minor", 
                title: "Game statistics and match history", 
                desc: "Requires a game module. Wins/Losses, Leaderboard.", 
                fullDesc: "Track user game statistics (wins, losses, ranking, level, etc.).\nDisplay match history (1v1 games, dates, results, opponents).\nShow achievements and progression.\nLeaderboard integration.\n(Cannot claim without a functional game)." 
            },
            { 
                type: "Minor", 
                title: "Remote authentication", 
                desc: "OAuth 2.0 (Google, GitHub, 42, etc.).", 
                fullDesc: "Implement remote authentication with OAuth 2.0 (Google, GitHub, 42, etc.)." 
            },
            { 
                type: "Major", 
                title: "Advanced permissions system", 
                desc: "Admin/User/Guest roles, CRUD users.", 
                fullDesc: "View, edit, and delete users (CRUD).\nRoles management (admin, user, guest, moderator, etc.).\nDifferent views and actions based on user role." 
            },
            { 
                type: "Major", 
                title: "Organization system", 
                desc: "Create/Edit orgs, add/remove users.", 
                fullDesc: "Create, edit, and delete organizations.\nAdd users to organizations.\nRemove users from organizations.\nView organizations and allow users to perform specific actions within an organization (minimum: create, read, update)." 
            },
            { 
                type: "Minor", 
                title: "2FA system", 
                desc: "Two-Factor Authentication.", 
                fullDesc: "Implement a complete 2FA (Two-Factor Authentication) system for the users." 
            },
            { 
                type: "Minor", 
                title: "User activity analytics", 
                desc: "Insights dashboard.", 
                fullDesc: "User activity analytics and insights dashboard." 
            }
        ]
    },
    {
        title: "IV.4 Artificial Intelligence",
        modules: [
            { 
                type: "Major", 
                title: "AI Opponent", 
                desc: "Challenging AI, simulates human behavior. Requires Game.", 
                fullDesc: "The AI must be challenging and able to win occasionally.\nThe AI should simulate human-like behavior (not perfect play).\nIf you implement game customization options, the AI must be able to use them.\nYou must be able to explain your AI implementation during evaluation." 
            },
            { 
                type: "Major", 
                title: "RAG system", 
                desc: "Retrieval-Augmented Generation with large dataset.", 
                fullDesc: "Interact with a large dataset of information.\nUsers can ask questions and get relevant answers.\nImplement proper context retrieval and response generation." 
            },
            { 
                type: "Major", 
                title: "LLM system interface", 
                desc: "Generate text/images, streaming responses.", 
                fullDesc: "Generate text and/or images based on user input.\nHandle streaming responses properly.\nImplement error handling and rate limiting." 
            },
            { 
                type: "Major", 
                title: "Recommendation system", 
                desc: "Machine learning based on user behavior.", 
                fullDesc: "Personalized recommendations based on user behavior.\nCollaborative filtering or content-based filtering.\nContinuously improve recommendations over time." 
            },
            { 
                type: "Minor", 
                title: "Content moderation AI", 
                desc: "Auto moderation, warnings.", 
                fullDesc: "Content moderation AI (auto moderation, auto deletion, auto warning, etc.)" 
            },
            { 
                type: "Minor", 
                title: "Voice/speech integration", 
                desc: "For accessibility or interaction.", 
                fullDesc: "Voice/speech integration for accessibility or interaction." 
            },
            { 
                type: "Minor", 
                title: "Sentiment analysis", 
                desc: "For user-generated content.", 
                fullDesc: "Sentiment analysis for user-generated content." 
            },
            { 
                type: "Minor", 
                title: "Image recognition", 
                desc: "Tagging system.", 
                fullDesc: "Image recognition and tagging system." 
            }
        ]
    },
    {
        title: "IV.5 Cybersecurity",
        modules: [
            { 
                type: "Major", 
                title: "WAF/ModSecurity + HashiCorp Vault", 
                desc: "Strict WAF config and secure secrets management.", 
                fullDesc: "Configure strict ModSecurity/WAF.\nManage secrets in Vault (API keys, credentials, environment variables), encrypted and isolated." 
            }
        ]
    },
    {
        title: "IV.6 Gaming and user experience",
        modules: [
            { 
                type: "Major", 
                title: "Web-based game", 
                desc: "Real-time multiplayer (Pong, Chess, etc.).", 
                fullDesc: "The game can be real-time multiplayer (e.g., Pong, Chess, Tic-Tac-Toe, Card games, etc.).\nPlayers must be able to play live matches.\nThe game must have clear rules and win/loss conditions.\nThe game can be 2D or 3D." 
            },
            { 
                type: "Major", 
                title: "Remote players", 
                desc: "Two players on separate computers.", 
                fullDesc: "Enable two players on separate computers to play the same game in real-time.\nHandle network latency and disconnections gracefully.\nProvide a smooth user experience for remote gameplay.\nImplement reconnection logic." 
            },
            { 
                type: "Major", 
                title: "Multiplayer (>2 players)", 
                desc: "3+ players simultaneously.", 
                fullDesc: "Support for three or more players simultaneously.\nFair gameplay mechanics for all participants.\nProper synchronization across all clients.\n(Requires at least one game)." 
            },
            { 
                type: "Major", 
                title: "Add another game", 
                desc: "Distinct game with history and matchmaking.", 
                fullDesc: "Implement a second distinct game.\nTrack user history and statistics for this game.\nImplement a matchmaking system.\nMaintain performance and responsiveness.\n(Cannot claim without a functional first game)." 
            },
            { 
                type: "Major", 
                title: "Advanced 3D graphics", 
                desc: "Three.js or Babylon.js.",
                fullDesc: "Implement advanced 3D graphics using a library like Three.js or Babylon.js.\nCreate an immersive 3D environment.\nImplement advanced rendering techniques.\nEnsure smooth performance and user interaction."
            },
            { 
                type: "Minor", 
                title: "Advanced chat features", 
                desc: "Blocks, Invites, Game notifications.",
                fullDesc: "Ability to block users from messaging you.\nInvite users to play games directly from chat.\nGame/tournament notifications in chat.\nAccess to user profiles from chat interface.\nChat history persistence.\nTyping indicators and read receipts."
            },
            { 
                type: "Minor", 
                title: "Tournament system", 
                desc: "Brackets, matchmaking. Requires Game.",
                fullDesc: "Clear matchup order and bracket system.\nTrack who plays against whom.\nMatchmaking system for tournament participants.\nTournament registration and management."
            },
            { 
                type: "Minor", 
                title: "Game customization options", 
                desc: "Power-ups, maps, settings.",
                fullDesc: "Power-ups, attacks, or special abilities.\nDifferent maps or themes.\nCustomizable game settings.\nDefault options must be available."
            },
            { 
                type: "Minor", 
                title: "Gamification system", 
                desc: "Achievements, badges, leaderboards (Min 3 features).",
                fullDesc: "Implement at least 3 of the following: achievements, badges, leaderboards, XP/level system, daily challenges, rewards.\nSystem must be persistent (stored in database).\nVisual feedback for users (notifications, progress bars, etc.).\nClear rules and progression mechanics."
            },
            { 
                type: "Minor", 
                title: "Spectator mode", 
                desc: "Watch ongoing games.",
                fullDesc: "Allow users to watch ongoing games.\nReal-time updates for spectators.\nOptional: spectator chat."
            }
        ]
    },
    {
        title: "IV.7 Devops",
        modules: [
            { 
                type: "Major", 
                title: "ELK Stack", 
                desc: "Elasticsearch, Logstash, Kibana for logs.",
                fullDesc: "Elasticsearch to store and index logs.\nLogstash to collect and transform logs.\nKibana for visualization and dashboards.\nImplement log retention and archiving policies.\nSecure access to all components."
            },
            { 
                type: "Major", 
                title: "Prometheus & Grafana", 
                desc: "Monitoring and alerting.",
                fullDesc: "Set up Prometheus to collect metrics.\nConfigure exporters and integrations.\nCreate custom Grafana dashboards.\nSet up alerting rules.\nSecure access to Grafana."
            },
            { 
                type: "Major", 
                title: "Backend as microservices", 
                desc: "Loosely-coupled services.",
                fullDesc: "Design loosely-coupled services with clear interfaces.\nUse REST APIs or message queues for communication.\nEach service should have a single responsibility."
            },
            { 
                type: "Minor", 
                title: "Health check & status page", 
                desc: "With backups and disaster recovery.",
                fullDesc: "Health check and status page system with automated backups and disaster recovery procedures."
            }
        ]
    },
    {
        title: "IV.8 Data and Analytics",
        modules: [
            { 
                type: "Major", 
                title: "Advanced analytics dashboard", 
                desc: "Visualizations, export, filters.",
                fullDesc: "Interactive charts and graphs (line, bar, pie, etc.).\nReal-time data updates.\nExport functionality (PDF, CSV, etc.).\nCustomizable date ranges and filters."
            },
            { 
                type: "Minor", 
                title: "Data export and import", 
                desc: "JSON/CSV, bulk operations.",
                fullDesc: "Export data in multiple formats (JSON, CSV, XML, etc.).\nImport data with validation.\nBulk operations support."
            },
            { 
                type: "Minor", 
                title: "GDPR compliance features", 
                desc: "Data request, deletion, anonymization.",
                fullDesc: "Allow users to request their data.\nData deletion with confirmation.\nExport user data in a readable format.\nConfirmation emails for data operations."
            }
        ]
    },
    {
        title: "IV.9 Blockchain",
        modules: [
            { 
                type: "Major", 
                title: "Store scores on Blockchain", 
                desc: "Avalanche + Solidity.",
                fullDesc: "Use Avalanche and Solidity smart contracts on a test blockchain.\nImplement smart contracts to record, manage, and retrieve tournament scores.\nEnsure data integrity and immutability."
            },
            { 
                type: "Minor", 
                title: "ICP Backend", 
                desc: "Internet Computer Protocol (Incompatible with SSR).",
                fullDesc: "Use ICP (Internet Computer Protocol) for a backend that runs on a blockchain."
            }
        ]
    },
    {
        title: "IV.10 Modules of choice",
        modules: [
            { 
                type: "Major", 
                title: "Custom Major Module", 
                desc: "Substantial technical complexity. Requires justification.",
                fullDesc: "The module must be substantial and demonstrate technical complexity.\nYou must provide proper justification in your README.md explaining:\n- Why you chose this module.\n- What technical challenges it addresses.\n- How it adds value to your project.\n- Why it deserves Major module status."
            },
            { 
                type: "Minor", 
                title: "Custom Minor Module", 
                desc: "Demonstrates technical skill. Requires justification.",
                fullDesc: "Must still demonstrate technical skill and creativity.\nShould add meaningful value to your project.\nRequires justification in README.md."
            }
        ]
    }
];

const state = {
    selected: new Set(),
    expanded: new Set()
};

// Load from localStorage
function loadState() {
    const saved = localStorage.getItem('ft_transcendence_v19');
    if (saved) {
        state.selected = new Set(JSON.parse(saved));
    }
}

// Save to localStorage
function saveState() {
    localStorage.setItem('ft_transcendence_v19', JSON.stringify([...state.selected]));
}

// Reset function
function resetCalculator() {
    if(confirm('Clear all selections?')) {
        state.selected.clear();
        saveState();
        render();
    }
}

function getPoints(type) {
    return type === "Major" ? 2 : 1;
}

function calculateScore() {
    let score = 0;
    state.selected.forEach(id => {
        const [catIndex, modIndex] = id.split('-').map(Number);
        const mod = modulesData[catIndex].modules[modIndex];
        score += getPoints(mod.type);
    });
    return score;
}

function render() {
    const app = document.getElementById('app');
    const score = calculateScore();
    const isPassing = score >= 14;

    // Sticky Header
    let html = `
        <div class="score-sticky">
            <div class="flex items-center gap-4">
                <div>
                    <span class="score-text">Total Score: </span>
                    <span class="score-text ${isPassing ? 'score-success' : 'score-pending'}">${score} / 14</span>
                </div>
                <button onclick="resetCalculator()" class="text-xs text-gray-400 hover:text-red-500 underline ml-2">
                    Reset
                </button>
            </div>
            <div class="text-sm text-gray-500">
                ${isPassing ? '✅ Project Validated' : '⚠️ More points needed'}
            </div>
        </div>
    `;

    // Clarification / Info Block
    html += `
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r text-sm text-blue-900">
            <p class="font-bold mb-1">Point System</p>
            <p class="mb-2">You will need to earn <strong>14 points</strong> in total to complete your project. Each major module is worth <strong>2 points</strong>, and each minor module is worth <strong>1 point</strong>.</p>
            <p class="italic text-blue-800">Additionally, aiming for more than 14 points in total may be a good idea, especially if some modules aren’t validated during the evaluation.</p>
        </div>
    `;

    // Modules List
    modulesData.forEach((category, catIndex) => {
        html += `
            <div class="category">
                <div class="category-header">${category.title}</div>
                <div>
        `;

        category.modules.forEach((mod, modIndex) => {
            const id = `${catIndex}-${modIndex}`;
            const isSelected = state.selected.has(id);
            const isExpanded = state.expanded.has(id);
            
            html += `
                <div class="module-item ${isSelected ? 'selected' : ''} ${isExpanded ? 'expanded' : ''}" onclick="toggleExpand('${id}')">
                    <div class="flex-1">
                        <div class="module-header">
                            <div>
                                <div class="flex items-center gap-2">
                                    <span class="badge ${mod.type === 'Major' ? 'badge-major' : 'badge-minor'}">${mod.type} (+${getPoints(mod.type)})</span>
                                    <span class="font-semibold">${mod.title}</span>
                                </div>
                                <div class="module-desc">${mod.desc}</div>
                            </div>
                             <svg class="w-5 h-5 chevron mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                        ${isExpanded ? `<div class="module-full-desc">${mod.fullDesc}</div>` : ''}
                    </div>
                    <div class="ml-4" onclick="event.stopPropagation()">
                         <input type="checkbox" onchange="toggleSelect('${id}')" ${isSelected ? 'checked' : ''} class="h-6 w-6 text-green-600 rounded cursor-pointer">
                    </div>
                </div>
            `;
        });

        html += `</div></div>`;
    });

    // Footer with Star Request
    html += `
        <footer class="mt-12 mb-8 text-center border-t border-gray-200 pt-8">
            <div class="mb-6">
                <a href="https://github.com/asadiqui/ft_transcendence_score" target="_blank" class="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors text-sm font-medium">
                    <i class="fa-regular fa-star text-yellow-400"></i> Star on GitHub
                </a>
            </div>
            
            <p class="text-gray-500 mb-4 text-sm">Created by asadiqui</p>
            <div class="flex justify-center gap-6">
                <a href="https://linktr.ee/lmodir" target="_blank" class="text-gray-400 hover:text-green-600 transition-colors" title="Linktree">
                    <i class="fa-solid fa-link fa-xl"></i>
                </a>
                <a href="https://www.linkedin.com/in/asadiqui" target="_blank" class="text-gray-400 hover:text-blue-700 transition-colors" title="LinkedIn">
                    <i class="fa-brands fa-linkedin fa-xl"></i>
                </a>
                <a href="https://github.com/asadiqui" target="_blank" class="text-gray-400 hover:text-gray-900 transition-colors" title="GitHub">
                    <i class="fa-brands fa-github fa-xl"></i>
                </a>
            </div>
        </footer>
    `;

    app.innerHTML = html;
}

function toggleSelect(id) {
    if (state.selected.has(id)) {
        state.selected.delete(id);
    } else {
        state.selected.add(id);
    }
    saveState(); // Save on change
    render();
}

function toggleExpand(id) {
    if (state.expanded.has(id)) {
        state.expanded.delete(id);
    } else {
        state.expanded.add(id);
    }
    render();
}

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    if(!document.getElementById('app')) {
        const appDiv = document.createElement('div');
        appDiv.id = 'app';
        document.querySelector('.container').appendChild(appDiv);
    }
    loadState(); // Load data on init
    render();
});