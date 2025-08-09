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