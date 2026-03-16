# CDC Sentinel Media Intelligence Platform

**A unified media intelligence command dashboard for the CDC Division of Media Relations**

---

## Overview

CDC Sentinel is a prototype media intelligence platform designed to provide the CDC's Division of Media Relations with comprehensive, real-time visibility into global news coverage, broadcast media, social conversations, and journalist engagement around public health topics.

This repository contains the concept documentation, technical architecture, and prototype codebase for demonstration purposes in response to CDC solicitation requirements.

## Key Capabilities

| Capability | Description |
|---|---|
| **Real-Time Media Monitoring** | Track global news, print, and online coverage with filtering by geography, language, outlet type, sentiment, and audience reach |
| **Broadcast Monitoring** | Monitor television and radio coverage across all 210 US DMA regions with map-based visualization |
| **Journalist Intelligence** | Discover, profile, and manage relationships with journalists by beat, outlet, and topic expertise |
| **Press Release Tracking** | Track distribution engagement — delivered, opened, clicked, and stories generated |
| **Topic Trends & Analytics** | Visualize conversation volume, sentiment shifts, topic clustering, and influencer amplification over time |
| **Historical Archive** | Search and analyze media coverage dating back to 2015 |
| **Foreign Language Monitoring** | Coverage in Spanish, French, Mandarin, and Arabic with translation preview |
| **AI Innovation Layer** | Narrative detection, misinformation tracking, media velocity prediction, and engagement heatmaps |

## Tech Stack

- **Frontend:** Next.js, React, TailwindCSS, ShadCN UI
- **Visualization:** Recharts, Mapbox
- **Backend:** Vercel serverless functions, mock APIs
- **State Management:** Zustand
- **Deployment:** GitHub → Vercel (automatic deploys)

## Getting Started

```bash
# Clone the repository
git clone https://github.com/Defiance80/Sentinel-Intelligence.git
cd Sentinel-Intelligence

# Install dependencies
npm install

# Run development server
npm run dev
```

## Demo Access

| Field | Value |
|---|---|
| URL | https://cdc-sentinel.vercel.app |
| Username | cdc_admin |
| Password | sentinel2026 |

## Documentation

- [CDC-SENTINEL-PROTOTYPE.md](./CDC-SENTINEL-PROTOTYPE.md) — Full prototype specification
- [CDC-CONCEPT-OVERVIEW.md](./CDC-CONCEPT-OVERVIEW.md) — Executive concept overview

## Project Status

🟡 **Prototype / Concept Phase** — This project demonstrates platform capabilities and architecture for evaluation purposes. It is not a production SaaS deployment.

## License

Proprietary. All rights reserved.
