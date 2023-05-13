# API

[[toc]]

## disassembleHangul

```ts
disassembleHangul("훈민정음");
// "ㅎㅜㄴㅁㅣㄴㅈㅓㅇㅇㅡㅁ"

disassembleHangul("값어치");
// "ㄱㅏㅂㅅㅇㅓㅊㅣ"

disassembleHangul("꽃초롱 불 밝히듯 눈을 밝힐까");
// "ㄲㅗㅊㅊㅗㄹㅗㅇ ㅂㅜㄹ ㅂㅏㄹㄱㅎㅣㄷㅡㅅ ㄴㅜㄴㅇㅡㄹ ㅂㅏㄹㄱㅎㅣㄹㄲㅏ"

disassembleHangul("한글(Hangul)");
// "ㅎㅏㄴㄱㅡㄹ(Hangul)"

disassembleHangul("ㄲㄺㅖㅞ");
// "ㄲㄹㄱㅖㅜㅔ"
```

## disassembleHangulConsonant

```ts
disassembleHangulConsonant("ㄱ");
// "ㄱ"

disassembleHangulConsonant("ㄲ");
// "ㄲ"

disassembleHangulConsonant("ㄺ");
// "ㄹㄱ"

disassembleHangulConsonant("가");
// "가"

disassembleHangulConsonant("1");
// "1"
```

## disassembleHangulSyllable

```ts
disassembleHangulSyllable("가");
// ["ㄱ", "ㅏ", ""]

disassembleHangulSyllable("강");
// ["ㄱ", "ㅏ", "ㅇ"]

disassembleHangulSyllable("떘");
// ["ㄸ", "ㅒ", "ㅆ"]

disassembleHangulSyllable("괂");
// ["ㄱ", "ㅗㅏ", "ㄴㅎ"]

disassembleHangulSyllable("a");
// undefined
```

## disassembleHangulToGroups

```ts
disassembleHangulToGroups("훈민정음");
// [
//   ["ㅎ", "ㅜ", "ㄴ"],
//   ["ㅁ", "ㅣ", "ㄴ"],
//   ["ㅈ", "ㅓ", "ㅇ"],
//   ["ㅇ", "ㅡ", "ㅁ"],
// ]

disassembleHangulToGroups("한글(Hangul)");
// [
//   ["ㅎ", "ㅏ", "ㄴ"],
//   ["ㄱ", "ㅡ", "ㄹ"],
//   ["("],
//   ["H"],
//   ["a"],
//   ["n"],
//   ["g"],
//   ["u"],
//   ["l"],
//   [")"],
// ]

disassembleHangulToGroups("ㄲㄺㅖㅞ");
// [["ㄲ"], ["ㄹ", "ㄱ"], ["ㅖ"], ["ㅜ", "ㅔ"]]
```

## disassembleHangulVowel

```ts
disassembleHangulVowel("ㅏ");
// "ㅏ"

disassembleHangulVowel("ㅒ");
// "ㅒ"

disassembleHangulVowel("ㅞ");
// "ㅜㅔ"

disassembleHangulVowel("가");
// "가"

disassembleHangulVowel("1");
// "1"
```

## getHangulLeadingConsonants

```ts
getHangulLeadingConsonants("훈민정음");
// "ㅎㅁㅈㅇ"

getHangulLeadingConsonants("꽃초롱 불 밝히듯 눈을 밝힐까");
// "ㄲㅊㄹ ㅂ ㅂㅎㄷ ㄴㅇ ㅂㅎㄲ"

getHangulLeadingConsonants("한글(Hangul)");
// "ㅎㄱ(Hangul)"
```

## hangulIncludes

```ts
hangulIncludes("놀부", "노");
// true

hangulIncludes("놀부", "놃");
// true

hangulIncludes("놀부", "ㄴㅂ");
// false
```

## isHangul

```ts
isHangul("ㄱ");
// true

isHangul("ㅏ");
// true

isHangul("가");
// true

isHangul("ힰ");
// false

isHangul("力");
// false
```

## isHangulConsonant

```ts
isHangulConsonant("ㄱ");
// true

isHangulConsonant("ㄶ");
// true

isHangulConsonant("ㅏ");
// false

isHangulConsonant("가");
// false

isHangulConsonant("ힰ");
// false
```

## isHangulLeadingConsonant

```ts
isHangulLeadingConsonant("ㄱ");
// true

isHangulLeadingConsonant("ㄶ");
// false

isHangulLeadingConsonant("ㅏ");
// false

isHangulLeadingConsonant("가");
// false

isHangulLeadingConsonant("ힰ");
// false
```

## isHangulSyllable

```ts
isHangulSyllable("가");
// true

isHangulSyllable("ㄱ");
// false

isHangulSyllable("ㅏ");
// false

isHangulSyllable("ힰ");
// false

isHangulSyllable("力");
// false
```

## isHangulTrailingConsonant

```ts
isHangulLeadingConsonant("ㄱ");
// true

isHangulLeadingConsonant("ㄶ");
// true

isHangulLeadingConsonant("ㅉ");
// false

isHangulLeadingConsonant("ㅏ");
// false

isHangulLeadingConsonant("가");
// false
```

## isHangulVowel

```ts
isHangul("ㅏ");
// true

isHangul("ㄱ");
// false

isHangul("가");
// false

isHangul("ힰ");
// false

isHangul("力");
// false
```

## matchLeadingConsonants

```ts
matchLeadingConsonants("훈민정음", "ㅎㅁ");
// true

matchLeadingConsonants("훈민정음", "ㄷ");
// false

matchLeadingConsonants("날다람쥐 날다", "ㄹㅈ ㄴㄷ");
// true

matchLeadingConsonants("날다람쥐 날다", "ㄹㅈㄴㄷ");
// false
```
