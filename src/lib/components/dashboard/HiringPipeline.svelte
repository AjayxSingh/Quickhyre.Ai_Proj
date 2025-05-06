<script>
    import { Card, CardContent } from "$lib/components/ui/card";
  </script>
  
  <Card class="w-full h-inherit space-y-4">
    <CardContent>
      <h2 class="text-xl font-semibold mb-4">Hiring Pipeline</h2>
      <div class="h-[200px] bg-gray-100 flex items-center justify-center rounded">Chart Here</div>
  
      <div class="grid grid-cols-3 sm:grid-cols-6 gap-2 mt-4 text-sm text-muted-foreground text-center">
        <div><strong>120</strong><p>Applied</p></div>
        <div><strong>82</strong><p>Screening</p></div>
        <div><strong>42</strong><p>Interview</p></div>
        <div><strong>12</strong><p>Offer</p></div>
        <div><strong>8</strong><p>Hired</p></div>
        <div><strong>5</strong><p>Rejected</p></div>
      </div>
    </CardContent>
  </Card>