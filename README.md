# EcoXchange — Campus Marketplace

One's Waste, Everyone's Treasure.

## What is EcoXchange?

EcoXchange is a managed campus marketplace for Indian university students. 
Students can safely buy and sell used goods — books, bicycles, electronics, 
study chairs, and more — with a Campus Ambassador handling physical pickup 
and an escrow-style payment system.

## How It Works

1. Seller posts a listing with photo and price
2. Buyer clicks "I Want This" and pays via Razorpay
3. Campus Ambassador collects the item from the seller
4. Item is placed at the campus pickup point
5. Buyer is notified and collects their item
6. EcoXchange keeps 8-12% commission, seller gets the rest

## Tech Stack

- **Frontend**: Vanilla HTML, CSS, JavaScript
- **Database**: Supabase (PostgreSQL)
- **Auth**: Supabase Auth
- **Payments**: Razorpay
- **Photo Storage**: Cloudinary
- **Hosting**: Vercel

## Pages

| Page | Path | Description |
|------|------|-------------|
| Login / Register | `/app/login.html` | Student sign in and registration |
| Browse Listings | `/app/browse.html` | Browse + filter campus listings |
| Post a Listing | `/app/post.html` | Sell your item |
| Item Detail | `/app/listing.html?id=...` | View item + buy |
| Dashboard | `/app/dashboard.html` | My listings, purchases, profile |

## Setup

1. Clone this repo
2. Open `js/config.js` and fill in your Supabase URL and anon key
3. Run `supabase_setup.sql` in your Supabase SQL Editor
4. Open with Live Server (VS Code extension)

## Brand

- **Colors**: Deep forest green `#0D3D2B`, Bright green `#2E9E6B`, Cream `#F5F0E8`
- **Fonts**: Playfair Display (headings), DM Sans (body)
- **Tagline**: *"One's Waste, Everyone's Treasure."*
