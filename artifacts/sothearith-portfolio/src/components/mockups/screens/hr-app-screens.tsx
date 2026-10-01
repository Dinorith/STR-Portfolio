import React from 'react';
import {
  Bell,
  Briefcase,
  Building,
  Calendar,
  CheckCircle2,
  Clock,
  DollarSign,
  Download,
  MapPin,
  QrCode,
  Receipt,
  Search,
  ShieldCheck,
} from 'lucide-react';

export function HRAppScreenContent({ screenId }: { screenId: string }) {
  switch (screenId) {
    case 'dashboard':
      return (
        <div className="mock-screen hr-screen">
          <div className="screen-header">
            <div>
              <span className="micro-tag">WORKFORCE OS · EMP #4029</span>
              <h4 className="screen-greeting">Hello, Sothearith 👋</h4>
            </div>
            <div className="avatar-chip dark">
              <span className="avatar-letter">SR</span>
              <span className="online-indicator" />
            </div>
          </div>

          {/* Active Work Attendance Status Card */}
          <div className="hr-status-card">
            <div className="hr-card-top">
              <span className="hr-badge-live">● CLOCKED IN (08:45 AM)</span>
              <span className="mono hr-timer-val">07h 42m</span>
            </div>
            <div className="hr-card-mid">
              <div className="hr-location-label">
                <MapPin size={13} /> Phnom Penh HQ · Design Floor 4
              </div>
              <div className="hr-progress-track">
                <div className="hr-progress-fill" style={{ width: '85%' }} />
              </div>
            </div>
            <div className="hr-card-foot mono">
              <span>SHIFT: 09:00 - 18:00</span>
              <span className="text-emerald">ON SCHEDULE</span>
            </div>
          </div>

          {/* Quick Action Matrix */}
          <div className="quick-grid-label">SELF-SERVICE SHORTCUTS</div>
          <div className="hr-actions-grid">
            <div className="hr-action-tile">
              <div className="tile-icon-hr blue"><Clock size={16} /></div>
              <span>Clock Out</span>
            </div>
            <div className="hr-action-tile">
              <div className="tile-icon-hr purple"><Calendar size={16} /></div>
              <span>Request Leave</span>
            </div>
            <div className="hr-action-tile">
              <div className="tile-icon-hr emerald"><DollarSign size={16} /></div>
              <span>My Payslip</span>
            </div>
            <div className="hr-action-tile">
              <div className="tile-icon-hr amber"><Receipt size={16} /></div>
              <span>File Claim</span>
            </div>
          </div>

          {/* Key HR Balance Metrics */}
          <div className="quick-grid-label">LEAVE & PAYROLL AT A GLANCE</div>
          <div className="hr-metrics-pair">
            <div className="hr-mini-metric">
              <span className="mono metric-sub">ANNUAL LEAVE</span>
              <strong>14.0 Days</strong>
              <span className="mono text-muted">Of 18 Days allocated</span>
            </div>
            <div className="hr-mini-metric">
              <span className="mono metric-sub">NEXT PAYDAY</span>
              <strong>Oct 15</strong>
              <span className="mono text-emerald">5 Days remaining</span>
            </div>
          </div>

          {/* Team Notice Feed */}
          <div className="quick-grid-label">COMPANY BULLETIN</div>
          <div className="hr-bulletin-item">
            <Bell size={14} className="text-blue" />
            <div>
              <strong>Q4 Strategic All-Hands Townhall</strong>
              <span className="mono">Today at 4:30 PM · Main Amphitheater</span>
            </div>
          </div>
        </div>
      );

    case 'attendance':
      return (
        <div className="mock-screen hr-screen">
          <div className="screen-header">
            <div>
              <span className="micro-tag">SMART TIME & ATTENDANCE</span>
              <h4 className="screen-greeting">GPS Check-In</h4>
            </div>
            <span className="term-badge">OFFICE GEOFENCE</span>
          </div>

          {/* Big Geofenced Radar Map Card */}
          <div className="hr-geo-card">
            <div className="geo-radar-ring">
              <div className="geo-center-dot" />
            </div>
            <div className="geo-meta">
              <strong>Phnom Penh Regional Tech Campus</strong>
              <span className="mono">Beacon: HQ-4F-BEACON-02 · Signal: Excellent</span>
            </div>
            <div className="geo-status-row mono">
              <span className="text-emerald">✓ INSIDE VALID RADIUS (8M)</span>
            </div>
          </div>

          {/* Clock In / Out Big Controller */}
          <div className="hr-clock-controller">
            <div className="clock-time-display">04:27:18 PM</div>
            <span className="mono clock-shift-desc">THURSDAY, 01 OCTOBER 2026</span>
            <button type="button" className="btn-clock-punch out">
              <span>PUNCH CLOCK OUT →</span>
            </button>
          </div>

          {/* Weekly Attendance Summary Log */}
          <div className="quick-grid-label">THIS WEEK'S ATTENDANCE LOG</div>
          <div className="hr-log-list">
            {[
              { day: 'MON', date: 'SEP 28', in: '08:52 AM', out: '06:05 PM', total: '8.2h', ok: true },
              { day: 'TUE', date: 'SEP 29', in: '08:48 AM', out: '06:00 PM', total: '8.1h', ok: true },
              { day: 'WED', date: 'SEP 30', in: '08:55 AM', out: '06:12 PM', total: '8.3h', ok: true },
              { day: 'THU', date: 'OCT 01', in: '08:45 AM', out: 'ACTIVE', total: '7.7h', ok: true },
            ].map((log) => (
              <div key={log.day} className="hr-log-row">
                <span className="log-day mono">{log.day}</span>
                <span className="mono text-muted">{log.date}</span>
                <span className="mono">{log.in} → {log.out}</span>
                <strong className="mono text-emerald">{log.total}</strong>
              </div>
            ))}
          </div>
        </div>
      );

    case 'leave':
      return (
        <div className="mock-screen hr-screen">
          <div className="screen-header">
            <div>
              <span className="micro-tag">TIME OFF & ABSENCES</span>
              <h4 className="screen-greeting">Leave Balances</h4>
            </div>
            <button type="button" className="mini-cta-btn">+ REQUEST</button>
          </div>

          {/* Leave Balances Grid */}
          <div className="hr-leave-grid">
            <div className="leave-tile blue">
              <span className="mono">ANNUAL LEAVE</span>
              <strong>14.0</strong>
              <span className="mono text-muted">Days Available</span>
            </div>
            <div className="leave-tile emerald">
              <span className="mono">SICK LEAVE</span>
              <strong>10.0</strong>
              <span className="mono text-muted">Days Available</span>
            </div>
            <div className="leave-tile purple">
              <span className="mono">COMPENSATORY</span>
              <strong>2.5</strong>
              <span className="mono text-muted">Days Banked</span>
            </div>
            <div className="leave-tile amber">
              <span className="mono">PARENTAL</span>
              <strong>90.0</strong>
              <span className="mono text-muted">Days Entitlement</span>
            </div>
          </div>

          {/* Pending Approval Card */}
          <div className="quick-grid-label">UPCOMING & PENDING REQUESTS</div>
          <div className="hr-request-card">
            <div className="req-header">
              <strong>Annual Holiday Leave</strong>
              <span className="hr-tag pending mono">PENDING MANAGER</span>
            </div>
            <div className="req-dates mono">
              <Calendar size={13} /> Oct 22, 2026 — Oct 25, 2026 (3 Days)
            </div>
            <div className="req-footer">
              <div className="approver-info">
                <span>Approver:</span>
                <strong>Sarah Chen (VP Design)</strong>
              </div>
              <button type="button" className="btn-ghost-cancel mono">WITHDRAW</button>
            </div>
          </div>

          <div className="hr-request-card approved">
            <div className="req-header">
              <strong>Medical Check-up Leave</strong>
              <span className="hr-tag approved mono">✓ APPROVED</span>
            </div>
            <div className="req-dates mono">
              <Calendar size={13} /> Sep 14, 2026 (Half Day AM)
            </div>
          </div>
        </div>
      );

    case 'payroll':
      return (
        <div className="mock-screen hr-screen">
          <div className="screen-header">
            <div>
              <span className="micro-tag">COMPENSATION & BENEFITS</span>
              <h4 className="screen-greeting">Salary Payslip</h4>
            </div>
            <span className="term-badge">CONFIDENTIAL</span>
          </div>

          {/* Main Net Pay Card */}
          <div className="hr-netpay-card">
            <span className="mono net-label">NET TAKE-HOME PAY (SEP 2026)</span>
            <h3 className="net-amount">$3,450.00</h3>
            <div className="net-disbursed mono">
              <CheckCircle2 size={13} /> DISBURSED TO ABA BANK (****8942)
            </div>
          </div>

          {/* Itemized Salary Breakdown */}
          <div className="quick-grid-label">ITEMIZED COMPENSATION</div>
          <div className="hr-pay-itemized">
            <div className="pay-line">
              <span>Basic Salary</span>
              <strong>$3,800.00</strong>
            </div>
            <div className="pay-line">
              <span>Housing & Tech Allowance</span>
              <strong className="text-emerald">+$200.00</strong>
            </div>
            <div className="pay-line">
              <span>Overtime Compensation (4.5h)</span>
              <strong className="text-emerald">+$150.00</strong>
            </div>
            <div className="pay-line deduct">
              <span>Income Tax Withholding (Salary Tax)</span>
              <strong className="text-rose">-$450.00</strong>
            </div>
            <div className="pay-line deduct">
              <span>National Social Security (NSSF)</span>
              <strong className="text-rose">-$250.00</strong>
            </div>
          </div>

          {/* Download Signed Payslip PDF Button */}
          <button type="button" className="hr-download-pdf-btn">
            <Download size={15} />
            <span>DOWNLOAD SIGNED PAYSLIP PDF</span>
          </button>
        </div>
      );

    case 'directory':
      return (
        <div className="mock-screen hr-screen">
          <div className="screen-header">
            <div>
              <span className="micro-tag">PEOPLE & ORGANIZATION</span>
              <h4 className="screen-greeting">Team Directory</h4>
            </div>
            <span className="mono" style={{ fontSize: '11px', color: '#64748b' }}>148 MEMBERS</span>
          </div>

          {/* Search Box */}
          <div className="hr-search-bar">
            <Search size={14} />
            <span>Search colleague or department...</span>
          </div>

          {/* Department Filter Chips */}
          <div className="hr-filter-scroll mono">
            <span className="chip active">ALL</span>
            <span className="chip">PRODUCT DESIGN</span>
            <span className="chip">ENGINEERING</span>
            <span className="chip">MARKETING</span>
          </div>

          {/* Colleague Contact Cards */}
          <div className="hr-directory-list">
            {[
              { name: 'Sarah Chen', title: 'VP of Product & UX', dept: 'Design', initials: 'SC', state: 'online' },
              { name: 'Dara Sovann', title: 'Staff Frontend Engineer', dept: 'Engineering', initials: 'DS', state: 'meeting' },
              { name: 'Elena Vance', title: 'Senior UX Researcher', dept: 'Design', initials: 'EV', state: 'online' },
              { name: 'Marcus Brody', title: 'Technical Product Lead', dept: 'Product', initials: 'MB', state: 'leave' },
            ].map((colleague) => (
              <div key={colleague.name} className="hr-colleague-card">
                <div className="colleague-avatar">
                  <span>{colleague.initials}</span>
                  <span className={`status-dot ${colleague.state}`} />
                </div>
                <div className="colleague-info">
                  <strong>{colleague.name}</strong>
                  <span>{colleague.title}</span>
                  <span className="dept-tag mono">{colleague.dept}</span>
                </div>
                <button type="button" className="colleague-msg-btn">CHAT</button>
              </div>
            ))}
          </div>
        </div>
      );

    case 'shifts':
      return (
        <div className="mock-screen hr-screen">
          <div className="screen-header">
            <div>
              <span className="micro-tag">WORKFORCE SCHEDULING</span>
              <h4 className="screen-greeting">Shift Roster</h4>
            </div>
            <span className="term-badge">WEEK 40</span>
          </div>

          <div className="hr-current-shift-hero">
            <span className="mono shift-type-pill">CURRENT SHIFT: CORE MORNING</span>
            <h3>09:00 AM — 06:00 PM</h3>
            <p className="mono">PHNOM PENH TECH CAMPUS · STATION D4</p>
          </div>

          <div className="quick-grid-label">UPCOMING ROSTER DAYS</div>
          <div className="hr-roster-calendar">
            {[
              { day: 'FRI 02 OCT', time: '09:00 - 18:00', role: 'Design Standup & Sprint Review', type: 'core' },
              { day: 'SAT 03 OCT', time: 'WEEKEND OFF', role: 'Rest Day', type: 'off' },
              { day: 'SUN 04 OCT', time: 'WEEKEND OFF', role: 'Rest Day', type: 'off' },
              { day: 'MON 05 OCT', time: '09:00 - 18:00', role: 'Quarterly Planning Hub', type: 'core' },
            ].map((shift) => (
              <div key={shift.day} className={`roster-row ${shift.type}`}>
                <div className="roster-meta">
                  <strong>{shift.day}</strong>
                  <span>{shift.role}</span>
                </div>
                <span className="roster-badge mono">{shift.time}</span>
              </div>
            ))}
          </div>

          <button type="button" className="btn-shift-swap">REQUEST SHIFT SWAP →</button>
        </div>
      );

    case 'performance':
      return (
        <div className="mock-screen hr-screen">
          <div className="screen-header">
            <div>
              <span className="micro-tag">TALENT & GROWTH</span>
              <h4 className="screen-greeting">Performance OKRs</h4>
            </div>
            <span className="term-badge">Q3 CYCLE</span>
          </div>

          <div className="hr-okr-overview-card">
            <span className="mono">OVERALL OBJECTIVE COMPLETION</span>
            <div className="okr-big-val">84%</div>
            <div className="hr-progress-track">
              <div className="hr-progress-fill emerald" style={{ width: '84%' }} />
            </div>
            <span className="mono text-emerald" style={{ fontSize: '9px', marginTop: '6px', display: 'block' }}>
              EXCEEDING BENCHMARK EXPECTATIONS
            </span>
          </div>

          <div className="quick-grid-label">ACTIVE QUARTERLY KEY RESULTS</div>
          <div className="hr-okr-list">
            <div className="okr-item">
              <div className="okr-title-row">
                <strong>Standardize 80+ Enterprise Components</strong>
                <span className="mono text-emerald">100% ✓</span>
              </div>
              <div className="hr-progress-track">
                <div className="hr-progress-fill" style={{ width: '100%' }} />
              </div>
            </div>

            <div className="okr-item">
              <div className="okr-title-row">
                <strong>Conduct 20 User Usability Tests</strong>
                <span className="mono">18 / 20 (90%)</span>
              </div>
              <div className="hr-progress-track">
                <div className="hr-progress-fill" style={{ width: '90%' }} />
              </div>
            </div>

            <div className="okr-item">
              <div className="okr-title-row">
                <strong>Accessibility WCAG AAA Token Audit</strong>
                <span className="mono">65%</span>
              </div>
              <div className="hr-progress-track">
                <div className="hr-progress-fill amber" style={{ width: '65%' }} />
              </div>
            </div>
          </div>
        </div>
      );

    case 'claims':
      return (
        <div className="mock-screen hr-screen">
          <div className="screen-header">
            <div>
              <span className="micro-tag">EXPENSES & REIMBURSEMENT</span>
              <h4 className="screen-greeting">Expense Claims</h4>
            </div>
            <button type="button" className="mini-cta-btn">+ SCAN RECEIPT</button>
          </div>

          <div className="hr-claim-stats">
            <div className="stat-box">
              <span className="mono">PENDING REIMBURSEMENT</span>
              <strong>$185.00</strong>
            </div>
            <div className="stat-box">
              <span className="mono">CLEARED THIS MONTH</span>
              <strong className="text-emerald">$420.50</strong>
            </div>
          </div>

          <div className="quick-grid-label">RECENT SUBMISSIONS</div>
          <div className="hr-claim-list">
            <div className="claim-item approved">
              <div className="claim-icon-box"><Receipt size={14} /></div>
              <div className="claim-details">
                <strong>Client Product Review Lunch</strong>
                <span className="mono">Food & Dining · Sep 29</span>
              </div>
              <div className="claim-amount-box">
                <strong>$65.00</strong>
                <span className="mono status approved">✓ APPROVED</span>
              </div>
            </div>

            <div className="claim-item pending">
              <div className="claim-icon-box"><Briefcase size={14} /></div>
              <div className="claim-details">
                <strong>Design Team Software License</strong>
                <span className="mono">Software & Subscriptions · Today</span>
              </div>
              <div className="claim-amount-box">
                <strong>$120.00</strong>
                <span className="mono status pending">PROCESSING</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'announcements':
      return (
        <div className="mock-screen hr-screen">
          <div className="screen-header">
            <div>
              <span className="micro-tag">INTERNAL COMMUNICATIONS</span>
              <h4 className="screen-greeting">Company News</h4>
            </div>
            <span className="term-badge">OFFICIAL</span>
          </div>

          <div className="hr-news-card featured">
            <span className="mono news-tag">LEADERSHIP BROADCAST · PINNED</span>
            <h3>Quarterly Townhall & Innovation Awards</h3>
            <p>Join the executive leadership team this Friday as we announce major regional milestones and employee excellence awards.</p>
            <div className="news-meta mono">
              <span>BY CEO OFFICE</span>
              <span>•</span>
              <span>OCT 01, 2026</span>
            </div>
          </div>

          <div className="hr-news-card">
            <span className="mono news-tag blue">POLICY UPDATE</span>
            <h4>Upgraded Comprehensive Health Insurance</h4>
            <p>Annual outpatient coverage increased by 30% for all staff and dependents starting next month.</p>
            <div className="news-meta mono">
              <span>PEOPLE & TALENT TEAM</span>
            </div>
          </div>
        </div>
      );

    case 'profile':
    default:
      return (
        <div className="mock-screen hr-screen">
          <div className="screen-header">
            <div>
              <span className="micro-tag">DIGITAL CREDENTIALS</span>
              <h4 className="screen-greeting">Employee ID Badge</h4>
            </div>
            <span className="term-badge">VERIFIED</span>
          </div>

          {/* Digital Employee ID Smart Badge */}
          <div className="hr-id-badge-card">
            <div className="badge-header">
              <span className="badge-org-name"><Building size={13} /> TECH ENTERPRISE CORP</span>
              <span className="badge-chip">NFC READY</span>
            </div>

            <div className="badge-middle">
              <div className="badge-photo-frame">
                <span className="badge-photo-text">SR</span>
              </div>
              <div className="badge-employee-name">SOTHEARITH RITH</div>
              <div className="badge-job-title">Lead Mobile UX/UI Designer</div>
              <div className="mono badge-id-no">EMP-2026-4029</div>
            </div>

            <div className="badge-qr-section">
              <QrCode size={64} className="qr-svg" />
              <div className="badge-meta mono">
                <span>DEPARTMENT: PRODUCT DESIGN</span>
                <span>LOCATION: PHNOM PENH HQ</span>
                <span>SECURITY LEVEL: LEVEL 4 ACCESS</span>
              </div>
            </div>
          </div>

          <div className="badge-quick-actions">
            <button type="button" className="btn-badge-action"><ShieldCheck size={14} /> SECURITY PASS</button>
            <button type="button" className="btn-badge-action"><Download size={14} /> WORK CERTIFICATE</button>
          </div>
        </div>
      );
  }
}
