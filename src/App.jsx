import { useState } from "react";

// ─── TRANSLATIONS ─────────────────────────────────────────────────────────────
const T = {
  en: {
    appName: "Momentum Studio",
    tagline: "Empowering every generation",
    signIn: "Sign In", signingIn: "Signing in…",
    email: "EMAIL", password: "PASSWORD",
    invalidLogin: "Invalid email or password",
    demoLogins: "DEMO LOGINS",
    dashboard: "Dashboard", clients: "Clients", trainers: "Trainers",
    bookings: "Bookings", billing: "Billing", finance: "Finance",
    inquiries: "Inquiries", signOut: "Sign Out",
    mySessions: "My Sessions", myClients: "My Clients",
    bookSession: "Book Session", contactStudio: "Contact Studio",
    myProgress: "My Progress", history: "History",
    commandCentre: "COMMAND CENTRE", invoices: "Invoices",
    clientBilling: "Client Billing", summary: "Summary",
    welcome: "WELCOME BACK",
    markComplete: "✓ Complete", markDone: "✓ Done",
    raiseInvoice: "Raise Invoice", markPaid: "Mark Paid",
    addClient: "+ Add Client", sendInquiry: "Send Inquiry",
    confirmBooking: "Confirm Booking", markResolved: "Mark Resolved",
    markAllRead: "Mark all read", close: "Close",
    upcoming: "upcoming", completed: "completed",
    open: "open", resolved: "resolved", pending: "pending", paid: "paid",
    billingAlerts: "Billing Alerts", actionRequired: "Action Required",
    lastInBlock: "Last in Block", raiseNow: "Raise Now",
    noUpcoming: "No upcoming sessions", noHistory: "No completed sessions yet",
    noInquiries: "No inquiries yet", noSessions: "No sessions yet — book one!",
    subject: "SUBJECT", message: "MESSAGE",
    selectDate: "SELECT DATE", preferredTime: "PREFERRED TIME",
    sessionsWith: "Sessions are with",
    blockComplete: "Block Complete", billingDue: "Billing Due",
    totalClients: "Total Clients", activeTrainers: "Active Trainers",
    revenueMonth: "Revenue (Month)", notifications: "Recent Notifications",
    totalRaised: "Total Raised", outstanding: "Outstanding",
    invoiceLog: "Invoice Log", financialSummary: "FINANCIAL SUMMARY",
    previousInquiries: "Previous Inquiries",
    block: "Block", session: "Session", joined: "Joined",
    trainer: "Trainer", client: "Client",
    fullName: "FULL NAME", assignTrainer: "ASSIGN TRAINER",
    phone: "PHONE", emailLabel: "EMAIL",
    rescheduleNote: "e.g. Reschedule session",
    writeMessage: "Write your message…",
  },
  ta: {
    appName: "மோமென்டம் ஸ்டுடியோ",
    tagline: "தலைமுறையையும் மேம்படுத்துதல்",
    signIn: "உள்நுழை", signingIn: "உள்நுழைகிறது…",
    email: "மின்னஞ்சல்", password: "கடவுச்சொல்",
    invalidLogin: "தவறான மின்னஞ்சல் அல்லது கடவுச்சொல்",
    demoLogins: "டெமோ உள்நுழைவுகள்",
    dashboard: "டாஷ்போர்டு", clients: "வாடிக்கையாளர்கள்", trainers: "பயிற்சியாளர்கள்",
    bookings: "முன்பதிவுகள்", billing: "பில்லிங்", finance: "நிதி",
    inquiries: "விசாரணைகள்", signOut: "வெளியேறு",
    mySessions: "என் அமர்வுகள்", myClients: "என் வாடிக்கையாளர்கள்",
    bookSession: "அமர்வு முன்பதிவு", contactStudio: "ஸ்டுடியோவை தொடர்பு கொள்",
    myProgress: "என் முன்னேற்றம்", history: "வரலாறு",
    commandCentre: "கமாண்ட் சென்டர்", invoices: "இன்வாய்ஸ்கள்",
    clientBilling: "வாடிக்கையாளர் பில்லிங்", summary: "சுருக்கம்",
    welcome: "மீண்டும் வரவேற்கிறோம்",
    markComplete: "✓ முடிந்தது", markDone: "✓ முடிந்தது",
    raiseInvoice: "இன்வாய்ஸ் உருவாக்கு", markPaid: "பணம் பெற்றது",
    addClient: "+ வாடிக்கையாளர் சேர்", sendInquiry: "விசாரணை அனுப்பு",
    confirmBooking: "முன்பதிவு உறுதிப்படுத்து", markResolved: "தீர்வு காணப்பட்டது",
    markAllRead: "அனைத்தையும் படித்ததாக குறி", close: "மூடு",
    upcoming: "வரவிருக்கும்", completed: "முடிந்தது",
    open: "திறந்த", resolved: "தீர்க்கப்பட்டது", pending: "நிலுவை", paid: "செலுத்தப்பட்டது",
    billingAlerts: "பில்லிங் எச்சரிக்கைகள்", actionRequired: "நடவடிக்கை தேவை",
    lastInBlock: "தொகுதியின் கடைசி", raiseNow: "இப்போது உருவாக்கு",
    noUpcoming: "வரவிருக்கும் அமர்வுகள் இல்லை", noHistory: "முடிந்த அமர்வுகள் இல்லை",
    noInquiries: "விசாரணைகள் இல்லை", noSessions: "அமர்வுகள் இல்லை — முன்பதிவு செய்யுங்கள்!",
    subject: "தலைப்பு", message: "செய்தி",
    selectDate: "தேதி தேர்வு", preferredTime: "விரும்பிய நேரம்",
    sessionsWith: "அமர்வுகள் உடன்",
    blockComplete: "தொகுதி முடிந்தது", billingDue: "பில்லிங் நிலுவை",
    totalClients: "மொத்த வாடிக்கையாளர்கள்", activeTrainers: "செயலில் உள்ள பயிற்சியாளர்கள்",
    revenueMonth: "மாத வருவாய்", notifications: "அண்மை அறிவிப்புகள்",
    totalRaised: "மொத்தம் உருவாக்கப்பட்டது", outstanding: "நிலுவை",
    invoiceLog: "இன்வாய்ஸ் பதிவு", financialSummary: "நிதி சுருக்கம்",
    previousInquiries: "முந்தைய விசாரணைகள்",
    block: "தொகுதி", session: "அமர்வு", joined: "சேர்ந்தது",
    trainer: "பயிற்சியாளர்", client: "வாடிக்கையாளர்",
    fullName: "முழு பெயர்", assignTrainer: "பயிற்சியாளர் நியமி",
    phone: "தொலைபேசி", emailLabel: "மின்னஞ்சல்",
    rescheduleNote: "எ.கா. அமர்வு மாற்றம்",
    writeMessage: "உங்கள் செய்தி எழுதுங்கள்…",
  },
  hi: {
    appName: "मोमेंटम मद्रास",
    tagline: "फिटनेस प्रबंधन",
    signIn: "साइन इन करें", signingIn: "साइन इन हो रहा है…",
    email: "ईमेल", password: "पासवर्ड",
    invalidLogin: "गलत ईमेल या पासवर्ड",
    demoLogins: "डेमो लॉगिन",
    dashboard: "डैशबोर्ड", clients: "क्लाइंट", trainers: "ट्रेनर",
    bookings: "बुकिंग", billing: "बिलिंग", finance: "वित्त",
    inquiries: "पूछताछ", signOut: "साइन आउट",
    mySessions: "मेरे सत्र", myClients: "मेरे क्लाइंट",
    bookSession: "सत्र बुक करें", contactStudio: "स्टूडियो से संपर्क करें",
    myProgress: "मेरी प्रगति", history: "इतिहास",
    commandCentre: "कमांड सेंटर", invoices: "इनवॉइस",
    clientBilling: "क्लाइंट बिलिंग", summary: "सारांश",
    welcome: "वापस स्वागत है",
    markComplete: "✓ पूर्ण", markDone: "✓ हो गया",
    raiseInvoice: "इनवॉइस बनाएं", markPaid: "भुगतान हुआ",
    addClient: "+ क्लाइंट जोड़ें", sendInquiry: "पूछताछ भेजें",
    confirmBooking: "बुकिंग पुष्टि करें", markResolved: "हल किया गया",
    markAllRead: "सभी पढ़े हुए करें", close: "बंद करें",
    upcoming: "आगामी", completed: "पूर्ण",
    open: "खुला", resolved: "हल किया", pending: "लंबित", paid: "भुगतान",
    billingAlerts: "बिलिंग अलर्ट", actionRequired: "कार्रवाई आवश्यक",
    lastInBlock: "ब्लॉक का अंतिम", raiseNow: "अभी बनाएं",
    noUpcoming: "कोई आगामी सत्र नहीं", noHistory: "अभी तक कोई सत्र पूर्ण नहीं",
    noInquiries: "कोई पूछताछ नहीं", noSessions: "कोई सत्र नहीं — बुक करें!",
    subject: "विषय", message: "संदेश",
    selectDate: "तारीख चुनें", preferredTime: "पसंदीदा समय",
    sessionsWith: "सत्र के साथ",
    blockComplete: "ब्लॉक पूर्ण", billingDue: "बिलिंग बकाया",
    totalClients: "कुल क्लाइंट", activeTrainers: "सक्रिय ट्रेनर",
    revenueMonth: "मासिक आय", notifications: "हाल की सूचनाएं",
    totalRaised: "कुल बनाए गए", outstanding: "बकाया",
    invoiceLog: "इनवॉइस लॉग", financialSummary: "वित्तीय सारांश",
    previousInquiries: "पिछली पूछताछ",
    block: "ब्लॉक", session: "सत्र", joined: "शामिल हुए",
    trainer: "ट्रेनर", client: "क्लाइंट",
    fullName: "पूरा नाम", assignTrainer: "ट्रेनर नियुक्त करें",
    phone: "फोन", emailLabel: "ईमेल",
    rescheduleNote: "जैसे: सत्र पुनर्निर्धारित करें",
    writeMessage: "अपना संदेश लिखें…",
  }
};

