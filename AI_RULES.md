# 🤖 Kinetiq Retail - AI Development Rules

This document defines strict rules and architecture for AI-assisted development in this project.

====================================================
🚨 GLOBAL RULES (MANDATORY)
===========================

1. DO NOT duplicate any code, components, pages, or logic.
2. DO NOT rebuild existing features.
3. ALWAYS extend and reuse existing code.
4. Maintain a single consistent architecture.
5. Avoid naming conflicts (files, variables, components, routes).
6. All modules must be integrated into ONE unified system.
7. Code must be clean, modular, and production-ready.

FINAL RULE:
👉 Extend the project, DO NOT recreate it.

====================================================
🌍 LANGUAGE & UI RULES
======================

* The entire application MUST be in Arabic.
* All UI text MUST be written in Arabic.
* RTL (Right-To-Left) layout is REQUIRED.
* French is allowed only as a secondary optional language.
* DO NOT use English in UI.

====================================================
⚛️ TECH STACK
=============

* React 18 (with TypeScript)
* React Router
* Zustand (state management)
* Tailwind CSS
* Material Symbols (icons)
* shadcn/ui (only when necessary)
* SQLite (sql.js)
* IndexedDB

====================================================
🗄️ DATABASE ARCHITECTURE (CRITICAL)
====================================

👉 SQLite (sql.js) = data processing
👉 IndexedDB = persistent storage

Rules:

* Use SQLite (sql.js) for:

  * Tables
  * Queries
  * Relations

* Use IndexedDB for:

  * Saving database file
  * Loading on app start
  * Persistence

STRICT RULES:

* ALWAYS use `dbService` for database operations
* NEVER access database directly from components
* ALWAYS call `dbService.save()` after write operations
* DO NOT use localStorage for main data

====================================================
🔄 DATA FLOW
============

Components → Services → Database

Rules:

* Components handle UI only
* Services handle business logic and database
* Database layer is isolated

====================================================
🧠 STATE MANAGEMENT
===================

* Use Zustand ONLY
* Auth state via `useAuthStore`
* Local state via React hooks (useState, useEffect)
* DO NOT use Redux

====================================================
🔐 AUTHENTICATION RULES
=======================

* Local authentication only (no backend)
* Store users in SQLite
* Passwords MUST be hashed
* Validate all inputs
* Show Arabic error messages

====================================================
👥 USER ROLES & PERMISSIONS
===========================

Roles:

* Admin (مدير)
* Cashier (بائع)

Rules:

* Enforce role-based access everywhere
* Protect routes and features

====================================================
🔄 ROUTING RULES
================

* Use React Router
* Protected routes using `isAuthenticated`
* Use MainLayout for authenticated pages
* SPA only (no page reload)

====================================================
🎨 UI/UX RULES
==============

* Use Tailwind CSS ONLY
* Use Material Symbols for icons
* Use shadcn/ui only when necessary
* Follow design from:
  👉 /UX-UI folder

Rules:

* Extract colors, typography, layout
* Maintain consistency
* Full RTL support
* Do NOT invent new styles unless necessary

====================================================
📁 FILE STRUCTURE
=================

* src/pages/
* src/layouts/
* src/services/
* src/store/
* src/utils/
* src/components/
* src/database/

Rules:

* Separate logic from UI
* Use reusable components
* Keep files clean and modular

====================================================
🧾 CORE MODULES
===============

* POS (المبيعات)
* المنتجات
* المخزون
* الموردين
* التقارير
* المستخدمين
* الإعدادات
* Dashboard (لوحة التحكم)

====================================================
📊 DASHBOARD RULES
==================

* Main screen after login
* Show:

  * Today's sales
  * Product count
  * Low stock alerts
* Navigation to all modules

====================================================
⚙️ SETTINGS RULES
=================

* Language (AR default, FR optional)
* Theme (Light/Dark)
* Backup & Restore (JSON)
* Currency (درهم)
* Change password

====================================================
🛡️ SECURITY RULES
==================

* Hash passwords
* Validate all inputs
* Prevent unauthorized access
* Handle errors with try/catch

====================================================
⚡ PERFORMANCE RULES
===================

* Lazy loading for routes
* Memoization where needed
* Debounce search inputs
* Virtual scrolling for large lists

====================================================
📤 AI OUTPUT RULES
==================

When generating code:

* Clearly specify:

  * New files
  * Updated files

* DO:

  * Extend existing code
  * Reuse services and components

* DO NOT:

  * Duplicate files
  * Override working logic

====================================================
🎯 FINAL OBJECTIVE
==================

👉 Build a complete Arabic POS system using:

* React + Vite
* SQLite (sql.js)
* IndexedDB
* Zustand
* Tailwind CSS

System must be:

* Fully offline
* Fully RTL
* Fully integrated
* Production-ready
