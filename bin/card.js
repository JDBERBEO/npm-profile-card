#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

'use strict'

// Pull in our modules
import chalk from 'chalk'
import boxen from 'boxen'

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('           JUAN_DAVID_BERBEO'),
  handle: chalk.white('@JDB'),
  shorthandle: chalk.white('JDB'),
  work: chalk.white('MASIVIAN'),
  github: chalk.gray('https://github.com/') + chalk.green('JDBERBEO'),
  linkedin: chalk.gray('https://www.linkedin.com/in/') + chalk.blue('juan-david-berbeo'),
  web: chalk.cyan('YOUR_WEB_SITE_URL'),
  npx: chalk.red('npx') + ' ' + chalk.white('PACKAGE.JSON NAME'),
  labelWork: chalk.white.bold('    Work:'),
  labelTwitter: chalk.white.bold(' Twitter:'),
  labelGitHub: chalk.white.bold('  GitHub:'),
  labelLinkedIn: chalk.white.bold('LinkedIn:'),
  labelWeb: chalk.white.bold('     Web:'),
  labelCard: chalk.white.bold('    Card:')
}
