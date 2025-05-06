
<script lang="ts">
  import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../lib/components/ui/tabs";
  import { Card, CardContent } from "../../lib/components/ui/card";
  import { Input } from "../../lib/components/ui/input";
  import { Button } from "../../lib/components/ui/button";
  import { Avatar, AvatarFallback, AvatarImage } from "../../lib/components/ui/avatar";
  import { ScrollArea } from "../../lib/components/ui/scroll-area";
  import { PhoneIcon, VideoIcon, MailIcon } from "lucide-svelte";
  const messages = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      message: "I'm available for the technical interview tomorrow at 2 PM",
      time: "10:45 AM",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      online: true,
    },
    {
      name: "Michael Williams",
      role: "Product Designer",
      message: "Thank you for considering my application",
      time: "Yesterday",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      online: false,
      selected: true,
    },
    {
      name: "Emily Chen",
      role: "Marketing Specialist",
      message: "I've attached my portfolio as requested",
      time: "Apr 24",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
      online: true,
    },
    {
      name: "David Rodriguez",
      role: "DevOps Engineer",
      message: "Yes, I have experience with Kubernetes and Docker",
      time: "Apr 22",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
      online: false,
    },
    {
      name: "Lisa Thompson",
      role: "UI/UX Designer",
      message: "Looking forward to discussing the role further",
      time: "Apr 20",
      avatar: "https://randomuser.me/api/portraits/women/5.jpg",
      online: true,
    },
  ];

  const chatHistory = [
    {
      from: "them",
      text: "Thank you for considering my application",
      date: "Yesterday"
    },
    {
      from: "me",
      text: "Hi Michael, thanks for applying",
      date: "Yesterday"
    }
  ];


</script>

<h1 class="text-3xl font-semibold mb-4">Communications</h1>
<p>This is the Communications page. Content coming soon.</p>

<Tabs value="messages" class="w-full bg-muted">
  <TabsList class="p-4 mt-2 bg-white border-b shadow-sm">
    <TabsTrigger value="messages">Messages</TabsTrigger>
    <TabsTrigger value="emails">Emails</TabsTrigger>
    <TabsTrigger value="calls">Calls</TabsTrigger>
  </TabsList>

  <TabsContent value="messages" class="flex bg-white rounded-lg ">
    <!-- Sidebar -->
      <Card class="w-1/3 border-r bg-white flex flex-col">
        <div class="p-4">
          <Input placeholder="Search conversations..." />
        </div>
        <ScrollArea class="flex-1 overflow-y-auto">
          {#each messages as msg}
            <div
              class={`flex gap-4 items-start px-4 py-3 hover:bg-gray-100 cursor-pointer ${
                msg.selected ? "bg-indigo-100" : ""
              }`}
            >
              <Avatar class="h-10 w-10">
                <AvatarImage src={msg.avatar} />
                <AvatarFallback>{msg.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div class="flex-1">
                <div class="flex justify-between">
                  <p class="font-medium text-sm">{msg.name}</p>
                  <p class="text-xs text-gray-500">{msg.time}</p>
                </div>
                <p class="text-xs text-muted-foreground">{msg.role}</p>
                <p class="text-sm truncate">{msg.message}</p>
              </div>
              {#if msg.online}
                <div class="w-2 h-2 bg-green-500 rounded-full mt-1.5"></div>
              {/if}
            </div>
          {/each}
        </ScrollArea>
      </Card>
  
      <!-- Message View -->
      <div class="flex-1 flex flex-col border rounded-xl bg-white">
        <!-- Header -->
        <div class="flex items-center gap-4 border-b px-6 py-4 shadow-sm">
          <Avatar>
            <AvatarImage src="https://randomuser.me/api/portraits/men/2.jpg" />
            <AvatarFallback>MW</AvatarFallback>
          </Avatar>
          <div class="flex-1">
            <p class="font-medium">Michael Williams</p>
            <p class="text-sm text-muted-foreground">Product Designer</p>
          </div>
          <div class="flex gap-2">
            <Button size="icon" variant="outline"><PhoneIcon /></Button>
            <Button size="icon" variant="outline"><VideoIcon /></Button>
            <Button size="icon" variant="outline"><MailIcon /></Button>
          </div>
        </div>
  
        <!-- Chat area -->
        <ScrollArea class="flex-1 bg-white p-6 space-y-4">
          {#each chatHistory as chat}
            <div
              class={`max-w-[60%] px-4 py-2 rounded-lg text-sm ${
                chat.from === "me"
                  ? "bg-indigo-500 text-white ml-auto"
                  : "bg-indigo-100 text-black"
              }`}
            >
              {chat.text}
              <div class="text-xs text-muted-foreground mt-1">{chat.date}</div>
            </div>
          {/each}
        </ScrollArea>
  
        <!-- Input -->
        <div class="flex gap-2 p-4 border-t bg-white">
          <Input placeholder="Type a message..." class="flex-1" />
          <Button>Send</Button>
        </div>
      </div>
  </TabsContent>
</Tabs>

