export { default as Header } from "./Header";
export { default as Logo } from "./components/Logo"
export { default as DesktopNav } from "./components/DesktopNav"
export { default as Actions } from "./components/Actions"
export { default as MobileNav } from "./components/MobileNav"



// 1) الشاشات (Breakpoints)

// تستخدمهم قبل أي كلاس تاني:

// mobile:
// tablet:
// desktop:

// 2) الـ Container
// container


// بس.

// ده بيظبط: التمركز + max-width + padding per screen.

// 3) Grid Columns
// grid
// mobile:grid-cols-mobile
// tablet:grid-cols-tablet
// desktop:grid-cols-desktop

// 4) Gaps (بين الأعمدة أو العناصر)
// gap-mobile
// tablet:gap-tablet
// desktop:gap-desktop


// 6) Flex الأساسي في الهيدر
// flex
// items-center
// justify-between
// gap-4

        // "grid grid-cols-mobile tablet:grid-cols-tablet desktop:grid-cols-desktop",
        // "gap-mobile tablet:gap-tablet desktop:gap-desktop"
        
// 9) Layout أساسي لأي صف أو صفين
// لو عايز اتنين جنب بعض:
// grid
// mobile:grid-cols-1
// tablet:grid-cols-2
// desktop:grid-cols-2

// gap-mobile
// tablet:gap-tablet
// desktop:gap-desktop

// لو عايز منتج أو كاردز:
// grid
// mobile:grid-cols-2
// tablet:grid-cols-3
// desktop:grid-cols-4

// 10) أيقونات / أزرار
// flex items-center gap-2
