  // Use a type alias instead of interface
  type TeamMember = {
    name: string;
    role: string;
    department: string;
    contact: string;
    openRequisitions: number;
    status: 'Active' | 'Inactive';
    avatar?: string;
};

export  const  teamMembers: TeamMember[] = [
    {
        name: "Jane Doe",
        role: "Senior Recruiter",
        department: "Engineering",
        contact: "jane.doe@company.com\n+1 (555) 123-4567",
        openRequisitions: 12,
        status: "Active",
        avatar: "https://source.unsplash.com/random/100x100/?woman,1",
    },
    {
        name: "John Smith",
        role: "HR Manager",
        department: "Human Resources",
        contact: "john.smith@company.com\n+1 (555) 234-5678",
        openRequisitions: 5,
        status: "Active",
        avatar: "https://source.unsplash.com/random/100x100/?man,1",
    },
    {
        name: "Alice Williams",
        role: "Technical Recruiter",
        department: "Engineering",
        contact: "alice.w@company.com\n+1 (555) 345-6789",
        openRequisitions: 8,
        status: "Active",
        avatar: "https://source.unsplash.com/random/100x100/?woman,2",
    },
    {
        name: "Michael Johnson",
        role: "Talent Acquisition",
        department: "Marketing",
        contact: "michael.j@company.com\n+1 (555) 456-7890",
        openRequisitions: 3,
        status: "Inactive",
        avatar: "https://source.unsplash.com/random/100x100/?man,2",
    },
    {
        name: "Emily Brown",
        role: "Junior Recruiter",
        department: "Sales",
        contact: "emily.b@company.com\n+1 (555) 567-8901",
        openRequisitions: 6,
        status: "Active",
        avatar: "https://source.unsplash.com/random/100x100/?woman,3",
    },
];