import React from 'react';
import {
  Calendar,
  CheckCircle2,
  Clock,
  Download,
  FileText,
  GraduationCap,
  MapPin,
  QrCode,
  Search,
  Wifi,
} from 'lucide-react';

export function SalaAppScreenContent({ screenId }: { screenId: string }) {
  switch (screenId) {
    case 'home':
      return (
        <div className="mock-screen student-home">
          <div className="screen-header">
            <div>
              <span className="micro-tag">SALA APP · SEMESTER 4</span>
              <h4 className="screen-greeting">Hello, Sothearith 👋</h4>
            </div>
            <div className="avatar-chip">
              <span className="avatar-letter">S</span>
              <span className="online-indicator" />
            </div>
          </div>

          {/* Student Pass Card */}
          <div className="student-id-card">
            <div className="card-top">
              <span className="univ-badge"><GraduationCap size={13} /> SALA ACADEMY</span>
              <span className="status-pill active">ACTIVE PASS</span>
            </div>
            <div className="card-mid">
              <div className="student-name">SOTHEARITH RITH</div>
              <div className="student-id-num">ID #ST-2026-8942</div>
            </div>
            <div className="card-bottom">
              <span>MAJOR: DIGITAL PRODUCT UX</span>
              <span className="barcode-icon">||||| |||| |||||</span>
            </div>
          </div>

          {/* Next Class Notification Banner */}
          <div className="next-lecture-card">
            <div className="lecture-time-badge">
              <Clock size={12} />
              <span>IN 20 MIN</span>
            </div>
            <div className="lecture-details">
              <h5>Interaction Design & Systems</h5>
              <p>Hall B-204 · Prof. Sovann Dara</p>
            </div>
            <button className="mini-action-btn" type="button">DIRECTIONS →</button>
          </div>

          {/* Quick Action Matrix */}
          <div className="quick-grid-label">EVERYDAY SHORTCUTS</div>
          <div className="quick-grid">
            <div className="quick-tile">
              <div className="tile-icon green"><CheckCircle2 size={16} /></div>
              <span>Attendance</span>
              <strong>96.4%</strong>
            </div>
            <div className="quick-tile">
              <div className="tile-icon purple"><GraduationCap size={16} /></div>
              <span>Current GPA</span>
              <strong>3.88</strong>
            </div>
            <div className="quick-tile">
              <div className="tile-icon amber"><FileText size={16} /></div>
              <span>Assignments</span>
              <strong>3 Pending</strong>
            </div>
            <div className="quick-tile">
              <div className="tile-icon blue"><Calendar size={16} /></div>
              <span>Classes</span>
              <strong>4 Today</strong>
            </div>
          </div>
        </div>
      );

    case 'timetable':
      return (
        <div className="mock-screen student-timetable">
          <div className="screen-header-simple">
            <h4>Weekly Timetable</h4>
            <span className="term-badge">WEEK 08</span>
          </div>

          {/* Day Selector */}
          <div className="day-selector-strip">
            {['MON', 'TUE', 'WED', 'THU', 'FRI'].map((day, idx) => (
              <div key={day} className={`day-pill ${idx === 2 ? 'active' : ''}`}>
                <span className="day-name">{day}</span>
                <span className="day-date">{12 + idx}</span>
                {idx === 2 && <span className="active-dot" />}
              </div>
            ))}
          </div>

          {/* Lecture Timeline */}
          <div className="schedule-timeline">
            <div className="timeline-slot current">
              <div className="slot-time">
                <span>08:30</span>
                <span>10:00</span>
                <span className="live-tag">NOW</span>
              </div>
              <div className="slot-card live">
                <div className="slot-subject">Human-Computer Interaction</div>
                <div className="slot-meta">
                  <span><MapPin size={11} /> Lab Room 302</span>
                  <span>Prof. Sovann</span>
                </div>
              </div>
            </div>

            <div className="timeline-slot">
              <div className="slot-time">
                <span>10:30</span>
                <span>12:00</span>
              </div>
              <div className="slot-card blue-tint">
                <div className="slot-subject">Advanced Typography & Tokens</div>
                <div className="slot-meta">
                  <span><MapPin size={11} /> Design Studio B</span>
                  <span>Prof. Dara</span>
                </div>
              </div>
            </div>

            <div className="timeline-slot">
              <div className="slot-time">
                <span>13:30</span>
                <span>15:00</span>
              </div>
              <div className="slot-card gray-tint">
                <div className="slot-subject">Mobile Architecture & React</div>
                <div className="slot-meta">
                  <span><MapPin size={11} /> Lecture Hall 1</span>
                  <span>Dr. Chantha</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'grades':
      return (
        <div className="mock-screen student-grades">
          <div className="screen-header-simple">
            <h4>Academic Standing</h4>
            <span className="term-badge">SPRING 2026</span>
          </div>

          {/* GPA Radial Gauge */}
          <div className="gpa-summary-card">
            <div className="gpa-gauge">
              <div className="gpa-number">3.88</div>
              <div className="gpa-scale">/ 4.00 GPA</div>
            </div>
            <div className="gpa-stats">
              <div className="gpa-stat-row">
                <span>Completed Credits</span>
                <strong>84 / 120</strong>
              </div>
              <div className="gpa-stat-row">
                <span>Standing</span>
                <strong className="text-emerald">High Distinction</strong>
              </div>
              <div className="gpa-stat-row">
                <span>Department Rank</span>
                <strong>Top 4%</strong>
              </div>
            </div>
          </div>

          <div className="quick-grid-label">COURSE PERFORMANCE</div>
          <div className="course-grades-list">
            {[
              { code: 'CS-401', name: 'UI Systems & Tokens', grade: 'A+', score: '98%', pts: '4.0' },
              { code: 'UX-302', name: 'User Testing & Heuristics', grade: 'A', score: '94%', pts: '4.0' },
              { code: 'DEV-210', name: 'Mobile App Engineering', grade: 'A', score: '92%', pts: '3.8' },
              { code: 'DES-105', name: 'Spatial Interaction & 3D', grade: 'A-', score: '89%', pts: '3.7' },
            ].map((course) => (
              <div key={course.code} className="course-grade-row">
                <div>
                  <span className="course-code">{course.code}</span>
                  <div className="course-title">{course.name}</div>
                </div>
                <div className="grade-badge-wrap">
                  <span className="grade-pill">{course.grade}</span>
                  <span className="grade-score">{course.score}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case 'homework':
      return (
        <div className="mock-screen student-homework">
          <div className="screen-header-simple">
            <h4>Assignments</h4>
            <span className="term-badge">3 PENDING</span>
          </div>

          <div className="filter-pill-row">
            <button type="button" className="sub-pill active">Due Soon (3)</button>
            <button type="button" className="sub-pill">In Review (1)</button>
            <button type="button" className="sub-pill">Done (16)</button>
          </div>

          <div className="tasks-container">
            <div className="task-card urgent">
              <div className="task-top">
                <span className="priority-badge high">URGENT · 14H LEFT</span>
                <span className="due-date">Due Tomorrow, 11:59 PM</span>
              </div>
              <div className="task-name">Figma Design System Submission</div>
              <div className="task-desc">Complete auto-layout components and accessibility color documentation.</div>
              <div className="task-progress-wrap">
                <div className="task-progress-bar"><div className="fill" style={{ width: '85%' }} /></div>
                <span>85% complete</span>
              </div>
              <button className="submit-hw-btn" type="button">UPLOAD ASSIGNMENT →</button>
            </div>

            <div className="task-card">
              <div className="task-top">
                <span className="priority-badge med">MEDIUM</span>
                <span className="due-date">Due in 3 days</span>
              </div>
              <div className="task-name">Usability Test Synthesis Report</div>
              <div className="task-desc">Analyze transcripts of 6 participant interviews.</div>
            </div>

            <div className="task-card">
              <div className="task-top">
                <span className="priority-badge low">NORMAL</span>
                <span className="due-date">Due Oct 15</span>
              </div>
              <div className="task-name">Micro-interactions Case Study Essay</div>
              <div className="task-desc">Review 3 mobile apps utilizing physics-based gestures.</div>
            </div>
          </div>
        </div>
      );

    case 'profile':
      return (
        <div className="mock-screen student-profile">
          <div className="profile-hero">
            <div className="profile-avatar-big">SR</div>
            <h4>Sothearith Rith</h4>
            <p>Undergraduate · Year 4 Designer</p>
          </div>

          {/* Interactive NFC Digital Card */}
          <div className="nfc-digital-pass">
            <div className="pass-top">
              <span>DIGITAL CAMPUS PASS</span>
              <span className="nfc-icon"><Wifi size={14} /> NFC READY</span>
            </div>
            <div className="pass-qr">
              <QrCode size={56} />
              <div className="qr-info">
                <strong>Tap phone at campus gate</strong>
                <p>NFC auto-detected within 5cm</p>
              </div>
            </div>
            <div className="pass-id-line">ID: #ST-89240-2026</div>
          </div>

          <div className="profile-detail-list">
            <div className="p-item"><span>Email</span><strong>sothearith.r@univ.edu.kh</strong></div>
            <div className="p-item"><span>Faculty</span><strong>Information & Computer Tech</strong></div>
            <div className="p-item"><span>Advisor</span><strong>Dr. Chantha Seng</strong></div>
            <div className="p-item"><span>Library Status</span><strong className="text-emerald">Clear (0 Fines)</strong></div>
          </div>
        </div>
      );

    case 'attendance':
      return (
        <div className="mock-screen student-attendance">
          <div className="screen-header-simple">
            <h4>Smart Attendance</h4>
            <span className="status-pill active">BEACON ACTIVE</span>
          </div>

          {/* Quick Check-in Button */}
          <div className="checkin-beacon-box">
            <div className="beacon-pulse">
              <MapPin size={24} />
            </div>
            <h5>You are in Lab Room 302</h5>
            <p>Bluetooth classroom beacon verified</p>
            <button className="checkin-btn" type="button">TAP TO CHECK IN NOW</button>
          </div>

          {/* Metrics */}
          <div className="attendance-stats-grid">
            <div className="att-stat">
              <span>Overall Rate</span>
              <strong>96.4%</strong>
            </div>
            <div className="att-stat">
              <span>Present</span>
              <strong>46 Sessions</strong>
            </div>
            <div className="att-stat">
              <span>Excused</span>
              <strong>2 Days</strong>
            </div>
            <div className="att-stat">
              <span>Absences Left</span>
              <strong>2 Allowed</strong>
            </div>
          </div>

          <div className="quick-grid-label">MONTHLY PRESENCE CALENDAR</div>
          <div className="presence-dots-grid">
            {Array.from({ length: 28 }).map((_, i) => (
              <span
                key={i}
                className={`presence-dot ${i === 8 ? 'absent' : i === 15 ? 'excused' : 'present'}`}
                title={`Day ${i + 1}`}
              />
            ))}
          </div>
        </div>
      );

    case 'materials':
      return (
        <div className="mock-screen student-materials">
          <div className="screen-header-simple">
            <h4>Course Materials</h4>
            <span className="term-badge">CLOUD DRIVE</span>
          </div>

          <div className="search-mock-bar">
            <Search size={14} />
            <span>Search lecture slides, notes...</span>
          </div>

          <div className="quick-grid-label">RECENT DOWNLOADS</div>
          <div className="files-list">
            {[
              { name: 'Lecture 08 - Design Tokens.pdf', size: '12.4 MB', date: 'Yesterday' },
              { name: 'Syllabus - Mobile Architecture.pdf', size: '2.1 MB', date: 'Sep 24' },
              { name: 'Heuristics Evaluation Template.fig', size: '18.9 MB', date: 'Sep 18' },
              { name: 'Audio Lecture: Cognitive Load.m4a', size: '34.0 MB', date: 'Sep 14' },
            ].map((f) => (
              <div key={f.name} className="file-row">
                <div className="file-icon"><FileText size={16} /></div>
                <div className="file-info">
                  <div className="file-name">{f.name}</div>
                  <div className="file-meta">{f.size} · {f.date}</div>
                </div>
                <button type="button" className="file-dl-btn"><Download size={14} /></button>
              </div>
            ))}
          </div>
        </div>
      );

    case 'exams':
      return (
        <div className="mock-screen student-exams">
          <div className="screen-header-simple">
            <h4>Exam Schedule</h4>
            <span className="priority-badge high">6 DAYS UNTIL MIDTERMS</span>
          </div>

          {/* Hall Ticket Card */}
          <div className="exam-ticket-card">
            <div className="ticket-top">
              <span>OFFICIAL HALL TICKET</span>
              <span className="univ-code">MIDTERM 2026</span>
            </div>
            <div className="ticket-main">
              <div className="exam-subj">HCI & Interactive Systems</div>
              <div className="exam-date-row">
                <div><span>Date</span><strong>Tuesday, Oct 8</strong></div>
                <div><span>Time</span><strong>09:00 - 11:30 AM</strong></div>
              </div>
              <div className="exam-hall-row">
                <div><span>Hall</span><strong>Auditorium C</strong></div>
                <div><span>Desk Seat</span><strong>#42 (Row 4)</strong></div>
              </div>
            </div>
            <div className="ticket-barcode">
              <QrCode size={40} />
              <span>SCAN AT ENTRANCE FOR SEAT VERIFICATION</span>
            </div>
          </div>

          <div className="quick-grid-label">PERMITTED ITEMS</div>
          <div className="permitted-checklist">
            <span>✓ Student ID Card</span>
            <span>✓ Approved Calculator</span>
            <span>✓ Blue / Black Ballpoint Pen</span>
            <span>✗ Smart Watches & Phones Prohibited</span>
          </div>
        </div>
      );

    case 'notifications':
      return (
        <div className="mock-screen student-notifications">
          <div className="screen-header-simple">
            <h4>Campus Alerts</h4>
            <span className="term-badge">4 NEW</span>
          </div>

          <div className="notif-list">
            <div className="notif-item unread">
              <div className="notif-dot" />
              <div className="notif-body">
                <div className="notif-title">Classroom Venue Change</div>
                <p>HCI Lab relocated to Innovation Wing Room 408 for today's session.</p>
                <span className="notif-time">15 min ago</span>
              </div>
            </div>

            <div className="notif-item unread">
              <div className="notif-dot" />
              <div className="notif-body">
                <div className="notif-title">University Library Hold Ready</div>
                <p>"Refactoring UI" book is waiting at Central Circulation Desk.</p>
                <span className="notif-time">1 hour ago</span>
              </div>
            </div>

            <div className="notif-item">
              <div className="notif-body">
                <div className="notif-title">Fall Scholarship Submissions</div>
                <p>Applications for academic excellence awards close this Friday.</p>
                <span className="notif-time">Yesterday</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'community':
    default:
      return (
        <div className="mock-screen student-community">
          <div className="screen-header-simple">
            <h4>Student Circles</h4>
            <span className="term-badge">CAMPUS HUB</span>
          </div>

          {/* Study Group Finder */}
          <div className="study-group-card">
            <div className="group-badge">STUDY GROUP · 4/6 MEMBERS</div>
            <h5>UI Portfolio Peer Review</h5>
            <p>Reviewing internship case studies and Figma components at Library Room 2.</p>
            <button className="join-group-btn" type="button">JOIN STUDY CIRCLE →</button>
          </div>

          {/* Cafeteria Wait Times */}
          <div className="quick-grid-label">CAMPUS FACILITIES</div>
          <div className="cafe-tracker-card">
            <div className="cafe-row">
              <span>Main Dining Commons</span>
              <strong className="text-emerald">Low Wait (~5 min)</strong>
            </div>
            <div className="cafe-row">
              <span>Library Coffee Bar</span>
              <strong className="text-amber">Moderate (~12 min)</strong>
            </div>
            <div className="cafe-row">
              <span>Campus Shuttle Express</span>
              <strong>Arriving in 3 min</strong>
            </div>
          </div>
        </div>
      );
  }
}
