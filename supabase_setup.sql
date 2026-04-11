-- ============================================================
-- ECOXCHANGE — SUPABASE DATABASE SETUP
-- Run this entire file in Supabase > SQL Editor > New Query
-- ============================================================

-- 1. USERS TABLE
-- (Extends Supabase's built-in auth.users table)
create table public.users (
  id uuid references auth.users on delete cascade not null primary key,
  full_name text not null,
  email text not null,
  whatsapp text,
  university text,
  role text default 'student' check (role in ('student', 'ambassador', 'admin')),
  is_ambassador boolean default false,
  is_active boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. LISTINGS TABLE
create table public.listings (
  id uuid default gen_random_uuid() primary key,
  seller_id uuid references public.users(id) on delete cascade not null,
  title text not null,
  description text,
  category text not null,
  price numeric(10,2) not null,
  condition text default 'good' check (condition in ('like_new', 'good', 'fair', 'old')),
  listing_type text default 'regular' check (listing_type in ('regular', 'featured')),
  photo_url text,
  status text default 'active' check (status in ('active', 'sold', 'pending', 'removed')),
  university text,
  pickup_point text,
  reuse_count integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. TRANSACTIONS TABLE
create table public.transactions (
  id uuid default gen_random_uuid() primary key,
  listing_id uuid references public.listings(id) not null,
  buyer_id uuid references public.users(id) not null,
  seller_id uuid references public.users(id) not null,
  ambassador_id uuid references public.users(id),
  sale_price numeric(10,2) not null,
  commission_pct numeric(5,2) default 10.00,
  commission_amt numeric(10,2),
  seller_payout numeric(10,2),
  payment_status text default 'pending' check (payment_status in ('pending', 'paid', 'failed', 'refunded')),
  razorpay_order_id text,
  razorpay_payment_id text,
  item_collected boolean default false,
  item_at_point boolean default false,
  buyer_collected boolean default false,
  deal_status text default 'initiated' check (deal_status in ('initiated', 'ambassador_assigned', 'collected', 'at_point', 'delivered', 'cancelled')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 4. AMBASSADOR TASKS TABLE
create table public.ambassador_tasks (
  id uuid default gen_random_uuid() primary key,
  transaction_id uuid references public.transactions(id) not null,
  ambassador_id uuid references public.users(id) not null,
  listing_id uuid references public.listings(id) not null,
  seller_name text,
  seller_whatsapp text,
  item_title text,
  pickup_location text,
  dropoff_point text,
  pickup_done boolean default false,
  dropoff_done boolean default false,
  buyer_notified boolean default false,
  task_status text default 'pending' check (task_status in ('pending', 'in_progress', 'completed', 'cancelled')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- ============================================================
-- ROW LEVEL SECURITY (RLS) — Controls who can see what
-- ============================================================

alter table public.users enable row level security;
alter table public.listings enable row level security;
alter table public.transactions enable row level security;
alter table public.ambassador_tasks enable row level security;

-- USERS policies
create policy "Users can view own profile"
  on public.users for select using (auth.uid() = id);

create policy "Users can insert own profile"
  on public.users for insert with check (auth.uid() = id);

create policy "Users can update own profile"
  on public.users for update using (auth.uid() = id);

-- LISTINGS policies
create policy "Anyone can view active listings"
  on public.listings for select using (status = 'active');

create policy "Sellers can insert own listings"
  on public.listings for insert with check (auth.uid() = seller_id);

create policy "Sellers can update own listings"
  on public.listings for update using (auth.uid() = seller_id);

-- TRANSACTIONS policies
create policy "Users can view own transactions"
  on public.transactions for select
  using (auth.uid() = buyer_id or auth.uid() = seller_id);

create policy "Buyers can create transactions"
  on public.transactions for insert with check (auth.uid() = buyer_id);

-- AMBASSADOR TASKS policies
create policy "Ambassadors can view assigned tasks"
  on public.ambassador_tasks for select using (auth.uid() = ambassador_id);

-- ============================================================
-- AUTO-CREATE USER PROFILE ON SIGNUP
-- This function triggers when someone signs up via Supabase Auth
-- ============================================================

create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.users (id, full_name, email)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', 'New User'),
    new.email
  );
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