// ─── DATA ─────────────────────────────────────────────────────────────────────
const USERS = [
  { id: "su1", role: "superadmin", name: "Akkil",         email: "akkil@momentstudio.com",    password: "super123",   avatar: "AK" },
  { id: "fi1", role: "finance",    name: "Finance Team",  email: "finance@momentstudio.com",  password: "finance123", avatar: "FT" },
  { id: "tr1", role: "trainer",    name: "Trainer One",   email: "trainer1@momentstudio.com", password: "trainer123", avatar: "T1" },
  { id: "tr2", role: "trainer",    name: "Trainer Two",   email: "trainer2@momentstudio.com", password: "trainer123", avatar: "T2" },
  { id: "tr3", role: "trainer",    name: "Trainer Three", email: "trainer3@momentstudio.com", password: "trainer123", avatar: "T3" },
  { id: "cl1", role: "client",     name: "Demo Client",   email: "client@@momentstudio.com",   password: "client123",  avatar: "DC", trainerId: "tr1" },
];

const INIT_CLIENTS = [
  { id: "cl1", name: "Demo Client",  trainerId: "tr1", trainerName: "Trainer One",   sessionsUsed: 5, blockNum: 1, phone: "9876543210", email: "client@momentummadras.com",  joinDate: "2026-01-10" },
  { id: "cl2", name: "Sample Client",trainerId: "tr2", trainerName: "Trainer Two",   sessionsUsed: 9, blockNum: 1, phone: "9876543211", email: "sample@momentummadras.com",  joinDate: "2026-02-01" },
];

const INIT_BOOKINGS = [
  { id: "b1", clientId: "cl1", clientName: "Demo Client",   trainerId: "tr1", trainerName: "Trainer One", date: "2026-03-20", time: "08:00", status: "upcoming",  sessionNum: 6 },
  { id: "b2", clientId: "cl2", clientName: "Sample Client", trainerId: "tr2", trainerName: "Trainer Two", date: "2026-03-19", time: "10:00", status: "upcoming",  sessionNum: 10 },
  { id: "b3", clientId: "cl1", clientName: "Demo Client",   trainerId: "tr1", trainerName: "Trainer One", date: "2026-03-17", time: "09:00", status: "completed", sessionNum: 5 },
];

const INIT_INVOICES = [];
const INIT_INQUIRIES = [];

const BLOCK_PRICE = 25000;
const GST_RATE    = 0.18;
const TRAINERS_LIST = [
  { id: "tr1", name: "Trainer One" },
  { id: "tr2", name: "Trainer Two" },
  { id: "tr3", name: "Trainer Three" },
];

const ROLE_META = {
  superadmin: { label: "Super Admin",  color: "#ff6b2b", bg: "rgba(255,107,43,0.12)",  icon: "◆" },
  finance:    { label: "Finance Team", color: "#32c864", bg: "rgba(50,200,100,0.12)",  icon: "◎" },
  trainer:    { label: "Trainer",      color: "#ffaa00", bg: "rgba(255,170,0,0.12)",   icon: "◉" },
  client:     { label: "Client",       color: "#ff6b2b", bg: "rgba(255,107,43,0.12)",  icon: "◈" },
};

const fmt = (n) => `₹${Number(n).toLocaleString("en-IN")}`;

// ─── STYLES ───────────────────────────────────────────────────────────────────
const S = `
  *{box-sizing:border-box;margin:0;padding:0}
  ::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:#0a0a08}::-webkit-scrollbar-thumb{background:#2a2010;border-radius:2px}
  .card{background:#141208;border:1px solid #2a1e0a;border-radius:14px;padding:20px}
  .btn{border:none;cursor:pointer;font-family:'DM Sans',sans-serif;font-weight:700;border-radius:8px;transition:all 0.18s}
  .btn-orange{background:linear-gradient(135deg,#ff6b2b,#ff9500);color:#fff;padding:10px 20px;font-size:13px;box-shadow:0 4px 14px rgba(255,107,43,0.3)}
  .btn-orange:hover{transform:translateY(-1px);box-shadow:0 6px 20px rgba(255,107,43,0.4)}
  .btn-ghost{background:rgba(255,255,255,0.05);color:#aaa;padding:8px 14px;font-size:12px;border:1px solid #2a2010}
  .btn-ghost:hover{background:rgba(255,107,43,0.1);color:#ff9500;border-color:#ff6b2b44}
  .btn-green{background:rgba(50,200,100,0.15);color:#32c864;padding:8px 14px;font-size:12px;border:1px solid rgba(50,200,100,0.25)}
  .btn-green:hover{background:rgba(50,200,100,0.25)}
  .badge{display:inline-flex;align-items:center;gap:4px;padding:3px 9px;border-radius:20px;font-size:11px;font-weight:600}
  .badge-orange{background:rgba(255,107,43,0.15);color:#ff6b2b}
  .badge-yellow{background:rgba(255,170,0,0.15);color:#ffaa00}
  .badge-green{background:rgba(50,200,100,0.15);color:#32c864}
  .badge-blue{background:rgba(100,150,255,0.15);color:#6496ff}
  .badge-red{background:rgba(255,80,80,0.15);color:#ff5050}
  .nav-item{background:none;border:none;cursor:pointer;width:100%;padding:10px 14px;border-radius:8px;color:#664422;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:500;display:flex;align-items:center;gap:10px;transition:all 0.18s;text-align:left}
  .nav-item:hover{background:rgba(255,107,43,0.08);color:#ff9500}
  .nav-item.active{color:#ff6b2b;font-weight:700}
  .input{background:#0d0a06;border:1px solid #2a1e0a;border-radius:8px;padding:10px 14px;color:#f0e8d8;font-family:'DM Sans',sans-serif;font-size:13px;width:100%;outline:none;transition:border 0.18s}
  .input:focus{border-color:#ff6b2b}
  .row{display:flex;align-items:center;padding:12px 0;border-bottom:1px solid #1a1208;gap:14px;transition:background 0.15s}
  .row:hover{background:rgba(255,107,43,0.03)}
  .row:last-child{border-bottom:none}
  .stat-card{background:#141208;border:1px solid #2a1e0a;border-radius:12px;padding:18px 20px}
  .modal-bg{position:fixed;inset:0;background:rgba(0,0,0,0.8);z-index:200;display:flex;align-items:center;justify-content:center;padding:20px}
  .modal{background:#141208;border:1px solid #3a2a0a;border-radius:16px;padding:28px;width:460px;max-width:100%}
  .section-title{font-family:'Bebas Neue',cursive;font-size:26px;letter-spacing:2px;color:#f0e8d8;margin-bottom:16px}
  .pulse{animation:pulse 2s infinite}@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.55}}
  .fade-in{animation:fadeIn 0.3s ease}@keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
  select.input option{background:#141208}
  textarea.input{resize:vertical;min-height:80px}
  .lang-btn{background:none;border:1px solid #2a1e0a;border-radius:6px;padding:4px 10px;font-size:11px;font-weight:600;color:#664422;cursor:pointer;transition:all 0.15s;font-family:'DM Sans',sans-serif}
  .lang-btn:hover,.lang-btn.active{background:rgba(255,107,43,0.15);color:#ff6b2b;border-color:#ff6b2b44}
`;

// ─── HELPERS ─────────────────────────────────────────────────────────────────
const SessionBar = ({ used, max = 10, color = "#ff6b2b" }) => (
  <div style={{ background: "#2a1e0a", borderRadius: 4, height: 5, overflow: "hidden", marginTop: 5 }}>
    <div style={{ height: "100%", width: `${(used / max) * 100}%`, background: color, borderRadius: 4, transition: "width 0.4s" }} />
  </div>
);

