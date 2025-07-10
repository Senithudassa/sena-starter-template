# 🇱🇰 Sena Starter - ADHD-Friendly Sri Lankan Next.js Template  
![Sena Starter Demo](https://raw.githubusercontent.com/Senithudassa/sena-starter-template/main/public/sena-demo.gif)  
*Build culturally-grounded applications with ADHD-friendly workflows*

## 🧠 Features at a Glance

### 🌈 ADHD-Friendly Development
| Feature | Benefit |
|---------|---------|
| **Visual Error Highlighting** | Immediate feedback on mistakes |
| **Auto-Formatting on Save** | Consistent code without effort |
| **Focus-Enhanced UI** | Clear interactive states |
| **Custom ESLint Rules** | Prevents common mistakes |
| **Structured Layout** | Reduces cognitive load |

### 🇱🇰 Sri Lankan Elements
- Kandyan-inspired patterns
- Traditional color scheme (#0F4C81 blue, #D4AF37 gold)
- Sinhala typography support
- Culturally relevant components
- Localized content placeholders

## 🚀 Getting Started

### One-Command Installation
```bash
bash <(curl -fsSL https://raw.githubusercontent.com/Senithudassa/sena-starter-template/main/install.sh) my-project
```

### Manual Setup
1. Create new project:
```bash
npx sena-install my-project
```
2. Navigate to project:
```bash
cd my-project
```
3. Install dependencies:
```bash
./setup-project.sh
```
4. Start development:
```bash
npm run dev
```

## 🛠 Customization

### Sector-Specific Templates
```bash
./utils/customize-template.sh
```
Choose from:
1. **Education** (අධ්‍යාපන) - Assignment trackers, study planners
2. **E-commerce** (ඉලෙක්ට්‍රොනික වාණිජ) - Product cards, store templates
3. **Government** (රජය) - Service portals, information systems

### Component Customization
```jsx
// components/PrimaryButton.jsx
export default function PrimaryButton({ children }) {
  return (
    <button className="bg-[#8E354A] /* Ceylon Ruby */">
      {children} 
    </button>
  )
}
```

## 🎨 Design System

### Sri Lankan Color Palette
| Color | Hex | Usage |
|-------|-----|-------|
| Sri Lanka Blue | `#0F4C81` | Primary buttons, headings |
| Temple Gold | `#D4AF37` | Accents, borders |
| Ceylon Ruby | `#8E354A` | Secondary elements |
| Palm Green | `#4A6B3D` | Success states |
| Clay Red | `#B6452C` | Error states |

### Typography
```css
/* Use Sri Lankan-friendly fonts */
body {
  font-family: 'Noto Sans Sinhala', 'Iskoola Pota', Arial, sans-serif;
}

.sinhala-text {
  font-family: 'Iskoola Pota', serif;
  line-height: 1.8;
}
```

## 🧩 ADHD-Friendly Features Deep Dive

### Visual Focus Indicators
```jsx
/* Enhanced focus states */
button:focus {
  outline: 3px solid #D4AF37;
  outline-offset: 2px;
  box-shadow: 0 0 0 4px rgba(212, 175, 55, 0.4);
}
```

### Error Prevention System
```js
// .eslintrc.json
"no-restricted-properties": [
  "error",
  {
    "object": "console",
    "property": "logg",
    "message": "Did you mean 'log'? (Sri Lankan ESLint rule)"
  },
  {
    "object": "Math",
    "property": "random",
    "message": "Use crypto-safe random instead"
  }
]
```

## 📁 Project Structure
```
sena-starter/
├── components/       # ADHD-friendly UI components
├── pages/            # Next.js routes with Sri Lankan examples
├── prisma/           # Database schema
├── public/           # Static assets
├── utils/            # Utility scripts
├── .vscode/          # Optimized editor settings
├── .eslintrc.json    # Custom ESLint rules
└── setup-project.sh  # One-time setup script
```

## 🌐 Deployment

### Vercel Deployment
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FSenithudassa%2Fsena-starter-template)

### Manual Deployment
```bash
npm run build
vercel deploy
```

## 🤝 Contributing

We welcome contributions that enhance either:
1. **Sri Lankan Cultural Elements**  
   (Traditional patterns, Sinhala/Tamil support, local relevance)
2. **ADHD-Friendly Features**  
   (Visual clarity, focus management, error prevention)

### Contribution Workflow:
```bash
1. Fork the repository
2. Create feature branch (feat/sinhala-typography)
3. Commit changes with emoji prefixes:
   - 🇱🇰 for Sri Lankan elements
   - 🧠 for ADHD features
4. Submit pull request
```

## 📜 License
This project is licensed under the **Sri Lankan MIT License** - see [LICENSE](LICENSE) for details.

```
Copyright (c) 2023 Senith Udas

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

1. The above copyright notice and this permission notice shall be included in all
   copies or substantial portions of the Software.
   
2. Any modifications must retain prominent Sri Lankan cultural elements
   or ADHD-friendly features.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND...
```

---

**Crafted with 💛 in Sri Lanka**  
[සෙන - Sena Project](https://github.com/Senithudassa/sena-starter-template) • 
[සුභ උදෑසනක්!](https://sena-starter-template.vercel.app) • 
[Contribute](https://github.com/Senithudassa/sena-starter-template/issues)
