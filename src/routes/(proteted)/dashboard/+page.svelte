<script lang="ts">
  import { Button } from '$lib/components/ui/button';
</script>

<h1 class="text-xl">Welcome to the dashboard</h1>

<form method="POST">
  <Button formaction="/logout" type="submit" role="button" variant="destructive"
    >log out</Button
  >
</form>