const Avatar = ({ initials, color = "#ff6b2b", size = 36 }) => (
  <div style={{ width: size, height: size, borderRadius: "50%", background: `${color}20`, border: `1.5px solid ${color}55`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: size * 0.33, color, flexShrink: 0, fontFamily: "'DM Sans', sans-serif" }}>
    {initials}
  </div>
);

const LangSwitcher = ({ lang, setLang }) => (
  <div style={{ display: "flex", gap: 4 }}>
    {[["en","EN"],["ta","தமிழ்"],["hi","हिं"]].map(([k,l]) => (
      <button key={k} className={`lang-btn ${lang===k?"active":""}`} onClick={() => setLang(k)}>{l}</button>
    ))}
  </div>
);

// ─── LOGIN ────────────────────────────────────────────────────────────────────
function LoginScreen({ onLogin }) {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(false);
  const [lang, setLang]         = useState("en");
  const t = T[lang];

  const handle = () => {
    setLoading(true); setError("");
    setTimeout(() => {
      const user = USERS.find(u => u.email === email.trim() && u.password === password);
      if (user) onLogin(user, lang);
      else { setError(t.invalidLogin); setLoading(false); }
    }, 600);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a08", display: "flex", alignItems: "center", justifyContent: "center", padding: 20, position: "relative", overflow: "hidden", fontFamily: "'DM Sans', sans-serif" }}>
      <style>{S}</style>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Bebas+Neue&display=swap" rel="stylesheet" />

      {/* BG glow */}
      <div style={{ position:"fixed", top:"30%", left:"50%", transform:"translateX(-50%)", width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle,rgba(255,107,43,0.07) 0%,transparent 70%)", pointerEvents:"none" }} />

      <div style={{ width:"100%", maxWidth:400 }} className="fade-in">
        {/* Logo */}
        <div style={{ textAlign:"center", marginBottom:32 }}>
          <div style={{ width:72, height:72, borderRadius:20, background:"linear-gradient(135deg,#ff6b2b,#ff9500)", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 14px", boxShadow:"0 8px 32px rgba(255,107,43,0.4)" }}>
            <span style={{ fontFamily:"'Bebas Neue',cursive", fontSize:42, color:"#fff", lineHeight:1 }}>M</span>
          </div>
          <div style={{ fontFamily:"'Bebas Neue',cursive", fontSize:28, letterSpacing:3, color:"#f0e8d8" }}>{t.appName}</div>
          <div style={{ fontSize:11, color:"#664422", marginTop:3, letterSpacing:2 }}>{t.tagline}</div>
        </div>

        <div className="card" style={{ padding:28, border:"1px solid #2a1e0a" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:22 }}>
            <span style={{ fontSize:13, color:"#664422", fontWeight:600 }}>{t.signIn}</span>
            <LangSwitcher lang={lang} setLang={setLang} />
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
            <div>
              <label style={{ fontSize:11, color:"#664422", display:"block", marginBottom:5, fontWeight:700, letterSpacing:1 }}>{t.email}</label>
              <input className="input" type="email" placeholder="your@email.com" value={email} onChange={e=>setEmail(e.target.value)} onKeyDown={e=>e.key==="Enter"&&handle()} />
            </div>
            <div>
              <label style={{ fontSize:11, color:"#664422", display:"block", marginBottom:5, fontWeight:700, letterSpacing:1 }}>{t.password}</label>
              <input className="input" type="password" placeholder="••••••••" value={password} onChange={e=>setPassword(e.target.value)} onKeyDown={e=>e.key==="Enter"&&handle()} />
            </div>
            {error && <div style={{ fontSize:12, color:"#ff5050", textAlign:"center", padding:"6px 0" }}>{error}</div>}
            <button className="btn btn-orange" style={{ width:"100%", padding:13, marginTop:4, fontSize:14 }} onClick={handle} disabled={loading}>
              {loading ? t.signingIn : t.signIn}
            </button>
          </div>
        </div>

        {/* Demo logins */}
        <div style={{ marginTop:20 }}>
          <div style={{ fontSize:10, color:"#442200", textAlign:"center", marginBottom:10, letterSpacing:2 }}>{t.demoLogins}</div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
            {[
              { role:"superadmin", label:"Super Admin",  email:"akkil@momentummadras.com",   pw:"super123",   color:"#ff6b2b" },
              { role:"finance",    label:"Finance",      email:"finance@momentummadras.com", pw:"finance123", color:"#32c864" },
              { role:"trainer",    label:"Trainer",      email:"trainer1@momentummadras.com",pw:"trainer123", color:"#ffaa00" },
              { role:"client",     label:"Client",       email:"client@momentummadras.com",  pw:"client123",  color:"#ff6b2b" },
            ].map(d => (
              <button key={d.role} onClick={()=>{ setEmail(d.email); setPassword(d.pw); }}
                style={{ background:"#141208", border:`1px solid ${d.color}33`, borderRadius:8, padding:"10px 12px", cursor:"pointer", textAlign:"left", transition:"all 0.18s" }}
                onMouseEnter={e=>e.currentTarget.style.borderColor=d.color}
                onMouseLeave={e=>e.currentTarget.style.borderColor=`${d.color}33`}>
                <div style={{ fontSize:11, color:d.color, fontWeight:700, fontFamily:"'DM Sans',sans-serif" }}>{d.label}</div>
                <div style={{ fontSize:10, color:"#442200", marginTop:2, fontFamily:"'DM Sans',sans-serif" }}>{d.email}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── SHELL ────────────────────────────────────────────────────────────────────
function Shell({ user, onLogout, navItems, activeView, setActiveView, lang, setLang, children }) {
  const meta = ROLE_META[user.role];
  const t = T[lang];
  return (
    <div style={{ display:"flex", minHeight:"100vh", background:"#0a0a08", color:"#f0e8d8", fontFamily:"'DM Sans',sans-serif" }}>
      <style>{S}</style>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Bebas+Neue&display=swap" rel="stylesheet" />

      {/* Sidebar */}
      <div style={{ width:220, background:"#0d0a06", borderRight:"1px solid #1a1208", padding:"18px 10px", display:"flex", flexDirection:"column", flexShrink:0 }}>
        <div style={{ padding:"4px 8px 16px", display:"flex", alignItems:"center", gap:10 }}>
          <div style={{ width:32, height:32, borderRadius:8, background:"linear-gradient(135deg,#ff6b2b,#ff9500)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
            <span style={{ fontFamily:"'Bebas Neue'", fontSize:20, color:"#fff" }}>M</span>
          </div>
          <div>
            <div style={{ fontFamily:"'Bebas Neue',cursive", fontSize:13, letterSpacing:2, color:"#ff6b2b", lineHeight:1 }}>MOMENTUM</div>
            <div style={{ fontFamily:"'Bebas Neue',cursive", fontSize:13, letterSpacing:2, color:"#ff9500", lineHeight:1 }}>MADRAS</div>
          </div>
        </div>

        {/* Role pill */}
        <div style={{ margin:"0 4px 16px", background:meta.bg, border:`1px solid ${meta.color}33`, borderRadius:10, padding:"10px 12px", display:"flex", alignItems:"center", gap:10 }}>
          <Avatar initials={user.avatar} color={meta.color} size={32} />
          <div>
            <div style={{ fontSize:11, fontWeight:700, color:meta.color }}>{meta.icon} {meta.label}</div>
            <div style={{ fontSize:11, color:"#664422", marginTop:1 }}>{user.name}</div>
          </div>
        </div>

        {navItems.map(item => (
          <button key={item.id} className={`nav-item ${activeView===item.id?"active":""}`}
            style={activeView===item.id ? { background:`${meta.color}18`, color:meta.color } : {}}
            onClick={() => setActiveView(item.id)}>
            <span style={{ fontSize:14 }}>{item.icon}</span>
            {item.label}
            {item.badge > 0 && <span style={{ marginLeft:"auto", background:"#ff6b2b", color:"#fff", borderRadius:10, padding:"1px 7px", fontSize:10, fontWeight:700 }}>{item.badge}</span>}
          </button>
        ))}

        <div style={{ marginTop:"auto", padding:"12px 8px 4px", borderTop:"1px solid #1a1208" }}>
          <LangSwitcher lang={lang} setLang={setLang} />
          <button className="nav-item" style={{ marginTop:8, color:"#662200" }} onClick={onLogout}>
            <span>⎋</span> {t.signOut}
          </button>
        </div>
      </div>

      <div style={{ flex:1, overflowY:"auto", maxHeight:"100vh" }}>{children}</div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SUPER ADMIN PORTAL
// ═══════════════════════════════════════════════════════════════════════════════
function SuperAdminPortal({ user, onLogout, lang, setLang }) {
  const t = T[lang];
  const [view, setView]           = useState("dashboard");
  const [clients, setClients]     = useState(INIT_CLIENTS);
  const [bookings, setBookings]   = useState(INIT_BOOKINGS);
  const [invoices, setInvoices]   = useState(INIT_INVOICES);
  const [inquiries, setInquiries] = useState(INIT_INQUIRIES);
  const [notifications, setNotifications] = useState([
    { id:1, msg:"Sample Client is on session 9 — invoice required", read:false, time:"1hr ago" },
  ]);
  const [modal, setModal]         = useState(null);
  const [toast, setToast]         = useState(null);
  const [newClient, setNewClient] = useState({ name:"", trainerId:"tr1", phone:"", email:"" });

  const showToast = msg => { setToast(msg); setTimeout(()=>setToast(null),3000); };
  const billingAlerts = clients.filter(c=>c.sessionsUsed===9);
  const unread = notifications.filter(n=>!n.read).length;

  const raiseInvoice = clientId => {
    const c = clients.find(x=>x.id===clientId);
    if (!c) return;
    const gst = Math.round(BLOCK_PRICE * GST_RATE);
    const inv = { id:`inv${Date.now()}`, clientId, clientName:c.name, trainerId:c.trainerId, trainerName:c.trainerName, amount:BLOCK_PRICE, gst, total:BLOCK_PRICE+gst, status:"pending", invoiceNum:`INV-MM-${String(invoices.length+1).padStart(3,"0")}`, date:"2026-03-17", blockNum:c.blockNum };
    setInvoices(p=>[inv,...p]);
    showToast(`Invoice ${inv.invoiceNum} raised for ${c.name}`);
  };

  const markComplete = bookingId => {
    const b = bookings.find(x=>x.id===bookingId);
    const c = clients.find(x=>x.id===b?.clientId);
    if (!b||!c) return;
    setBookings(p=>p.map(x=>x.id===bookingId?{...x,status:"completed"}:x));
    const ns = c.sessionsUsed+1;
    setClients(p=>p.map(x=>x.id===c.id?{...x,sessionsUsed:ns}:x));
    if (ns===9) { setNotifications(p=>[{id:Date.now(),msg:`${c.name} is on session 9 — raise invoice!`,read:false,time:"just now"},...p]); showToast(`⚠ Billing alert for ${c.name}`); }
    else showToast(`Session complete`);
  };

  const addClient = () => {
    if (!newClient.name) return;
    const tr = TRAINERS_LIST.find(t=>t.id===newClient.trainerId);
    setClients(p=>[...p, { id:`cl${Date.now()}`, ...newClient, trainerName:tr?.name||"", sessionsUsed:0, blockNum:1, joinDate:"2026-03-17" }]);
    setNewClient({ name:"", trainerId:"tr1", phone:"", email:"" });
    setModal(null); showToast("Client added");
  };

  const navItems = [
    { id:"dashboard", icon:"⬡", label:t.dashboard, badge:unread },
    { id:"clients",   icon:"◈", label:t.clients,   badge:0 },
    { id:"trainers",  icon:"◉", label:t.trainers,  badge:0 },
    { id:"bookings",  icon:"◷", label:t.bookings,  badge:0 },
    { id:"billing",   icon:"◎", label:t.billing,   badge:billingAlerts.length },
    { id:"finance",   icon:"◆", label:t.finance,   badge:0 },
    { id:"inquiries", icon:"✉", label:t.inquiries, badge:inquiries.filter(i=>i.status==="open").length },
  ];

  return (
    <Shell user={user} onLogout={onLogout} navItems={navItems} activeView={view} setActiveView={setView} lang={lang} setLang={setLang}>
      {toast && <div style={{ position:"fixed",top:20,right:20,zIndex:999,background:"#0d1a0a",border:"1px solid #32c864",borderRadius:10,padding:"12px 18px",fontSize:13,color:"#f0e8d8",maxWidth:300 }}>{toast}</div>}
      <div style={{ padding:"28px 32px" }} className="fade-in">

        {/* DASHBOARD */}
        {view==="dashboard" && <>
          <div style={{ marginBottom:24 }}>
            <div className="section-title" style={{ fontSize:32 }}>{t.commandCentre}</div>
            <div style={{ fontSize:12, color:"#664422" }}>Tuesday 17 March 2026</div>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:14, marginBottom:20 }}>
            {[
              { l:t.totalClients,  v:clients.length,        c:"#ff6b2b" },
              { l:t.activeTrainers,v:TRAINERS_LIST.length,  c:"#ffaa00" },
              { l:t.billingAlerts, v:billingAlerts.length,  c:"#ff5050" },
              { l:t.revenueMonth,  v:fmt(invoices.reduce((a,b)=>a+b.total,0)), c:"#32c864" },
            ].map(s=>(
              <div key={s.l} className="stat-card" style={{ borderTop:`2px solid ${s.c}` }}>
                <div style={{ fontSize:11, color:"#664422", marginBottom:6 }}>{s.l}</div>
                <div style={{ fontFamily:"'Bebas Neue'", fontSize:34, color:s.c }}>{s.v}</div>
              </div>
            ))}
          </div>
          {billingAlerts.length>0 && (
            <div className="card pulse" style={{ borderColor:"rgba(255,107,43,0.4)", marginBottom:16 }}>
              <div style={{ fontWeight:700, color:"#ff6b2b", marginBottom:12 }}>⚠ {t.billingAlerts}</div>
              {billingAlerts.map(c=>(
                <div key={c.id} className="row">
                  <Avatar initials={c.name.split(" ").map(n=>n[0]).join("")} color="#ff6b2b" />
                  <div style={{ flex:1 }}><div style={{ fontWeight:600,fontSize:13 }}>{c.name}</div><div style={{ fontSize:11,color:"#664422" }}>{c.trainerName} · Session 9/10</div></div>
                  <button className="btn btn-orange" style={{ fontSize:12,padding:"7px 14px" }} onClick={()=>raiseInvoice(c.id)}>{t.raiseInvoice}</button>
                </div>
              ))}
            </div>
          )}
          <div className="card">
            <div style={{ fontWeight:700,fontSize:13,marginBottom:12 }}>{t.notifications}</div>
            {notifications.slice(0,5).map(n=>(
              <div key={n.id} style={{ display:"flex",gap:10,padding:"9px 0",borderBottom:"1px solid #1a1208",opacity:n.read?0.4:1 }}>
                <div style={{ width:6,height:6,borderRadius:"50%",background:n.read?"#442200":"#ff6b2b",marginTop:6,flexShrink:0 }} />
                <div style={{ flex:1,fontSize:12 }}>{n.msg}</div>
                <div style={{ fontSize:11,color:"#664422" }}>{n.time}</div>
              </div>
            ))}
            <button className="btn btn-ghost" style={{ marginTop:10 }} onClick={()=>setNotifications(p=>p.map(n=>({...n,read:true})))}>{t.markAllRead}</button>
          </div>
        </>}

        {/* CLIENTS */}
        {view==="clients" && <>
          <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:20 }}>
            <div className="section-title">{t.clients.toUpperCase()}</div>
            <button className="btn btn-orange" onClick={()=>setModal("addClient")}>{t.addClient}</button>
          </div>
          {clients.map(c=>{
            const alert = c.sessionsUsed===9;
            return (
              <div key={c.id} className="card" style={{ marginBottom:10,borderLeft:`3px solid ${alert?"#ff6b2b":"#2a1e0a"}` }}>
                <div style={{ display:"flex",alignItems:"center",gap:14 }}>
                  <Avatar initials={c.name.split(" ").map(n=>n[0]).join("")} color={alert?"#ff6b2b":"#ffaa00"} />
                  <div style={{ flex:1 }}>
                    <div style={{ display:"flex",gap:8,alignItems:"center" }}>
                      <span style={{ fontWeight:700,fontSize:14 }}>{c.name}</span>
                      {alert && <span className="badge badge-orange">⚠ {t.billingDue}</span>}
                    </div>
                    <div style={{ fontSize:12,color:"#664422" }}>{c.trainerName} · {c.email}</div>
                    <div style={{ fontSize:11,color:"#442200",marginTop:2 }}>{t.session} {c.sessionsUsed}/10 · {t.block} {c.blockNum}</div>
                    <SessionBar used={c.sessionsUsed} color={alert?"#ff6b2b":"#ffaa00"} />
                  </div>
                  {alert && <button className="btn btn-orange" style={{ fontSize:12 }} onClick={()=>raiseInvoice(c.id)}>{t.raiseInvoice}</button>}
                </div>
              </div>
            );
          })}
        </>}

        {/* TRAINERS */}
        {view==="trainers" && <>
          <div className="section-title">{t.trainers.toUpperCase()}</div>
          <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14,marginTop:8 }}>
            {TRAINERS_LIST.map(tr=>{
              const myC = clients.filter(c=>c.trainerId===tr.id);
              const myB = bookings.filter(b=>b.trainerId===tr.id&&b.status==="upcoming");
              return (
                <div key={tr.id} className="card">
                  <Avatar initials={tr.name.split(" ").map(n=>n[0]).join("")} color="#ffaa00" size={44} />
                  <div style={{ fontWeight:700,fontSize:15,marginTop:12 }}>{tr.name}</div>
                  <div style={{ fontSize:12,color:"#664422",marginTop:2 }}>Personal Trainer</div>
                  <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginTop:14 }}>
                    <div style={{ background:"#0d0a06",borderRadius:8,padding:"10px 12px" }}>
                      <div style={{ fontFamily:"'Bebas Neue'",fontSize:28,color:"#ffaa00" }}>{myC.length}</div>
                      <div style={{ fontSize:10,color:"#664422" }}>{t.clients}</div>
                    </div>
                    <div style={{ background:"#0d0a06",borderRadius:8,padding:"10px 12px" }}>
                      <div style={{ fontFamily:"'Bebas Neue'",fontSize:28,color:"#32c864" }}>{myB.length}</div>
                      <div style={{ fontSize:10,color:"#664422" }}>{t.upcoming}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>}

        {/* BOOKINGS */}
        {view==="bookings" && <>
          <div className="section-title">{t.bookings.toUpperCase()}</div>
          {bookings.map(b=>(
            <div key={b.id} className="card" style={{ marginBottom:8,opacity:b.status==="completed"?0.5:1 }}>
              <div style={{ display:"flex",alignItems:"center",gap:14 }}>
                <div style={{ minWidth:56,textAlign:"center" }}>
                  <div style={{ fontFamily:"'Bebas Neue'",fontSize:22,color:"#ff6b2b",lineHeight:1 }}>{b.time}</div>
                  <div style={{ fontSize:10,color:"#664422" }}>{b.date}</div>
                </div>
                <div style={{ flex:1 }}>
                  <div style={{ fontWeight:700,fontSize:13 }}>{b.clientName}</div>
                  <div style={{ fontSize:12,color:"#664422" }}>{b.trainerName} · Session #{b.sessionNum}</div>
                </div>
                <span className={`badge ${b.status==="completed"?"badge-green":"badge-blue"}`}>{t[b.status]||b.status}</span>
                {b.status==="upcoming" && <button className="btn btn-ghost" style={{ fontSize:12 }} onClick={()=>markComplete(b.id)}>{t.markDone}</button>}
              </div>
            </div>
          ))}
        </>}

        {/* BILLING */}
        {view==="billing" && <>
          <div className="section-title">{t.billing.toUpperCase()}</div>
          {clients.sort((a,b)=>b.sessionsUsed-a.sessionsUsed).map(c=>{
            const inv = invoices.find(i=>i.clientId===c.id&&i.status==="pending");
            const paid = invoices.find(i=>i.clientId===c.id&&i.status==="paid");
            const alert = c.sessionsUsed===9;
            return (
              <div key={c.id} className="card" style={{ marginBottom:8,borderLeft:`3px solid ${alert?"#ff6b2b":paid?"#32c864":"#2a1e0a"}` }}>
                <div style={{ display:"flex",alignItems:"center",gap:14 }}>
                  <div style={{ flex:1 }}>
                    <div style={{ display:"flex",gap:8,alignItems:"center" }}>
                      <span style={{ fontWeight:700,fontSize:13 }}>{c.name}</span>
                      {alert&&!inv && <span className="badge badge-orange">{t.actionRequired}</span>}
                      {inv && <span className="badge badge-blue">{inv.invoiceNum}</span>}
                      {paid && <span className="badge badge-green">✓ {paid.invoiceNum}</span>}
                    </div>
                    <div style={{ fontSize:12,color:"#664422" }}>{c.trainerName} · {t.session} {c.sessionsUsed}/10</div>
                    <div style={{ fontSize:11,color:"#442200",marginTop:2 }}>{fmt(BLOCK_PRICE)} + GST 18% = {fmt(BLOCK_PRICE*(1+GST_RATE))}</div>
                  </div>
                  <div style={{ textAlign:"right" }}>
                    <div style={{ fontFamily:"'Bebas Neue'",fontSize:22,color:"#32c864" }}>{fmt(BLOCK_PRICE*(1+GST_RATE))}</div>
                    <div style={{ fontSize:10,color:"#664422" }}>incl. GST</div>
                  </div>
                  {alert&&!inv && <button className="btn btn-orange" style={{ fontSize:12 }} onClick={()=>raiseInvoice(c.id)}>{t.raiseInvoice}</button>}
                </div>
              </div>
            );
          })}
        </>}

        {/* FINANCE */}
        {view==="finance" && <>
          <div className="section-title">{t.finance.toUpperCase()} LEDGER</div>
          <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14,marginBottom:20 }}>
            {[
              { l:t.totalRaised, v:fmt(invoices.reduce((a,b)=>a+b.total,0)), c:"#32c864" },
              { l:"Invoices",    v:invoices.length,                           c:"#ffaa00" },
              { l:t.outstanding, v:fmt(invoices.filter(i=>i.status==="pending").reduce((a,b)=>a+b.total,0)), c:"#ff6b2b" },
            ].map(s=>(
              <div key={s.l} className="stat-card" style={{ borderTop:`2px solid ${s.c}` }}>
                <div style={{ fontSize:11,color:"#664422",marginBottom:4 }}>{s.l}</div>
                <div style={{ fontFamily:"'Bebas Neue'",fontSize:30,color:s.c }}>{s.v}</div>
              </div>
            ))}
          </div>
          <div className="card">
            <div style={{ fontWeight:700,fontSize:13,marginBottom:12 }}>{t.invoiceLog}</div>
            {invoices.length===0 && <div style={{ fontSize:13,color:"#664422",textAlign:"center",padding:"20px 0" }}>No invoices yet</div>}
            {invoices.map(i=>(
              <div key={i.id} className="row" style={{ fontSize:12 }}>
                <span style={{ color:"#ffaa00",minWidth:130 }}>{i.invoiceNum}</span>
                <span style={{ flex:1,fontWeight:600 }}>{i.clientName}</span>
                <span style={{ color:"#664422",minWidth:80 }}>{i.date}</span>
                <span className={`badge ${i.status==="paid"?"badge-green":"badge-yellow"}`}>{t[i.status]||i.status}</span>
                <span style={{ color:"#32c864",fontWeight:700,minWidth:80,textAlign:"right" }}>{fmt(i.total)}</span>
              </div>
            ))}
          </div>
        </>}

        {/* INQUIRIES */}
        {view==="inquiries" && <>
          <div className="section-title">{t.inquiries.toUpperCase()}</div>
          {inquiries.length===0 && <div className="card" style={{ fontSize:13,color:"#664422",textAlign:"center" }}>No inquiries yet</div>}
          {inquiries.map(inq=>(
            <div key={inq.id} className="card" style={{ marginBottom:10,borderLeft:`3px solid ${inq.status==="open"?"#ff6b2b":"#2a1e0a"}` }}>
              <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start" }}>
                <div>
                  <div style={{ fontWeight:700,fontSize:13 }}>{inq.subject}</div>
                  <div style={{ fontSize:12,color:"#664422",marginTop:2 }}>{inq.clientName} · {inq.date}</div>
                  <div style={{ fontSize:12,color:"#886644",marginTop:6 }}>{inq.message}</div>
                </div>
                <span className={`badge ${inq.status==="open"?"badge-orange":"badge-green"}`}>{t[inq.status]||inq.status}</span>
              </div>
              {inq.status==="open" && <button className="btn btn-ghost" style={{ marginTop:12,fontSize:12 }} onClick={()=>setInquiries(p=>p.map(x=>x.id===inq.id?{...x,status:"resolved"}:x))}>{t.markResolved}</button>}
            </div>
          ))}
        </>}
      </div>

      {modal==="addClient" && (
        <div className="modal-bg" onClick={()=>setModal(null)}>
          <div className="modal" onClick={e=>e.stopPropagation()}>
            <div style={{ fontFamily:"'Bebas Neue'",fontSize:24,letterSpacing:2,marginBottom:20 }}>{t.addClient.replace("+ ","")}</div>
            <div style={{ display:"flex",flexDirection:"column",gap:12 }}>
              <div><label style={{ fontSize:11,color:"#664422",display:"block",marginBottom:5,fontWeight:700 }}>{t.fullName}</label><input className="input" value={newClient.name} onChange={e=>setNewClient(p=>({...p,name:e.target.value}))} /></div>
              <div><label style={{ fontSize:11,color:"#664422",display:"block",marginBottom:5,fontWeight:700 }}>{t.assignTrainer}</label>
                <select className="input" value={newClient.trainerId} onChange={e=>setNewClient(p=>({...p,trainerId:e.target.value}))}>
                  {TRAINERS_LIST.map(tr=><option key={tr.id} value={tr.id}>{tr.name}</option>)}
                </select>
              </div>
              <div><label style={{ fontSize:11,color:"#664422",display:"block",marginBottom:5,fontWeight:700 }}>{t.phone}</label><input className="input" value={newClient.phone} onChange={e=>setNewClient(p=>({...p,phone:e.target.value}))} placeholder="9876543210" /></div>
              <div><label style={{ fontSize:11,color:"#664422",display:"block",marginBottom:5,fontWeight:700 }}>{t.emailLabel}</label><input className="input" value={newClient.email} onChange={e=>setNewClient(p=>({...p,email:e.target.value}))} /></div>
              <div style={{ display:"flex",gap:10,marginTop:4 }}>
                <button className="btn btn-orange" style={{ flex:1 }} onClick={addClient}>{t.addClient}</button>
                <button className="btn btn-ghost" onClick={()=>setModal(null)}>✕</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Shell>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// FINANCE PORTAL
// ═══════════════════════════════════════════════════════════════════════════════
function FinancePortal({ user, onLogout, lang, setLang }) {
  const t = T[lang];
  const [view, setView]         = useState("invoices");
  const [invoices, setInvoices] = useState(INIT_INVOICES);
  const [clients]               = useState(INIT_CLIENTS);

  const markPaid = id => setInvoices(p=>p.map(i=>i.id===id?{...i,status:"paid"}:i));
  const pending = invoices.filter(i=>i.status==="pending");

  const navItems = [
    { id:"invoices", icon:"◆", label:t.invoices,     badge:pending.length },
    { id:"clients",  icon:"◈", label:t.clientBilling, badge:0 },
    { id:"summary",  icon:"◎", label:t.summary,       badge:0 },
  ];

  return (
    <Shell user={user} onLogout={onLogout} navItems={navItems} activeView={view} setActiveView={setView} lang={lang} setLang={setLang}>
      <div style={{ padding:"28px 32px" }} className="fade-in">

        {view==="invoices" && <>
          <div className="section-title">{t.invoices.toUpperCase()}</div>
          {pending.length>0 && <div style={{ background:"rgba(50,200,100,0.07)",border:"1px solid rgba(50,200,100,0.2)",borderRadius:10,padding:"12px 16px",marginBottom:16,fontSize:13,color:"#32c864" }}>{pending.length} invoice(s) pending payment</div>}
          {invoices.length===0 && <div className="card" style={{ fontSize:13,color:"#664422",textAlign:"center" }}>No invoices raised yet</div>}
          {invoices.map(i=>(
            <div key={i.id} className="card" style={{ marginBottom:8,borderLeft:`3px solid ${i.status==="paid"?"#32c864":"#ff6b2b"}` }}>
              <div style={{ display:"flex",alignItems:"center",gap:14 }}>
                <div style={{ flex:1 }}>
                  <div style={{ display:"flex",gap:8,alignItems:"center" }}>
                    <span style={{ fontWeight:700,fontSize:14 }}>{i.invoiceNum}</span>
                    <span className={`badge ${i.status==="paid"?"badge-green":"badge-orange"}`}>{t[i.status]||i.status}</span>
                  </div>
                  <div style={{ fontSize:12,color:"#664422",marginTop:2 }}>{i.clientName} · {i.trainerName}</div>
                  <div style={{ fontSize:11,color:"#442200" }}>Base: {fmt(i.amount)} + GST: {fmt(i.gst)} = <strong style={{ color:"#32c864" }}>{fmt(i.total)}</strong></div>
                </div>
                {i.status==="pending" && <button className="btn btn-green" onClick={()=>markPaid(i.id)}>{t.markPaid}</button>}
              </div>
            </div>
          ))}
        </>}

        {view==="clients" && <>
          <div className="section-title">{t.clientBilling.toUpperCase()}</div>
          {clients.map(c=>{
            const inv = invoices.find(i=>i.clientId===c.id);
            return (
              <div key={c.id} className="card" style={{ marginBottom:8 }}>
                <div style={{ display:"flex",alignItems:"center",gap:14 }}>
                  <Avatar initials={c.name.split(" ").map(n=>n[0]).join("")} color="#32c864" />
                  <div style={{ flex:1 }}>
                    <div style={{ fontWeight:700,fontSize:13 }}>{c.name}</div>
                    <div style={{ fontSize:12,color:"#664422" }}>{c.email} · {c.phone}</div>
                    <div style={{ fontSize:11,color:"#442200",marginTop:2 }}>{t.block} {c.blockNum} · {t.session} {c.sessionsUsed}/10</div>
                  </div>
                  {inv ? <span className={`badge ${inv.status==="paid"?"badge-green":"badge-orange"}`}>{inv.invoiceNum} · {t[inv.status]}</span>
                       : <span className="badge" style={{ background:"#2a1e0a",color:"#664422" }}>No invoice</span>}
                </div>
              </div>
            );
          })}
        </>}

        {view==="summary" && <>
          <div className="section-title">{t.financialSummary}</div>
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:14,marginBottom:20 }}>
            {[
              { l:t.totalRaised,  v:fmt(invoices.reduce((a,b)=>a+b.total,0)),                                      c:"#32c864" },
              { l:t.paid,         v:fmt(invoices.filter(i=>i.status==="paid").reduce((a,b)=>a+b.total,0)),          c:"#ffaa00" },
              { l:t.outstanding,  v:fmt(invoices.filter(i=>i.status==="pending").reduce((a,b)=>a+b.total,0)),       c:"#ff6b2b" },
            ].map(s=>(
              <div key={s.l} className="stat-card" style={{ borderTop:`2px solid ${s.c}` }}>
                <div style={{ fontSize:11,color:"#664422",marginBottom:4 }}>{s.l}</div>
                <div style={{ fontFamily:"'Bebas Neue'",fontSize:30,color:s.c }}>{s.v}</div>
              </div>
            ))}
          </div>
        </>}
      </div>
    </Shell>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// TRAINER PORTAL
// ═══════════════════════════════════════════════════════════════════════════════
function TrainerPortal({ user, onLogout, lang, setLang }) {
  const t = T[lang];
  const [view, setView]         = useState("sessions");
  const [clients, setClients]   = useState(INIT_CLIENTS.filter(c=>c.trainerId===user.id));
  const [bookings, setBookings] = useState(INIT_BOOKINGS.filter(b=>b.trainerId===user.id));
  const [invoices, setInvoices] = useState([]);
  const [toast, setToast]       = useState(null);
  const [selClient, setSelClient] = useState(null);
  const [modal, setModal]       = useState(null);

  const showToast = msg => { setToast(msg); setTimeout(()=>setToast(null),3000); };

  const markComplete = bookingId => {
    const b = bookings.find(x=>x.id===bookingId);
    const c = clients.find(x=>x.id===b?.clientId);
    if (!b||!c) return;
    setBookings(p=>p.map(x=>x.id===bookingId?{...x,status:"completed"}:x));
    const ns = c.sessionsUsed+1;
    if (ns===10) {
      const gst=Math.round(BLOCK_PRICE*GST_RATE);
      const inv={ id:`inv${Date.now()}`,clientId:c.id,clientName:c.name,trainerId:user.id,trainerName:user.name,amount:BLOCK_PRICE,gst,total:BLOCK_PRICE+gst,status:"pending",invoiceNum:`INV-MM-T${Date.now()}`,date:"2026-03-17",blockNum:c.blockNum+1 };
      setInvoices(p=>[inv,...p]);
      setClients(p=>p.map(x=>x.id===c.id?{...x,sessionsUsed:0,blockNum:x.blockNum+1}:x));
      showToast(`✅ Block complete! Invoice auto-raised for ${c.name}. New block started.`);
    } else {
      setClients(p=>p.map(x=>x.id===c.id?{...x,sessionsUsed:ns}:x));
      if (ns===9) showToast(`⚠ ${c.name} on session 9 — raise invoice soon`);
      else showToast(`${t.markComplete} — ${c.name}`);
    }
  };

  const raiseInvoice = clientId => {
    const c = clients.find(x=>x.id===clientId);
    if (!c||invoices.find(i=>i.clientId===clientId&&i.status==="pending")) return;
    const gst=Math.round(BLOCK_PRICE*GST_RATE);
    setInvoices(p=>[{id:`inv${Date.now()}`,clientId,clientName:c.name,trainerId:user.id,trainerName:user.name,amount:BLOCK_PRICE,gst,total:BLOCK_PRICE+gst,status:"pending",invoiceNum:`INV-MM-T${Date.now()}`,date:"2026-03-17",blockNum:c.blockNum},...p]);
    showToast(`Invoice raised for ${c.name}`);
  };

  const upcoming = bookings.filter(b=>b.status==="upcoming");
  const billingDue = clients.filter(c=>c.sessionsUsed===9);

  const navItems = [
    { id:"sessions", icon:"◷", label:t.mySessions,  badge:upcoming.length },
    { id:"clients",  icon:"◈", label:t.myClients,   badge:0 },
    { id:"billing",  icon:"◎", label:t.billing,     badge:billingDue.length },
    { id:"history",  icon:"◆", label:t.history,     badge:0 },
  ];

  return (
    <Shell user={user} onLogout={onLogout} navItems={navItems} activeView={view} setActiveView={setView} lang={lang} setLang={setLang}>
      {toast && <div style={{ position:"fixed",top:20,right:20,zIndex:999,background:"#0d1a0a",border:"1px solid #32c864",borderRadius:10,padding:"12px 18px",fontSize:13,color:"#f0e8d8",maxWidth:300 }}>{toast}</div>}
      <div style={{ padding:"28px 32px" }} className="fade-in">

        {view==="sessions" && <>
          <div style={{ marginBottom:20 }}>
            <div className="section-title">{t.mySessions.toUpperCase()}</div>
            <div style={{ fontSize:12,color:"#664422" }}>{t.welcome}, {user.name}</div>
          </div>
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:20 }}>
            <div className="stat-card" style={{ borderTop:"2px solid #ffaa00" }}>
              <div style={{ fontSize:11,color:"#664422" }}>{t.upcoming}</div>
              <div style={{ fontFamily:"'Bebas Neue'",fontSize:38,color:"#ffaa00" }}>{upcoming.length}</div>
            </div>
            <div className="stat-card" style={{ borderTop:"2px solid #ff6b2b" }}>
              <div style={{ fontSize:11,color:"#664422" }}>{t.billingAlerts}</div>
              <div style={{ fontFamily:"'Bebas Neue'",fontSize:38,color:"#ff6b2b" }}>{billingDue.length}</div>
            </div>
          </div>
          {upcoming.length===0 && <div className="card" style={{ color:"#664422",fontSize:13,textAlign:"center" }}>{t.noUpcoming}</div>}
          {upcoming.map(b=>{
            const c=clients.find(x=>x.id===b.clientId);
            const isLast=c?.sessionsUsed===9;
            return (
              <div key={b.id} className="card" style={{ marginBottom:10,borderLeft:`3px solid ${isLast?"#ff6b2b":"#ffaa00"}` }}>
                <div style={{ display:"flex",alignItems:"center",gap:14 }}>
                  <div style={{ textAlign:"center",minWidth:52 }}>
                    <div style={{ fontFamily:"'Bebas Neue'",fontSize:24,color:"#ff6b2b",lineHeight:1 }}>{b.time}</div>
                    <div style={{ fontSize:10,color:"#664422" }}>{b.date}</div>
                  </div>
                  <div style={{ flex:1 }}>
                    <div style={{ fontWeight:700,fontSize:14 }}>{b.clientName}</div>
                    <div style={{ fontSize:12,color:"#664422" }}>Session #{b.sessionNum}</div>
                    {isLast && <span className="badge badge-orange" style={{ marginTop:4 }}>{t.lastInBlock}</span>}
                  </div>
                  <button className="btn btn-orange" style={{ fontSize:12 }} onClick={()=>markComplete(b.id)}>{t.markComplete}</button>
                </div>
              </div>
            );
          })}
        </>}

        {view==="clients" && <>
          <div className="section-title">{t.myClients.toUpperCase()}</div>
          {clients.length===0 && <div className="card" style={{ fontSize:13,color:"#664422",textAlign:"center" }}>No clients assigned yet</div>}
          {clients.map(c=>(
            <div key={c.id} className="card" style={{ marginBottom:10,cursor:"pointer" }} onClick={()=>{ setSelClient(c); setModal("detail"); }}>
              <div style={{ display:"flex",alignItems:"center",gap:14 }}>
                <Avatar initials={c.name.split(" ").map(n=>n[0]).join("")} color="#ffaa00" />
                <div style={{ flex:1 }}>
                  <div style={{ fontWeight:700,fontSize:14 }}>{c.name}</div>
                  <div style={{ fontSize:12,color:"#664422" }}>{c.email} · {c.phone}</div>
                  <div style={{ fontSize:11,color:"#442200",marginTop:2 }}>{t.block} {c.blockNum} · {t.session} {c.sessionsUsed}/10 · {t.joined} {c.joinDate}</div>
                  <SessionBar used={c.sessionsUsed} color={c.sessionsUsed>=9?"#ff6b2b":"#ffaa00"} />
                </div>
                <span style={{ fontSize:11,color:"#664422" }}>→</span>
              </div>
            </div>
          ))}
        </>}

        {view==="billing" && <>
          <div className="section-title">{t.billing.toUpperCase()}</div>
          {clients.map(c=>{
            const raised=invoices.find(i=>i.clientId===c.id&&i.status==="pending");
            const alert=c.sessionsUsed===9;
            return (
              <div key={c.id} className="card" style={{ marginBottom:8,borderLeft:`3px solid ${alert?"#ff6b2b":raised?"#ffaa00":"#2a1e0a"}` }}>
                <div style={{ display:"flex",alignItems:"center",gap:14 }}>
                  <div style={{ flex:1 }}>
                    <div style={{ display:"flex",gap:8,alignItems:"center" }}>
                      <span style={{ fontWeight:700,fontSize:13 }}>{c.name}</span>
                      {alert&&!raised && <span className="badge badge-orange">{t.raiseNow}</span>}
                      {raised && <span className="badge badge-yellow">{raised.invoiceNum}</span>}
                    </div>
                    <div style={{ fontSize:12,color:"#664422" }}>{t.session} {c.sessionsUsed}/10 · {t.block} {c.blockNum}</div>
                  </div>
                  <div style={{ fontFamily:"'Bebas Neue'",fontSize:22,color:"#32c864" }}>{fmt(BLOCK_PRICE*(1+GST_RATE))}</div>
                  {alert&&!raised && <button className="btn btn-orange" style={{ fontSize:12 }} onClick={()=>raiseInvoice(c.id)}>{t.raiseInvoice}</button>}
                </div>
              </div>
            );
          })}
        </>}

        {view==="history" && <>
          <div className="section-title">{t.history.toUpperCase()}</div>
          {bookings.filter(b=>b.status==="completed").length===0 && <div className="card" style={{ color:"#664422",fontSize:13,textAlign:"center" }}>{t.noHistory}</div>}
          {bookings.filter(b=>b.status==="completed").map(b=>(
            <div key={b.id} className="card" style={{ marginBottom:8,opacity:0.65 }}>
              <div style={{ display:"flex",gap:14,alignItems:"center" }}>
                <div style={{ fontFamily:"'Bebas Neue'",fontSize:20,color:"#664422",minWidth:50 }}>{b.time}</div>
                <div style={{ flex:1 }}>
                  <div style={{ fontWeight:600,fontSize:13 }}>{b.clientName}</div>
                  <div style={{ fontSize:12,color:"#664422" }}>{b.date} · Session #{b.sessionNum}</div>
                </div>
                <span className="badge badge-green">✓ {t.completed}</span>
              </div>
            </div>
          ))}
        </>}
      </div>

      {modal==="detail" && selClient && (
        <div className="modal-bg" onClick={()=>setModal(null)}>
          <div className="modal" onClick={e=>e.stopPropagation()}>
            <div style={{ display:"flex",alignItems:"center",gap:14,marginBottom:20 }}>
              <Avatar initials={selClient.name.split(" ").map(n=>n[0]).join("")} color="#ffaa00" size={44} />
              <div>
                <div style={{ fontFamily:"'Bebas Neue'",fontSize:22,letterSpacing:1 }}>{selClient.name}</div>
                <div style={{ fontSize:12,color:"#664422" }}>{t.joined} {selClient.joinDate}</div>
              </div>
            </div>
            {[["Email",selClient.email],["Phone",selClient.phone],[t.block,selClient.blockNum],[t.session,`${selClient.sessionsUsed}/10`]].map(([l,v])=>(
              <div key={l} style={{ display:"flex",justifyContent:"space-between",padding:"9px 0",borderBottom:"1px solid #1a1208",fontSize:13 }}>
                <span style={{ color:"#664422" }}>{l}</span><span style={{ fontWeight:700 }}>{v}</span>
              </div>
            ))}
            <div style={{ marginTop:16 }}>
              <SessionBar used={selClient.sessionsUsed} color="#ffaa00" />
            </div>
            <button className="btn btn-ghost" style={{ marginTop:18,width:"100%" }} onClick={()=>setModal(null)}>{t.close}</button>
          </div>
        </div>
      )}
    </Shell>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// CLIENT PORTAL
// ═══════════════════════════════════════════════════════════════════════════════
function ClientPortal({ user, onLogout, lang, setLang }) {
  const t = T[lang];
  const myData = INIT_CLIENTS.find(c=>c.id===user.id) || INIT_CLIENTS[0];
  const [clientData]              = useState(myData);
  const [bookings, setBookings]   = useState(INIT_BOOKINGS.filter(b=>b.clientId===user.id));
  const [inquiries, setInquiries] = useState([]);
  const [view, setView]           = useState("home");
  const [newBooking, setNewBooking] = useState({ date:"", time:"09:00" });
  const [newInquiry, setNewInquiry] = useState({ subject:"", message:"" });
  const [toast, setToast]         = useState(null);

  const showToast = msg => { setToast(msg); setTimeout(()=>setToast(null),3000); };

  const submitBooking = () => {
    if (!newBooking.date) { showToast("Please select a date"); return; }
    setBookings(p=>[{ id:`b${Date.now()}`,clientId:user.id,clientName:user.name,trainerId:clientData.trainerId,trainerName:clientData.trainerName,date:newBooking.date,time:newBooking.time,status:"upcoming",sessionNum:clientData.sessionsUsed+1 },...p]);
    setNewBooking({ date:"",time:"09:00" });
    showToast("Session booked! ✓");
  };

  const submitInquiry = () => {
    if (!newInquiry.subject||!newInquiry.message) { showToast("Fill all fields"); return; }
    setInquiries(p=>[{ id:`inq${Date.now()}`,clientId:user.id,clientName:user.name,...newInquiry,status:"open",date:"2026-03-17" },...p]);
    setNewInquiry({ subject:"",message:"" });
    showToast("Message sent to studio ✓");
  };

  const pct = (clientData.sessionsUsed/10)*100;
  const navItems = [
    { id:"home",     icon:"⬡", label:t.myProgress,     badge:0 },
    { id:"book",     icon:"◷", label:t.bookSession,    badge:0 },
    { id:"sessions", icon:"◈", label:t.mySessions,     badge:0 },
    { id:"inquire",  icon:"✉", label:t.contactStudio,  badge:0 },
  ];

  return (
    <Shell user={user} onLogout={onLogout} navItems={navItems} activeView={view} setActiveView={setView} lang={lang} setLang={setLang}>
      {toast && <div style={{ position:"fixed",top:20,right:20,zIndex:999,background:"#0d1a0a",border:"1px solid #32c864",borderRadius:10,padding:"12px 18px",fontSize:13,color:"#f0e8d8" }}>{toast}</div>}
      <div style={{ padding:"28px 32px" }} className="fade-in">

        {view==="home" && <>
          <div style={{ marginBottom:20 }}>
            <div className="section-title" style={{ fontSize:28 }}>{t.welcome}</div>
            <div style={{ fontFamily:"'Bebas Neue',cursive",fontSize:24,color:"#ff6b2b",letterSpacing:1 }}>{user.name.toUpperCase()}</div>
          </div>
          <div className="card" style={{ marginBottom:14,background:"linear-gradient(135deg,#141208,#1e1408)",borderColor:"#ff6b2b33",padding:28 }}>
            <div style={{ fontSize:11,color:"#664422",marginBottom:4,letterSpacing:1 }}>{t.myProgress.toUpperCase()}</div>
            <div style={{ fontFamily:"'Bebas Neue'",fontSize:56,color:"#ff6b2b",lineHeight:1 }}>{clientData.sessionsUsed}<span style={{ fontSize:26,color:"#664422" }}>/10</span></div>
            <div style={{ fontSize:12,color:"#664422",margin:"6px 0 14px" }}>{t.block} {clientData.blockNum} · {t.trainer}: {clientData.trainerName}</div>
            <div style={{ background:"#2a1e0a",borderRadius:6,height:10,overflow:"hidden" }}>
              <div style={{ height:"100%",width:`${pct}%`,background:"linear-gradient(90deg,#ff6b2b,#ff9500)",borderRadius:6,transition:"width 0.5s" }} />
            </div>
            <div style={{ display:"flex",justifyContent:"space-between",marginTop:6,fontSize:11,color:"#664422" }}>
              <span>{t.session} {clientData.sessionsUsed}</span>
              <span>{10-clientData.sessionsUsed} remaining</span>
            </div>
          </div>
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:12 }}>
            <div className="stat-card">
              <div style={{ fontSize:11,color:"#664422" }}>{t.upcoming}</div>
              <div style={{ fontFamily:"'Bebas Neue'",fontSize:36,color:"#ff6b2b" }}>{bookings.filter(b=>b.status==="upcoming").length}</div>
            </div>
            <div className="stat-card">
              <div style={{ fontSize:11,color:"#664422" }}>{t.completed}</div>
              <div style={{ fontFamily:"'Bebas Neue'",fontSize:36,color:"#32c864" }}>{bookings.filter(b=>b.status==="completed").length}</div>
            </div>
          </div>
        </>}

        {view==="book" && <>
          <div className="section-title">{t.bookSession.toUpperCase()}</div>
          <div className="card" style={{ maxWidth:400 }}>
            <div style={{ fontSize:13,color:"#664422",marginBottom:20 }}>{t.sessionsWith} <span style={{ color:"#ff6b2b",fontWeight:700 }}>{clientData.trainerName}</span></div>
            <div style={{ display:"flex",flexDirection:"column",gap:14 }}>
              <div>
                <label style={{ fontSize:11,color:"#664422",display:"block",marginBottom:5,fontWeight:700 }}>{t.selectDate}</label>
                <input type="date" className="input" value={newBooking.date} onChange={e=>setNewBooking(p=>({...p,date:e.target.value}))} />
              </div>
              <div>
                <label style={{ fontSize:11,color:"#664422",display:"block",marginBottom:5,fontWeight:700 }}>{t.preferredTime}</label>
                <select className="input" value={newBooking.time} onChange={e=>setNewBooking(p=>({...p,time:e.target.value}))}>
                  {["06:00","07:00","08:00","09:00","10:00","11:00","12:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00"].map(tm=><option key={tm}>{tm}</option>)}
                </select>
              </div>
              <button className="btn btn-orange" style={{ padding:13,marginTop:4 }} onClick={submitBooking}>{t.confirmBooking}</button>
            </div>
          </div>
        </>}

        {view==="sessions" && <>
          <div className="section-title">{t.mySessions.toUpperCase()}</div>
          {bookings.length===0 && <div className="card" style={{ color:"#664422",fontSize:13,textAlign:"center" }}>{t.noSessions}</div>}
          {bookings.map(b=>(
            <div key={b.id} className="card" style={{ marginBottom:8,opacity:b.status==="completed"?0.55:1 }}>
              <div style={{ display:"flex",alignItems:"center",gap:14 }}>
                <div style={{ textAlign:"center",minWidth:52 }}>
                  <div style={{ fontFamily:"'Bebas Neue'",fontSize:22,color:"#ff6b2b",lineHeight:1 }}>{b.time}</div>
                  <div style={{ fontSize:10,color:"#664422" }}>{b.date}</div>
                </div>
                <div style={{ flex:1 }}>
                  <div style={{ fontWeight:700,fontSize:13 }}>{b.trainerName}</div>
                  <div style={{ fontSize:12,color:"#664422" }}>Session #{b.sessionNum}</div>
                </div>
                <span className={`badge ${b.status==="completed"?"badge-green":"badge-blue"}`}>{t[b.status]||b.status}</span>
              </div>
            </div>
          ))}
        </>}

        {view==="inquire" && <>
          <div className="section-title">{t.contactStudio.toUpperCase()}</div>
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:16 }}>
            <div className="card">
              <div style={{ fontWeight:700,fontSize:13,marginBottom:14 }}>{t.sendInquiry}</div>
              <div style={{ display:"flex",flexDirection:"column",gap:12 }}>
                <div>
                  <label style={{ fontSize:11,color:"#664422",display:"block",marginBottom:5,fontWeight:700 }}>{t.subject}</label>
                  <input className="input" value={newInquiry.subject} onChange={e=>setNewInquiry(p=>({...p,subject:e.target.value}))} placeholder={t.rescheduleNote} />
                </div>
                <div>
                  <label style={{ fontSize:11,color:"#664422",display:"block",marginBottom:5,fontWeight:700 }}>{t.message}</label>
                  <textarea className="input" value={newInquiry.message} onChange={e=>setNewInquiry(p=>({...p,message:e.target.value}))} placeholder={t.writeMessage} />
                </div>
                <button className="btn btn-orange" onClick={submitInquiry}>{t.sendInquiry}</button>
              </div>
            </div>
            <div>
              <div style={{ fontSize:12,color:"#664422",marginBottom:10 }}>{t.previousInquiries}</div>
              {inquiries.length===0 && <div className="card" style={{ color:"#664422",fontSize:13,textAlign:"center" }}>{t.noInquiries}</div>}
              {inquiries.map(inq=>(
                <div key={inq.id} className="card" style={{ marginBottom:8 }}>
                  <div style={{ display:"flex",justifyContent:"space-between",marginBottom:6 }}>
                    <span style={{ fontWeight:700,fontSize:13 }}>{inq.subject}</span>
                    <span className={`badge ${inq.status==="open"?"badge-orange":"badge-green"}`}>{t[inq.status]||inq.status}</span>
                  </div>
                  <div style={{ fontSize:12,color:"#886644" }}>{inq.message}</div>
                </div>
              ))}
            </div>
          </div>
        </>}
      </div>
    </Shell>
  );
}

// ─── ROOT ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [lang, setLang]               = useState("en");

  if (!currentUser) return <LoginScreen onLogin={(u,l)=>{ setCurrentUser(u); setLang(l); }} />;

  const props = { user:currentUser, onLogout:()=>setCurrentUser(null), lang, setLang };

  if (currentUser.role==="superadmin") return <SuperAdminPortal {...props} />;
  if (currentUser.role==="finance")    return <FinancePortal    {...props} />;
  if (currentUser.role==="trainer")    return <TrainerPortal    {...props} />;
  if (currentUser.role==="client")     return <ClientPortal     {...props} />;
}
