<script>
    export let label;
    export let color = "bg-gray-200 text-gray-800";
  
    const badgeClasses = {
      New: "bg-blue-100 text-blue-700",
      "In Review": "bg-purple-100 text-purple-700",
      Interview: "bg-yellow-100 text-yellow-700",
      Offer: "bg-green-100 text-green-700",
      Rejected: "bg-gray-300 text-gray-600"
    };
  </script>
  
  <span class={`text-xs px-2 py-1 rounded ${badgeClasses[label] || color}`}>
    {label}
  </span>
  