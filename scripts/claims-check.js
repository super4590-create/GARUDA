#!/usr/bin/env node
/**
 * Hard Claims Ban Scanner
 * Verifies that no banned certification claims, inflated statistics, buzzwords,
 * false claims, pricing patterns, or unverified incubator mentions appear in source files (.html, .css, .js).
 * Excludes .md documentation files and this script itself.
 */

const fs = require('fs');
const path = require('path');

const BANNED_PATTERNS = [
  // Uppercase acronyms (Strict uppercase whole-word match only)
  { pattern: /\bBIS\b/, name: 'BIS certification acronym' },
  { pattern: /\bISI\b/, name: 'ISI specification/certification acronym' },
  { pattern: /\bDOT\b/, name: 'DOT certification acronym' },
  { pattern: /\bECE\b/, name: 'ECE certification acronym' },
  { pattern: /\bAI\b/, name: 'AI buzzword acronym' },
  { pattern: /\bML\b/, name: 'ML buzzword acronym' },

  // Phrases (Case-insensitive match)
  { pattern: /\bcrash-tested\b/i, name: 'crash-tested claim' },
  { pattern: /\bproven\b/i, name: 'proven claim' },
  { pattern: /\bvalidated\b/i, name: 'validated claim' },
  { pattern: /\bsaves\s+lives\b/i, name: 'saves lives claim' },
  { pattern: /\bguaranteed\b/i, name: 'guaranteed claim' },
  { pattern: /\bavailable\s+now\b/i, name: 'available now claim' },
  { pattern: /\bmilitary-grade\b/i, name: 'military-grade claim' },
  { pattern: /\bIP67\b/i, name: 'IP67 rating claim' },
  { pattern: /\bend-to-end\b/i, name: 'end-to-end claim' },
  { pattern: /\bcalls\s+112\b/i, name: 'calls 112 claim' },
  { pattern: /\balerts\s+ambulance\b/i, name: 'alerts ambulance claim' },
  { pattern: /\bunits\s+sold\b/i, name: 'units sold claim' },
  { pattern: /\bPvt\s+Ltd\b/i, name: 'Pvt Ltd claim' },
  { pattern: /\bDPIIT\b/i, name: 'DPIIT claim' },
  { pattern: /\bpatent\s+granted\b/i, name: 'patent granted claim' },
  { pattern: /\bBuy\s+now\b/i, name: 'Buy now CTA' },
  { pattern: /\bPre-order\b/i, name: 'Pre-order CTA' },
  { pattern: /\bmachine\s+learning\b/i, name: 'machine learning buzzword' },
  { pattern: /\bedge\s+AI\b/i, name: 'edge AI buzzword' },
  { pattern: /\bGaruda\s+AI\b/i, name: 'Garuda AI name' },
  { pattern: /\bcustomers\b/i, name: 'customers claim' },
  { pattern: /\bbuyers\b/i, name: 'buyers claim' },
  { pattern: /\bregistered\s+company\b/i, name: 'registered company claim' },
  { pattern: /\bStartup\s+India\b/i, name: 'Startup India claim' },
  { pattern: /\bGovt\.?\s+Recognised\b/i, name: 'Govt. Recognised unverified claim' },

  // Unverified incubator mention
  { pattern: /\bI-Hub\b/i, name: 'I-Hub mention' },

  // Digit-with-rupee price pattern
  { pattern: /(?:₹|Rs\.?|INR)\s*\d+|\b\d+\s*(?:rupees|inr|lakh|crore)\b/i, name: 'Digit-with-rupee price pattern' },
];

const SCAN_EXTENSIONS = ['.html', '.css', '.js'];
const IGNORED_DIRS = ['.git', 'node_modules', 'extracted_assets'];
const IGNORED_FILES = ['claims-check.js'];

function scanDirectory(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (!IGNORED_DIRS.includes(file)) {
        scanDirectory(fullPath, fileList);
      }
    } else {
      const ext = path.extname(file).toLowerCase();
      if (SCAN_EXTENSIONS.includes(ext) && !IGNORED_FILES.includes(file)) {
        fileList.push(fullPath);
      }
    }
  }
  return fileList;
}

const rootDir = path.resolve(__dirname, '..');
const filesToScan = scanDirectory(rootDir);
let violationsCount = 0;

console.log(`Scanning ${filesToScan.length} source files for hard claims violations...`);

for (const filePath of filesToScan) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const relPath = path.relative(rootDir, filePath).replace(/\\/g, '/');

  lines.forEach((line, index) => {
    for (const rule of BANNED_PATTERNS) {
      // Allowed exception explicitly defined in rules: "pending validation" is allowed
      if (rule.name.includes('validated') && line.toLowerCase().includes('pending validation')) {
        continue;
      }
      
      const match = rule.pattern.exec(line);
      if (match) {
        console.error(`[VIOLATION] ${relPath}:${index + 1}: ${rule.name}`);
        console.error(`  Matched: "${match[0]}" in line: "${line.trim()}"`);
        violationsCount++;
      }
    }
  });
}

if (violationsCount > 0) {
  console.error(`\nFAILED: Found ${violationsCount} banned claim violation(s).`);
  process.exit(1);
} else {
  console.log(`\nPASSED: Zero banned claims found across ${filesToScan.length} files.`);
  process.exit(0);
}
