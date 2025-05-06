<script lang="ts">
  import { Button } from "../../lib/components/ui/button"
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../lib/components/ui/card"
  import { Badge } from "../../lib/components/ui/badge"

  interface Assessment {
      type: string;
      title: string;
      createdAt: string;
      completed: number;
      pending: number;
      average: string;
  }

  const assessments: Assessment[] = [
      {
          type: "Technical",
          title: "Frontend Developer Technical Assessment",
          createdAt: "Apr 15, 2023",
          completed: 12,
          pending: 5,
          average: "76%",
      },
      {
          type: "Case Study",
          title: "Product Manager Case Study",
          createdAt: "Apr 10, 2023",
          completed: 8,
          pending: 3,
          average: "82%",
      },
      {
          type: "Design",
          title: "UI/UX Design Challenge",
          createdAt: "Apr 5, 2023",
          completed: 15,
          pending: 2,
          average: "88%",
      },
      {
          type: "Technical",
          title: "Backend Developer Algorithm Test",
          createdAt: "Mar 30, 2023",
          completed: 9,
          pending: 7,
          average: "72%",
      },
      {
          type: "Behavioral",
          title: "Leadership Assessment",
          createdAt: "Mar 25, 2023",
          completed: 6,
          pending: 4,
          average: "79%",
      },
  ];
</script>

<div class="p-6 space-y-6"> 
  <h1 class="text-3xl font-semibold mb-4">Assessments</h1>
  <p>This is the Assessments page. Content coming soon.</p>

  <div class="flex mt-2 justify-between items-center gap-4 mb-4">
    <input
      type="text"
      placeholder="Search Candidates..."
      class="w-1/3 rounded-md border px-4 py-2 text-sm"
    />

    <div class="flex gap-2">
      <button class="flex items-center gap-1 rounded-md border bg-white px-3 py-2 text-sm text-black">
        <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="currentColor">
          <path d="M440-160q-17 0-28.5-11.5T400-200v-240L168-736q-15-20-4.5-42t36.5-22h560q26 0 36.5 22t-4.5 42L560-440v240q0 17-11.5 28.5T520-160h-80Zm40-308 198-252H282l198 252Zm0 0Z"/>
        </svg>
        Filter
      </button>
      <button class="flex items-center gap-1 rounded-md bg-primary px-3 py-2 text-sm text-white">
        <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="currentColor">
          <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
        </svg>
        Create Assessments
      </button>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
    {#each assessments as assessment}
        <Card class="bg-card border border-border shadow-md">
            <CardHeader>
                <div class="flex justify-between items-start">
                    <CardTitle class="text-lg  font-semibold">{assessment.title}</CardTitle>
                    <Badge class="bg-indigo-200 text-sm  text-inigo-500">
                        {assessment.type}
                    </Badge>
                </div>
                <CardDescription class="text-xs text-muted-foreground">
                    Created: {assessment.createdAt}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div class="grid grid-cols-3 gap-4  font-semibold text-center">
                    <div>
                        <p class="text-indigo-600 text-lg">{assessment.completed}</p>
                        <p class=" text-lg">Completed</p>
                    </div>
                    <div>
                        <p class="text-orange-500  text-lg">{assessment.pending}</p>
                        <p class="text-lg">Pending</p>
                    </div>
                    <div>
                        <p class="text-green-500 text-lg ">{assessment.average}</p>
                        <p class="text-lg">Average</p>
                    </div>
                </div>
                <div class="mt-6 flex gap-4">
                    <Button variant="outline" class="flex-1 text-xs">View Results</Button>
                    <Button variant="outline" class="flex-1 text-xs">Edit</Button>
                    <Button class="flex-1 text-xs">Send</Button>
                </div>
            </CardContent>
        </Card>
    {/each}
  </div>
</div>
