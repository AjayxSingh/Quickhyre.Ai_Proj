<script lang="ts">
  import { onMount } from 'svelte';
  import { Card, CardContent } from '../../lib/components/ui/card';
  import { Input } from '../../lib/components/ui/input';
  import { Textarea } from '../../lib/components/ui/textarea';
  import { Button } from '../../lib/components/ui/button';
  import { Avatar, AvatarFallback, AvatarImage } from '../../lib/components/ui/avatar';
  import { ScrollArea } from '../../lib/components/ui/scroll-area';
  import { Separator } from '../../lib/components/ui/separator';

  let selectedUser = 0;

  const users = [
    {
      name: 'Alex Johnson',
      title: 'Software Developer',
      message: 'Thanks for the interview opportunity!',
      time: '10:42 AM',
      unread: 2,
      avatar: 'https://i.pravatar.cc/40?img=1',
    },
    {
      name: 'Morgan Smith',
      title: 'UX Designer',
      message: "I've attached my portfolio for your review",
      time: 'Yesterday',
      avatar: 'https://i.pravatar.cc/40?img=2',
    },
    {
      name: 'Taylor Wilson',
      title: 'Product Manager',
      message: 'Looking forward to the next round!',
      time: 'Apr 24',
      avatar: 'https://i.pravatar.cc/40?img=3',
    },
    {
      name: 'Jamie Parker',
      title: 'Backend Developer',
      message: ",I'm excited to join the team!",
      time: 'Apr 22',
      avatar: 'https://i.pravatar.cc/40?img=4',
    },
    {
      name: 'Casey Brown',
      title: 'Marketing Specialist',
      message: 'Thank you for your consideration',
      time: 'Apr 18',
      avatar: 'https://i.pravatar.cc/40?img=5',
    },
  ];

  const messages = [
    { sender: 'them', text: "Hi, I'm interested in the Frontend Developer position", time: '10:30 AM' },
    { sender: 'me', text: 'Thanks for reaching out! Do you have time for a quick call tomorrow?', time: '10:35 AM' },
    { sender: 'them', text: "Yes, I'm available after 2pm", time: '10:38 AM' },
    { sender: 'me', text: ",Perfect, I'll send a calendar invite", time: '10:40 AM' },
    { sender: 'them', text: 'Thanks for the interview opportunity!', time: '10:42 AM' },
  ];
</script>

<div class="grid grid-cols-1 md:grid-cols-3 h-[90vh] gap-2">
  <!-- Left Sidebar -->
  <Card class="w-full col-span-1 overflow-hidden">
    <CardContent class="p-4 flex flex-col h-full">
      <h2 class="text-2xl font-semibold mb-2">Messages</h2>
      <p class="text-muted-foreground mb-4">Recent conversations</p>
      <Input placeholder="Search conversations..." class="mb-4" />

      <ScrollArea class="space-y-2 flex-1 w-full bg-red pr-2">
        {#each users as user, index}
          <button
            type="button"
            class="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-muted transition"
            class:selected={selectedUser === index ? 'bg-muted' : ''}
            on:click={() => (selectedUser = index)}
            on:keydown={(e) => e.key === 'Enter' && (selectedUser = index)}
            aria-label={`Select conversation with ${user.name}`}
          >
            <Avatar>
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div class="flex-1">
              <p class="font-semibold">{user.name}</p>
              <p class="text-xs text-muted-foreground truncate">{user.message}</p>
              <p class="text-xs text-muted-foreground">{user.title}</p>
            </div>
            <div class="text-right text-xs">
              <p>{user.time}</p>
              {#if user.unread}
                <span class="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white text-xs">
                  {user.unread}
                </span>
              {/if}
            </div>
          </button>
        {/each}
      </ScrollArea>
    </CardContent>
  </Card>

  <!-- Right Chat Window -->
  <Card class=" col-span-2 overflow-hidden flex flex-col">
    <CardContent class="p-4 flex-1 flex flex-col">
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={users[selectedUser].avatar} alt={users[selectedUser].name} />
            <AvatarFallback>{users[selectedUser].name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p class="font-semibold">{users[selectedUser].name}</p>
            <p class="text-sm text-muted-foreground">{users[selectedUser].title}</p>
          </div>
        </div>
        <Button variant="outline">View Profile</Button>
      </div>

      <ScrollArea class="flex-1 pr-2 space-y-2">
        {#each messages as message}
          <div
            class={`max-w-[70%] m-2 px-4 py-2 rounded-lg text-sm whitespace-pre-line ${
              message.sender === 'me'
                ? 'ml-auto bg-primary text-white'
                : 'bg-muted text-black'
            }`}
          >
            {message.text}
            <div class="text-[10px] text-muted-foreground mt-1 text-right">
              {message.time}
            </div>
          </div>
        {/each}
      </ScrollArea>

      <div class="flex items-center gap-2 mt-4">
        <svg xmlns="http://www.w3.org/2000/svg" class= " bg-muted w-5 h-5 font-normal" height="24px" viewBox="0 -960 960 960" width="24px" fill="bg-muted"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>
        <Input class="flex-1" placeholder="Type your message..." />
        <Button variant="ghost" size="icon">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 font-normal " height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"/></svg>
        </Button>
      </div>
    </CardContent>
  </Card>
</div>
