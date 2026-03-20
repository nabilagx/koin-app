// navbar.js — Komponen navbar global KOIN
// Import di semua halaman dengan: <script type="module" src="./navbar.js"></script>

import { supabase } from './supabase.js'

// ── INJECT NAVBAR ──────────────────────────────────────────────────────────
async function initNavbar() {
  // Cek session
  const { data: { session } } = await supabase.auth.getSession()
  const userName = sessionStorage.getItem('userName') || ''
  const userRole = sessionStorage.getItem('userRole') || 'guest'
  const isLoggedIn = !!session

  // Buat navbar element
  const navbar = document.createElement('div')
  navbar.id = 'koin-navbar'
  navbar.innerHTML = `
    <div style="
      position: fixed;
      top: 12px; right: 12px;
      z-index: 9999;
      display: flex;
      align-items: center;
      gap: 6px;
    ">
      ${isLoggedIn ? `
        <!-- User info -->
        <div style="
          background: rgba(255,255,255,0.9);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 5px 12px;
          font-size: 11px;
          font-weight: 600;
          color: #1A5276;
          box-shadow: 0 2px 10px rgba(0,0,0,0.08);
          display: flex;
          align-items: center;
          gap: 5px;
        ">
          ${userRole === 'parent' ? '👨‍👩‍👧' : '👦'}
          ${userName}
        </div>

        <!-- Dashboard button (khusus parent) -->
        ${userRole === 'parent' ? `
          <button onclick="window.location.href='dashboard.html'" style="
            background: rgba(255,255,255,0.9);
            backdrop-filter: blur(10px);
            border: none;
            border-radius: 20px;
            padding: 6px 12px;
            font-size: 11px;
            font-weight: 600;
            color: #2E86C1;
            cursor: pointer;
            box-shadow: 0 2px 10px rgba(0,0,0,0.08);
            display: flex;
            align-items: center;
            gap: 4px;
          ">
            📊 Dashboard
          </button>` : ''}

        <!-- Logout button -->
        <button id="btn-logout-navbar" style="
          background: rgba(255,255,255,0.9);
          backdrop-filter: blur(10px);
          border: none;
          border-radius: 20px;
          padding: 6px 12px;
          font-size: 11px;
          font-weight: 600;
          color: #E74C3C;
          cursor: pointer;
          box-shadow: 0 2px 10px rgba(0,0,0,0.08);
          display: flex;
          align-items: center;
          gap: 4px;
        ">
          🚪 Keluar
        </button>
      ` : `
        <!-- Login button (kalau belum login) -->
        <button onclick="window.location.href='login.html'" style="
          background: rgba(243,156,18,0.9);
          backdrop-filter: blur(10px);
          border: none;
          border-radius: 20px;
          padding: 6px 14px;
          font-size: 11px;
          font-weight: 700;
          color: white;
          cursor: pointer;
          box-shadow: 0 2px 10px rgba(243,156,18,0.3);
        ">
          🔐 Login
        </button>
      `}
    </div>
  `

  document.body.appendChild(navbar)

  // Event logout
  const btnLogout = document.getElementById('btn-logout-navbar')
  if (btnLogout) {
    btnLogout.addEventListener('click', async () => {
      if (confirm('Yakin mau keluar dari KOIN?')) {
        await supabase.auth.signOut()
        sessionStorage.clear()
        window.location.href = 'login.html'
      }
    })
  }
}

// ── JALANKAN ───────────────────────────────────────────────────────────────
initNavbar()