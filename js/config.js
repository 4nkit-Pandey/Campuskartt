// ============================================================
// ECOXCHANGE — Configuration File
// ============================================================
// STEP 1: Go to your Supabase project
// STEP 2: Click "Project Settings" (gear icon, bottom left)
// STEP 3: Click "API" in the sidebar
// STEP 4: Copy "Project URL" → paste below as SUPABASE_URL
// STEP 5: Copy "anon public" key → paste below as SUPABASE_ANON_KEY
// ============================================================

const SUPABASE_URL = 'https://edzicxebgtiosahshvgi.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkemljeGViZ3Rpb3NhaHNodmdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUwNDIxMzIsImV4cCI6MjA5MDYxODEzMn0._gV35IiY97ufGvHMGDEZHiT0zISIaugK8tk90IJiJDE';

// ============================================================
// CLOUDINARY — For photo uploads
// ============================================================
const CLOUDINARY_CLOUD_NAME = 'deevt6lle';
const CLOUDINARY_UPLOAD_PRESET = 'ecoxchange_unsigned';

// ============================================================
// RAZORPAY — Payment gateway
// To go live: replace with rzp_live_... key from Razorpay dashboard
// ============================================================
const RAZORPAY_KEY_ID = 'rzp_test_SZ2YHJzqSoFRb0';

// ============================================================
// Initialize Supabase client
// ============================================================
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ============================================================
// App Constants
// ============================================================
const COMMISSION_PCT = 10; // 10% commission

const ITEM_CATEGORIES = [
  { id: 'textbooks',  label: 'Textbooks & Notes',  icon: '📚', range: '₹200–₹1.5K',  sub: 'Textbooks · Class Notes · Lab Manuals' },
  { id: 'drafter',   label: 'Academic Tools',      icon: '📐', range: '₹500–₹4.5K',  sub: 'Drafter · Sheet Holder · Drawing Board' },
  { id: 'lab',       label: 'Lab Utilities',       icon: '🥼', range: '₹300–₹2K',   sub: 'Lab Coat · Lab Equipment · Safety Gear' },
  { id: 'electronics', label: 'Electronics',       icon: '⚡', range: '₹500–₹20K', sub: 'Calculator · Laptop · Accessories' },
  { id: 'hostel',    label: 'Hostel & PG',         icon: '🏠', range: '₹300–₹8K',  sub: 'Study Lamp · Table · Storage · Bedding' },
  { id: 'bicycle',   label: 'Bicycles & Transit',  icon: '🚲', range: '₹3K–₹15K',  sub: 'Cycle · Helmet · Lock' },
  { id: 'sports',    label: 'Sports & Rec',        icon: '🏏', range: '₹300–₹5K',  sub: 'Cricket · Badminton · Equipment' },
];

const CONDITION_LABELS = {
  like_new: 'Like New',
  good: 'Good',
  fair: 'Fair',
  old: 'Well Used',
};

// Helper: format price in Indian format
function formatPrice(amount) {
  return '₹' + Number(amount).toLocaleString('en-IN');
}

// Helper: get current user
async function getCurrentUser() {
  const { data: { user } } = await supabaseClient.auth.getUser();
  return user;
}

// Helper: redirect if not logged in
async function requireAuth() {
  const user = await getCurrentUser();
  if (!user) {
    window.location.href = 'login.html';
    return null;
  }
  return user;
}

// Helper: get user profile from public.users table
async function getUserProfile(userId) {
  const { data, error } = await supabaseClient
    .from('users')
    .select('*')
    .eq('id', userId)
    .single();
  return data;
}
