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
      activeInterventions: "N/A",
      tier: 1
    },
    {
      id: 2,
      name: "Joe Bloggs",
      initials: "JB", 
      grade: 12,
      gpa: 3.8,
      unexcusedAbsences: 1,
      activeInterventions: "N/A",
      tier: 1
    },
    {
      id: 3,
      name: "Lourdes Sanchez",
      initials: "LS",
      grade: 11,
      gpa: 3.8,
      unexcusedAbsences: 0,
      activeInterventions: "N/A",
      tier: 1
    },
    {
      id: 4,
      name: "Zia Smith",
      initials: "ZS",
      grade: 12,
      gpa: 3.9,
      unexcusedAbsences: 0,
      activeInterventions: "N/A",
      tier: 1
    },
    {
      id: 5,
      name: "Emma Davis",
      initials: "ED",
      grade: 10,
      gpa: 3.6,
      unexcusedAbsences: 2,
      activeInterventions: "N/A",
      tier: 1
    },
    {
      id: 6,
      name: "Ryan Chen",
      initials: "RC",
      grade: 11,
      gpa: 3.5,
      unexcusedAbsences: 1,
      activeInterventions: "N/A",
      tier: 1
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
      activeInterventions: "Weekly counseling",
      tier: 2
    },
    {
      id: 8,
      name: "Sarah Williams",
      initials: "SW",
      grade: 11,
      gpa: 2.5,
      unexcusedAbsences: 5,
      activeInterventions: "Tutoring, Parent meetings",
      tier: 2
    },
    {
      id: 9,
      name: "David Martinez",
      initials: "DM",
      grade: 9,
      gpa: 2.9,
      unexcusedAbsences: 4,
      activeInterventions: "Academic support group",
      tier: 2
    },
    {
      id: 10,
      name: "Lisa Thompson",
      initials: "LT",
      grade: 12,
      gpa: 2.7,
      unexcusedAbsences: 6,
      activeInterventions: "Bi-weekly check-ins",
      tier: 2
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
      activeInterventions: "Daily check-ins, Counseling",
      tier: 3
    },
    {
      id: 12,
      name: "Jordan Taylor",
      initials: "JT",
      grade: 10,
      gpa: 1.9,
      unexcusedAbsences: 12,
      activeInterventions: "Intensive tutoring, Family support",
      tier: 3
    },
    {
      id: 13,
      name: "Casey Brown",
      initials: "CB",
      grade: 11,
      gpa: 2.0,
      unexcusedAbsences: 10,
      activeInterventions: "Daily counseling, Mentorship",
      tier: 3
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