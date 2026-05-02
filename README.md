# TechBridge - Hardware as a Service (HaaS)

TechBridge is a modern, enterprise-grade hardware subscription platform designed for the Egyptian business community. It allows companies to equip their teams with the latest technology (Laptops, Workstations, Custom PCs) through a flexible **OpEx** model, eliminating high upfront capital expenditures.

## 🚀 Key Features

- **🌐 Full Internationalization (i18n)**: Seamlessly toggle between English and professional Arabic.
- **↔️ RTL Support**: Complete Right-to-Left layout mirroring for the Arabic version.
- **🛣️ Multi-Page Routing**: Dedicated routes for Home, Terms of Service, and Privacy Policy using `react-router-dom`.
- **📱 Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
- **⚡ Performance & Animation**: Built with Vite for speed and Framer Motion for smooth, scroll-driven UI animations.
- **🛠️ Service Guarantee**: Highlights local service benefits including a 4-hour hardware replacement guarantee in Cairo.

## 🛠️ Tech Stack

- **React 19** - UI Framework
- **TypeScript** - Type safety and maintainability
- **react-router-dom** - Client-side routing
- **i18next & react-i18next** - Localization and translation management
- **Tailwind CSS** - Utility-first styling with logical property support
- **Framer Motion** - High-quality UI animations
- **Lucide React** - Icon library

## 🏗️ Project Structure

```text
TechBridge/
├── src/
│   ├── components/
│   │   ├── sections/      # Modular page sections (Hero, Catalog, Contact, etc.)
│   │   └── ui/            # Reusable UI primitives (Buttons, Cards, WhatsApp Button)
│   ├── locales/           # English and Arabic translation dictionaries (JSON)
│   ├── pages/             # Page-level components (Home, Terms, Privacy)
│   ├── lib/               # Utility functions (Tailwind merging, etc.)
│   ├── App.tsx            # Main Router and Application entry
│   ├── i18n.ts            # Internationalization configuration
│   └── main.tsx           # React DOM hydration
├── public/                # Static assets (Logos, Icons)
└── README.md              # Project documentation
```

## 📦 Installation & Development

### Prerequisites
- Node.js (Latest LTS recommended)
- npm or yarn

### Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 📄 Legal Pages
The platform includes dedicated localized pages for:
- **Terms of Service** (`/terms`): Outlining the HaaS subscription model and hardware responsibilities.
- **Privacy Policy** (`/privacy`): Detailing data collection and business information protection.

## 🤝 Contact & Support

For inquiries or custom hardware proposals:
- **Email**: [info@techbridge-eg.com](mailto:info@techbridge-eg.com)
- **Phone**: +20 100 807 8769
- **WhatsApp**: [Chat with an Expert](https://wa.me/201008078769)

---
*Private - All rights reserved © TechBridge Egypt*
