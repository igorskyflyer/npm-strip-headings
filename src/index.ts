/**
 * Strips Markdown headings completely.
 * @param {string} value The Markdown string to process.
 * @returns {string} The processed string.
 */
export function stripHeadings(value: string): string {
  return value.length === 0 ? '' : value.replace(/#{1,6}.+/gm, '').trim()
}

/**
 * Strips only the Markdown code while keeping the heading text.
 * @param {string} value The Markdown string to process.
 * @returns {string} The processed string.
 */
export function stripHeadingsCode(value: string): string {
  return value.length === 0 ? '' : value.replace(/#{1,6}\s*(.+)/gm, '$1').trim()
}
