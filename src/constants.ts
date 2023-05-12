/**
 * **한국어**
 *
 * 한글 음절의 시작 유니코드.
 * "가"의 유니코드 값입니다.
 *
 * ---
 *
 * **English**
 *
 * The starting Unicode of Hangul syllables.
 * The Unicode value of "가".
 */
export const HANGUL_SYLLABLES_START = 0xac00;
/**
 * **한국어**
 *
 * 한글 음절의 끝 유니코드.
 * "힣"의 유니코드 값입니다.
 *
 * ---
 *
 * **English**
 *
 * The ending Unicode of Hangul syllables.
 * The Unicode value of "힣".
 */
export const HANGUL_SYLLABLES_END = 0xd7a3;
/**
 * **한국어**
 *
 * 한글 음절의 개수.
 * 초성 19개, 중성 21개, 종성 27개의 조합으로 이루어져 있습니다.
 * 종성은 없을 수도 있습니다.
 *
 * ∴ 19 × 21 × (27 + 1) = 11,172
 *
 * ---
 *
 * **English**
 *
 * The number of Hangul syllables.
 * It consists of 19 leading consonants, 21 vowels, and 27 trailing consonants.
 * Trailing consonants can be empty.
 *
 * ∴ 19 × 21 × (27 + 1) = 11,172
 */
export const HANGUL_SYLLABLES_COUNT = 11172;

/**
 * **한국어**
 *
 * 한글 자음의 시작 유니코드.
 * "ㄱ"의 유니코드 값입니다.
 *
 * ---
 *
 * **English**
 *
 * The starting Unicode of Hangul consonants.
 * The Unicode value of "ㄱ".
 */
export const HANGUL_CONSONANTS_START = 0x3131;
/**
 * **한국어**
 *
 * 한글 자음의 끝 유니코드.
 * "ㅎ"의 유니코드 값입니다.
 *
 * ---
 *
 * **English**
 *
 * The ending Unicode of Hangul consonants.
 * The Unicode value of "ㅎ".
 */
export const HANGUL_CONSONANTS_END = 0x314e;
/**
 * **한국어**
 *
 * 한글 자음의 개수.
 * 초성과 종성에 사용될 수 있는 모든 자음의 개수입니다.
 *
 * ---
 *
 * **English**
 *
 * The number of Hangul consonants.
 * The number of all consonants that can be used in leading and trailing consonants.
 */
export const HANGUL_CONSONANTS_COUNT = 30;
/**
 * **한국어**
 *
 * 한글 초성의 개수.
 *
 * ---
 *
 * **English**
 *
 * The number of Hangul leading consonants.
 */
export const HANGUL_LEADING_CONSONANTS_COUNT = 19;
/**
 * **한국어**
 *
 * 한글 종성의 개수.
 *
 * ---
 *
 * **English**
 *
 * The number of Hangul trailing consonants.
 */
export const HANGUL_TRAILING_CONSONANTS_COUNT = 27;

/**
 * **한국어**
 *
 * 한글 모음의 시작 유니코드.
 * "ㅏ"의 유니코드 값입니다.
 *
 * ---
 *
 * **English**
 *
 * The starting Unicode of Hangul vowels.
 * The Unicode value of "ㅏ".
 */
export const HANGUL_VOWELS_START = 0x314f;
/**
 * **한국어**
 *
 * 한글 모음의 끝 유니코드.
 * "ㅣ"의 유니코드 값입니다.
 *
 * ---
 *
 * **English**
 *
 * The ending Unicode of Hangul vowels.
 * The Unicode value of "ㅣ".
 */
export const HANGUL_VOWELS_END = 0x3163;
/**
 * **한국어**
 *
 * 한글 모음의 개수.
 *
 * ---
 *
 * **English**
 *
 * The number of Hangul vowels.
 */
export const HANGUL_VOWELS_COUNT = 21;

/**
 * **한국어**
 *
 * 한글 자음 목록.
 *
 * 유니코드 표 순서대로 정렬되어 있습니다.
 *
 * ---
 * **English**
 *
 * Hangul consonants.
 *
 * Sorted in Unicode order.
 */
export const HANGUL_CONSONANTS = [
  "ㄱ",
  "ㄲ",
  "ㄳ",
  "ㄴ",
  "ㄵ",
  "ㄶ",
  "ㄷ",
  "ㄸ",
  "ㄹ",
  "ㄺ",
  "ㄻ",
  "ㄼ",
  "ㄽ",
  "ㄾ",
  "ㄿ",
  "ㅀ",
  "ㅁ",
  "ㅂ",
  "ㅃ",
  "ㅄ",
  "ㅅ",
  "ㅆ",
  "ㅇ",
  "ㅈ",
  "ㅉ",
  "ㅊ",
  "ㅋ",
  "ㅌ",
  "ㅍ",
  "ㅎ",
] as const;

/**
 * **한국어**
 *
 * 한글 초성 목록.
 *
 * 유니코드 표 순서대로 정렬되어 있습니다.
 *
 * ---
 *
 * **English**
 *
 * Hangul leading consonants.
 *
 * Sorted in Unicode order.
 */
