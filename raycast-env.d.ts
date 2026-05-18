/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `commafy` command */
  export type Commafy = ExtensionPreferences & {
  /** Minimum Digits - Minimum integer-part digit count before commas are inserted. */
  "minDigits": string,
  /** Separator - Character used as the thousands separator. */
  "separator": "," | " " | "_" | ".",
  /** Format Decimals - Also format the integer portion of decimal numbers. When the separator is a period this is disabled to avoid ambiguity. */
  "includeDecimals": boolean,
  /** Exclude Years - Skip Japanese year tokens (xxxx年). Years rarely benefit from thousand separators. */
  "excludeYears": boolean,
  /** Exclude Hyphenated - Skip hyphen- and slash-separated digit groups (phone numbers, yyyy-mm-dd, yyyy/mm/dd). */
  "excludeHyphenated": boolean,
  /** Normalize Full-Width - Convert full-width digits (０-９) and numeric punctuation (．，－) to half-width before formatting. */
  "normalizeFullWidth": boolean
}
  /** Preferences accessible in the `decommafy` command */
  export type Decommafy = ExtensionPreferences & {
  /** Separator to Remove - The thousands separator character to strip. Period is intentionally excluded because it conflicts with decimal points. */
  "separator": "," | " " | "_"
}
  /** Preferences accessible in the `normalize-digits` command */
  export type NormalizeDigits = ExtensionPreferences & {}
  /** Preferences accessible in the `commafy-japanese` command */
  export type CommafyJapanese = ExtensionPreferences & {
  /** Internal Commas - Place commas inside each 4-digit unit group for additional readability. */
  "withInternalCommas": boolean,
  /** Exclude Years - Skip Japanese year tokens (xxxx年). */
  "excludeYears": boolean,
  /** Exclude Hyphenated - Skip hyphen- and slash-separated digit groups (phone numbers, yyyy-mm-dd, yyyy/mm/dd). */
  "excludeHyphenated": boolean,
  /** Normalize Full-Width - Convert full-width digits (０-９) and numeric punctuation (．，－) to half-width before formatting. */
  "normalizeFullWidth": boolean
}
  /** Preferences accessible in the `preview-commafy` command */
  export type PreviewCommafy = ExtensionPreferences & {
  /** Minimum Digits - Minimum integer-part digit count before commas are inserted. */
  "minDigits": string,
  /** Separator - Character used as the thousands separator in the Commafy preview. */
  "separator": "," | " " | "_" | ".",
  /** Format Decimals - Also format the integer portion of decimal numbers in the Commafy preview. */
  "includeDecimals": boolean,
  /** Exclude Years - Skip Japanese year tokens (xxxx年) in both previews. */
  "excludeYears": boolean,
  /** Exclude Hyphenated - Skip hyphen- and slash-separated digit groups (phone numbers, yyyy-mm-dd, yyyy/mm/dd). */
  "excludeHyphenated": boolean,
  /** Normalize Full-Width - Convert full-width digits (０-９) and numeric punctuation (．，－) to half-width before previewing. */
  "normalizeFullWidth": boolean
}
}

declare namespace Arguments {
  /** Arguments passed to the `commafy` command */
  export type Commafy = {}
  /** Arguments passed to the `decommafy` command */
  export type Decommafy = {}
  /** Arguments passed to the `normalize-digits` command */
  export type NormalizeDigits = {}
  /** Arguments passed to the `commafy-japanese` command */
  export type CommafyJapanese = {}
  /** Arguments passed to the `preview-commafy` command */
  export type PreviewCommafy = {}
}

