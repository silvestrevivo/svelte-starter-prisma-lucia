<script lang="ts">
  import { goto } from '$app/navigation';
  import { Button } from '$lib/components/ui/button';
</script>

<h1 class="text-3xl font-semibold">SvelteKit Starter Prima - Lucia</h1>
<p>
  Visit <a
    href="https://github.com/silvestrevivo/svelte-starter-prisma-lucia"
    class="underline">the repo</a
  > to read the documentation
</p>

<Button variant="outline" on:click={() => goto('/login')}>Start</Button>
