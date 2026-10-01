import React from 'react';
import { Search } from 'lucide-react';

export function SchoolSystemCanvas({ sectionId }: { sectionId: string }) {
  if (sectionId === 'design-system-spec') {
    return (
      <div className="web-canvas sms-canvas sms-design-system-view">
        {/* Top Bar */}
        <div className="sms-top-nav">
          <div className="sms-brand-group">
            <span className="sms-logo-icon">⚡</span>
            <strong>AcademiaOS Design Tokens</strong>
            <span className="mono sms-version-tag">V 2.4.0 · ENTERPRISE</span>
          </div>
          <div className="sms-nav-actions mono">
            <span>WCAG AAA COMPLIANT</span>
            <span className="divider">/</span>
            <span>80+ FIGMA COMPONENTS</span>
          </div>
        </div>

        {/* Design System Board */}
        <div className="sms-ds-grid">
          {/* Column 1: Color Tokens */}
          <div className="sms-ds-card">
            <span className="mono ds-card-label">SEMANTIC COLOR TOKENS</span>
            <div className="ds-swatches-grid">
              <div className="ds-swatch">
                <div className="swatch-color" style={{ background: '#0f172a' }} />
                <span className="mono swatch-name">Ink 900</span>
                <span className="mono swatch-val">#0f172a</span>
              </div>
              <div className="ds-swatch">
                <div className="swatch-color" style={{ background: '#2563eb' }} />
                <span className="mono swatch-name">Cobalt 600</span>
                <span className="mono swatch-val">#2563eb</span>
              </div>
              <div className="ds-swatch">
                <div className="swatch-color" style={{ background: '#059669' }} />
                <span className="mono swatch-name">Emerald 600</span>
                <span className="mono swatch-val">#059669</span>
              </div>
              <div className="ds-swatch">
                <div className="swatch-color" style={{ background: '#d97706' }} />
                <span className="mono swatch-name">Amber 600</span>
                <span className="mono swatch-val">#d97706</span>
              </div>
            </div>

            <span className="mono ds-card-label" style={{ marginTop: '16px' }}>TYPOGRAPHY SCALE</span>
            <div className="ds-type-spec mono">
              <div><span>Display 01</span><strong>36px / -0.04em</strong></div>
              <div><span>Heading 02</span><strong>24px / -0.02em</strong></div>
              <div><span>Body Text</span><strong>14px / 1.55</strong></div>
              <div><span>Data Mono</span><strong>11px / JetBrains</strong></div>
            </div>
          </div>

          {/* Column 2: Interactive Components Showcase */}
          <div className="sms-ds-card">
            <span className="mono ds-card-label">BUTTON VARIANTS & STATES</span>
            <div className="ds-btn-matrix">
              <button type="button" className="ds-btn ds-btn-primary">PRIMARY ACTION</button>
              <button type="button" className="ds-btn ds-btn-secondary">SECONDARY</button>
              <button type="button" className="ds-btn ds-btn-outline">OUTLINE GHOST</button>
              <button type="button" className="ds-btn ds-btn-danger">DESTRUCTIVE</button>
            </div>

            <span className="mono ds-card-label" style={{ marginTop: '16px' }}>ACADEMIC STATUS BADGES</span>
            <div className="ds-badge-matrix">
              <span className="sms-status-tag status-enrolled">● ENROLLED</span>
              <span className="sms-status-tag status-probation">▲ ON PROBATION</span>
              <span className="sms-status-tag status-graduated">✓ GRADUATED</span>
              <span className="sms-status-tag status-leave">○ ON LEAVE</span>
            </div>

            <span className="mono ds-card-label" style={{ marginTop: '16px' }}>FORM CONTROLS</span>
            <div className="ds-form-row">
              <div className="ds-input-mock">
                <span className="ds-input-label">Student ID</span>
                <span className="ds-input-value">ST-2026-8942</span>
              </div>
              <div className="ds-input-mock select">
                <span className="ds-input-label">Academic Department</span>
                <span className="ds-input-value">Computer Science & Engineering ▼</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (sectionId === 'student-directory') {
    return (
      <div className="web-canvas sms-canvas sms-table-view">
        {/* Table View Header */}
        <div className="sms-top-nav">
          <div className="sms-brand-group">
            <strong>Student Directory & Academic Gradebook</strong>
            <span className="mono sms-version-tag">2,840 TOTAL RECORDS</span>
          </div>
          <div className="sms-table-actions">
            <button type="button" className="sms-action-btn secondary">EXPORT CSV</button>
            <button type="button" className="sms-action-btn primary">+ ADD STUDENT</button>
          </div>
        </div>

        {/* Data Table Search & Filter Bar */}
        <div className="sms-filter-strip">
          <div className="sms-search-box">
            <Search size={14} />
            <span>Search student by name, ID number, or advisor...</span>
          </div>
          <div className="sms-quick-filters mono">
            <span className="filter-chip active">ALL (2,840)</span>
            <span className="filter-chip">HONOR ROLL (412)</span>
            <span className="filter-chip">AT RISK (28)</span>
            <span className="filter-chip">SENIORS (680)</span>
          </div>
        </div>

        {/* High-Density Data Grid */}
        <div className="sms-data-table-wrap">
          <table className="sms-data-table">
            <thead>
              <tr className="mono">
                <th style={{ width: '36px' }}><input type="checkbox" /></th>
                <th>STUDENT NAME & ID</th>
                <th>GRADE / SECTION</th>
                <th>ATTENDANCE</th>
                <th>CUMULATIVE GPA</th>
                <th>TUITION STATUS</th>
                <th style={{ textAlign: 'right' }}>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Sothearith Rith', id: 'ST-2026-89240', grade: 'Grade 12-A', att: '98.6%', gpa: '3.92', status: 'PAID', badge: 'status-enrolled' },
                { name: 'Elena Vance', id: 'ST-2026-89241', grade: 'Grade 12-A', att: '96.2%', gpa: '3.85', status: 'PAID', badge: 'status-enrolled' },
                { name: 'Marcus Brody', id: 'ST-2026-89242', grade: 'Grade 11-B', att: '92.4%', gpa: '3.40', status: 'PENDING', badge: 'status-probation' },
                { name: 'Sophia Chen', id: 'ST-2026-89243', grade: 'Grade 12-C', att: '99.1%', gpa: '4.00', status: 'PAID', badge: 'status-enrolled' },
              ].map((row) => (
                <tr key={row.id}>
                  <td><input type="checkbox" /></td>
                  <td>
                    <div className="table-student-name">{row.name}</div>
                    <div className="mono table-student-id">{row.id}</div>
                  </td>
                  <td><span className="grade-tag">{row.grade}</span></td>
                  <td>
                    <div className="table-att-bar">
                      <div className="bar-fill" style={{ width: row.att }} />
                      <span>{row.att}</span>
                    </div>
                  </td>
                  <td><strong className="table-gpa">{row.gpa}</strong></td>
                  <td>
                    <span className={`sms-status-tag ${row.badge}`}>
                      {row.status === 'PAID' ? '● PAID' : '▲ PENDING'}
                    </span>
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    <button type="button" className="table-btn-small">TRANSCRIPT</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  if (sectionId === 'schedule-matrix') {
    return (
      <div className="web-canvas sms-canvas sms-scheduler-view">
        <div className="sms-top-nav">
          <div className="sms-brand-group">
            <strong>Timetable Coordinator & Room Allocation</strong>
            <span className="mono conflict-free-badge">✓ 0 CONFLICTS DETECTED</span>
          </div>
          <div className="sms-table-actions">
            <span className="mono">WEEK 08 · FALL 2026</span>
          </div>
        </div>

        {/* Timetable Grid */}
        <div className="sms-schedule-grid">
          <div className="schedule-header-row mono">
            <div className="col-time">TIME</div>
            <div>MON</div>
            <div>TUE</div>
            <div>WED</div>
            <div>THU</div>
            <div>FRI</div>
          </div>

          <div className="schedule-data-row">
            <div className="col-time mono">08:30</div>
            <div className="sched-cell filled blue">
              <strong>HCI & Systems</strong>
              <span>Lab 302 · Prof. Sovann</span>
            </div>
            <div className="sched-cell empty" />
            <div className="sched-cell filled emerald">
              <strong>Typography & Systems</strong>
              <span>Studio B · Prof. Dara</span>
            </div>
            <div className="sched-cell empty" />
            <div className="sched-cell filled purple">
              <strong>Cognitive Psychology</strong>
              <span>Hall 01 · Dr. Seng</span>
            </div>
          </div>

          <div className="schedule-data-row">
            <div className="col-time mono">10:30</div>
            <div className="sched-cell empty" />
            <div className="sched-cell filled amber">
              <strong>Advanced Algorithms</strong>
              <span>Lecture Hall C</span>
            </div>
            <div className="sched-cell empty" />
            <div className="sched-cell filled blue">
              <strong>Interface Studio Lab</strong>
              <span>Lab 302 · Prof. Sovann</span>
            </div>
            <div className="sched-cell empty" />
          </div>
        </div>
      </div>
    );
  }

  // Default: Admin Dashboard view
  return (
    <div className="web-canvas sms-canvas sms-dashboard-view">
      {/* Top Administration Navigation Bar */}
      <header className="sms-app-header">
        <div className="sms-header-left">
          <div className="sms-school-badge">
            <span className="shield-icon">🏛️</span>
            <div>
              <div className="school-title">ACADEMIA ENTERPRISE OS</div>
              <div className="school-subtitle mono">CAMBODIA REGIONAL CAMPUS · SEMESTER 2</div>
            </div>
          </div>
        </div>

        <nav className="sms-nav-tabs mono">
          <span className="tab-item active">OVERVIEW</span>
          <span className="tab-item">STUDENT DIRECTORY</span>
          <span className="tab-item">FACULTY</span>
          <span className="tab-item">SCHEDULE MATRIX</span>
          <span className="tab-item">DESIGN TOKENS</span>
        </nav>

        <div className="sms-header-right">
          <span className="mono role-chip">OFFICE OF THE REGISTRAR</span>
        </div>
      </header>

      {/* KPI Cards Row */}
      <div className="sms-kpi-row">
        <div className="sms-kpi-card">
          <span className="kpi-label mono">TOTAL ENROLLMENT</span>
          <div className="kpi-val">2,840</div>
          <span className="kpi-delta positive mono">+4.2% YOY GROWTH</span>
        </div>

        <div className="sms-kpi-card">
          <span className="kpi-label mono">DAILY ATTENDANCE</span>
          <div className="kpi-val">98.4%</div>
          <span className="kpi-delta positive mono">OPTIMAL THRESHOLD</span>
        </div>

        <div className="sms-kpi-card">
          <span className="kpi-label mono">FACULTY MEMBERS</span>
          <div className="kpi-val">148</div>
          <span className="kpi-delta mono">100% CLASSES STAFFED</span>
        </div>

        <div className="sms-kpi-card">
          <span className="kpi-label mono">TUITION COMPLIANCE</span>
          <div className="kpi-val">99.2%</div>
          <span className="kpi-delta positive mono">$1.42M REVENUE CLEARED</span>
        </div>
      </div>

      {/* Main Administrative Two-Column Grid */}
      <div className="sms-dashboard-grid">
        {/* Left Column: Live Class Attendance Feed */}
        <div className="sms-panel">
          <div className="panel-header">
            <span className="mono panel-title">LIVE CLASSROOM ATTENDANCE MONITOR</span>
            <span className="live-status-pill mono">● REAL-TIME</span>
          </div>
          <div className="panel-body">
            {[
              { class: 'Grade 12 — Advanced Computer Systems', attended: '42 / 42 Present', pct: '100%', state: 'perfect' },
              { class: 'Grade 11 — Interaction Design & Ergonomics', attended: '38 / 40 Present', pct: '95%', state: 'normal' },
              { class: 'Grade 10 — Foundations of Visual Communication', attended: '36 / 36 Present', pct: '100%', state: 'perfect' },
              { class: 'Grade 09 — Digital Literacy & Ethics', attended: '33 / 35 Present', pct: '94.2%', state: 'normal' },
            ].map((c) => (
              <div key={c.class} className="sms-attendance-row">
                <div className="att-class-meta">
                  <strong>{c.class}</strong>
                  <span className="mono">{c.attended}</span>
                </div>
                <div className="att-meter-bar">
                  <div className="meter-fill" style={{ width: c.pct }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Pending Registrar Approvals */}
        <div className="sms-panel">
          <div className="panel-header">
            <span className="mono panel-title">PENDING REGISTRAR ACTIONS</span>
            <span className="mono count-badge">3 ACTIONS</span>
          </div>
          <div className="panel-body">
            <div className="action-item-card">
              <div className="action-meta">
                <strong>Midterm Gradebook Validation</strong>
                <span className="mono">Faculty of Computer Science · 12 courses</span>
              </div>
              <button type="button" className="btn-approve mono">APPROVE ALL →</button>
            </div>

            <div className="action-item-card">
              <div className="action-meta">
                <strong>Schedule Room Conflict Override</strong>
                <span className="mono">Hall B4 · Double booking resolved automatically</span>
              </div>
              <button type="button" className="btn-approve mono">CONFIRM</button>
            </div>

            <div className="action-item-card">
              <div className="action-meta">
                <strong>Ministry of Education Audit Report</strong>
                <span className="mono">Annual compliance export ready for PDF signature</span>
              </div>
              <button type="button" className="btn-approve mono">DOWNLOAD</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