export const HANGUL_LEADING_CONSONANTS = [
  "ㄱ",
  "ㄲ",
  "ㄴ",
  "ㄷ",
  "ㄸ",
  "ㄹ",
  "ㅁ",
  "ㅂ",
  "ㅃ",
  "ㅅ",
  "ㅆ",
  "ㅇ",
  "ㅈ",
  "ㅉ",
  "ㅊ",
  "ㅋ",
  "ㅌ",
  "ㅍ",
  "ㅎ",
] as const;

/**
 * **한국어**
 *
 * 한글 종성 목록.
 * 종성은 없을 수도 있습니다.
 *
 * 유니코드 표 순서대로 정렬되어 있습니다.
 *
 * ---
 *
 * **English**
 *
 * Hangul trailing consonants.
 * Trailing consonants can be empty.
 *
 * Sorted in Unicode order.
 */
export const HANGUL_TRAILING_CONSONANTS = [
  "ㄱ",
  "ㄲ",
  "ㄳ",
  "ㄴ",
  "ㄵ",
  "ㄶ",
  "ㄷ",
  "ㄹ",
  "ㄺ",
  "ㄻ",
  "ㄼ",
  "ㄽ",
  "ㄾ",
  "ㄿ",
  "ㅀ",
  "ㅁ",
  "ㅂ",
  "ㅄ",
  "ㅅ",
  "ㅆ",
  "ㅇ",
  "ㅈ",
  "ㅊ",
  "ㅋ",
  "ㅌ",
  "ㅍ",
  "ㅎ",
] as const;

/**
 * **한국어**
 *
 * 한글 모음 목록.
 * 음절의 중성을 구성합니다.
 *
 * 유니코드 표 순서대로 정렬되어 있습니다.
 *
 * ---
 *
 * **English**
 *
 * Hangul vowels.
 * Compose the medial of a syllable.
 *
 * Sorted in Unicode order.
 */
export const HANGUL_VOWELS = [
  "ㅏ",
  "ㅐ",
  "ㅑ",
  "ㅒ",
  "ㅓ",
  "ㅔ",
  "ㅕ",
  "ㅖ",
  "ㅗ",
  "ㅘ",
  "ㅙ",
  "ㅚ",
  "ㅛ",
  "ㅜ",
  "ㅝ",
  "ㅞ",
  "ㅟ",
  "ㅠ",
  "ㅡ",
  "ㅢ",
  "ㅣ",
] as const;

/**
 * **한국어**
 *
 * 한글 자음 분리 목록.
 * "ㄲ", "ㄸ", "ㅃ", "ㅆ", "ㅉ"을 제외한 자음 겹낱자를 분리합니다.
 *
 * ---
 *
 * **English**
 *
 * List of disassembled Hangul consonants.
 * Disassemble composite consonant except "ㄲ", "ㄸ", "ㅃ", "ㅆ", "ㅉ".
 */
export const DISASSEMBLED_HANGUL_CONSONANTS_BY_CONSONANT = {
  ㄱ: "ㄱ",
  ㄲ: "ㄲ",
  ㄳ: "ㄱㅅ",
  ㄴ: "ㄴ",
  ㄵ: "ㄴㅈ",
  ㄶ: "ㄴㅎ",
  ㄷ: "ㄷ",
  ㄸ: "ㄸ",
  ㄹ: "ㄹ",
  ㄺ: "ㄹㄱ",
  ㄻ: "ㄹㅁ",
  ㄼ: "ㄹㅂ",
  ㄽ: "ㄹㅅ",
  ㄾ: "ㄹㅌ",
  ㄿ: "ㄹㅍ",
  ㅀ: "ㄹㅎ",
  ㅁ: "ㅁ",
  ㅂ: "ㅂ",
  ㅃ: "ㅃ",
  ㅄ: "ㅂㅅ",
  ㅅ: "ㅅ",
  ㅆ: "ㅆ",
  ㅇ: "ㅇ",
  ㅈ: "ㅈ",
  ㅉ: "ㅉ",
  ㅊ: "ㅊ",
  ㅋ: "ㅋ",
  ㅌ: "ㅌ",
  ㅍ: "ㅍ",
  ㅎ: "ㅎ",
} as const;
/**
 * **한국어**
 *
 * 한글 모음 분리 목록.
 * "ㅐ", "ㅒ", "ㅔ", "ㅖ"를 제외한 모음 겹낱자를 분리합니다.
 *
 * ---
 *
 * **English**
 *
 * List of disassembled Hangul vowels.
 * Disassemble composite vowel except "ㅐ", "ㅒ", "ㅔ", "ㅖ".
 */
export const DISASSEMBLED_HANGUL_VOWELS_BY_VOWEL = {
  ㅏ: "ㅏ",
  ㅐ: "ㅐ",
  ㅑ: "ㅑ",
  ㅒ: "ㅒ",
  ㅓ: "ㅓ",
  ㅔ: "ㅔ",
  ㅕ: "ㅕ",
  ㅖ: "ㅖ",
  ㅗ: "ㅗ",
  ㅘ: "ㅗㅏ",
  ㅙ: "ㅗㅐ",
  ㅚ: "ㅗㅣ",
  ㅛ: "ㅛ",
  ㅜ: "ㅜ",
  ㅝ: "ㅜㅓ",
  ㅞ: "ㅜㅔ",
  ㅟ: "ㅜㅣ",
  ㅠ: "ㅠ",
  ㅡ: "ㅡ",
  ㅢ: "ㅡㅣ",
  ㅣ: "ㅣ",
} as const;
