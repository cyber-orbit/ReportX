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
  Copy,
  Check,
  Upload,
  Image,
  Database,
  CheckCircle,
  XCircle,
  Clock,
  Users,
  BookOpen,
  Zap,
  Target,
  TrendingUp,
  FileWarning,
  Settings,
  Eye,
  EyeOff
} from 'lucide-react';

export default function ReportX() {
  const [reportType, setReportType] = useState('penetration');
  const [exportFormat, setExportFormat] = useState('txt');
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('basic');
  const [showAdvanced, setShowAdvanced] = useState(false);

  const [formData, setFormData] = useState({
    // Basic Information
    clientName: '',
    assessmentDate: '',
    assessor: '',
    scope: '',
    findings: '',
    severity: 'medium',
    recommendations: '',
    executiveSummary: '',
    companyName: '',
    targetSystem: '',
    
    // Advanced Fields
    engagementId: '',
    projectManager: '',
    technicalLead: '',
    engagementType: 'internal',
    assessmentScope: '',
    exclusions: '',
    
    // Asset Management
    assetInventory: '',
    criticalAssets: '',
    networkSegments: '',
    
    // Vulnerability Details
    vulnerabilityId: '',
    cvssScore: '',
    cveId: '',
    cweId: '',
    owaspCategory: '',
    mitreAttack: '',
    
    // Compliance Framework
    iso27001: false,
    nist: false,
    pciDss: false,
    soc2: false,
    gdpr: false,
    hipaa: false,
    
    // Evidence
    screenshots: '',
    logFiles: '',
    pocArtifacts: '',
    
    // Risk Assessment
    likelihood: 'medium',
    impact: 'medium',
    riskRating: '',
    businessImpact: '',
    affectedSystems: '',
    
    // Remediation
    remediationPriority: 'medium',
    remediationEffort: 'medium',
    remediationSteps: '',
    remediationTimeline: '',
    remediationOwner: '',
    validationSteps: '',
    
    // AI-Assisted Fields
    aiTechnicalDescription: '',
    aiExecutiveSummary: '',
    aiBusinessImpact: '',
    aiRemediationGuidance: '',
    
    // Access Control
    reportClassification: 'confidential',
    accessLevel: 'restricted',
    distributionList: '',
    
    // Integration
    scannerIntegration: '',
    ticketingSystem: '',
    ticketId: '',
    
    // Metadata
    reportVersion: '1.0',
    lastModified: new Date().toISOString(),
    reportStatus: 'draft'
  });

  const reportTypes = {
    penetration: {
      name: 'Penetration Testing',
      icon: Shield,
      description: 'Full-spectrum security testing with attack simulation',
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
      description: 'Threat analysis and malicious code identification',
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
      description: 'Systematic security weakness identification and risk scoring',
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
      description: 'Compliance-focused security posture evaluation',
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
    html: { name: 'HTML', icon: FileCode, ext: 'html' },
    pdf: { name: 'PDF', icon: FileText, ext: 'pdf' },
    docx: { name: 'DOCX', icon: FileText, ext: 'docx' }
  };

  const complianceFrameworks = [
    { id: 'iso27001', name: 'ISO 27001', icon: CheckCircle },
    { id: 'nist', name: 'NIST', icon: Shield },
    { id: 'pciDss', name: 'PCI DSS', icon: Lock },
    { id: 'soc2', name: 'SOC 2', icon: FileWarning },
    { id: 'gdpr', name: 'GDPR', icon: Users },
    { id: 'hipaa', name: 'HIPAA', icon: BookOpen }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value,
      lastModified: new Date().toISOString()
    }));
  };

  const calculateRiskRating = () => {
    const likelihoodMap = { low: 1, medium: 2, high: 3, critical: 4 };
    const impactMap = { low: 1, medium: 2, high: 3, critical: 4 };
    
    const lValue = likelihoodMap[formData.likelihood] || 2;
    const iValue = impactMap[formData.impact] || 2;
    const score = lValue * iValue;
    
    if (score >= 12) return 'Critical';
    if (score >= 9) return 'High';
    if (score >= 6) return 'Medium';
    return 'Low';
  };

  const getActiveCompliance = () => {
    return complianceFrameworks
      .filter(fw => formData[fw.id])
      .map(fw => fw.name)
      .join(', ') || 'None';
  };

  const generateTextReport = () => {
    const riskRating = calculateRiskRating();
    const compliance = getActiveCompliance();
    
    return `
═══════════════════════════════════════════════════════════════════════════
              COMPREHENSIVE CYBERSECURITY ASSESSMENT REPORT
                            ReportX v1.0
════════════════════════════════════════════════════════════════════════====

REPORT CLASSIFICATION: ${formData.reportClassification.toUpperCase()}
ACCESS LEVEL: ${formData.accessLevel.toUpperCase()}
REPORT STATUS: ${formData.reportStatus.toUpperCase()}

═══════════════════════════════════════════════════════════════════════════
ENGAGEMENT INFORMATION
═══════════════════════════════════════════════════════════════════════════
Engagement ID        : ${formData.engagementId || 'N/A'}
Report Type          : ${reportTypes[reportType].name}
Company Name         : ${formData.companyName || 'N/A'}
Client Name          : ${formData.clientName || 'N/A'}
Assessment Date      : ${formData.assessmentDate || 'N/A'}
Engagement Type      : ${formData.engagementType.toUpperCase()}

ASSESSMENT TEAM
───────────────────────────────────────────────────────────────────────────
Project Manager      : ${formData.projectManager || 'N/A'}
Technical Lead       : ${formData.technicalLead || 'N/A'}
Primary Assessor     : ${formData.assessor || 'N/A'}

═══════════════════════════════════════════════════════════════════════════
SCOPE & ASSETS
═══════════════════════════════════════════════════════════════════════════
Target System(s)     : ${formData.targetSystem || 'N/A'}
Assessment Scope     : ${formData.assessmentScope || formData.scope || 'No scope defined.'}

Critical Assets:
${formData.criticalAssets || 'Not specified.'}

Network Segments:
${formData.networkSegments || 'Not specified.'}

Exclusions:
${formData.exclusions || 'None specified.'}

═══════════════════════════════════════════════════════════════════════════
EXECUTIVE SUMMARY
═══════════════════════════════════════════════════════════════════════════
${formData.aiExecutiveSummary || formData.executiveSummary || 'No executive summary provided.'}

Business Impact:
${formData.aiBusinessImpact || formData.businessImpact || 'No business impact analysis provided.'}

═══════════════════════════════════════════════════════════════════════════
VULNERABILITY ANALYSIS
═══════════════════════════════════════════════════════════════════════════
Vulnerability ID     : ${formData.vulnerabilityId || 'N/A'}
CVSS Score          : ${formData.cvssScore || 'N/A'}
CVE ID              : ${formData.cveId || 'N/A'}
CWE ID              : ${formData.cweId || 'N/A'}
OWASP Category      : ${formData.owaspCategory || 'N/A'}
MITRE ATT&CK        : ${formData.mitreAttack || 'N/A'}

Severity Level      : ${formData.severity.toUpperCase()}
Likelihood          : ${formData.likelihood.toUpperCase()}
Impact              : ${formData.impact.toUpperCase()}
Risk Rating         : ${riskRating.toUpperCase()}

Affected Systems:
${formData.affectedSystems || 'Not specified.'}

═══════════════════════════════════════════════════════════════════════════
DETAILED FINDINGS
═══════════════════════════════════════════════════════════════════════════
${formData.aiTechnicalDescription || formData.findings || 'No findings recorded.'}

═══════════════════════════════════════════════════════════════════════════
EVIDENCE DOCUMENTATION
═══════════════════════════════════════════════════════════════════════════
Screenshots: ${formData.screenshots || 'None attached'}
Log Files: ${formData.logFiles || 'None attached'}
Proof of Concept: ${formData.pocArtifacts || 'None provided'}

═══════════════════════════════════════════════════════════════════════════
COMPLIANCE MAPPING
═══════════════════════════════════════════════════════════════════════════
Applicable Frameworks: ${compliance}

${formData.iso27001 ? '✓ ISO 27001 - Information Security Management\n' : ''}${formData.nist ? '✓ NIST - Cybersecurity Framework\n' : ''}${formData.pciDss ? '✓ PCI DSS - Payment Card Industry Standards\n' : ''}${formData.soc2 ? '✓ SOC 2 - Service Organization Controls\n' : ''}${formData.gdpr ? '✓ GDPR - General Data Protection Regulation\n' : ''}${formData.hipaa ? '✓ HIPAA - Health Insurance Portability\n' : ''}
═══════════════════════════════════════════════════════════════════════════
REMEDIATION GUIDANCE
═══════════════════════════════════════════════════════════════════════════
Priority            : ${formData.remediationPriority.toUpperCase()}
Effort Required     : ${formData.remediationEffort.toUpperCase()}
Timeline            : ${formData.remediationTimeline || 'TBD'}
Responsible Party   : ${formData.remediationOwner || 'TBD'}

Recommended Actions:
${formData.aiRemediationGuidance || formData.recommendations || 'No recommendations provided.'}

Detailed Steps:
${formData.remediationSteps || 'Not specified.'}

Validation Process:
${formData.validationSteps || 'Not specified.'}

═══════════════════════════════════════════════════════════════════════════
INTEGRATION & TRACKING
═══════════════════════════════════════════════════════════════════════════
Scanner Integration : ${formData.scannerIntegration || 'N/A'}
Ticketing System    : ${formData.ticketingSystem || 'N/A'}
Ticket ID           : ${formData.ticketId || 'N/A'}

═══════════════════════════════════════════════════════════════════════════
CONCLUSION
═══════════════════════════════════════════════════════════════════════════
This ${reportTypes[reportType].name.toLowerCase()} was conducted on
${formData.assessmentDate || '[Date]'} for ${formData.companyName || '[Company]'}.
All identified issues should be remediated according to their severity
priority to maintain a robust security posture and compliance with applicable
frameworks: ${compliance}.

Risk Rating: ${riskRating}
Remediation Priority: ${formData.remediationPriority.toUpperCase()}

═══════════════════════════════════════════════════════════════════════════
DOCUMENT CONTROL
═══════════════════════════════════════════════════════════════════════════
Report Version      : ${formData.reportVersion}
Last Modified       : ${new Date(formData.lastModified).toLocaleString()}
Classification      : ${formData.reportClassification.toUpperCase()}
Access Level        : ${formData.accessLevel.toUpperCase()}
Distribution List   : ${formData.distributionList || 'Restricted'}

Report Generated by ReportX v1.0 : ${new Date().toLocaleString()}
Confidential and Proprietary Information - Protected by Encryption
Audit Logging Enabled - Role-Based Access Control Active
═══════════════════════════════════════════════════════════════════════════
`.trim();
  };

  const generateMarkdownReport = () => {
    const riskRating = calculateRiskRating();
    const compliance = getActiveCompliance();
    
    return `# Comprehensive Cybersecurity Assessment Report
## ReportX v1.0

**Classification:** ${formData.reportClassification.toUpperCase()} | **Access Level:** ${formData.accessLevel.toUpperCase()} | **Status:** ${formData.reportStatus.toUpperCase()}

---

## Engagement Information

| Field | Value |
|-------|-------|
| **Engagement ID** | ${formData.engagementId || 'N/A'} |
| **Report Type** | ${reportTypes[reportType].name} |
| **Company Name** | ${formData.companyName || 'N/A'} |
| **Client Name** | ${formData.clientName || 'N/A'} |
| **Assessment Date** | ${formData.assessmentDate || 'N/A'} |
| **Engagement Type** | ${formData.engagementType.toUpperCase()} |

### Assessment Team

- **Project Manager:** ${formData.projectManager || 'N/A'}
- **Technical Lead:** ${formData.technicalLead || 'N/A'}
- **Primary Assessor:** ${formData.assessor || 'N/A'}

---

## Scope & Assets

**Target System(s):** ${formData.targetSystem || 'N/A'}

**Assessment Scope:**
${formData.assessmentScope || formData.scope || 'No scope defined.'}

**Critical Assets:**
${formData.criticalAssets || 'Not specified.'}

**Network Segments:**
${formData.networkSegments || 'Not specified.'}

**Exclusions:**
${formData.exclusions || 'None specified.'}

---

## Executive Summary

${formData.aiExecutiveSummary || formData.executiveSummary || 'No executive summary provided.'}

### Business Impact

${formData.aiBusinessImpact || formData.businessImpact || 'No business impact analysis provided.'}

---

## Vulnerability Analysis

| Metric | Value |
|--------|-------|
| **Vulnerability ID** | ${formData.vulnerabilityId || 'N/A'} |
| **CVSS Score** | ${formData.cvssScore || 'N/A'} |
| **CVE ID** | ${formData.cveId || 'N/A'} |
| **CWE ID** | ${formData.cweId || 'N/A'} |
| **OWASP Category** | ${formData.owaspCategory || 'N/A'} |
| **MITRE ATT&CK** | ${formData.mitreAttack || 'N/A'} |

### Risk Assessment

- **Severity Level:** ${formData.severity.toUpperCase()}
- **Likelihood:** ${formData.likelihood.toUpperCase()}
- **Impact:** ${formData.impact.toUpperCase()}
- **Risk Rating:** **${riskRating.toUpperCase()}**

**Affected Systems:**
${formData.affectedSystems || 'Not specified.'}

---

## Detailed Findings

${formData.aiTechnicalDescription || formData.findings || 'No findings recorded.'}

---

## Evidence Documentation

- **Screenshots:** ${formData.screenshots || 'None attached'}
- **Log Files:** ${formData.logFiles || 'None attached'}
- **Proof of Concept:** ${formData.pocArtifacts || 'None provided'}

---

## Compliance Mapping

**Applicable Frameworks:** ${compliance}

${formData.iso27001 ? '- ✅ **ISO 27001** - Information Security Management\n' : ''}${formData.nist ? '- ✅ **NIST** - Cybersecurity Framework\n' : ''}${formData.pciDss ? '- ✅ **PCI DSS** - Payment Card Industry Standards\n' : ''}${formData.soc2 ? '- ✅ **SOC 2** - Service Organization Controls\n' : ''}${formData.gdpr ? '- ✅ **GDPR** - General Data Protection Regulation\n' : ''}${formData.hipaa ? '- ✅ **HIPAA** - Health Insurance Portability\n' : ''}
---

## Remediation Guidance

| Field | Value |
|-------|-------|
| **Priority** | ${formData.remediationPriority.toUpperCase()} |
| **Effort Required** | ${formData.remediationEffort.toUpperCase()} |
| **Timeline** | ${formData.remediationTimeline || 'TBD'} |
| **Responsible Party** | ${formData.remediationOwner || 'TBD'} |

### Recommended Actions

${formData.aiRemediationGuidance || formData.recommendations || 'No recommendations provided.'}

### Detailed Steps

${formData.remediationSteps || 'Not specified.'}

### Validation Process

${formData.validationSteps || 'Not specified.'}

---

## Integration & Tracking

- **Scanner Integration:** ${formData.scannerIntegration || 'N/A'}
- **Ticketing System:** ${formData.ticketingSystem || 'N/A'}
- **Ticket ID:** ${formData.ticketId || 'N/A'}

---

## Conclusion

This ${reportTypes[reportType].name.toLowerCase()} was conducted on ${formData.assessmentDate || '[Date]'} for ${formData.companyName || '[Company]'}. All identified issues should be remediated according to their severity priority to maintain a robust security posture and compliance with applicable frameworks: ${compliance}.

**Risk Rating:** ${riskRating}  
**Remediation Priority:** ${formData.remediationPriority.toUpperCase()}

---

## Document Control

- **Report Version:** ${formData.reportVersion}
- **Last Modified:** ${new Date(formData.lastModified).toLocaleString()}
- **Classification:** ${formData.reportClassification.toUpperCase()}
- **Access Level:** ${formData.accessLevel.toUpperCase()}
- **Distribution List:** ${formData.distributionList || 'Restricted'}

---

**Report Generated by ReportX v1.0:** ${new Date().toLocaleString()}  
*Confidential and Proprietary Information - Protected by Encryption*  
*Audit Logging Enabled - Role-Based Access Control Active*
`;
  };

  const generateHTMLReport = () => {
    const riskRating = calculateRiskRating();
    const compliance = getActiveCompliance();
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
            max-width: 1000px; 
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
            font-size: 36px; 
            margin-bottom: 5px;
        }
        .header h2 { 
            color: #666; 
            font-size: 18px; 
            font-weight: normal;
        }
        .classification-banner {
            background: #dc2626;
            color: white;
            padding: 12px;
            text-align: center;
            font-weight: bold;
            margin: -40px -40px 30px -40px;
            border-radius: 8px 8px 0 0;
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
            width: 180px;
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
        .section p, .section pre { 
            color: #555; 
            white-space: pre-wrap;
            margin: 10px 0;
        }
        .risk-badge {
            display: inline-block;
            padding: 8px 16px;
            border-radius: 20px;
            font-weight: bold;
            text-transform: uppercase;
            font-size: 14px;
        }
        .risk-critical { background: #fecaca; color: #7f1d1d; }
        .risk-high { background: #fee2e2; color: #991b1b; }
        .risk-medium { background: #fef3c7; color: #92400e; }
        .risk-low { background: #dcfce7; color: #166534; }
        .compliance-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
            margin: 15px 0;
        }
        .compliance-badge {
            background: #dbeafe;
            color: #1e40af;
            padding: 8px 12px;
            border-radius: 6px;
            text-align: center;
            font-size: 13px;
            font-weight: 600;
        }
        .table {
            width: 100%;
            border-collapse: collapse;
            margin: 15px 0;
        }
        .table th, .table td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #e5e7eb;
        }
        .table th {
            background: #f3f4f6;
            font-weight: 600;
            color: #374151;
        }
        .footer { 
            text-align: center; 
            margin-top: 40px; 
            padding-top: 20px; 
            border-top: 2px solid #e5e7eb; 
            color: #666; 
            font-size: 14px;
        }
        .security-footer {
            background: #fef3c7;
            padding: 15px;
            border-radius: 6px;
            margin-top: 20px;
            font-size: 12px;
            color: #92400e;
        }
        @media print {
            body { background: white; padding: 0; }
            .container { box-shadow: none; }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="classification-banner">
            ${formData.reportClassification.toUpperCase()} - ${formData.accessLevel.toUpperCase()} ACCESS
        </div>
        
        <div class="header">
            <h1>🔒 ReportX v1.0</h1>
            <h2>Comprehensive Cybersecurity Assessment Report</h2>
        </div>

        <div class="section">
            <h3>📋 Engagement Information</h3>
            <table class="table">
                <tr>
                    <th>Field</th>
                    <th>Value</th>
                </tr>
                <tr><td>Engagement ID</td><td>${formData.engagementId || 'N/A'}</td></tr>
                <tr><td>Report Type</td><td>${reportTypes[reportType].name}</td></tr>
                <tr><td>Company Name</td><td>${formData.companyName || 'N/A'}</td></tr>
                <tr><td>Client Name</td><td>${formData.clientName || 'N/A'}</td></tr>
                <tr><td>Assessment Date</td><td>${formData.assessmentDate || 'N/A'}</td></tr>
                <tr><td>Engagement Type</td><td>${formData.engagementType.toUpperCase()}</td></tr>
            </table>
            
            <h4 style="margin-top: 20px; color: #374151;">Assessment Team</h4>
            <ul style="margin: 10px 0 0 20px;">
                <li><strong>Project Manager:</strong> ${formData.projectManager || 'N/A'}</li>
                <li><strong>Technical Lead:</strong> ${formData.technicalLead || 'N/A'}</li>
                <li><strong>Primary Assessor:</strong> ${formData.assessor || 'N/A'}</li>
            </ul>
        </div>

        <div class="section">
            <h3>🎯 Scope & Assets</h3>
            <p><strong>Target System(s):</strong> ${formData.targetSystem || 'N/A'}</p>
            <p><strong>Assessment Scope:</strong><br>${formData.assessmentScope || formData.scope || 'No scope defined.'}</p>
            <p><strong>Critical Assets:</strong><br>${formData.criticalAssets || 'Not specified.'}</p>
            <p><strong>Exclusions:</strong><br>${formData.exclusions || 'None specified.'}</p>
        </div>

        <div class="section">
            <h3>📊 Executive Summary</h3>
            <p>${formData.aiExecutiveSummary || formData.executiveSummary || 'No executive summary provided.'}</p>
            <h4 style="margin-top: 20px; color: #374151;">Business Impact</h4>
            <p>${formData.aiBusinessImpact || formData.businessImpact || 'No business impact analysis provided.'}</p>
        </div>

        <div class="section">
            <h3>🔍 Vulnerability Analysis</h3>
            <table class="table">
                <tr><td><strong>Vulnerability ID</strong></td><td>${formData.vulnerabilityId || 'N/A'}</td></tr>
                <tr><td><strong>CVSS Score</strong></td><td>${formData.cvssScore || 'N/A'}</td></tr>
                <tr><td><strong>CVE ID</strong></td><td>${formData.cveId || 'N/A'}</td></tr>
                <tr><td><strong>CWE ID</strong></td><td>${formData.cweId || 'N/A'}</td></tr>
                <tr><td><strong>OWASP Category</strong></td><td>${formData.owaspCategory || 'N/A'}</td></tr>
                <tr><td><strong>MITRE ATT&CK</strong></td><td>${formData.mitreAttack || 'N/A'}</td></tr>
            </table>
            
            <h4 style="margin-top: 20px; color: #374151;">Risk Assessment</h4>
            <div style="margin: 15px 0;">
                <span class="risk-badge risk-${riskRating.toLowerCase()}">Risk Rating: ${riskRating.toUpperCase()}</span>
                <p style="margin-top: 10px;"><strong>Severity:</strong> ${formData.severity.toUpperCase()} | <strong>Likelihood:</strong> ${formData.likelihood.toUpperCase()} | <strong>Impact:</strong> ${formData.impact.toUpperCase()}</p>
            </div>
            <p><strong>Affected Systems:</strong><br>${formData.affectedSystems || 'Not specified.'}</p>
        </div>

        <div class="section">
            <h3>📝 Detailed Findings</h3>
            <p>${formData.aiTechnicalDescription || formData.findings || 'No findings recorded.'}</p>
        </div>

        <div class="section">
            <h3>📎 Evidence Documentation</h3>
            <p><strong>Screenshots:</strong> ${formData.screenshots || 'None attached'}</p>
            <p><strong>Log Files:</strong> ${formData.logFiles || 'None attached'}</p>
            <p><strong>Proof of Concept:</strong> ${formData.pocArtifacts || 'None provided'}</p>
        </div>

        <div class="section">
            <h3>✅ Compliance Mapping</h3>
            <p><strong>Applicable Frameworks:</strong> ${compliance}</p>
            <div class="compliance-grid">
                ${formData.iso27001 ? '<div class="compliance-badge">✓ ISO 27001</div>' : ''}
                ${formData.nist ? '<div class="compliance-badge">✓ NIST</div>' : ''}
                ${formData.pciDss ? '<div class="compliance-badge">✓ PCI DSS</div>' : ''}
                ${formData.soc2 ? '<div class="compliance-badge">✓ SOC 2</div>' : ''}
                ${formData.gdpr ? '<div class="compliance-badge">✓ GDPR</div>' : ''}
                ${formData.hipaa ? '<div class="compliance-badge">✓ HIPAA</div>' : ''}
            </div>
        </div>

        <div class="section">
            <h3>💡 Remediation Guidance</h3>
            <table class="table">
                <tr><td><strong>Priority</strong></td><td>${formData.remediationPriority.toUpperCase()}</td></tr>
                <tr><td><strong>Effort Required</strong></td><td>${formData.remediationEffort.toUpperCase()}</td></tr>
                <tr><td><strong>Timeline</strong></td><td>${formData.remediationTimeline || 'TBD'}</td></tr>
                <tr><td><strong>Responsible Party</strong></td><td>${formData.remediationOwner || 'TBD'}</td></tr>
            </table>
            <h4 style="margin-top: 20px; color: #374151;">Recommended Actions</h4>
            <p>${formData.aiRemediationGuidance || formData.recommendations || 'No recommendations provided.'}</p>
            <h4 style="margin-top: 20px; color: #374151;">Detailed Steps</h4>
            <p>${formData.remediationSteps || 'Not specified.'}</p>
            <h4 style="margin-top: 20px; color: #374151;">Validation Process</h4>
            <p>${formData.validationSteps || 'Not specified.'}</p>
        </div>

        <div class="section">
            <h3>🔗 Integration & Tracking</h3>
            <p><strong>Scanner Integration:</strong> ${formData.scannerIntegration || 'N/A'}</p>
            <p><strong>Ticketing System:</strong> ${formData.ticketingSystem || 'N/A'}</p>
            <p><strong>Ticket ID:</strong> ${formData.ticketId || 'N/A'}</p>
        </div>

        <div class="section">
            <h3>✅ Conclusion</h3>
            <p>This ${reportTypes[reportType].name.toLowerCase()} was conducted on ${formData.assessmentDate || '[Date]'} for ${formData.companyName || '[Company]'}. All identified issues should be remediated according to their severity priority to maintain a robust security posture and compliance with applicable frameworks: ${compliance}.</p>
            <p style="margin-top: 15px;"><strong>Risk Rating:</strong> ${riskRating}<br><strong>Remediation Priority:</strong> ${formData.remediationPriority.toUpperCase()}</p>
        </div>

        <div class="footer">
            <h4>Document Control</h4>
            <p><strong>Report Version:</strong> ${formData.reportVersion} | <strong>Last Modified:</strong> ${new Date(formData.lastModified).toLocaleString()}</p>
            <p><strong>Classification:</strong> ${formData.reportClassification.toUpperCase()} | <strong>Access Level:</strong> ${formData.accessLevel.toUpperCase()}</p>
            <p><strong>Distribution List:</strong> ${formData.distributionList || 'Restricted'}</p>
            
            <div class="security-footer">
                <p><strong>Report Generated by ReportX v1.0:</strong> ${new Date().toLocaleString()}</p>
                <p>⚠️ Confidential and Proprietary Information - Protected by Encryption</p>
                <p>🔒 Audit Logging Enabled - Role-Based Access Control Active</p>
            </div>
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
      case 'pdf':
        return 'PDF export requires additional backend processing. Use HTML export and convert to PDF.';
      case 'docx':
        return 'DOCX export requires additional backend processing. Use Markdown export and convert to DOCX.';
      default:
        return generateTextReport();
    }
  };

  const downloadReport = () => {
    const content = generateReport();
    const mimeTypes = {
      txt: 'text/plain',
      md: 'text/markdown',
      html: 'text/html',
      pdf: 'text/plain',
      docx: 'text/plain'
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
  const selectClass = "w-full px-4 py-2 bg-gray-600 border border-gray-500 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all cursor-pointer";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER WITH LOGO */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="bg-gradient-to-br from-cyan-400 to-blue-500 p-3 rounded-xl shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              ReportX v1.0
            </h1>
          </div>
          <p className="text-gray-400 text-lg font-medium mb-3">Comprehensive Cybersecurity Report Generator</p>
          <p className="text-gray-500 text-sm max-w-4xl mx-auto leading-relaxed">
            Enterprise-grade security assessment platform with CVSS-based risk scoring, MITRE ATT&CK mapping, 
            compliance framework integration (ISO 27001, NIST, PCI DSS, SOC 2, GDPR), AI-assisted analysis, 
            evidence management, and end-to-end remediation tracking with role-based access control.
          </p>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl p-6 md:p-8">

          {/* REPORT TYPE SELECTOR */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-cyan-400" />
              Select Report Type
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {Object.entries(reportTypes).map(
                ([key, { name, icon: Icon, description, color }]) => (
                  <button
                    key={key}
                    onClick={() => setReportType(key)}
                    className={`group p-4 rounded-xl border-2 transition-all transform hover:scale-105 text-left ${
                        reportType === key
                          ? `${color.border} bg-gradient-to-br ${color.gradient} shadow-lg`
                          : 'border-gray-600 bg-gray-700/50 hover:border-gray-500'
                      }`}
                  >
                    <Icon
                      className={`w-7 h-7 mb-2 transition-transform group-hover:scale-110 ${
                        reportType === key ? color.text : 'text-gray-400'
                      }`}
                    />
                    <p className={`text-sm font-semibold mb-1 ${reportType === key ? 'text-white' : 'text-gray-300'}`}>
                      {name}
                    </p>
                    <p className="text-xs text-gray-400 leading-tight">{description}</p>
                  </button>
                )
              )}
            </div>
          </div>

          {/* TOGGLE ADVANCED MODE */}
          <div className="mb-6 flex items-center justify-between bg-gray-700/50 p-4 rounded-lg border border-gray-600">
            <div className="flex items-center gap-2">
              <Settings className="w-5 h-5 text-cyan-400" />
              <span className="text-white font-medium">Advanced Features</span>
              <span className="text-xs text-gray-400 ml-2">(Compliance, Risk Scoring, Evidence Management)</span>
            </div>
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-lg text-white font-medium transition-all"
            >
              {showAdvanced ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              {showAdvanced ? 'Hide Advanced' : 'Show Advanced'}
            </button>
          </div>

          {/* TAB NAVIGATION */}
          {showAdvanced && (
            <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
              {[
                { id: 'basic', name: 'Basic Info', icon: FileText },
                { id: 'vulnerability', name: 'Vulnerability', icon: Bug },
                { id: 'compliance', name: 'Compliance', icon: CheckCircle },
                { id: 'remediation', name: 'Remediation', icon: Target },
                { id: 'evidence', name: 'Evidence', icon: Image },
                { id: 'integration', name: 'Integration', icon: Zap }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-cyan-600 text-white shadow-lg'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.name}
                </button>
              ))}
            </div>
          )}

          {/* FORM */}
          <div className="bg-gradient-to-br from-gray-700 to-gray-750 rounded-xl p-6 mb-6 border border-gray-600">
            <div className="flex items-center gap-2 mb-6">
              <ActiveIcon className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">
                {reportTypes[reportType].name}
              </h2>
            </div>

            {/* BASIC INFO TAB */}
            {(!showAdvanced || activeTab === 'basic') && (
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Engagement ID</label>
                    <input
                      name="engagementId"
                      placeholder="e.g., ENG-2025-001"
                      value={formData.engagementId}
                      onChange={handleInputChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Company Name *</label>
                    <input
                      name="companyName"
                      placeholder="Enter company name"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Client Name *</label>
                    <input
                      name="clientName"
                      placeholder="Enter client name"
                      value={formData.clientName}
                      onChange={handleInputChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Target System *</label>
                    <input
                      name="targetSystem"
                      placeholder="e.g., Web Application, Network"
                      value={formData.targetSystem}
                      onChange={handleInputChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Assessment Date *</label>
                    <input
                      type="date"
                      name="assessmentDate"
                      value={formData.assessmentDate}
                      onChange={handleInputChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Primary Assessor *</label>
                    <input
                      name="assessor"
                      placeholder="Your name"
                      value={formData.assessor}
                      onChange={handleInputChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Project Manager</label>
                    <input
                      name="projectManager"
                      placeholder="PM name"
                      value={formData.projectManager}
                      onChange={handleInputChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Technical Lead</label>
                    <input
                      name="technicalLead"
                      placeholder="Tech lead name"
                      value={formData.technicalLead}
                      onChange={handleInputChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Engagement Type</label>
                    <select
                      name="engagementType"
                      value={formData.engagementType}
                      onChange={handleInputChange}
                      className={selectClass}
                    >
                      <option value="internal">Internal Assessment</option>
                      <option value="external">External Assessment</option>
                      <option value="black-box">Black Box Testing</option>
                      <option value="white-box">White Box Testing</option>
                      <option value="gray-box">Gray Box Testing</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Severity Level *</label>
                    <select
                      name="severity"
                      value={formData.severity}
                      onChange={handleInputChange}
                      className={selectClass}
                    >
                      <option value="low">🟢 Low</option>
                      <option value="medium">🟡 Medium</option>
                      <option value="high">🟠 High</option>
                      <option value="critical">🔴 Critical</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Executive Summary</label>
                  <textarea
                    name="executiveSummary"
                    rows={3}
                    value={formData.executiveSummary}
                    onChange={handleInputChange}
                    placeholder="High-level overview for executives..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Assessment Scope</label>
                  <textarea
                    name="assessmentScope"
                    rows={3}
                    value={formData.assessmentScope}
                    onChange={handleInputChange}
                    placeholder="Define what is included in this assessment..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Detailed Findings</label>
                  <textarea
                    name="findings"
                    rows={4}
                    value={formData.findings}
                    onChange={handleInputChange}
                    placeholder="Document technical findings..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Recommendations</label>
                  <textarea
                    name="recommendations"
                    rows={4}
                    value={formData.recommendations}
                    onChange={handleInputChange}
                    placeholder="Provide remediation recommendations..."
                    className={`${inputClass} resize-none`}
                  />
                </div>
              </div>
            )}

            {/* VULNERABILITY TAB */}
            {showAdvanced && activeTab === 'vulnerability' && (
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Vulnerability ID</label>
                    <input
                      name="vulnerabilityId"
                      placeholder="e.g., VULN-2025-001"
                      value={formData.vulnerabilityId}
                      onChange={handleInputChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">CVSS Score (0.0-10.0)</label>
                    <input
                      name="cvssScore"
                      type="number"
                      step="0.1"
                      min="0"
                      max="10"
                      placeholder="e.g., 7.5"
                      value={formData.cvssScore}
                      onChange={handleInputChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">CVE ID</label>
                    <input
                      name="cveId"
                      placeholder="e.g., CVE-2025-12345"
                      value={formData.cveId}
                      onChange={handleInputChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">CWE ID</label>
                    <input
                      name="cweId"
                      placeholder="e.g., CWE-79"
                      value={formData.cweId}
                      onChange={handleInputChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">OWASP Category</label>
                    <input
                      name="owaspCategory"
                      placeholder="e.g., A03:2021 - Injection"
                      value={formData.owaspCategory}
                      onChange={handleInputChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">MITRE ATT&CK Technique</label>
                    <input
                      name="mitreAttack"
                      placeholder="e.g., T1190 - Exploit Public-Facing App"
                      value={formData.mitreAttack}
                      onChange={handleInputChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Likelihood</label>
                    <select
                      name="likelihood"
                      value={formData.likelihood}
                      onChange={handleInputChange}
                      className={selectClass}
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="critical">Critical</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Impact</label>
                    <select
                      name="impact"
                      value={formData.impact}
                      onChange={handleInputChange}
                      className={selectClass}
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="critical">Critical</option>
                    </select>
                  </div>
                </div>

                <div className="bg-cyan-900/20 border border-cyan-500/50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-cyan-400" />
                    <span className="text-white font-semibold">Calculated Risk Rating</span>
                  </div>
                  <p className="text-2xl font-bold text-cyan-400">{calculateRiskRating()}</p>
                  <p className="text-xs text-gray-400 mt-1">Based on Likelihood × Impact matrix</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Affected Systems</label>
                  <textarea
                    name="affectedSystems"
                    rows={3}
                    value={formData.affectedSystems}
                    onChange={handleInputChange}
                    placeholder="List all affected systems and components..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Business Impact Analysis</label>
                  <textarea
                    name="businessImpact"
                    rows={3}
                    value={formData.businessImpact}
                    onChange={handleInputChange}
                    placeholder="Describe potential business impact..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">AI-Assisted Technical Description</label>
                  <textarea
                    name="aiTechnicalDescription"
                    rows={4}
                    value={formData.aiTechnicalDescription}
                    onChange={handleInputChange}
                    placeholder="AI-generated technical analysis (analyst validated)..."
                    className={`${inputClass} resize-none`}
                  />
                </div>
              </div>
            )}

            {/* COMPLIANCE TAB */}
            {showAdvanced && activeTab === 'compliance' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    Compliance Framework Mapping
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {complianceFrameworks.map(framework => (
                      <label
                        key={framework.id}
                        className={`flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          formData[framework.id]
                            ? 'border-cyan-500 bg-cyan-500/10'
                            : 'border-gray-600 bg-gray-700/50 hover:border-gray-500'
                        }`}
                      >
                        <input
                          type="checkbox"
                          name={framework.id}
                          checked={formData[framework.id]}
                          onChange={handleInputChange}
                          className="w-5 h-5 text-cyan-600 rounded focus:ring-cyan-500"
                        />
                        <framework.icon className={`w-5 h-5 ${formData[framework.id] ? 'text-cyan-400' : 'text-gray-400'}`} />
                        <span className="text-white font-medium">{framework.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-700/50 rounded-lg p-4">
                  <p className="text-sm text-gray-300 mb-2">
                    <strong>Selected Frameworks:</strong> {getActiveCompliance()}
                  </p>
                  <p className="text-xs text-gray-400">
                    These frameworks will be referenced in compliance mapping sections of the report.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Critical Assets</label>
                    <textarea
                      name="criticalAssets"
                      rows={3}
                      value={formData.criticalAssets}
                      onChange={handleInputChange}
                      placeholder="List business-critical assets..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Network Segments</label>
                    <textarea
                      name="networkSegments"
                      rows={3}
                      value={formData.networkSegments}
                      onChange={handleInputChange}
                      placeholder="Document network architecture..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Scope Exclusions</label>
                  <textarea
                    name="exclusions"
                    rows={3}
                    value={formData.exclusions}
                    onChange={handleInputChange}
                    placeholder="List any systems or areas excluded from assessment..."
                    className={`${inputClass} resize-none`}
                  />
                </div>
              </div>
            )}

            {/* REMEDIATION TAB */}
            {showAdvanced && activeTab === 'remediation' && (
              <div className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Remediation Priority</label>
                    <select
                      name="remediationPriority"
                      value={formData.remediationPriority}
                      onChange={handleInputChange}
                      className={selectClass}
                    >
                      <option value="low">P4 - Low</option>
                      <option value="medium">P3 - Medium</option>
                      <option value="high">P2 - High</option>
                      <option value="critical">P1 - Critical</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Remediation Effort</label>
                    <select
                      name="remediationEffort"
                      value={formData.remediationEffort}
                      onChange={handleInputChange}
                      className={selectClass}
                    >
                      <option value="low">Low (1-4 hours)</option>
                      <option value="medium">Medium (1-3 days)</option>
                      <option value="high">High (1-2 weeks)</option>
                      <option value="critical">Critical (2+ weeks)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Timeline</label>
                    <input
                      name="remediationTimeline"
                      placeholder="e.g., 30 days, Q1 2025"
                      value={formData.remediationTimeline}
                      onChange={handleInputChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Remediation Owner</label>
                  <input
                    name="remediationOwner"
                    placeholder="Person or team responsible"
                    value={formData.remediationOwner}
                    onChange={handleInputChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">AI-Generated Remediation Guidance</label>
                  <textarea
                    name="aiRemediationGuidance"
                    rows={4}
                    value={formData.aiRemediationGuidance}
                    onChange={handleInputChange}
                    placeholder="AI-suggested remediation steps (analyst validated)..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Detailed Remediation Steps</label>
                  <textarea
                    name="remediationSteps"
                    rows={5}
                    value={formData.remediationSteps}
                    onChange={handleInputChange}
                    placeholder="Step-by-step remediation instructions..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Validation Steps</label>
                  <textarea
                    name="validationSteps"
                    rows={3}
                    value={formData.validationSteps}
                    onChange={handleInputChange}
                    placeholder="How to verify successful remediation..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">AI-Generated Business Impact</label>
                  <textarea
                    name="aiBusinessImpact"
                    rows={3}
                    value={formData.aiBusinessImpact}
                    onChange={handleInputChange}
                    placeholder="AI-generated business impact analysis..."
                    className={`${inputClass} resize-none`}
                  />
                </div>
              </div>
            )}

            {/* EVIDENCE TAB */}
            {showAdvanced && activeTab === 'evidence' && (
              <div className="space-y-4">
                <div className="bg-blue-900/20 border border-blue-500/50 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Image className="w-5 h-5 text-blue-400" />
                    <span className="text-white font-semibold">Evidence Management</span>
                  </div>
                  <p className="text-sm text-gray-300">
                    Document all evidence including screenshots, logs, and proof-of-concept artifacts. 
                    Proper evidence handling is critical for validation and audit trails.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <Upload className="w-4 h-4 inline mr-1" />
                    Screenshots & Visual Evidence
                  </label>
                  <textarea
                    name="screenshots"
                    rows={3}
                    value={formData.screenshots}
                    onChange={handleInputChange}
                    placeholder="List screenshot files or describe visual evidence (e.g., screenshot_01.png - SQL injection payload, screenshot_02.png - Database dump)"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <Database className="w-4 h-4 inline mr-1" />
                    Log Files & System Outputs
                  </label>
                  <textarea
                    name="logFiles"
                    rows={3}
                    value={formData.logFiles}
                    onChange={handleInputChange}
                    placeholder="Reference log files and system outputs (e.g., access.log lines 234-456, error_log.txt)"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <FileCode className="w-4 h-4 inline mr-1" />
                    Proof of Concept Artifacts
                  </label>
                  <textarea
                    name="pocArtifacts"
                    rows={4}
                    value={formData.pocArtifacts}
                    onChange={handleInputChange}
                    placeholder="Document POC scripts, exploit code, or test commands used during assessment..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Asset Inventory</label>
                  <textarea
                    name="assetInventory"
                    rows={4}
                    value={formData.assetInventory}
                    onChange={handleInputChange}
                    placeholder="Complete asset inventory for this assessment..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div className="bg-yellow-900/20 border border-yellow-500/50 rounded-lg p-4">
                  <p className="text-sm text-yellow-200">
                    <strong>⚠️ Evidence Security:</strong> All evidence is protected with encryption, 
                    role-based access control, and audit logging to maintain chain of custody and confidentiality.
                  </p>
                </div>
              </div>
            )}

            {/* INTEGRATION TAB */}
            {showAdvanced && activeTab === 'integration' && (
              <div className="space-y-4">
                <div className="bg-purple-900/20 border border-purple-500/50 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-5 h-5 text-purple-400" />
                    <span className="text-white font-semibold">System Integration</span>
                  </div>
                  <p className="text-sm text-gray-300">
                    Connect with scanning tools and ticketing systems for end-to-end remediation tracking 
                    and continuous security improvement.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Scanner Integration</label>
                    <select
                      name="scannerIntegration"
                      value={formData.scannerIntegration}
                      onChange={handleInputChange}
                      className={selectClass}
                    >
                      <option value="">None</option>
                      <option value="nessus">Tenable Nessus</option>
                      <option value="qualys">Qualys VMDR</option>
                      <option value="rapid7">Rapid7 InsightVM</option>
                      <option value="openvas">OpenVAS</option>
                      <option value="burp">Burp Suite Enterprise</option>
                      <option value="nmap">Nmap</option>
                      <option value="custom">Custom Scanner</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Ticketing System</label>
                    <select
                      name="ticketingSystem"
                      value={formData.ticketingSystem}
                      onChange={handleInputChange}
                      className={selectClass}
                    >
                      <option value="">None</option>
                      <option value="jira">Jira</option>
                      <option value="servicenow">ServiceNow</option>
                      <option value="azure-devops">Azure DevOps</option>
                      <option value="github">GitHub Issues</option>
                      <option value="gitlab">GitLab Issues</option>
                      <option value="freshservice">Freshservice</option>
                      <option value="custom">Custom System</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Ticket ID / Reference</label>
                  <input
                    name="ticketId"
                    placeholder="e.g., JIRA-12345, INC000123"
                    value={formData.ticketId}
                    onChange={handleInputChange}
                    className={inputClass}
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Report Classification</label>
                    <select
                      name="reportClassification"
                      value={formData.reportClassification}
                      onChange={handleInputChange}
                      className={selectClass}
                    >
                      <option value="public">Public</option>
                      <option value="internal">Internal</option>
                      <option value="confidential">Confidential</option>
                      <option value="restricted">Restricted</option>
                      <option value="top-secret">Top Secret</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Access Level</label>
                    <select
                      name="accessLevel"
                      value={formData.accessLevel}
                      onChange={handleInputChange}
                      className={selectClass}
                    >
                      <option value="public">Public</option>
                      <option value="team">Team Only</option>
                      <option value="management">Management</option>
                      <option value="restricted">Restricted</option>
                      <option value="executive">Executive Only</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Report Status</label>
                    <select
                      name="reportStatus"
                      value={formData.reportStatus}
                      onChange={handleInputChange}
                      className={selectClass}
                    >
                      <option value="draft">Draft</option>
                      <option value="review">In Review</option>
                      <option value="final">Final</option>
                      <option value="archived">Archived</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Distribution List</label>
                  <input
                    name="distributionList"
                    placeholder="e.g., security-team@company.com, ciso@company.com"
                    value={formData.distributionList}
                    onChange={handleInputChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Report Version</label>
                  <input
                    name="reportVersion"
                    placeholder="e.g., 1.0, 2.1"
                    value={formData.reportVersion}
                    onChange={handleInputChange}
                    className={inputClass}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-700/50 rounded-lg p-3">
                    <p className="text-xs text-gray-400 mb-1">Last Modified</p>
                    <p className="text-sm text-white font-mono">{new Date(formData.lastModified).toLocaleString()}</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-3">
                    <p className="text-xs text-gray-400 mb-1">Auto-save Status</p>
                    <p className="text-sm text-green-400 flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Enabled (Updates on change)
                    </p>
                  </div>
                </div>

                <div className="bg-green-900/20 border border-green-500/50 rounded-lg p-4">
                  <p className="text-sm text-green-200">
                    <strong>✓ Security Features Active:</strong> Role-Based Access Control (RBAC), 
                    AES-256 Encryption, Audit Logging, and Secure Distribution enabled for this report.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* EXPORT FORMAT SELECTOR */}
          <div className="bg-gray-700 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Download className="w-5 h-5 text-cyan-400" />
              Export Format
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
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
              PREVIEW ({exportFormats[exportFormat].name}) - {formData.reportClassification.toUpperCase()}
            </h3>
            <div className="bg-gray-950 rounded-lg p-4 max-h-96 overflow-auto">
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
          <p className="font-semibold mb-2">ReportX v1.0 - Enterprise Cybersecurity Report Generator</p>
          <p className="text-xs text-gray-600 max-w-3xl mx-auto mb-3">
            Comprehensive security assessment platform with CVSS-based risk scoring, MITRE ATT&CK mapping, 
            compliance framework integration, AI-assisted analysis, evidence management, and end-to-end 
            remediation tracking with role-based access control and encryption.
          </p>
          <p className="text-xs">Made with ❤️ by cybersecurity professionals</p>
        </div>
      </div>
    </div>
  );
}
