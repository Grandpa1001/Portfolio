# Kamil Bandzwołek - Portfolio Website

A modern, responsive portfolio website showcasing professional experience in both Web3 development and banking technology solutions.

## 🌟 Features

- **Dual Industry Focus**: Switch between Web3/Crypto and Banking/Business profiles
- **Interactive Technology Showcase**: Dynamic technology icons with hover effects
- **Responsive Design**: Optimized for all device sizes
- **Modern UI/UX**: Glassmorphism effects and smooth animations
- **Company Timeline**: Visual representation of work experience with company logos
- **Project Portfolio**: Detailed project showcases with links and descriptions
- **Dark/Light Theme**: Theme switching capability

## 🚀 Live Demo

[View Live Portfolio](https://mgrgracz.netlify.app)

## 🛠️ Technologies Used

### Frontend
- **React 18.3.1** - Modern React with hooks
- **React Bootstrap** - UI component library
- **React Router DOM** - Client-side routing
- **React Icons** - Icon library
- **Typewriter Effect** - Animated text effects
- **CSS3** - Custom styling with CSS variables

### Development Tools
- **Create React App** - Development environment
- **ESLint** - Code linting
- **GitHub Pages** - Deployment platform

## 📁 Project Structure

```
src/
├── app/                    # Main app configuration
│   ├── App.js             # Root component
│   ├── App.css            # Global styles
│   └── routes.js          # Route definitions
├── components/            # Reusable components
│   ├── CompaniesWorkedWith/ # Company timeline component
│   ├── icons/             # Custom SVG icons
│   ├── industryswitch/    # Industry switcher
│   ├── socialicons/       # Social media icons
│   └── themetoggle/       # Theme switcher
├── contexts/              # React contexts
│   └── IndustryContext.js # Industry state management
├── pages/                 # Page components
│   ├── about/            # About page
│   ├── home/             # Home page
│   ├── landing/          # Landing page
│   └── portfolio/        # Portfolio page
├── content_option.js     # Content configuration
├── hooks/                # Custom hooks
└── index.css            # Global styles
```

## 🎯 Industry Profiles

### Web3/Crypto Profile
- **Focus**: Blockchain development, DeFi, NFT projects
- **Technologies**: Solidity, Web3.js, Ethers.js, React, Node.js
- **Projects**: Moon Flappy Birds (Web3 game), NFT Polska Collective

### Banking/Business Profile
- **Focus**: Ferryt platform development, process automation
- **Experience**: BGK, mBank, ING, BNP Paribas, Bluesoft, Pretius
- **Specializations**: BPMN, SQL, automation, team management

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
# or
yarn build
```

### Deployment

The project is configured for GitHub Pages deployment:

```bash
npm run deploy
# or
yarn deploy
```

## 🎨 Customization

### Adding New Technologies
Edit `src/content_option.js` to add new technologies to the skills section:

```javascript
technologies: [
  {
    name: "Technology Name",
    icon: "IconComponent",
    description: "Technology description"
  }
]
```

### Adding New Projects
Add projects to the portfolio section in `src/content_option.js`:

```javascript
portfolio: [
  {
    img: "/path/to/image",
    title: "Project Title",
    shortDescription: "Brief description",
    description: "Detailed description",
    link: "https://project-url.com"
  }
]
```

### Styling
- Global styles: `src/index.css`
- Component styles: Individual `.css` files in component directories
- CSS variables for theming: Defined in `:root` selector

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App
- `npm run deploy` - Deploys to GitHub Pages

## 📄 License

This project is private and proprietary.

## 👨‍💻 Author

**Kamil Bandzwołek**
- LinkedIn: [mgrgracz](https://linkedin.com/in/mgrgracz)
- GitHub: [Grandpa1001](https://github.com/Grandpa1001)
- Twitter: [@MgrGracz](https://twitter.com/MgrGracz)
- Email: mgrgracz@gmail.com

## 🙏 Acknowledgments

- React community for excellent documentation
- Bootstrap team for the UI framework
- All the open-source icon libraries used
- Companies and clients for the amazing projects

---

⭐ If you found this portfolio helpful, please give it a star!