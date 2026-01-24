import React, { useState } from 'react';
import {
  FileText,
  Download,
  Shield,
  Bug,
  AlertTriangle,
  Lock,
  FileCode,
  Printer,
  Mail,
  Copy,
  Check
} from 'lucide-react';

export default function ReportX() {
  const [reportType, setReportType] = useState('penetration');
  const [exportFormat, setExportFormat] = useState('txt');
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState({
    clientName: '',
    assessmentDate: '',
    assessor: '',
    scope: '',
    findings: '',
    severity: 'medium',
    recommendations: '',
    executiveSummary: '',
    companyName: '',
    targetSystem: ''
  });

  const reportTypes = {
    penetration: {
      name: 'Penetration Testing',
      icon: Shield,
      color: {
        border: 'border-blue-500',
        bg: 'bg-blue-500/20',
        text: 'text-blue-400',
        gradient: 'from-blue-500/20 to-blue-600/10'
      }
    },
    malware: {
      name: 'Malware Detection',
      icon: Bug,
      color: {
        border: 'border-red-500',
        bg: 'bg-red-500/20',
        text: 'text-red-400',
        gradient: 'from-red-500/20 to-red-600/10'
      }
    },
    vulnerability: {
      name: 'Vulnerability Assessment',
      icon: AlertTriangle,
      color: {
        border: 'border-yellow-500',
        bg: 'bg-yellow-500/20',
        text: 'text-yellow-400',
        gradient: 'from-yellow-500/20 to-yellow-600/10'
      }
    },
    security: {
      name: 'Security Audit',
      icon: Lock,
      color: {
        border: 'border-green-500',
        bg: 'bg-green-500/20',
        text: 'text-green-400',
        gradient: 'from-green-500/20 to-green-600/10'
      }
    }
  };

  const exportFormats = {
    txt: { name: 'Text', icon: FileText, ext: 'txt' },
    md: { name: 'Markdown', icon: FileCode, ext: 'md' },
    html: { name: 'HTML', icon: FileCode, ext: 'html' }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateTextReport = () => {
    return `
═══════════════════════════════════════════════════════
              CYBERSECURITY ASSESSMENT REPORT
                      ReportX v1.0
═══════════════════════════════════════════════════════

REPORT INFORMATION
───────────────────────────────────────────────────────
Report Type         : ${reportTypes[reportType].name}
Company Name        : ${formData.companyName || 'N/A'}
Client Name         : ${formData.clientName || 'N/A'}
Target System       : ${formData.targetSystem || 'N/A'}
Assessment Date     : ${formData.assessmentDate || 'N/A'}
Assessor            : ${formData.assessor || 'N/A'}
Severity Level      : ${formData.severity.toUpperCase()}

═══════════════════════════════════════════════════════
EXECUTIVE SUMMARY
═══════════════════════════════════════════════════════
${formData.executiveSummary || 'No executive summary provided.'}

═══════════════════════════════════════════════════════
SCOPE OF ASSESSMENT
═══════════════════════════════════════════════════════
${formData.scope || 'No scope defined.'}

═══════════════════════════════════════════════════════
FINDINGS
═══════════════════════════════════════════════════════
${formData.findings || 'No findings recorded.'}

═══════════════════════════════════════════════════════
RECOMMENDATIONS
═══════════════════════════════════════════════════════
${formData.recommendations || 'No recommendations provided.'}

═══════════════════════════════════════════════════════
CONCLUSION
═══════════════════════════════════════════════════════
This ${reportTypes[reportType].name.toLowerCase()} was conducted on
${formData.assessmentDate || '[Date]'} for ${formData.companyName || '[Company]'}.
All identified issues should be remediated according to their severity
priority to maintain a robust security posture.

═══════════════════════════════════════════════════════
Report Generated by ReportX : ${new Date().toLocaleString()}
Confidential and Proprietary Information
═══════════════════════════════════════════════════════
`.trim();
  };

  const generateMarkdownReport = () => {
    return `# Cybersecurity Assessment Report
## ReportX v1.0

---

## Report Information

- **Report Type:** ${reportTypes[reportType].name}
- **Company Name:** ${formData.companyName || 'N/A'}
- **Client Name:** ${formData.clientName || 'N/A'}
- **Target System:** ${formData.targetSystem || 'N/A'}
- **Assessment Date:** ${formData.assessmentDate || 'N/A'}
- **Assessor:** ${formData.assessor || 'N/A'}
- **Severity Level:** ${formData.severity.toUpperCase()}

---

## Executive Summary

${formData.executiveSummary || 'No executive summary provided.'}

---

## Scope of Assessment

${formData.scope || 'No scope defined.'}

---

## Findings

${formData.findings || 'No findings recorded.'}

---

## Recommendations

${formData.recommendations || 'No recommendations provided.'}

---

## Conclusion

This ${reportTypes[reportType].name.toLowerCase()} was conducted on ${formData.assessmentDate || '[Date]'} for ${formData.companyName || '[Company]'}.
All identified issues should be remediated according to their severity priority to maintain a robust security posture.

---

**Report Generated by ReportX:** ${new Date().toLocaleString()}  
*Confidential and Proprietary Information*
`;
  };

  const generateHTMLReport = () => {
    const color = reportTypes[reportType].color;
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ReportX - ${reportTypes[reportType].name}</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            line-height: 1.6; 
            color: #333; 
            background: #f5f5f5; 
            padding: 20px;
        }
        .container { 
            max-width: 900px; 
            margin: 0 auto; 
            background: white; 
            padding: 40px; 
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
            border-radius: 8px;
        }
        .header { 
            text-align: center; 
            border-bottom: 3px solid #0ea5e9; 
            padding-bottom: 20px; 
            margin-bottom: 30px;
        }
        .header h1 { 
            color: #0ea5e9; 
            font-size: 32px; 
            margin-bottom: 5px;
        }
        .header h2 { 
            color: #666; 
            font-size: 18px; 
            font-weight: normal;
        }
        .info-grid { 
            display: grid; 
            grid-template-columns: 1fr 1fr; 
            gap: 15px; 
            margin: 30px 0; 
            padding: 20px; 
            background: #f9fafb; 
            border-radius: 6px;
        }
        .info-item { margin-bottom: 10px; }
        .info-label { 
            font-weight: bold; 
            color: #0ea5e9; 
            display: inline-block; 
            width: 150px;
        }
        .section { 
            margin: 30px 0; 
            padding: 25px; 
            border-left: 4px solid #0ea5e9; 
            background: #f9fafb;
            border-radius: 4px;
        }
        .section h3 { 
            color: #0ea5e9; 
            margin-bottom: 15px; 
            font-size: 22px;
        }
        .section p { 
            color: #555; 
            white-space: pre-wrap;
        }
        .severity { 
            display: inline-block; 
            padding: 5px 15px; 
            border-radius: 20px; 
            font-weight: bold; 
            text-transform: uppercase;
        }
        .severity-low { background: #dcfce7; color: #166534; }
        .severity-medium { background: #fef3c7; color: #92400e; }
        .severity-high { background: #fee2e2; color: #991b1b; }
        .severity-critical { background: #fecaca; color: #7f1d1d; }
        .footer { 
            text-align: center; 
            margin-top: 40px; 
            padding-top: 20px; 
            border-top: 2px solid #e5e7eb; 
            color: #666; 
            font-size: 14px;
        }
        @media print {
            body { background: white; padding: 0; }
            .container { box-shadow: none; }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🔒 ReportX</h1>
            <h2>Cybersecurity Assessment Report v1.0</h2>
        </div>

        <div class="info-grid">
            <div class="info-item">
                <span class="info-label">Report Type:</span> ${reportTypes[reportType].name}
            </div>
            <div class="info-item">
                <span class="info-label">Company:</span> ${formData.companyName || 'N/A'}
            </div>
            <div class="info-item">
                <span class="info-label">Client:</span> ${formData.clientName || 'N/A'}
            </div>
            <div class="info-item">
                <span class="info-label">Target System:</span> ${formData.targetSystem || 'N/A'}
            </div>
            <div class="info-item">
                <span class="info-label">Date:</span> ${formData.assessmentDate || 'N/A'}
            </div>
            <div class="info-item">
                <span class="info-label">Assessor:</span> ${formData.assessor || 'N/A'}
            </div>
            <div class="info-item">
                <span class="info-label">Severity:</span> 
                <span class="severity severity-${formData.severity}">${formData.severity}</span>
            </div>
        </div>

        <div class="section">
            <h3>📋 Executive Summary</h3>
            <p>${formData.executiveSummary || 'No executive summary provided.'}</p>
        </div>

        <div class="section">
            <h3>🎯 Scope of Assessment</h3>
            <p>${formData.scope || 'No scope defined.'}</p>
        </div>

        <div class="section">
            <h3>🔍 Findings</h3>
            <p>${formData.findings || 'No findings recorded.'}</p>
        </div>

        <div class="section">
            <h3>💡 Recommendations</h3>
            <p>${formData.recommendations || 'No recommendations provided.'}</p>
        </div>

        <div class="section">
            <h3>✅ Conclusion</h3>
            <p>This ${reportTypes[reportType].name.toLowerCase()} was conducted on ${formData.assessmentDate || '[Date]'} for ${formData.companyName || '[Company]'}. All identified issues should be remediated according to their severity priority to maintain a robust security posture.</p>
        </div>

        <div class="footer">
            <p><strong>Report Generated by ReportX</strong></p>
            <p>${new Date().toLocaleString()}</p>
            <p style="margin-top: 10px; font-style: italic;">Confidential and Proprietary Information</p>
        </div>
    </div>
</body>
</html>`;
  };

  const generateReport = () => {
    switch (exportFormat) {
      case 'md':
        return generateMarkdownReport();
      case 'html':
        return generateHTMLReport();
      default:
        return generateTextReport();
    }
  };

  const downloadReport = () => {
    const content = generateReport();
    const mimeTypes = {
      txt: 'text/plain',
      md: 'text/markdown',
      html: 'text/html'
    };
    
    const blob = new Blob([content], { type: mimeTypes[exportFormat] });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ReportX_${reportType}_${Date.now()}.${exportFormats[exportFormat].ext}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateReport());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const printReport = () => {
    const content = generateReport();
    const printWindow = window.open('', '', 'width=800,height=600');
    printWindow.document.write(`<pre style="font-family: monospace; white-space: pre-wrap;">${content}</pre>`);
    printWindow.document.close();
    printWindow.print();
  };

  const ActiveIcon = reportTypes[reportType].icon;
  const inputClass = "w-full px-4 py-2 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        {/* HEADER WITH LOGO */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="bg-gradient-to-br from-cyan-400 to-blue-500 p-3 rounded-xl shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              ReportX
            </h1>
          </div>
          <p className="text-gray-400 text-lg font-medium">Professional Cybersecurity Report Generator</p>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl p-6 md:p-8">

          {/* REPORT TYPE SELECTOR */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-cyan-400" />
              Select Report Type
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {Object.entries(reportTypes).map(
                ([key, { name, icon: Icon, color }]) => (
                  <button
                    key={key}
                    onClick={() => setReportType(key)}
                    className={`group p-4 rounded-xl border-2 transition-all transform hover:scale-105 ${
                        reportType === key
                          ? `${color.border} bg-gradient-to-br ${color.gradient} shadow-lg`
                          : 'border-gray-600 bg-gray-700/50 hover:border-gray-500'
                      }`}
                  >
                    <Icon
                      className={`w-7 h-7 mx-auto mb-2 transition-transform group-hover:scale-110 ${
                        reportType === key ? color.text : 'text-gray-400'
                      }`}
                    />
                    <p className={`text-sm font-semibold ${reportType === key ? 'text-white' : 'text-gray-300'}`}>
                      {name}
                    </p>
                  </button>
                )
              )}
            </div>
          </div>

          {/* FORM */}
          <div className="bg-gradient-to-br from-gray-700 to-gray-750 rounded-xl p-6 mb-6 border border-gray-600">
            <div className="flex items-center gap-2 mb-6">
              <ActiveIcon className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">
                {reportTypes[reportType].name}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Company Name</label>
                <input
                  name="companyName"
                  placeholder="Enter company name"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Client Name</label>
                <input
                  name="clientName"
                  placeholder="Enter client name"
                  value={formData.clientName}
                  onChange={handleInputChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Target System</label>
                <input
                  name="targetSystem"
                  placeholder="e.g., Web Application, Network"
                  value={formData.targetSystem}
                  onChange={handleInputChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Assessment Date</label>
                <input
                  type="date"
                  name="assessmentDate"
                  value={formData.assessmentDate}
                  onChange={handleInputChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Assessor Name</label>
                <input
                  name="assessor"
                  placeholder="Your name"
                  value={formData.assessor}
                  onChange={handleInputChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Severity Level</label>
                <select
                  name="severity"
                  value={formData.severity}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-600 border border-gray-500 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all cursor-pointer"
                >
                  <option value="low" className="bg-gray-700">🟢 Low</option>
                  <option value="medium" className="bg-gray-700">🟡 Medium</option>
                  <option value="high" className="bg-gray-700">🟠 High</option>
                  <option value="critical" className="bg-gray-700">🔴 Critical</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { field: 'executiveSummary', label: 'Executive Summary', rows: 3 },
                { field: 'scope', label: 'Scope of Assessment', rows: 3 },
                { field: 'findings', label: 'Findings', rows: 4 },
                { field: 'recommendations', label: 'Recommendations', rows: 4 }
              ].map(({ field, label, rows }) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
                  <textarea
                    name={field}
                    rows={rows}
                    value={formData[field]}
                    onChange={handleInputChange}
                    placeholder={`Enter ${label.toLowerCase()}...`}
                    className={`${inputClass} resize-none`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* EXPORT FORMAT SELECTOR */}
          <div className="bg-gray-700 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Download className="w-5 h-5 text-cyan-400" />
              Export Format
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {Object.entries(exportFormats).map(([key, { name, icon: Icon }]) => (
                <button
                  key={key}
                  onClick={() => setExportFormat(key)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    exportFormat === key
                      ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400'
                      : 'border-gray-600 bg-gray-600/50 text-gray-300 hover:border-gray-500'
                  }`}
                >
                  <Icon className="w-6 h-6 mx-auto mb-2" />
                  <p className="text-sm font-semibold">{name}</p>
                </button>
              ))}
            </div>
          </div>

          {/* PREVIEW */}
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-4 mb-6">
            <h3 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              PREVIEW ({exportFormats[exportFormat].name})
            </h3>
            <div className="bg-gray-950 rounded-lg p-4 max-h-80 overflow-auto">
              <pre className="text-xs text-gray-300 whitespace-pre-wrap font-mono">
                {generateReport()}
              </pre>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="grid md:grid-cols-3 gap-3">
            <button
              onClick={downloadReport}
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 py-3 rounded-lg font-semibold text-white flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg"
            >
              <Download className="w-5 h-5" />
              Download Report
            </button>
            <button
              onClick={copyToClipboard}
              className="bg-gray-700 hover:bg-gray-600 py-3 rounded-lg font-semibold text-white flex items-center justify-center gap-2 transition-all border border-gray-600"
            >
              {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              {copied ? 'Copied!' : 'Copy to Clipboard'}
            </button>
            <button
              onClick={printReport}
              className="bg-gray-700 hover:bg-gray-600 py-3 rounded-lg font-semibold text-white flex items-center justify-center gap-2 transition-all border border-gray-600"
            >
              <Printer className="w-5 h-5" />
              Print Report
            </button>
          </div>

        </div>

        {/* FOOTER */}
        <div className="text-center mt-6 text-gray-500 text-sm">
          <p>ReportX v1.0 - Professional Cybersecurity Report Generator</p>
          <p className="mt-1">Made with ❤️ by cybersecurity professionals</p>
        </div>
      </div>
    </div>
  );
}
