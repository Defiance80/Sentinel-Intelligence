# CDC Sentinel Media Intelligence Platform
## Prototype Dashboard for CDC Division of Media Relations

---

# 1. Project Overview

The **CDC Sentinel Media Intelligence Platform** is a prototype concept
demonstrating a unified command dashboard capable of monitoring global
news, broadcast media, social conversations, and journalist engagement
relevant to public health communications.

The system is designed to meet and exceed the needs described in the
CDC Division of Media Relations solicitation.

Key goals:

- Real-time media monitoring
- Broadcast monitoring across all US DMA regions
- Journalist discovery and relationship management
- Media distribution tracking
- Analytics and reporting
- Historical media analysis

---

# 2. Tech Stack

Frontend
- Next.js
- React
- TailwindCSS
- ShadCN UI

Visualization
- Recharts
- Mapbox (for DMA map)

Backend
- Vercel serverless functions
- Mock APIs

State
- Zustand

Deployment
- GitHub
- Vercel

---

# 3. Repository Structure

cdc-media-intelligence/
│
├── app
│   ├── login
│   │    └── page.tsx
│   │
│   ├── dashboard
│   │    ├── page.tsx
│   │    ├── media-monitor
│   │    ├── analytics
│   │    ├── journalist-search
│   │    ├── distribution-tracking
│   │    ├── broadcast
│   │    ├── alerts
│   │    └── reports
│
├── components
│   ├── charts
│   ├── tables
│   ├── cards
│   ├── navigation
│
├── mock-data
│
└── api

---

# 4. Login Screen

Route

/login

Page content:

CDC Sentinel Media Intelligence Platform  
Division of Media Relations  
Office of Communications  

Demo Credentials

Username: cdc_admin  
Password: sentinel2026

Successful login redirects to:

/dashboard

---

# 5. Dashboard Layout

Top navigation
- CDC Sentinel Logo
- Global Search
- Notifications
- User profile

Sidebar

Dashboard  
Media Monitoring  
Topic Trends  
Journalist Intelligence  
Press Release Tracking  
Broadcast Monitoring  
Reports  
Alerts  
Settings

---

# 6. Dashboard Widgets

- Media Mentions Today
- Trending Public Health Topics
- Broadcast Mentions
- Journalist Engagement
- Sentiment Analysis
- Geo Distribution Map

---

# 7. Media Monitoring

Allows CDC to monitor news conversations globally.

Search filters:

- Geography
- Language
- Outlet type
- Date range
- Sentiment
- Audience reach

Results table:

Headline  
Outlet  
Author  
Location  
Audience reach  
Sentiment  
Published time

---

# 8. Broadcast Monitoring

Shows television and radio coverage across US DMA regions.

Map visualization:

US map with highlighted DMA regions showing broadcast mentions.

Table

Station  
DMA  
Topic  
Air time  
Audience estimate

---

# 9. Topic Trends

Charts:

Conversation volume over time  
Sentiment change  
Topic clusters  
Influencer amplification

---

# 10. Journalist Intelligence

Search journalists by topic.

Example search

"avian flu"

Results

Journalist  
Outlet  
Beat  
Audience reach  
Location

Users can add journalists to custom lists.

---

# 11. Media List Builder

Create lists such as

National Health Journalists  
Global Pandemic Reporters  
Regional Public Health Media

Each list stores:

Journalist  
Outlet  
Location  
Language  
Beat

---

# 12. Press Release Tracking

Shows engagement metrics.

Delivered  
Opened  
Clicked  
Stories generated

Table

Journalist  
Outlet  
Opened  
Clicked  
Coverage produced

---

# 13. Reports

Generate reports including:

Weekly media coverage  
Pandemic topic monitoring  
Global public health trends

Export formats

PDF  
CSV  
Shareable dashboard link

---

# 14. Alerts

Example alerts

Notify when topic spikes occur  
Notify when CDC sentiment drops  
Notify when broadcast mentions surge

---

# 15. Historical Archive

Search media coverage historically.

Example:

Search coverage back to 2015.

---

# 16. Foreign Language Coverage

Prototype includes monitoring of:

Spanish  
French  
Mandarin  
Arabic

Translation preview supported.

---

# 17. Innovation Layer

Demonstrate advanced capabilities such as

AI narrative detection  
Misinformation tracking  
Media velocity prediction  
Journalist engagement heatmaps

---

# 18. Deployment

Step 1  
Create GitHub repository

cdc-sentinel-media-intelligence

Step 2  
Push project to repository

Step 3  
Connect repository to Vercel

Step 4  
Enable automatic deploy

Example demo URL

https://cdc-sentinel.vercel.app

---

# 19. Prototype Purpose

This prototype demonstrates the concept of a unified media intelligence platform designed specifically for the CDC Division of Media Relations.

It is intended to illustrate how the system could function rather than serve as a fully operational SaaS platform.

---

# End of File
