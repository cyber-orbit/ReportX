# 🔒 ReportX - Professional Cybersecurity Report Generator

ReportX is a modern, user-friendly web application designed to streamline the creation of professional cybersecurity assessment reports. Built with React and Tailwind CSS, it offers an intuitive interface for security professionals to generate comprehensive reports in multiple formats.
<img width="1363" height="693" alt="Screenshot From 2026-01-25 12-52-33" src="https://github.com/user-attachments/assets/a95a815d-aab2-45fa-b147-aace20d8934a" />
<img width="1363" height="693" alt="Screenshot From 2026-01-25 12-52-22" src="https://github.com/user-attachments/assets/87c2df4e-a314-4470-9fae-ced1fa4bf32e" />

## ✨ Features

- **Multiple Report Types**
  - Penetration Testing Reports
  - Malware Detection Reports
  - Vulnerability Assessment Reports
  - Security Audit Reports

- **Flexible Export Formats**
  - Plain Text (.txt)
  - Markdown (.md)
  - HTML (.html)

- **Professional Templates**
  - Pre-formatted professional layouts
  - Severity level indicators
  - Comprehensive report sections

- **User-Friendly Interface**
  - Clean, modern dark-themed UI
  - Real-time preview
  - Easy-to-use form inputs

- **Export Options**
  - Download reports
  - Copy to clipboard
  - Print directly

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

#### On Linux/Mac:

```bash
# Make the install script executable
chmod +x install.sh

# Run installation
./install.sh
```

#### On Windows:

```batch
# Double-click install.bat or run in Command Prompt
install.bat
```

### Running the Application

#### On Linux/Mac:

```bash
# Make the start script executable
chmod +x start.sh

# Start the development server
./start.sh
```

#### On Windows:

```batch
# Double-click start.bat or run in Command Prompt
start.bat
```

The application will automatically open in your browser at `http://localhost:3000`

## 📦 Building for Production

#### On Linux/Mac:

```bash
chmod +x build.sh
./build.sh
```

#### On Windows:

```batch
build.bat
```

The production build will be created in the `build` folder.

## 🧹 Cleaning the Project

To remove all dependencies and build files:

#### On Linux/Mac:

```bash
chmod +x clean.sh
./clean.sh
```

#### On Windows:

```batch
clean.bat
```

## 📁 Project Structure

```
reportx/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/
│   │   └── ReportX.jsx     # Main component
│   ├── App.js              # App wrapper
│   ├── index.js            # Entry point
│   └── index.css           # Global styles
├── install.sh              # Linux/Mac installation script
├── install.bat             # Windows installation script
├── start.sh                # Linux/Mac start script
├── start.bat               # Windows start script
├── build.sh                # Linux/Mac build script
├── build.bat               # Windows build script
├── clean.sh                # Linux/Mac clean script
├── clean.bat               # Windows clean script
├── .gitignore              # Git ignore file
├── package.json            # Project dependencies
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
└── README.md               # This file
```

## 🎯 Usage Guide

1. **Select Report Type**: Choose from Penetration Testing, Malware Detection, Vulnerability Assessment, or Security Audit

2. **Fill in Report Details**:
   - Company Name
   - Client Name
   - Target System
   - Assessment Date
   - Assessor Name
   - Severity Level

3. **Complete Report Sections**:
   - Executive Summary
   - Scope of Assessment
   - Findings
   - Recommendations

4. **Choose Export Format**: Select between Text, Markdown, or HTML

5. **Preview and Export**: Review your report in the preview section and export using Download, Copy, or Print options

## 🛠️ Technologies Used

- **React 18** - UI Framework
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Create React App** - Build tooling

## 📝 Available Scripts

In the project directory, you can run:

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🎨 Customization

You can customize the application by:

- Modifying report templates in `src/components/ReportX.jsx`
- Adjusting styles in `tailwind.config.js`
- Adding new report types or export formats

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👥 Authors

Made with ❤️ by CYBER-ORBIT

## 🐛 Bug Reports

If you find a bug, please open an issue on the project repository.

## 💡 Feature Requests

Have an idea for a new feature? Open an issue and let us know!

---

**ReportX v1.0** - Professional Cybersecurity Report Generator
