<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { Spinner } from '$lib/components';

  let loading = $state(false);
</script>

<h1 class="text-xl">Welcome to the dashboard</h1>

<form method="POST">
  <Button
    formaction="/logout"
    type="submit"
    role="button"
    variant="destructive"
    onclick={() => (loading = true)}
  >
    {#if loading}
      <Spinner />
    {:else}
      log out
    {/if}
  </Button>
</form>
