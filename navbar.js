// navbar.js — non-module version
async function initNavbar() {
  const sb = window.sb
  if (!sb) return

  const { data: { session } } = await sb.auth.getSession()
  const userName = sessionStorage.getItem('userName') || ''
  const userRole = sessionStorage.getItem('userRole') || 'guest'

  let nav = document.getElementById('koin-navbar')
  if (!nav) {
    nav = document.createElement('div')
    nav.id = 'koin-navbar'
    nav.style.cssText = 'position:fixed;top:12px;right:12px;z-index:9999;display:flex;gap:6px;align-items:center'
    document.body.appendChild(nav)
  }

  const btnStyle = 'background:rgba(255,255,255,0.95);border:none;border-radius:20px;padding:6px 12px;font-size:11px;font-weight:600;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,0.1);color:#1A5276'

  if (session && userName) {
    nav.innerHTML = `
      <span style="${btnStyle}">${userRole === 'parent' ? '👨‍👩‍👧' : '👦'} ${userName}</span>
      ${userRole === 'parent' ? `<button style="${btnStyle}" onclick="location.href='dashboard.html'">📊</button>` : ''}
      <button style="${btnStyle};color:#E74C3C" onclick="doLogout()">🚪 Keluar</button>
    `
  } else {
    nav.innerHTML = `<button style="${btnStyle}" onclick="location.href='login.html'">🔐 Login</button>`
  }
}

async function doLogout() {
  if (confirm('Yakin mau keluar?')) {
    await window.sb.auth.signOut()
    sessionStorage.clear()
    location.href = 'login.html'
  }
}

// Auto init
document.addEventListener('DOMContentLoaded', initNavbar)
