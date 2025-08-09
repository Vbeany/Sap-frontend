// src/data/mockStudents.js

export const mockStudents = {
  tier1: [
    {
      id: 1,
      name: "Christy Kieu",
      initials: "CK",
      grade: 11,
      gpa: 3.7,
      unexcusedAbsences: 1,
      attendanceRate: 95.2,
      activeInterventions: "N/A",
      tier: 1,
      absenceDetails: [
        {
          date: "2024-03-15",
          reason: "Sick - No doctor's note provided"
        }
      ],
      interventionProgress: []
    },
    {
      id: 2,
      name: "Joe Bloggs",
      initials: "JB", 
      grade: 12,
      gpa: 3.8,
      unexcusedAbsences: 1,
      attendanceRate: 96.8,
      activeInterventions: "N/A",
      tier: 1,
      absenceDetails: [
        {
          date: "2024-03-20",
          reason: "Unexcused - Missed first period"
        }
      ],
      interventionProgress: []
    },
    {
      id: 3,
      name: "Lourdes Sanchez",
      initials: "LS",
      grade: 11,
      gpa: 3.8,
      unexcusedAbsences: 0,
      attendanceRate: 98.5,
      activeInterventions: "N/A",
      tier: 1,
      absenceDetails: [],
      interventionProgress: []
    },
    {
      id: 4,
      name: "Zia Smith",
      initials: "ZS",
      grade: 12,
      gpa: 3.9,
      unexcusedAbsences: 0,
      attendanceRate: 99.2,
      activeInterventions: "N/A",
      tier: 1,
      absenceDetails: [],
      interventionProgress: []
    },
    {
      id: 5,
      name: "Emma Davis",
      initials: "ED",
      grade: 10,
      gpa: 3.6,
      unexcusedAbsences: 2,
      attendanceRate: 93.7,
      activeInterventions: "N/A",
      tier: 1,
      absenceDetails: [
        {
          date: "2024-03-12",
          reason: "Unexcused - Overslept"
        },
        {
          date: "2024-03-25",
          reason: "Unexcused - Did not attend"
        }
      ],
      interventionProgress: []
    },
    {
      id: 6,
      name: "Ryan Chen",
      initials: "RC",
      grade: 11,
      gpa: 3.5,
      unexcusedAbsences: 1,
      attendanceRate: 95.8,
      activeInterventions: "N/A",
      tier: 1,
      absenceDetails: [
        {
          date: "2024-03-18",
          reason: "Unexcused - Left during break"
        }
      ],
      interventionProgress: []
    }
  ],
  
  tier2: [
    {
      id: 7,
      name: "Marcus Johnson",
      initials: "MJ",
      grade: 10,
      gpa: 2.8,
      unexcusedAbsences: 3,
      attendanceRate: 87.5,
      activeInterventions: "Weekly counseling",
      tier: 2,
      absenceDetails: [
        {
          date: "2024-03-10",
          reason: "Unexcused - Left during lunch"
        },
        {
          date: "2024-03-18",
          reason: "Unexcused - Did not attend"
        },
        {
          date: "2024-03-22",
          reason: "Family emergency - No documentation"
        }
      ],
      interventionProgress: [
        {
          name: "Weekly counseling",
          status: "In Progress",
          description: "Meeting with school counselor every Tuesday"
        },
        {
          name: "Daily check-ins",
          status: "In Progress", 
          description: "Brief morning check-in with homeroom teacher"
        }
      ],
      caseManager: "Ms. Tracy",
      interventionNotes: "Needs additional support with emotional regulation",
      interventionStartDate: "2024-02-15",
      lastUpdated: "2 days ago"
    },
    {
      id: 8,
      name: "Sarah Williams",
      initials: "SW",
      grade: 11,
      gpa: 2.5,
      unexcusedAbsences: 5,
      attendanceRate: 82.4,
      activeInterventions: "Tutoring, Parent meetings",
      tier: 2,
      absenceDetails: [
        {
          date: "2024-03-08",
          reason: "Unexcused - Did not attend"
        },
        {
          date: "2024-03-15",
          reason: "Unexcused - Left early"
        },
        {
          date: "2024-03-20",
          reason: "Unexcused - Did not attend"
        },
        {
          date: "2024-03-25",
          reason: "Unexcused - Transportation issues"
        },
        {
          date: "2024-03-28",
          reason: "Unexcused - Did not attend"
        }
      ],
      interventionProgress: [
        {
          name: "Math tutoring",
          status: "In Progress",
          description: "Twice weekly tutoring sessions for algebra support"
        },
        {
          name: "Parent meetings",
          status: "In Progress",
          description: "Monthly parent-teacher conferences to discuss progress"
        }
      ],
      caseManager: "Ms. Rodriguez",
      interventionNotes: "Student showing improvement in math skills but attendance remains a concern",
      interventionStartDate: "2024-02-01",
      lastUpdated: "3 days ago"
    },
    {
      id: 9,
      name: "David Martinez",
      initials: "DM",
      grade: 9,
      gpa: 2.9,
      unexcusedAbsences: 4,
      attendanceRate: 85.1,
      activeInterventions: "Academic support group",
      tier: 2,
      absenceDetails: [
        {
          date: "2024-03-05",
          reason: "Unexcused - Did not attend"
        },
        {
          date: "2024-03-14",
          reason: "Unexcused - Transportation issues"
        },
        {
          date: "2024-03-21",
          reason: "Unexcused - Left early without permission"
        },
        {
          date: "2024-03-27",
          reason: "Unexcused - Did not attend"
        }
      ],
      interventionProgress: [
        {
          name: "Academic support group",
          status: "In Progress",
          description: "Participating in small group academic support sessions twice weekly"
        },
        {
          name: "Study skills coaching",
          status: "In Progress",
          description: "One-on-one sessions to develop organizational and study strategies"
        }
      ],
      caseManager: "Ms. Henderson",
      interventionNotes: "Student responding well to group setting but needs continued attendance support",
      interventionStartDate: "2024-02-20",
      lastUpdated: "4 days ago"
    },
    {
      id: 10,
      name: "Lisa Thompson",
      initials: "LT",
      grade: 12,
      gpa: 2.7,
      unexcusedAbsences: 6,
      attendanceRate: 79.3,
      activeInterventions: "Bi-weekly check-ins",
      tier: 2,
      absenceDetails: [
        {
          date: "2024-03-04",
          reason: "Unexcused - Did not attend"
        },
        {
          date: "2024-03-11",
          reason: "Unexcused - Overslept"
        },
        {
          date: "2024-03-17",
          reason: "Unexcused - Work conflict"
        },
        {
          date: "2024-03-24",
          reason: "Unexcused - Did not attend"
        },
        {
          date: "2024-03-28",
          reason: "Unexcused - Transportation issues"
        },
        {
          date: "2024-04-02",
          reason: "Unexcused - Did not attend"
        }
      ],
      interventionProgress: [
        {
          name: "Bi-weekly check-ins",
          status: "In Progress",
          description: "Regular meetings with guidance counselor to monitor progress and attendance"
        },
        {
          name: "Career counseling",
          status: "In Progress",
          description: "Sessions focused on post-graduation planning and motivation"
        }
      ],
      caseManager: "Mr. Wilson",
      interventionNotes: "Senior struggling with attendance and motivation - needs graduation support",
      interventionStartDate: "2024-01-25",
      lastUpdated: "5 days ago"
    },
    {
      id: 14,
      name: "Ashley Kim",
      initials: "AK",
      grade: 9,
      gpa: 2.6,
      unexcusedAbsences: 4,
      attendanceRate: 86.2,
      activeInterventions: "Reading support, Study skills",
      tier: 2,
      absenceDetails: [
        {
          date: "2024-03-11",
          reason: "Unexcused - Did not attend"
        },
        {
          date: "2024-03-18",
          reason: "Unexcused - Left early"
        },
        {
          date: "2024-03-25",
          reason: "Unexcused - Transportation issues"
        },
        {
          date: "2024-04-01",
          reason: "Unexcused - Did not attend"
        }
      ],
      interventionProgress: [
        {
          name: "Reading comprehension support",
          status: "In Progress",
          description: "Weekly one-on-one reading sessions with literacy specialist"
        },
        {
          name: "Study skills workshop",
          status: "In Progress",
          description: "Bi-weekly group sessions on organization and time management"
        }
      ],
      caseManager: "Ms. Park",
      interventionNotes: "Student showing improvement in reading but needs continued support with organization",
      interventionStartDate: "2024-03-01",
      lastUpdated: "3 days ago"
    },
    {
      id: 15,
      name: "Michael O'Connor",
      initials: "MO",
      grade: 10,
      gpa: 2.4,
      unexcusedAbsences: 5,
      attendanceRate: 83.7,
      activeInterventions: "Behavioral support, Academic coaching",
      tier: 2,
      absenceDetails: [
        {
          date: "2024-03-07",
          reason: "Unexcused - Disciplinary suspension"
        },
        {
          date: "2024-03-14",
          reason: "Unexcused - Did not attend"
        },
        {
          date: "2024-03-21",
          reason: "Unexcused - Left during class"
        },
        {
          date: "2024-03-28",
          reason: "Unexcused - Did not attend"
        },
        {
          date: "2024-04-04",
          reason: "Unexcused - Overslept"
        }
      ],
      interventionProgress: [
        {
          name: "Behavioral intervention plan",
          status: "In Progress",
          description: "Structured behavior support with positive reinforcement system"
        },
        {
          name: "Academic coaching",
          status: "In Progress",
          description: "Weekly sessions with academic coach for assignment completion"
        }
      ],
      caseManager: "Mr. Thompson",
      interventionNotes: "Student responding well to structure but needs consistent follow-through",
      interventionStartDate: "2024-02-14",
      lastUpdated: "2 days ago"
    },
    {
      id: 16,
      name: "Isabella Garcia",
      initials: "IG",
      grade: 12,
      gpa: 2.3,
      unexcusedAbsences: 6,
      attendanceRate: 81.5,
      activeInterventions: "College prep, Financial aid counseling",
      tier: 2,
      absenceDetails: [
        {
          date: "2024-03-06",
          reason: "Unexcused - Work conflict"
        },
        {
          date: "2024-03-13",
          reason: "Unexcused - Did not attend"
        },
        {
          date: "2024-03-20",
          reason: "Unexcused - Family responsibilities"
        },
        {
          date: "2024-03-27",
          reason: "Unexcused - Did not attend"
        },
        {
          date: "2024-04-03",
          reason: "Unexcused - Transportation issues"
        },
        {
          date: "2024-04-08",
          reason: "Unexcused - Did not attend"
        }
      ],
      interventionProgress: [
        {
          name: "College preparation program",
          status: "In Progress",
          description: "Support with college applications and entrance exam preparation"
        },
        {
          name: "Financial aid counseling",
          status: "In Progress",
          description: "Assistance with FAFSA completion and scholarship applications"
        }
      ],
      caseManager: "Ms. Lopez",
      interventionNotes: "Motivated student balancing work and school - needs scheduling support",
      interventionStartDate: "2024-01-30",
      lastUpdated: "4 days ago"
    }
  ],
  
  tier3: [
    {
      id: 11,
      name: "Alex Rodriguez",
      initials: "AR",
      grade: 9,
      gpa: 2.1,
      unexcusedAbsences: 8,
      attendanceRate: 75.3,
      activeInterventions: "Daily check-ins, Counseling",
      tier: 3,
      absenceDetails: [
        {
          date: "2024-03-05",
          reason: "Unexcused - Overslept"
        },
        {
          date: "2024-03-08",
          reason: "Unexcused - Did not attend"
        },
        {
          date: "2024-03-12",
          reason: "Unexcused - Left early without permission"
        },
        {
          date: "2024-03-16",
          reason: "Unexcused - Did not attend"
        },
        {
          date: "2024-03-19",
          reason: "Unexcused - Transportation issues"
        },
        {
          date: "2024-03-23",
          reason: "Unexcused - Did not attend"
        },
        {
          date: "2024-03-26",
          reason: "Unexcused - Family conflict"
        },
        {
          date: "2024-03-29",
          reason: "Unexcused - Did not attend"
        }
      ],
      interventionProgress: [
        {
          name: "Weekly tutoring",
          status: "Needs Attention",
          description: "Student missing scheduled tutoring sessions regularly"
        },
        {
          name: "Daily check-ins",
          status: "In Progress",
          description: "Daily morning check-in with vice principal"
        },
        {
          name: "Family support meetings",
          status: "In Progress",
          description: "Bi-weekly meetings with family and social worker"
        }
      ],
      caseManager: "Mr. Johnson",
      interventionNotes: "Requires intensive support with attendance and academic progress",
      interventionStartDate: "2024-01-10",
      lastUpdated: "1 day ago"
    },
    {
      id: 12,
      name: "Jordan Taylor",
      initials: "JT",
      grade: 10,
      gpa: 1.9,
      unexcusedAbsences: 12,
      attendanceRate: 68.4,
      activeInterventions: "Intensive tutoring, Family support",
      tier: 3,
      absenceDetails: [
        {
          date: "2024-02-28",
          reason: "Unexcused - Did not attend"
        },
        {
          date: "2024-03-03",
          reason: "Unexcused - Overslept"
        },
        {
          date: "2024-03-07",
          reason: "Unexcused - Family issues"
        },
        {
          date: "2024-03-10",
          reason: "Unexcused - Did not attend"
        },
        {
          date: "2024-03-14",
          reason: "Unexcused - Left early"
        },
        {
          date: "2024-03-17",
          reason: "Unexcused - Did not attend"
        },
        {
          date: "2024-03-21",
          reason: "Unexcused - Transportation problems"
        },
        {
          date: "2024-03-24",
          reason: "Unexcused - Did not attend"
        },
        {
          date: "2024-03-28",
          reason: "Unexcused - Overslept"
        },
        {
          date: "2024-04-01",
          reason: "Unexcused - Did not attend"
        },
        {
          date: "2024-04-04",
          reason: "Unexcused - Family emergency - no documentation"
        },
        {
          date: "2024-04-07",
          reason: "Unexcused - Did not attend"
        }
      ],
      interventionProgress: [
        {
          name: "Intensive tutoring",
          status: "Needs Attention",
          description: "Daily tutoring sessions across multiple subjects - attendance inconsistent"
        },
        {
          name: "Family support meetings",
          status: "In Progress",
          description: "Weekly meetings with family liaison and social services"
        },
        {
          name: "Behavioral intervention plan",
          status: "In Progress",
          description: "Structured behavior support plan with incentives for attendance"
        }
      ],
      caseManager: "Dr. Martinez",
      interventionNotes: "Student requires comprehensive support - at risk of academic failure",
      interventionStartDate: "2023-12-01",
      lastUpdated: "1 day ago"
    },
    {
      id: 13,
      name: "Casey Brown",
      initials: "CB",
      grade: 11,
      gpa: 2.0,
      unexcusedAbsences: 10,
      attendanceRate: 72.8,
      activeInterventions: "Daily counseling, Mentorship",
      tier: 3,
      absenceDetails: [
        {
          date: "2024-03-01",
          reason: "Unexcused - Did not attend"
        },
        {
          date: "2024-03-06",
          reason: "Unexcused - Left during lunch"
        },
        {
          date: "2024-03-13",
          reason: "Unexcused - Did not attend"
        },
        {
          date: "2024-03-19",
          reason: "Unexcused - Anxiety issues - no documentation"
        },
        {
          date: "2024-03-22",
          reason: "Unexcused - Did not attend"
        },
        {
          date: "2024-03-26",
          reason: "Unexcused - Transportation issues"
        },
        {
          date: "2024-03-29",
          reason: "Unexcused - Did not attend"
        },
        {
          date: "2024-04-03",
          reason: "Unexcused - Overslept"
        },
        {
          date: "2024-04-05",
          reason: "Unexcused - Did not attend"
        },
        {
          date: "2024-04-08",
          reason: "Unexcused - Left early without permission"
        }
      ],
      interventionProgress: [
        {
          name: "Daily counseling",
          status: "In Progress",
          description: "Daily sessions with school psychologist for emotional support"
        },
        {
          name: "Peer mentorship",
          status: "In Progress",
          description: "Paired with senior student mentor for academic and social support"
        },
        {
          name: "Modified schedule",
          status: "In Progress",
          description: "Adjusted class schedule to accommodate counseling sessions"
        }
      ],
      caseManager: "Ms. Foster",
      interventionNotes: "Student making progress with emotional regulation but attendance remains challenging",
      interventionStartDate: "2024-01-15",
      lastUpdated: "2 days ago"
    },
    {
      id: 17,
      name: "Tyler Jackson",
      initials: "TJ",
      grade: 11,
      gpa: 1.8,
      unexcusedAbsences: 15,
      attendanceRate: 62.4,
      activeInterventions: "Intensive case management, Alternative schedule",
      tier: 3,
      absenceDetails: [
        {
          date: "2024-02-26",
          reason: "Unexcused - Did not attend"
        },
        {
          date: "2024-03-01",
          reason: "Unexcused - Overslept"
        },
        {
          date: "2024-03-04",
          reason: "Unexcused - Did not attend"
        },
        {
          date: "2024-03-08",
          reason: "Unexcused - Family issues"
        },
        {
          date: "2024-03-11",
          reason: "Unexcused - Did not attend"
        },
        {
          date: "2024-03-15",
          reason: "Unexcused - Transportation problems"
        },
        {
          date: "2024-03-18",
          reason: "Unexcused - Did not attend"
        },
        {
          date: "2024-03-22",
          reason: "Unexcused - Left early"
        },
        {
          date: "2024-03-25",
          reason: "Unexcused - Did not attend"
        },
        {
          date: "2024-03-29",
          reason: "Unexcused - Overslept"
        },
        {
          date: "2024-04-01",
          reason: "Unexcused - Did not attend"
        },
        {
          date: "2024-04-05",
          reason: "Unexcused - Family emergency - no documentation"
        },
        {
          date: "2024-04-08",
          reason: "Unexcused - Did not attend"
        },
        {
          date: "2024-04-12",
          reason: "Unexcused - Transportation issues"
        },
        {
          date: "2024-04-15",
          reason: "Unexcused - Did not attend"
        }
      ],
      interventionProgress: [
        {
          name: "Intensive case management",
          status: "Needs Attention",
          description: "Daily contact with case manager and family liaison"
        },
        {
          name: "Alternative schedule",
          status: "In Progress",
          description: "Modified school day with flexible start times and reduced course load"
        },
        {
          name: "Mental health support",
          status: "In Progress",
          description: "Weekly sessions with school-based therapist"
        }
      ],
      caseManager: "Dr. Williams",
      interventionNotes: "High-risk student requiring intensive support - considering alternative placement",
      interventionStartDate: "2023-11-15",
      lastUpdated: "1 day ago"
    },
    {
      id: 18,
      name: "Samantha Lee",
      initials: "SL",
      grade: 9,
      gpa: 2.2,
      unexcusedAbsences: 9,
      attendanceRate: 74.1,
      activeInterventions: "Crisis intervention, Family therapy referral",
      tier: 3,
      absenceDetails: [
        {
          date: "2024-03-05",
          reason: "Unexcused - Anxiety episode"
        },
        {
          date: "2024-03-12",
          reason: "Unexcused - Did not attend"
        },
        {
          date: "2024-03-19",
          reason: "Unexcused - Family crisis"
        },
        {
          date: "2024-03-26",
          reason: "Unexcused - Did not attend"
        },
        {
          date: "2024-04-02",
          reason: "Unexcused - Mental health day - no documentation"
        },
        {
          date: "2024-04-09",
          reason: "Unexcused - Did not attend"
        },
        {
          date: "2024-04-16",
          reason: "Unexcused - Overslept"
        },
        {
          date: "2024-04-23",
          reason: "Unexcused - Did not attend"
        },
        {
          date: "2024-04-30",
          reason: "Unexcused - Transportation issues"
        }
      ],
      interventionProgress: [
        {
          name: "Crisis intervention support",
          status: "In Progress",
          description: "Immediate response team available for emotional crises"
        },
        {
          name: "Family therapy referral",
          status: "In Progress",
          description: "Connected family with community mental health services"
        },
        {
          name: "Academic accommodation plan",
          status: "In Progress",
          description: "Modified assignments and extended deadlines due to mental health needs"
        }
      ],
      caseManager: "Ms. Chen",
      interventionNotes: "Student dealing with significant mental health challenges - requires comprehensive support",
      interventionStartDate: "2024-02-01",
      lastUpdated: "1 day ago"
    },
    {
      id: 19,
      name: "Antonio Morales",
      initials: "AM",
      grade: 10,
      gpa: 1.7,
      unexcusedAbsences: 11,
      attendanceRate: 69.8,
      activeInterventions: "ESL support, Cultural liaison, Academic recovery",
      tier: 3,
      absenceDetails: [
        {
          date: "2024-03-04",
          reason: "Unexcused - Language barrier issues"
        },
        {
          date: "2024-03-11",
          reason: "Unexcused - Did not attend"
        },
        {
          date: "2024-03-18",
          reason: "Unexcused - Family work obligations"
        },
        {
          date: "2024-03-25",
          reason: "Unexcused - Did not attend"
        },
        {
          date: "2024-04-01",
          reason: "Unexcused - Transportation problems"
        },
        {
          date: "2024-04-08",
          reason: "Unexcused - Did not attend"
        },
        {
          date: "2024-04-15",
          reason: "Unexcused - Work conflict"
        },
        {
          date: "2024-04-22",
          reason: "Unexcused - Did not attend"
        },
        {
          date: "2024-04-29",
          reason: "Unexcused - Family emergency"
        },
        {
          date: "2024-05-06",
          reason: "Unexcused - Did not attend"
        },
        {
          date: "2024-05-13",
          reason: "Unexcused - Overslept"
        }
      ],
      interventionProgress: [
        {
          name: "ESL intensive support",
          status: "In Progress",
          description: "Daily English language development sessions with specialist"
        },
        {
          name: "Cultural liaison support",
          status: "In Progress",
          description: "Weekly meetings with bilingual family liaison"
        },
        {
          name: "Academic recovery program",
          status: "Needs Attention",
          description: "Credit recovery courses to address failed classes"
        }
      ],
      caseManager: "Mr. Vasquez",
      interventionNotes: "Recent immigrant student facing language and cultural barriers - needs intensive academic support",
      interventionStartDate: "2024-01-08",
      lastUpdated: "2 days ago"
    },
    {
      id: 20,
      name: "Destiny Williams",
      initials: "DW",
      grade: 12,
      gpa: 1.9,
      unexcusedAbsences: 13,
      attendanceRate: 65.2,
      activeInterventions: "Graduation recovery, Job placement support",
      tier: 3,
      absenceDetails: [
        {
          date: "2024-02-28",
          reason: "Unexcused - Work schedule conflict"
        },
        {
          date: "2024-03-07",
          reason: "Unexcused - Did not attend"
        },
        {
          date: "2024-03-14",
          reason: "Unexcused - Childcare issues"
        },
        {
          date: "2024-03-21",
          reason: "Unexcused - Did not attend"
        },
        {
          date: "2024-03-28",
          reason: "Unexcused - Transportation problems"
        },
        {
          date: "2024-04-04",
          reason: "Unexcused - Did not attend"
        },
        {
          date: "2024-04-11",
          reason: "Unexcused - Work obligation"
        },
        {
          date: "2024-04-18",
          reason: "Unexcused - Did not attend"
        },
        {
          date: "2024-04-25",
          reason: "Unexcused - Childcare emergency"
        },
        {
          date: "2024-05-02",
          reason: "Unexcused - Did not attend"
        },
        {
          date: "2024-05-09",
          reason: "Unexcused - Work schedule"
        },
        {
          date: "2024-05-16",
          reason: "Unexcused - Did not attend"
        },
        {
          date: "2024-05-23",
          reason: "Unexcused - Transportation issues"
        }
      ],
      interventionProgress: [
        {
          name: "Graduation recovery plan",
          status: "Needs Attention",
          description: "Intensive credit recovery to meet graduation requirements"
        },
        {
          name: "Job placement support",
          status: "In Progress",
          description: "Career counseling and job placement assistance for financial stability"
        },
        {
          name: "Flexible scheduling",
          status: "In Progress",
          description: "Modified schedule to accommodate work and family responsibilities"
        }
      ],
      caseManager: "Ms. Davis",
      interventionNotes: "Senior with significant life challenges - working parent needing flexible options for graduation",
      interventionStartDate: "2023-10-01",
      lastUpdated: "3 days ago"
    }
  ]
};

// Helper function to get students by tier
export const getStudentsByTier = (tierNumber) => {
  return mockStudents[`tier${tierNumber}`] || [];
};

// Helper function to get all students
export const getAllStudents = () => {
  return [
    ...mockStudents.tier1,
    ...mockStudents.tier2, 
    ...mockStudents.tier3
  ];
};

// Helper function to search students
export const searchStudents = (students, searchTerm) => {
  if (!searchTerm) return students;
  
  return students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.initials.toLowerCase().includes(searchTerm.toLowerCase())
  );
};