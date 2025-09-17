# React Native from Zero

## Structure & components
## State hook
- Two type of data that use control components
1. state: 
    - mutable
2. props:
    - immutable

- 2 way to create a page
1. class component
2. Hook function

## Styles & style sheet
## Responsive UI with Flexbox


### The difference between .js and .tsx files lies mainly in language features and type safety
✅ 1. .js – JavaScript File
- Standard JavaScript.
- No type-checking.
- Doesn’t support TypeScript features like interfaces, types, or annotations.
- Can use React, but if you're using JSX inside, the file extension is usually .jsx.

✅ 2. .tsx – TypeScript + JSX File
- Written in TypeScript, which is a superset of JavaScript.
- Supports type-checking at compile time.
- Specifically allows JSX syntax (React components).
- Prevents many bugs early due to static typing.
- Used in TypeScript-based React Native or React projects.

## List, ScrollView & RefreshConTrol

> **useLayoutEffect**
> <br> - a React Hook that runs synchronously after all DOM mutations (or layout changes) but before the screen is painted to the user.
<br> **🧠 In plain English:**
It lets you update the layout or UI before the user sees it.