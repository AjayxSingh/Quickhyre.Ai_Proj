<script lang="ts">
  import { Button } from "../../lib/components/ui/button"
  import { Input } from "../../lib/components/ui/input"
  import {Table,TableBody,TableCell,TableHead,TableHeader,TableRow }  from "../../lib/components/ui/table"
  import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue }  from "../../lib/components/ui/select"
  import { Avatar, AvatarFallback, AvatarImage } from "../../lib/components/ui/avatar"
  import { Badge } from "../../lib/components/ui/badge"
  import { Plus, Users, Briefcase, Search, Filter } from "lucide-svelte"
  import { cn } from "../../lib/utils"
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

  const teamMembers: TeamMember[] = [
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

  let allMembersCount = teamMembers.length;
  let activeMembersCount = teamMembers.filter(member => member.status === 'Active').length;
  let totalOpenRequisitions = teamMembers.reduce((sum, member) => sum + member.openRequisitions, 0);

  let selectedStatus = 'All Members'; // 'All Members', 'Active', 'Inactive'
  let filteredMembers = teamMembers;
  let searchQuery = '';

  $: {
      if (searchQuery) {
          const searchTerm = searchQuery.toLowerCase();
          filteredMembers = teamMembers.filter(member =>
              member.name.toLowerCase().includes(searchTerm) ||
              member.role.toLowerCase().includes(searchTerm) ||
              member.department.toLowerCase().includes(searchTerm)
          );
      } else {
          filteredMembers = teamMembers;
      }

      if (selectedStatus === 'Active') {
          filteredMembers = filteredMembers.filter(member => member.status === 'Active');
      } else if (selectedStatus === 'Inactive') {
          filteredMembers = filteredMembers.filter(member => member.status === 'Inactive');
      }
  }
</script>

<h1 class="text-2xl mb-1 font-bold">Team Members</h1>
<p class="text-muted-foreground ">Manage your recruitment team and track their performance.</p>

<div class="mt-3 p-6 space-y-8 bg-white dark:bg-gray-900 rounded-lg shadow-md">
  <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Team Overview</h2>
      <Button>
          <Plus class="mr-2 h-4 w-4" /> Add Team Member
      </Button>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex items-center gap-4">
          <Users class="w-6 h-6 text-gray-500 dark:text-gray-400" />
          <div>
              <p class="text-sm font-medium text-gray-600 dark:text-gray-300">Total Team Members</p>
              <p class="text-xl font-semibold text-gray-900 dark:text-white">{allMembersCount}</p>
          </div>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex items-center gap-4">
          <Users class="w-6 h-6 text-gray-500 dark:text-gray-400" />
          <div>
              <p class="text-sm font-medium text-gray-600 dark:text-gray-300">Active Members</p>
              <p class="text-xl font-semibold text-gray-900 dark:text-white">{activeMembersCount}</p>
          </div>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex items-center gap-4">
          <Briefcase class="w-6 h-6 text-gray-500 dark:text-gray-400" />
          <div>
              <p class="text-sm font-medium text-gray-600 dark:text-gray-300">Total Open Requisitions</p>
              <p class="text-xl font-semibold text-gray-900 dark:text-white">{totalOpenRequisitions}</p>
          </div>
      </div>
  </div>

  <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
  <div class="bg-white relative flex w-full md:w-1/2">
          <Search class="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 dark:text-gray-400" />
          <Input
            class="pl-10 pr-4 py-2 w-full"
              type="text"
              placeholder="Search team members..."
              bind:value={searchQuery}
          />
      </div>
      <div class="flex items-center gap-4">
          <button class="flex items-center gap-2">
              <Filter class="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <Select on:change={(e) => selectedStatus = e.detail}>
                  <SelectTrigger class="w-[180px] pl-2">
                      <SelectValue placeholder="Filter" />
                  </SelectTrigger>
                  <SelectContent>
                      <SelectItem value="All Members">All Members</SelectItem>
                      <SelectItem value="Active">Active</SelectItem>
                      <SelectItem value="Inactive">Inactive</SelectItem>
                  </SelectContent>
              </Select>
          </button>
      </div>
  </div>

  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <Table>
          <TableHeader>
              <TableRow>
                  <TableHead class="w-[80px]"></TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Open Requisitions</TableHead>
                  <TableHead>Status</TableHead>
              </TableRow>
          </TableHeader>
          <TableBody>
              {#each filteredMembers as member}
                  <TableRow>
                      <TableCell>
                          <Avatar>
                              <AvatarImage src={member.avatar} alt={member.name} />
                              <AvatarFallback>{member.name.slice(0, 2)}</AvatarFallback>
                          </Avatar>
                      </TableCell>
                      <TableCell class="font-medium text-gray-900 dark:text-white">{member.name}</TableCell>
                      <TableCell class="text-gray-600 dark:text-gray-300">{member.role}</TableCell>
                      <TableCell class="text-gray-600 dark:text-gray-300">{member.department}</TableCell>
                      <TableCell class="whitespace-pre-line text-gray-600 dark:text-gray-300">{member.contact}</TableCell>
                      <TableCell class="text-gray-900 dark:text-white">{member.openRequisitions} positions</TableCell>
                      <TableCell>
                          <Badge
                              variant="outline"
                              class={cn(
                                  "px-2 py-1 rounded-full",
                                  member.status === 'Active'
                                      ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100 border-green-500/50"
                                      : "bg-red-100 text-red-800 dark:text-red-100 border-red-500/50"
                              )}
                          >
                              {member.status}
                          </Badge>
                      </TableCell>
                  </TableRow>
              {/each}
          </TableBody>
      </Table>
  </div>
</div>
