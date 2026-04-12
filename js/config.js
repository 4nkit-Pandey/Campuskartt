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
  { id: 'textbooks', label: 'Textbooks & Notes', icon: '📚', range: '₹500–₹1.2K' },
  { id: 'drafter', label: 'Drafter Kits', icon: '📐', range: '₹1.5K–₹4.5K' },
  { id: 'bicycle', label: 'Bicycles', icon: '🚲', range: '₹5K–₹12K' },
  { id: 'chair', label: 'Study Chairs', icon: '🪑', range: '₹8K–₹18K' },
  { id: 'lamp', label: 'Desk Lamps', icon: '💡', range: '₹600–₹2.5K' },
  { id: 'calculator', label: 'Calculators', icon: '🧮', range: '₹800–₹3K' },
  { id: 'drawer', label: 'Drawer Units', icon: '🗄️', range: '₹800–₹2K' },
  { id: 'electronics', label: 'Electronics', icon: '⚡', range: '₹1K–₹15K' },
  { id: 'sports', label: 'Sports Gear', icon: '🏏', range: '₹500–₹4K' },
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
