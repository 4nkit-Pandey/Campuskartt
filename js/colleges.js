/**
 * Campus Kartt — College Configuration
 * =====================================
 * Add a new college by appending an entry to COLLEGES.
 * Each college has:
 *   id        — unique slug used in URL param ?college=<id>
 *   name      — full official name
 *   shortName — abbreviation shown in UI
 *   color     — primary brand color (hex)
 *   appUrl    — URL of the college-specific marketplace
 *   heroImage — path to campus hero image (for browse page)
 *   loginBg   — path to campus image for login left panel
 *   logoUrl   — college logo or crest (optional)
 *   tagline   — one-line description shown on selector card
 *   location  — city, state
 */

const COLLEGES = [
  {
    id: 'dtu',
    name: 'Delhi Technological University',
    shortName: 'DTU',
    color: '#CC0000',
    appUrl: '/app/browse.html',           // Current site IS the DTU site
    heroImage: '/static/images/dtu-oat.jpg',
    loginBg: '/static/images/dtu-library.jpg',
    tagline: 'Engineering excellence since 1941. Trade academic equipment within the DTU community.',
    location: 'Rohini, Delhi',
    studentCount: '10,000+',
  },
  {
    id: 'bpit',
    name: 'Bhagwan Parshuram Institute of Technology',
    shortName: 'BPIT',
    color: '#1565C0',
    appUrl: 'https://bpit.campuskartt.com',  // Future BPIT subdomain
    heroImage: '/static/images/bpit-main.jpg',
    loginBg: '/static/images/bpit-campus.jpg',
    tagline: 'Quality technical education for Delhi students. Buy and sell academic gear within the BPIT community.',
    location: 'Rohini, Delhi',
    studentCount: '3,000+',
  },

  /* ── TEMPLATE: Add future colleges below ──────────────────────────────────
  {
    id: 'nsut',
    name: 'Netaji Subhas University of Technology',
    shortName: 'NSUT',
    color: '#1B5E20',
    appUrl: 'https://nsut.campuskartt.com',
    heroImage: '/static/images/nsut-oat.jpg',
    loginBg: '/static/images/nsut-library.jpg',
    tagline: '',
    location: 'Dwarka, Delhi',
    studentCount: '7,000+',
  },
  ──────────────────────────────────────────────────────────────────────────── */
];

/**
 * Get the active college object.
 * Priority: URL param → localStorage → default (first college)
 */
function getActiveCollege() {
  const params = new URLSearchParams(window.location.search);
  const paramId = params.get('college');
  if (paramId) {
    const found = COLLEGES.find(c => c.id === paramId);
    if (found) { localStorage.setItem('ck_college', found.id); return found; }
  }
  const savedId = localStorage.getItem('ck_college');
  if (savedId) {
    const found = COLLEGES.find(c => c.id === savedId);
    if (found) return found;
  }
  return COLLEGES[0]; // Default to first (DTU)
}

/**
 * Switch to a different college.
 * Redirects to that college's appUrl.
 */
function switchCollege(collegeId) {
  const college = COLLEGES.find(c => c.id === collegeId);
  if (!college) return;
  localStorage.setItem('ck_college', college.id);
  window.location.href = college.appUrl;
}
